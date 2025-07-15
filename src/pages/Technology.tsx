import React from 'react';
import Navigation from '@/components/Navigation';
import AISection from '@/components/AISection';
import WhatsLackingSection from '@/components/WhatsLackingSection';
import Footer from '@/components/Footer';

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technology & Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technologies in uranium mining and areas for future development
            </p>
          </div>
        </section>
        <AISection />
        <WhatsLackingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;