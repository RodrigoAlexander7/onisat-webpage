import Image from 'next/image';

export default function AboutEvent() {
  return (
    <section id="evento" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-block rounded-full bg-onisat-blue/10 px-4 py-2 text-sm font-semibold text-onisat-blue">
              Programa Espacial Universitario
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Curso-Concurso Mundial{' '}
              <span className="text-onisat-blue">CanSat 2026</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                El <strong>CanSat</strong> es un satélite del tamaño de una lata
                de refresco, diseñado para simular todas las fases de una misión
                espacial real: diseño, construcción, lanzamiento, operación y
                análisis de datos.
              </p>
              <p>
                La competencia, organizada por el{' '}
                <strong>Programa Espacial Universitario (PEU)</strong> de la
                UNAM, desafía a equipos universitarios a desarrollar sistemas
                que deben sobrevivir un lanzamiento a 1 km de altitud y
                transmitir telemetría en tiempo real durante el descenso.
              </p>
              <p>
                ONISAT representa a la UNAM en la edición 2026, fusionando
                innovación tecnológica con una perspectiva artística única
                inspirada en Vincent van Gogh.
              </p>
            </div>

            {/* Key Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-2xl font-bold text-onisat-navy sm:text-3xl">
                  1 km
                </div>
                <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Altitud de lanzamiento
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-2xl font-bold text-onisat-navy sm:text-3xl">
                  7
                </div>
                <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Integrantes del equipo
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-2xl font-bold text-onisat-navy sm:text-3xl">
                  2026
                </div>
                <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Edición del concurso
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/cansat/cansat_cover.jpg"
                alt="CanSat ONISAT"
                fill
                className="object-cover"
              />
              
              {/* UNAM Badge */}
              <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-onisat-navy shadow-lg">
                UNAM 🇲🇽
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-onisat-gold/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-onisat-blue/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
