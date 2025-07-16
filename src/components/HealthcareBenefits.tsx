import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Zap, Shield, Activity, Stethoscope, Hospital, Users } from 'lucide-react';

const HealthcareBenefits = () => {
  const medicalApplications = [
    {
      icon: Heart,
      title: "Cancer Treatment",
      description: "Radioisotopes for targeted cancer therapy and tumor destruction",
      benefits: [
        "Precise tumor targeting",
        "Minimal damage to healthy tissue",
        "Effective for various cancer types",
        "Non-invasive treatment options"
      ],
      examples: ["Iodine-131 for thyroid cancer", "Yttrium-90 for liver tumors", "Lutetium-177 for neuroendocrine tumors"],
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Medical Imaging",
      description: "Advanced diagnostic imaging using nuclear medicine techniques",
      benefits: [
        "Early disease detection",
        "Real-time organ function monitoring",
        "Non-invasive diagnostics",
        "Precise anatomical visualization"
      ],
      examples: ["PET scans for cancer detection", "SPECT for heart imaging", "Bone scans for fractures"],
      color: "text-blue-500"
    },
    {
      icon: Activity,
      title: "Cardiac Medicine",
      description: "Nuclear cardiology for heart disease diagnosis and treatment",
      benefits: [
        "Blood flow assessment",
        "Heart function evaluation",
        "Risk stratification",
        "Treatment planning"
      ],
      examples: ["Myocardial perfusion imaging", "Cardiac PET scans", "Stress testing"],
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Sterilization",
      description: "Gamma radiation for medical equipment and pharmaceutical sterilization",
      benefits: [
        "Complete pathogen elimination",
        "No chemical residues",
        "Penetrates packaging",
        "Cost-effective process"
      ],
      examples: ["Surgical instruments", "Syringes and catheters", "Pharmaceuticals"],
      color: "text-purple-500"
    }
  ];

  const namibianHealthcareImpact = [
    {
      area: "Rural Healthcare Access",
      current: "Limited medical imaging facilities in remote areas",
      nuclear_solution: "Mobile nuclear medicine units for rural communities",
      potential_impact: "Improved early disease detection and treatment access",
      timeline: "Short-term (2-3 years)"
    },
    {
      area: "Cancer Treatment",
      current: "Limited radiotherapy facilities nationally",
      nuclear_solution: "Regional nuclear medicine centers with radioisotope therapy",
      potential_impact: "Reduced medical tourism, improved survival rates",
      timeline: "Medium-term (5-7 years)"
    },
    {
      area: "Medical Training",
      current: "Limited nuclear medicine expertise",
      nuclear_solution: "Partnership with uranium industry for medical isotope training",
      potential_impact: "Skilled healthcare workforce development",
      timeline: "Long-term (7-10 years)"
    },
    {
      area: "Research Capabilities",
      current: "Basic medical research infrastructure",
      nuclear_solution: "Nuclear medicine research centers",
      potential_impact: "Local medical research advancement and innovation",
      timeline: "Long-term (8-12 years)"
    }
  ];

  const globalStatistics = [
    { stat: "40+ million", description: "Nuclear medicine procedures annually worldwide" },
    { stat: "95%", description: "Of hospitals use nuclear sterilized equipment" },
    { stat: "30+ types", description: "Of medical radioisotopes in clinical use" },
    { stat: "85%", description: "Cancer detection accuracy with PET scans" }
  ];

  const futureTechnologies = [
    {
      technology: "Targeted Alpha Therapy",
      description: "Next-generation cancer treatment using alpha-emitting radioisotopes",
      potential: "More precise tumor destruction with minimal side effects",
      status: "Clinical trials"
    },
    {
      technology: "Theranostics",
      description: "Combined diagnostic and therapeutic radioisotopes",
      potential: "Personalized medicine with real-time treatment monitoring",
      status: "Emerging clinical use"
    },
    {
      technology: "AI-Enhanced Nuclear Imaging",
      description: "Artificial intelligence for improved image analysis",
      potential: "Faster, more accurate diagnoses",
      status: "Development phase"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 dark:from-blue-950 dark:via-green-950 dark:to-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Hospital className="h-12 w-12 text-blue-500" />
            Nuclear Medicine & Healthcare
            <Heart className="h-12 w-12 text-red-500" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover how uranium and nuclear technology revolutionize healthcare, from life-saving cancer treatments 
            to advanced diagnostic imaging, and their potential to transform Namibian healthcare systems.
          </p>
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {globalStatistics.map((item, index) => (
            <Card key={index} className="text-center bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-uranium mb-2">{item.stat}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Medical Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Medical Applications of Nuclear Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medicalApplications.map((app, index) => {
              const Icon = app.icon;
              return (
                <Card key={index} className="bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Icon className={`h-6 w-6 ${app.color}`} />
                      {app.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{app.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-1 text-sm">
                        {app.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-uranium rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-1">
                        {app.examples.map((example, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Namibian Healthcare Transformation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Transforming Namibian Healthcare with Nuclear Technology
          </h3>
          <div className="space-y-6">
            {namibianHealthcareImpact.map((impact, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Stethoscope className="h-5 w-5 text-blue-500" />
                        {impact.area}
                      </h4>
                      <Badge variant="outline" className="mb-2">{impact.timeline}</Badge>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-1 text-red-600">Current Situation</h5>
                      <p className="text-sm text-muted-foreground">{impact.current}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-1 text-blue-600">Nuclear Solution</h5>
                      <p className="text-sm text-muted-foreground">{impact.nuclear_solution}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-1 text-green-600">Potential Impact</h5>
                      <p className="text-sm text-muted-foreground">{impact.potential_impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Technologies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Future Nuclear Medicine Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureTechnologies.map((tech, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{tech.technology}</CardTitle>
                  <Badge variant="secondary">{tech.status}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-sm text-green-700 dark:text-green-300 mb-1">
                      Potential Impact
                    </h5>
                    <p className="text-sm text-green-600 dark:text-green-400">{tech.potential}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Healthcare Infrastructure Development */}
        <Card className="bg-gradient-hero text-white mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Building Namibia's Nuclear Medicine Future</h3>
              <p className="text-white/90 max-w-3xl mx-auto">
                By leveraging its uranium resources, Namibia can develop world-class nuclear medicine capabilities, 
                improving healthcare outcomes while creating a sustainable medical isotope supply chain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Training Programs</h4>
                <p className="text-sm text-white/80">
                  Develop nuclear medicine specialists and technicians
                </p>
              </div>
              <div className="text-center">
                <Hospital className="h-12 w-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Infrastructure</h4>
                <p className="text-sm text-white/80">
                  Build modern nuclear medicine facilities nationwide
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-white/80">
                  Establish medical isotope production capabilities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Learn More About Nuclear Medicine</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore how nuclear technology continues to advance healthcare and discover career opportunities 
            in nuclear medicine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Healthcare Career Paths
            </Button>
            <Button variant="outline" size="lg">
              Medical Research Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareBenefits;