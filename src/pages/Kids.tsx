import React from 'react';
import Navigation from '@/components/Navigation';
import KidsSection from '@/components/KidsSection';
import KidsLearning from '@/components/KidsLearning';
import Footer from '@/components/Footer';

const Kids = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kids Learning Zone
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fun and interactive learning about uranium, nuclear science, and mining for young explorers
            </p>
          </div>
        </section>
        <KidsSection />
        <KidsLearning />
      </main>
      <Footer />
    </div>
  );
};

export default Kids;