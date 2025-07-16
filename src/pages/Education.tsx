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
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Educational Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive learning materials, research papers, datasets, and interactive content
            </p>
          </div>
        </section>
        <EducationSection />
        <EducationalContent />
        <UraniumMiningMethods />
        <HealthcareBenefits />
        <NuclearAnniversary />
      </main>
      <Footer />
    </div>
  );
};

export default Education;