# Despliegue a Google Cloud Run

## Archivos creados

| Archivo | Descripción |
|---------|-------------|
| `apps/backend/Dockerfile-google-cloud` | Dockerfile optimizado para Cloud Run (sin migraciones auto) |
| `apps/frontend/Dockerfile-google-cloud` | Dockerfile optimizado para Cloud Run (puerto 8080) |
| `apps/backend/env-google-cloud.yaml` | Variables de entorno para el backend |
| `cloudbuild-google-cloud.yaml` | Pipeline de CI/CD para Cloud Build |

## Información del proyecto

- **Backend URL**: https://onisat-backend-59003269660.us-central1.run.app
- **Frontend URL**: https://onisat-frontend-59003269660.us-central1.run.app
- **Cloud SQL**: `onisat:us-central1:onisat-dev-db` (instancia: `onisat_db`)

---

## Pasos para desplegar

### 1. Configurar gcloud CLI

```bash
# Autenticarse
gcloud auth login

# Seleccionar proyecto
gcloud config set project onisat

# Configurar región
gcloud config set run/region us-central1
```

### 2. Habilitar APIs necesarias

```bash
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  sqladmin.googleapis.com
```

### 3. Crear Artifact Registry (si no existe)

```bash
gcloud artifacts repositories create onisat-repo \
  --repository-format=docker \
  --location=us-central1 \
  --description="Repositorio de imágenes Docker para Onisat"
```

### 4. Configurar secretos en Secret Manager (recomendado)

```bash
# Crear secretos para datos sensibles
echo -n "TU_PASSWORD_DB" | gcloud secrets create db-password --data-file=-
echo -n "TU_AUTH_SECRET" | gcloud secrets create auth-secret --data-file=-
echo -n "TU_GOOGLE_SECRET" | gcloud secrets create google-oauth-secret --data-file=-
```

### 5. Actualizar env-google-cloud.yaml

Edita `apps/backend/env-google-cloud.yaml` con tus valores reales:
- `DATABASE_URL`: Cambia `TU_PASSWORD` por la contraseña real
- `AUTH_SECRET`: Genera un secreto seguro
- `AUTH_GOOGLE_SECRET`: Tu secreto de OAuth de Google

### 6. Ejecutar migraciones de Prisma (una sola vez)

Conéctate a Cloud SQL y ejecuta las migraciones:

```bash
# Opción A: Usar Cloud SQL Auth Proxy localmente
./cloud-sql-proxy onisat:us-central1:onisat-dev-db &

# Luego en apps/backend:
DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/onisat_db" npx prisma migrate deploy
```

```bash
# Opción B: Crear un Cloud Run Job para migraciones
gcloud run jobs create prisma-migrate \
  --image=us-central1-docker.pkg.dev/onisat/onisat-repo/backend:latest \
  --region=us-central1 \
  --add-cloudsql-instances=onisat:us-central1:onisat-dev-db \
  --set-env-vars="DATABASE_URL=postgresql://postgres:TU_PASSWORD@/onisat_db?host=/cloudsql/onisat:us-central1:onisat-dev-db" \
  --command="npx" \
  --args="prisma,migrate,deploy"

# Ejecutar el job
gcloud run jobs execute prisma-migrate --region=us-central1
```

### 7. Desplegar manualmente (sin Cloud Build)

#### Backend:
```bash
cd apps/backend

# Construir imagen
docker build -f Dockerfile-google-cloud \
  -t us-central1-docker.pkg.dev/onisat/onisat-repo/backend:latest .

# Subir imagen
docker push us-central1-docker.pkg.dev/onisat/onisat-repo/backend:latest

# Desplegar
gcloud run deploy onisat-backend \
  --image=us-central1-docker.pkg.dev/onisat/onisat-repo/backend:latest \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --add-cloudsql-instances=onisat:us-central1:onisat-dev-db \
  --env-vars-file=env-google-cloud.yaml
```

#### Frontend:
```bash
cd apps/frontend

# Construir imagen (con URLs de producción)
docker build -f Dockerfile-google-cloud \
  --build-arg NEXT_PUBLIC_API_URL=https://onisat-backend-59003269660.us-central1.run.app \
  --build-arg NEXT_PUBLIC_FRONTEND_URL=https://onisat-frontend-59003269660.us-central1.run.app \
  --build-arg BACKEND_URL=https://onisat-backend-59003269660.us-central1.run.app \
  -t us-central1-docker.pkg.dev/onisat/onisat-repo/frontend:latest .

# Subir imagen
docker push us-central1-docker.pkg.dev/onisat/onisat-repo/frontend:latest

# Desplegar
gcloud run deploy onisat-frontend \
  --image=us-central1-docker.pkg.dev/onisat/onisat-repo/frontend:latest \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated
```

### 8. Desplegar con Cloud Build (CI/CD automatizado)

```bash
# Desde la raíz del proyecto
gcloud builds submit --config=cloudbuild-google-cloud.yaml .
```

---

## Configuración de Google OAuth

Actualiza la configuración de OAuth en Google Cloud Console:
1. Ve a [APIs & Services > Credentials](https://console.cloud.google.com/apis/credentials)
2. Edita tu OAuth 2.0 Client ID
3. Agrega a **Authorized redirect URIs**:
   ```
   https://onisat-backend-59003269660.us-central1.run.app/auth/google/callback
   ```

---

## Verificar despliegue

```bash
# Ver logs del backend
gcloud run services logs read onisat-backend --region=us-central1

# Ver logs del frontend
gcloud run services logs read onisat-frontend --region=us-central1

# Verificar servicios
gcloud run services list --region=us-central1
```

---

## Troubleshooting

### Error de conexión a Cloud SQL
- Verifica que `--add-cloudsql-instances` esté configurado
- Verifica el formato del `DATABASE_URL`: `postgresql://USER:PASS@/DB?host=/cloudsql/PROJECT:REGION:INSTANCE`

### Error 502 Bad Gateway
- Revisa los logs: `gcloud run services logs read SERVICE_NAME`
- Verifica que la app escuche en el puerto 8080

### Variables de entorno no disponibles
- Para el frontend, las variables `NEXT_PUBLIC_*` deben pasarse en build time (--build-arg)
- Para el backend, usa `--env-vars-file` o `--set-env-vars`
