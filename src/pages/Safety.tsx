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
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Safety & Environment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive overview of safety protocols, environmental management, and sustainability practices
            </p>
          </div>
        </section>
        <SafetySection />
        <WasteManagementSection />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Safety;