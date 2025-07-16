import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Globe, Award, ArrowRight, Atom } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface AnniversaryMilestone {
  milestone_year: number;
  milestone_title: string;
  description: string;
  significance: string;
  country: string;
  key_figures: string[];
  achievements: string[];
  impact_areas: string[];
}

const NuclearAnniversary = () => {
  const [milestones, setMilestones] = useState<AnniversaryMilestone[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    loadAnniversaryData();
  }, []);

  const loadAnniversaryData = async () => {
    // Insert sample data if not exists
    const { data: existing } = await supabase
      .from('nuclear_anniversary')
      .select('*')
      .limit(1);

    if (!existing || existing.length === 0) {
      await insertSampleData();
    }

    const { data } = await supabase
      .from('nuclear_anniversary')
      .select('*')
      .order('milestone_year', { ascending: true });

    if (data) {
      setMilestones(data as AnniversaryMilestone[]);
    }
  };

  const insertSampleData = async () => {
    const sampleMilestones = [
      {
        milestone_year: 1945,
        milestone_title: "Birth of the Nuclear Age",
        description: "The first nuclear chain reaction and the dawn of nuclear technology",
        significance: "Marked the beginning of peaceful nuclear applications",
        country: "United States",
        key_figures: ["Enrico Fermi", "Leo Szilard", "Eugene Wigner"],
        achievements: ["First controlled nuclear chain reaction", "Foundation of nuclear physics", "Beginning of nuclear medicine"],
        impact_areas: ["Energy", "Medicine", "Research", "Technology"],
        historical_context: "During World War II, scientists achieved the first controlled nuclear chain reaction, opening the path for both military and peaceful applications of nuclear energy."
      },
      {
        milestone_year: 1951,
        milestone_title: "First Nuclear Electricity",
        description: "EBR-1 reactor produces first electricity from nuclear energy",
        significance: "Demonstrated nuclear power's potential for electricity generation",
        country: "United States",
        key_figures: ["Walter Zinn", "Argonne National Laboratory team"],
        achievements: ["First nuclear-generated electricity", "Proof of concept for nuclear power", "Breeder reactor technology"],
        impact_areas: ["Electricity Generation", "Technology Development", "Energy Policy"],
        historical_context: "The Experimental Breeder Reactor I (EBR-I) in Idaho became the first reactor to generate electricity from nuclear energy, lighting four light bulbs."
      },
      {
        milestone_year: 1954,
        milestone_title: "Atoms for Peace",
        description: "President Eisenhower's Atoms for Peace program launched",
        significance: "International cooperation for peaceful nuclear applications",
        country: "Global Initiative",
        key_figures: ["Dwight D. Eisenhower", "Lewis Strauss"],
        achievements: ["International Atomic Energy Agency formation", "Nuclear technology sharing", "Peaceful nuclear cooperation"],
        impact_areas: ["International Relations", "Technology Transfer", "Medical Applications"],
        historical_context: "The Atoms for Peace program promoted the peaceful use of nuclear technology, leading to international cooperation and the establishment of the IAEA."
      },
      {
        milestone_year: 1957,
        milestone_title: "Commercial Nuclear Power Begins",
        description: "First commercial nuclear power plant begins operation",
        significance: "Start of the commercial nuclear power industry",
        country: "United Kingdom/United States",
        key_figures: ["Admiral Hyman Rickover", "Calder Hall operators"],
        achievements: ["Commercial nuclear power generation", "Grid-connected nuclear plants", "Nuclear industry establishment"],
        impact_areas: ["Electricity Industry", "Economic Development", "Energy Security"],
        historical_context: "The Shippingport Atomic Power Station in Pennsylvania and Calder Hall in the UK marked the beginning of commercial nuclear power generation."
      },
      {
        milestone_year: 1986,
        milestone_title: "Nuclear Safety Evolution",
        description: "Enhanced safety measures and international cooperation post-Chernobyl",
        significance: "Global commitment to nuclear safety and transparency",
        country: "Global",
        key_figures: ["IAEA Safety Experts", "Nuclear Regulators Worldwide"],
        achievements: ["Enhanced safety protocols", "International safety cooperation", "Improved reactor designs"],
        impact_areas: ["Safety Standards", "International Cooperation", "Technology Improvement"],
        historical_context: "The Chernobyl accident led to unprecedented international cooperation on nuclear safety and the development of enhanced safety systems."
      },
      {
        milestone_year: 2025,
        milestone_title: "80 Years of Nuclear Family",
        description: "Celebrating 80 years of nuclear technology development and peaceful applications",
        significance: "Recognizing nuclear energy's role in clean energy transition",
        country: "Global",
        key_figures: ["Modern Nuclear Scientists", "IAEA Leadership", "Nuclear Industry Leaders"],
        achievements: ["440+ nuclear reactors worldwide", "Clean energy contribution", "Medical isotope production", "Space exploration"],
        impact_areas: ["Climate Change Mitigation", "Medical Advances", "Space Technology", "Energy Security"],
        historical_context: "After 80 years, nuclear technology has become essential for clean energy, medical treatments, space exploration, and scientific research, with new advanced reactors promising even greater safety and efficiency."
      }
    ];

    for (const milestone of sampleMilestones) {
      await supabase
        .from('nuclear_anniversary')
        .insert(milestone);
    }
  };

  const currentYear = new Date().getFullYear();
  const selectedMilestone = milestones.find(m => m.milestone_year === selectedYear);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-blue-950 dark:via-purple-950 dark:to-green-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Atom className="h-12 w-12 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              80 Years of Nuclear Family
            </h2>
            <Atom className="h-12 w-12 text-purple-500" />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Celebrating eight decades of nuclear technology development, from the first controlled chain reaction 
            to today's advanced clean energy solutions and life-saving medical applications.
          </p>
          <Badge variant="outline" className="text-lg px-6 py-2 bg-gradient-hero text-white border-none">
            1945 - 2025: 80 Years of Progress
          </Badge>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Nuclear Technology Timeline</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {milestones.map((milestone) => (
              <Button
                key={milestone.milestone_year}
                variant={selectedYear === milestone.milestone_year ? "default" : "outline"}
                onClick={() => setSelectedYear(milestone.milestone_year)}
                className={`${
                  milestone.milestone_year === currentYear 
                    ? 'ring-2 ring-gold-500 bg-gradient-hero text-white' 
                    : ''
                }`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {milestone.milestone_year}
              </Button>
            ))}
          </div>
        </div>

        {/* Selected Milestone Details */}
        {selectedMilestone && (
          <Card className="max-w-4xl mx-auto mb-16 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{selectedMilestone.milestone_title}</CardTitle>
                <Badge variant="outline">{selectedMilestone.milestone_year}</Badge>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4" />
                {selectedMilestone.country}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{selectedMilestone.description}</p>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Historical Significance</h4>
                <p className="text-sm">{selectedMilestone.significance}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Key Figures
                  </h4>
                  <div className="space-y-1">
                    {selectedMilestone.key_figures.map((figure, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-1">
                        {figure}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Major Achievements
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {selectedMilestone.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-uranium" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Impact Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.impact_areas.map((area, index) => (
                    <Badge key={index} variant="outline">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Modern Nuclear Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-500" />
                Clean Energy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Nuclear power provides 20% of global electricity with zero carbon emissions during operation.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• 440+ reactors worldwide</li>
                <li>• Prevents 2.5 billion tons CO₂ annually</li>
                <li>• 24/7 reliable baseload power</li>
                <li>• Essential for net-zero goals</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Medical Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Nuclear medicine saves millions of lives through diagnostic imaging and cancer treatments.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• 40+ million procedures annually</li>
                <li>• Cancer treatment isotopes</li>
                <li>• Medical imaging (PET, SPECT)</li>
                <li>• Sterilization of medical equipment</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Atom className="h-5 w-5 text-purple-500" />
                Future Innovations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Next-generation nuclear technologies promise enhanced safety and new applications.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Small Modular Reactors (SMRs)</li>
                <li>• Fusion energy development</li>
                <li>• Space exploration power</li>
                <li>• Advanced safety systems</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join the Nuclear Future
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            As we celebrate 80 years of nuclear technology, discover how nuclear energy continues 
            to shape our world and contribute to a sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="bg-white text-uranium hover:bg-white/90">
              Learn More About Nuclear Energy
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Career Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuclearAnniversary;