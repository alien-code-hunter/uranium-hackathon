import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import MapSection from '@/components/MapSection';
import MarketSection from '@/components/MarketSection';
import ComparisonSection from '@/components/ComparisonSection';
import EducationSection from '@/components/EducationSection';
import EducationalContent from '@/components/EducationalContent';
import SustainabilitySection from '@/components/SustainabilitySection';
import KidsSection from '@/components/KidsSection';
import KidsLearning from '@/components/KidsLearning';
import PlantOperations from '@/components/PlantOperations';
import SafetySection from '@/components/SafetySection';
import ImportExportSection from '@/components/ImportExportSection';
import WasteManagementSection from '@/components/WasteManagementSection';
import LegalSection from '@/components/LegalSection';
import AISection from '@/components/AISection';
import GeologySection from '@/components/GeologySection';
import WhatsLackingSection from '@/components/WhatsLackingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <MapSection />
        <PlantOperations />
        <MarketSection />
        <ImportExportSection />
        <ComparisonSection />
        <GeologySection />
        <AISection />
        <SafetySection />
        <WasteManagementSection />
        <SustainabilitySection />
        <WhatsLackingSection />
        <LegalSection />
        <EducationSection />
        <EducationalContent />
        <KidsSection />
        <KidsLearning />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
