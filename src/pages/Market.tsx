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