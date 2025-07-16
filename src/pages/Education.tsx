import React from 'react';
import Navigation from '@/components/Navigation';
import EducationSection from '@/components/EducationSection';
import EducationalContent from '@/components/EducationalContent';
import UraniumMiningMethods from '@/components/UraniumMiningMethods';
import HealthcareBenefits from '@/components/HealthcareBenefits';
import NuclearAnniversary from '@/components/NuclearAnniversary';
import Footer from '@/components/Footer';

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        
        <EducationSection />
        <EducationalContent />
        <HealthcareBenefits />
        <NuclearAnniversary />
      </main>
      <Footer />
    </div>
  );
};

export default Education;