import React from 'react';
import Navigation from '@/components/Navigation';
import LegalSection from '@/components/LegalSection';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Legal Framework
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive overview of laws, regulations, and compliance requirements for uranium mining in Namibia
            </p>
          </div>
        </section>
        <LegalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Legal;