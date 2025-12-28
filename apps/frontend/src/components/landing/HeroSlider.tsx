'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/slide-1.svg',
    title: 'Misión CanSat 2026',
    subtitle:
      'Fusionando ingeniería espacial con el arte de Van Gogh. Un viaje entre las estrellas y los girasoles.',
    ctaText: 'Conoce la Misión',
    ctaLink: '/mision',
  },
  {
    id: 2,
    image: '/images/hero/slide-2.svg',
    title: 'Telemetría en Tiempo Real',
    subtitle:
      'Transmitiendo datos desde las alturas. Tecnología de vanguardia para monitorear cada momento del descenso.',
    ctaText: 'Ver Tecnología',
    ctaLink: '/tecnologia',
  },
  {
    id: 3,
    image: '/images/hero/slide-3.svg',
    title: 'Fotografía Estereoscópica 3D',
    subtitle:
      'Capturando la Tierra desde una perspectiva única. Imágenes tridimensionales del horizonte.',
    ctaText: 'Explorar Galería',
    ctaLink: '/galeria',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-onisat-navy">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Van Gogh-inspired overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-onisat-navy/80 via-onisat-blue/40 to-onisat-starry/60" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: 'saturate(1.2) contrast(1.1)',
            }}
          />
          {/* Artistic overlay for Van Gogh effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-onisat-navy via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-onisat-starry/20 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-lg leading-relaxed text-white/90 drop-shadow-md sm:text-xl">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <Link
              href={slides[currentSlide].ctaLink}
              className="group inline-flex items-center gap-2 rounded-full bg-onisat-gold px-6 py-3 text-sm font-semibold text-onisat-navy shadow-lg transition-all hover:bg-onisat-gold/90 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
            >
              {slides[currentSlide].ctaText}
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
            </Link>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Ir a slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-onisat-gold'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Slide anterior"
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 text-white transition-all hover:border-white hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                aria-label="Siguiente slide"
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 text-white transition-all hover:border-white hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative stars effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="stars-small" />
        <div className="stars-medium" />
        <div className="stars-large" />
      </div>
    </section>
  );
}
