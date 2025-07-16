import React from 'react';
import Navigation from '@/components/Navigation';
import KidsAdventure from '@/components/KidsAdventure';
import Footer from '@/components/Footer';

const KidsAdventurePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <KidsAdventure />
      </main>
      <Footer />
    </div>
  );
};

export default KidsAdventurePage;