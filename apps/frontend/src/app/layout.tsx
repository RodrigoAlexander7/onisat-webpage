import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ONISAT | Equipo CanSat 2026 - UNAM',
  description:
    'Equipo universitario de la UNAM participando en el Curso-Concurso Mundial CanSat 2026 del Programa Espacial Universitario (PEU). Fusionando ciencia, tecnología y arte.',
  keywords: [
    'ONISAT',
    'CanSat',
    'UNAM',
    'PEU',
    'satélite',
    'espacio',
    'ingeniería',
    'Van Gogh',
  ],
  authors: [{ name: 'Equipo ONISAT' }],
  openGraph: {
    title: 'ONISAT | Equipo CanSat 2026 - UNAM',
    description:
      'Fusionando ingeniería espacial con el arte de Van Gogh. Equipo universitario en el CanSat 2026.',
    type: 'website',
    locale: 'es_MX',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
