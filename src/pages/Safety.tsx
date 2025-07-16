import React from 'react';
import Navigation from '@/components/Navigation';
import SafetySection from '@/components/SafetySection';
import WasteManagementSection from '@/components/WasteManagementSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import Footer from '@/components/Footer';

const Safety = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        
        <SafetySection />
        <WasteManagementSection />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Safety;