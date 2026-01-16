# PRODUCTION DOCKERFILE FOR GOOGLE CLOUD
# Using node slim for prisma compatibility
FROM node:22-slim AS builder

# Instalamos openssl (necesario para Prisma en Debian)
RUN apt-get update -y && apt-get install -y openssl

# IMPORTANT: We desable this cause active with corepack
# Install pnpm globally (thi command is comming from the doc site)
#RUN npm install -g pnpm@latest-10

# Create app directory and 
WORKDIR /app
RUN corepack enable

# Copy package.json and package-lock.json files and install
COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN npx prisma generate

RUN pnpm run build

# Limpiamos las dependencias de desarrollo
RUN pnpm prune --prod



# RUNNER STAGE 
FROM node:22-slim AS runner

# Instalamos openssl también en la imagen final
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app
RUN corepack enable

# Copiamos solo lo necesario desde la etapa anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# IMPORTANTE: Copiamos el cliente generado, usamos el output PERSONALIZADO
COPY --from=builder /app/generated ./generated
# Nota: Mantenemos la copia de @prisma por si acaso quedan referencias al package base
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Comando de inicio
CMD ["node", "dist/main"]