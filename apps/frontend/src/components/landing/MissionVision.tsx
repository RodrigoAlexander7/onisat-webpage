export default function MissionVision() {
  return (
    <section id="mision" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-onisat-gold/20 px-4 py-2 text-sm font-semibold text-onisat-navy">
            Nuestra Dirección
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Misión y Visión
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Fusionando la precisión de la ingeniería espacial con la belleza del
            arte de Van Gogh
          </p>
        </div>

        {/* Split Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission Card */}
          <article className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl sm:p-10">
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-onisat-blue to-onisat-navy text-white shadow-lg">
              {/* Egg icon representing the payload */}
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35C12 21.35 6 16 6 10.5C6 6.36 8.69 3 12 3C15.31 3 18 6.36 18 10.5C18 16 12 21.35 12 21.35Z"
                />
                <circle cx="12" cy="10" r="3" fill="currentColor" opacity="0.3" />
              </svg>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Nuestra Misión
            </h3>

            <p className="mb-6 text-base leading-relaxed text-gray-600">
              Diseñar, construir y operar un CanSat capaz de transportar una
              carga útil frágil (un huevo) de manera segura, transmitiendo
              telemetría en tiempo real y capturando fotografías estereoscópicas
              3D durante el descenso controlado.
            </p>

            {/* Key Objectives */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-onisat-blue/10">
                  <svg
                    className="h-5 w-5 text-onisat-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Proteger al tripulante (huevo) durante todo el vuelo
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-onisat-blue/10">
                  <svg
                    className="h-5 w-5 text-onisat-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Transmitir datos de telemetría a 1 Hz mínimo
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-onisat-blue/10">
                  <svg
                    className="h-5 w-5 text-onisat-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Capturar imágenes estereoscópicas del horizonte
                </span>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-onisat-blue/5 transition-all group-hover:scale-150" />
          </article>

          {/* Vision Card */}
          <article className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl sm:p-10">
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-onisat-gold to-onisat-sunset text-white shadow-lg">
              {/* Autogyro icon */}
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
                {/* Rotor blades */}
                <line x1="4" y1="6" x2="20" y2="6" strokeWidth={2} />
                <line x1="6" y1="4" x2="18" y2="4" strokeWidth={1} opacity="0.5" />
              </svg>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Nuestra Visión
            </h3>

            <p className="mb-6 text-base leading-relaxed text-gray-600">
              Ser un referente en innovación aeroespacial universitaria,
              demostrando que la ciencia y el arte pueden fusionarse para
              inspirar a las nuevas generaciones de ingenieros y científicos
              mexicanos.
            </p>

            {/* Key Values */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-onisat-gold/20">
                  <svg
                    className="h-5 w-5 text-onisat-sunset"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Innovación en sistemas de descenso con autogiro
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-onisat-gold/20">
                  <svg
                    className="h-5 w-5 text-onisat-sunset"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Arte y ciencia fusionados (estética Van Gogh)
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-onisat-gold/20">
                  <svg
                    className="h-5 w-5 text-onisat-sunset"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Inspirar a futuras generaciones de científicos
                </span>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-onisat-gold/5 transition-all group-hover:scale-150" />
          </article>
        </div>
      </div>
    </section>
  );
}
