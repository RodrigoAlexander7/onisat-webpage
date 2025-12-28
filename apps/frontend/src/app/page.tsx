import Header from '@/components/landing/Header';
import HeroSlider from '@/components/landing/HeroSlider';
import NewsSection from '@/components/landing/NewsSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
