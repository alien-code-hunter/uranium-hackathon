import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import MapSection from '@/components/MapSection';
import EducationSection from '@/components/EducationSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import KidsSection from '@/components/KidsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <MapSection />
        <EducationSection />
        <SustainabilitySection />
        <KidsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
