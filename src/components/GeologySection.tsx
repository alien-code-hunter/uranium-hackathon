import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mountain, Zap, Layers, Compass, Hammer, Microscope, MapPin, Activity } from 'lucide-react';

const GeologySection = () => {
  const geologicalImportance = [
    {
      aspect: 'Uranium Formation',
      icon: Mountain,
      description: 'Understanding geological processes that concentrated uranium in economic deposits',
      importance: [
        'Hydrothermal alteration zones create uranium concentrations',
        'Structural controls guide exploration targeting',
        'Geological age dating determines deposit formation',
        'Host rock characteristics affect mining methods'
      ]
    },
    {
      aspect: 'Nuclear Fuel Cycle',
      icon: Zap,
      description: 'Geological knowledge crucial for the entire nuclear power generation process',
      importance: [
        'Ore grade prediction affects reactor fuel planning',
        'Mineral composition determines processing methods',
        'Impurity assessment ensures fuel quality standards',
        'Waste disposal requires geological repository design'
      ]
    },
    {
      aspect: 'Resource Assessment',
      icon: Layers,
      description: 'Geological modeling essential for accurate resource estimation and mine planning',
      importance: [
        '3D geological models guide mine development',
        'Structural geology affects slope stability',
        'Hydrogeology impacts environmental management',
        'Geochemistry determines processing requirements'
      ]
    }
  ];

  const extractionTechnologies = [
    {
      category: 'Advanced Drilling Techniques',
      technologies: [
        {
          name: 'Directional Drilling',
          description: 'Precision drilling to access uranium deposits with minimal surface disturbance',
          applications: ['In-situ leaching access', 'Selective ore targeting', 'Environmental protection'],
          efficiency: 'Up to 95% target accuracy'
        },
        {
          name: 'Sonic Drilling',
          description: 'High-frequency drilling for improved core recovery in complex geology',
          applications: ['Geological sampling', 'Environmental monitoring', 'Geotechnical assessment'],
          efficiency: '90%+ core recovery'
        },
        {
          name: 'Diamond Wire Cutting',
          description: 'Precision cutting technology for selective uranium ore extraction',
          applications: ['High-grade ore mining', 'Waste reduction', 'Geological preservation'],
          efficiency: '15% waste reduction'
        }
      ]
    },
    {
      category: 'Geophysical Methods',
      technologies: [
        {
          name: 'Airborne Radiometric Surveys',
          description: 'Helicopter or fixed-wing aircraft surveys to detect uranium signatures',
          applications: ['Regional exploration', 'Deposit delineation', 'Environmental monitoring'],
          efficiency: '1000x faster than ground surveys'
        },
        {
          name: 'Ground Penetrating Radar',
          description: 'High-resolution subsurface imaging for detailed geological mapping',
          applications: ['Structural mapping', 'Ore body delineation', 'Geological hazard detection'],
          efficiency: '5m penetration depth'
        },
        {
          name: 'Induced Polarization',
          description: 'Electrical method to detect mineralization and alteration zones',
          applications: ['Exploration targeting', 'Ore grade estimation', 'Geological modeling'],
          efficiency: '200m investigation depth'
        }
      ]
    },
    {
      category: 'Geochemical Analysis',
      technologies: [
        {
          name: 'Portable XRF Analyzers',
          description: 'Real-time chemical analysis of uranium and associated elements',
          applications: ['Grade control', 'Exploration sampling', 'Environmental monitoring'],
          efficiency: '30-second analysis time'
        },
        {
          name: 'Hyperspectral Imaging',
          description: 'Advanced spectral analysis to identify uranium-bearing minerals',
          applications: ['Mineral mapping', 'Alteration detection', 'Ore characterization'],
          efficiency: '99% mineral identification'
        },
        {
          name: 'Automated Mineralogy',
          description: 'Computer-controlled systems for detailed mineral analysis',
          applications: ['Process optimization', 'Metallurgical testing', 'Environmental assessment'],
          efficiency: '10,000 particles/hour'
        }
      ]
    }
  ];

  const geologicalFormations = [
    {
      formation: 'Damara Orogenic Belt',
      location: 'Central Namibia',
      characteristics: 'Pan-African orogenic belt with uranium-bearing granites and metasediments',
      deposits: ['Rössing', 'Husab', 'Langer Heinrich'],
      geology: 'Neoproterozoic metamorphic complex with intrusive granites',
      importance: 'Primary uranium province of Namibia'
    },
    {
      formation: 'Kuiseb Formation',
      location: 'Central-Western Namibia',
      characteristics: 'Sedimentary and volcanic sequence hosting uranium mineralization',
      deposits: ['Valencia', 'Marenica'],
      geology: 'Permian to Triassic sedimentary rocks with intrusive bodies',
      importance: 'Secondary uranium exploration target'
    },
    {
      formation: 'Karoo Supergroup',
      location: 'Southern Namibia',
      characteristics: 'Sedimentary sequence with uranium-bearing sandstones',
      deposits: ['Areva exploration areas'],
      geology: 'Carboniferous to Jurassic sedimentary rocks',
      importance: 'Potential for sandstone-type uranium deposits'
    }
  ];

  const miningTechniques = [
    {
      technique: 'Open Pit Mining',
      geology: 'Near-surface, large tonnage, low-grade deposits',
      process: 'Large-scale excavation with progressive waste stripping',
      advantages: ['High production rates', 'Equipment flexibility', 'Lower operating costs'],
      challenges: ['Large environmental footprint', 'Waste rock management', 'Groundwater impact'],
      applicability: 'Rössing and Husab mines'
    },
    {
      technique: 'In-Situ Leaching (ISL)',
      geology: 'Permeable sandstone with confined uranium mineralization',
      process: 'Chemical solution injection to dissolve uranium underground',
      advantages: ['Minimal surface disturbance', 'Lower capital costs', 'Reduced waste generation'],
      challenges: ['Groundwater protection', 'Geological suitability', 'Long-term monitoring'],
      applicability: 'Potential for future Namibian operations'
    },
    {
      technique: 'Underground Mining',
      geology: 'Deep, high-grade deposits with stable rock conditions',
      process: 'Shaft or decline access with selective ore extraction',
      advantages: ['Selective mining', 'Reduced surface impact', 'Weather independence'],
      challenges: ['Higher costs', 'Ventilation requirements', 'Safety considerations'],
      applicability: 'Future deep deposit development'
    }
  ];

  const processingOptimization = [
    {
      method: 'Geometallurgical Modeling',
      description: 'Integration of geological and metallurgical data for process optimization',
      benefits: ['Improved recovery rates', 'Reduced processing costs', 'Enhanced ore planning'],
      implementation: 'Real-time ore characterization linked to processing parameters'
    },
    {
      method: 'Sensor-Based Ore Sorting',
      description: 'Automated separation of ore and waste based on geological properties',
      benefits: ['Waste reduction', 'Grade enhancement', 'Processing efficiency'],
      implementation: 'X-ray transmission and optical sorting technologies'
    },
    {
      method: 'Predictive Geological Modeling',
      description: 'AI-enhanced geological models for optimized extraction planning',
      benefits: ['Improved resource confidence', 'Enhanced mine planning', 'Risk reduction'],
      implementation: 'Machine learning algorithms analyzing geological data'
    }
  ];

  return (
    <section id="geology-mining" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Geology & Advanced Mining Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the geological foundation of uranium deposits and the cutting-edge 
            technologies that enable efficient, sustainable extraction in Namibia.
          </p>
        </div>

        {/* Geological Importance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {geologicalImportance.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{aspect.aspect}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{aspect.description}</CardDescription>
                  <ul className="space-y-2">
                    {aspect.importance.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Geological Formations */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Key Geological Formations
            </CardTitle>
            <CardDescription>Major uranium-bearing geological formations in Namibia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {geologicalFormations.map((formation, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">{formation.formation}</h4>
                    <Badge variant="outline">{formation.location}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{formation.characteristics}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium mb-1">Major Deposits:</h5>
                      <p className="text-muted-foreground">{formation.deposits.join(', ')}</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Geology:</h5>
                      <p className="text-muted-foreground">{formation.geology}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h5 className="font-medium mb-1">Economic Importance:</h5>
                      <p className="text-muted-foreground">{formation.importance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Extraction Technologies */}
        <Tabs defaultValue="drilling" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="drilling">Drilling & Extraction</TabsTrigger>
            <TabsTrigger value="geophysical">Geophysical Methods</TabsTrigger>
            <TabsTrigger value="geochemical">Geochemical Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="drilling" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Advanced Drilling Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {extractionTechnologies[0].technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="p-4 border border-border/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{tech.name}</h4>
                        <Badge variant="secondary">{tech.efficiency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                      <div>
                        <h5 className="font-medium text-sm mb-1">Applications:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geophysical" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Geophysical Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {extractionTechnologies[1].technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="p-4 border border-border/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{tech.name}</h4>
                        <Badge variant="secondary">{tech.efficiency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                      <div>
                        <h5 className="font-medium text-sm mb-1">Applications:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geochemical" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Geochemical Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {extractionTechnologies[2].technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="p-4 border border-border/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{tech.name}</h4>
                        <Badge variant="secondary">{tech.efficiency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                      <div>
                        <h5 className="font-medium text-sm mb-1">Applications:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Mining Techniques */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hammer className="h-5 w-5 text-primary" />
              Mining Techniques & Geological Requirements
            </CardTitle>
            <CardDescription>How geological conditions determine optimal mining methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {miningTechniques.map((technique, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{technique.technique}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{technique.process}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                    <div>
                      <h5 className="font-medium text-sm mb-1">Geological Suitability:</h5>
                      <p className="text-xs text-muted-foreground">{technique.geology}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Advantages:</h5>
                      <ul className="text-xs text-muted-foreground">
                        {technique.advantages.map((adv, advIndex) => (
                          <li key={advIndex}>• {adv}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Challenges:</h5>
                      <ul className="text-xs text-muted-foreground">
                        {technique.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex}>• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Current Application:</h5>
                      <p className="text-xs text-muted-foreground">{technique.applicability}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Processing Optimization */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Geological Data for Processing Optimization
            </CardTitle>
            <CardDescription>How geological understanding optimizes uranium processing and recovery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processingOptimization.map((method, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{method.method}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  
                  <div className="mb-3">
                    <h5 className="font-medium text-sm mb-1">Benefits:</h5>
                    <div className="flex flex-wrap gap-1">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm mb-1">Implementation:</h5>
                    <p className="text-xs text-muted-foreground">{method.implementation}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GeologySection;