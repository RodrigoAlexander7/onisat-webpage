import Header from '@/components/landing/Header';
import HeroSlider from '@/components/landing/HeroSlider';
import AboutEvent from '@/components/landing/AboutEvent';
import MissionVision from '@/components/landing/MissionVision';
import NewsSection from '@/components/landing/NewsSection';
import AboutUs from '@/components/landing/AboutUs';
import Sponsors from '@/components/landing/Sponsors';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <AboutEvent />
        <MissionVision />
        <NewsSection />
        <AboutUs />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
