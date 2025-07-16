import React from 'react';
import Navigation from '@/components/Navigation';
import LegalSection from '@/components/LegalSection';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        
        <LegalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Legal;