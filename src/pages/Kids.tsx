import React from 'react';
import Navigation from '@/components/Navigation';
import KidsSection from '@/components/KidsSection';
import KidsLearning from '@/components/KidsLearning';
import AdvancedKidsGames from '@/components/AdvancedKidsGames';
import AdvancedKidsAdventure from '@/components/AdvancedKidsAdventure';
import KidsAdventure from '@/components/KidsAdventure';
import YoungScientists from '@/components/YoungScientists';
import Footer from '@/components/Footer';

const Kids = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        
        <KidsSection />
        <KidsAdventure />
        <KidsLearning />
        <AdvancedKidsGames />
        <AdvancedKidsAdventure />
        <YoungScientists />
      </main>
      <Footer />
    </div>
  );
};

export default Kids;