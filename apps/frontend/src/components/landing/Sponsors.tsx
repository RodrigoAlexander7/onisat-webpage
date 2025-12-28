'use client';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  url: string;
}

const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'UNAM',
    logo: '/images/sponsors/unam.svg',
    tier: 'platinum',
    url: 'https://unam.mx',
  },
  {
    id: '2',
    name: 'Facultad de Ingeniería',
    logo: '/images/sponsors/fi.svg',
    tier: 'platinum',
    url: 'https://fi.unam.mx',
  },
  {
    id: '3',
    name: 'Programa Espacial Universitario',
    logo: '/images/sponsors/peu.svg',
    tier: 'gold',
    url: 'https://peu.unam.mx',
  },
  {
    id: '4',
    name: 'AEM',
    logo: '/images/sponsors/aem.svg',
    tier: 'gold',
    url: 'https://aem.gob.mx',
  },
  {
    id: '5',
    name: 'Sponsor Tecnológico',
    logo: '/images/sponsors/tech-sponsor.svg',
    tier: 'silver',
    url: '#',
  },
  {
    id: '6',
    name: 'Sponsor Educativo',
    logo: '/images/sponsors/edu-sponsor.svg',
    tier: 'silver',
    url: '#',
  },
  {
    id: '7',
    name: 'Colaborador',
    logo: '/images/sponsors/collaborator.svg',
    tier: 'bronze',
    url: '#',
  },
  {
    id: '8',
    name: 'Partner',
    logo: '/images/sponsors/partner.svg',
    tier: 'bronze',
    url: '#',
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-gray-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-onisat-navy shadow-sm">
            Aliados
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Sponsors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Agradecemos a las instituciones y empresas que hacen posible esta
            misión
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-[3/2] items-center justify-center rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Placeholder logo with grayscale to color effect */}
              <div className="flex h-full w-full items-center justify-center grayscale transition-all duration-300 group-hover:grayscale-0">
                {/* SVG Placeholder representing sponsor logo */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className={`mb-2 flex h-16 w-16 items-center justify-center rounded-xl transition-colors duration-300 ${
                      sponsor.tier === 'platinum'
                        ? 'bg-gray-300 group-hover:bg-onisat-navy'
                        : sponsor.tier === 'gold'
                          ? 'bg-gray-300 group-hover:bg-onisat-gold'
                          : sponsor.tier === 'silver'
                            ? 'bg-gray-300 group-hover:bg-gray-400'
                            : 'bg-gray-300 group-hover:bg-amber-600'
                    }`}
                  >
                    <span
                      className={`text-xl font-bold transition-colors duration-300 ${
                        sponsor.tier === 'platinum' ||
                        sponsor.tier === 'bronze'
                          ? 'text-gray-500 group-hover:text-white'
                          : 'text-gray-500 group-hover:text-onisat-navy'
                      }`}
                    >
                      {sponsor.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-center text-xs font-medium text-gray-400 transition-colors group-hover:text-gray-700 sm:text-sm">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm sm:flex-row sm:gap-6">
            <div className="mb-4 sm:mb-0 sm:text-left">
              <h3 className="text-lg font-bold text-gray-900">
                ¿Quieres ser sponsor?
              </h3>
              <p className="text-sm text-gray-600">
                Únete a nuestra misión espacial
              </p>
            </div>
            <a
              href="mailto:sponsors@onisat.unam.mx"
              className="inline-flex items-center gap-2 rounded-full bg-onisat-gold px-6 py-3 text-sm font-semibold text-onisat-navy transition-all hover:bg-onisat-gold/90 hover:shadow-lg"
            >
              Contáctanos
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
