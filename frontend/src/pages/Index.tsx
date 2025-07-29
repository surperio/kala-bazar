import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import ArtisanStoriesSection from '@/components/ArtisanStoriesSection';
import RegionsSection from '@/components/RegionsSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ArtisanStoriesSection />
        <RegionsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
