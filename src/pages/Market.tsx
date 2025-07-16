import React from 'react';
import Navigation from '@/components/Navigation';
import MarketDataUpdater from '@/components/MarketDataUpdater';
import MarketSection from '@/components/MarketSection';
import ImportExportSection from '@/components/ImportExportSection';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';

const Market = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Market & Trade
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time uranium pricing data, market trends, and international trade analysis
            </p>
          </div>
        </section>
        <MarketDataUpdater />
        <MarketSection />
        <ImportExportSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Market;