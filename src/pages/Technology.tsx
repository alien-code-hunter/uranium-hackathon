import React from 'react';
import Navigation from '@/components/Navigation';
import TechnologyPage from '@/components/TechnologyPage';
import Footer from '@/components/Footer';

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <TechnologyPage />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;