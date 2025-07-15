import React from 'react';
import Navigation from '@/components/Navigation';
import MapSection from '@/components/MapSection';
import PlantOperations from '@/components/PlantOperations';
import GeologySection from '@/components/GeologySection';
import Footer from '@/components/Footer';

const Mining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mining Operations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore Namibia's uranium mining operations, from strategic locations to advanced extraction methods
            </p>
          </div>
        </section>
        <MapSection />
        <PlantOperations />
        <GeologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Mining;