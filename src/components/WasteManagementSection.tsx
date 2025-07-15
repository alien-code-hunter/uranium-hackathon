import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Recycle, Droplets, TreePine, AlertTriangle, Shield, Activity, Beaker, Truck } from 'lucide-react';

const WasteManagementSection = () => {
  const wasteTypes = [
    {
      type: 'Tailings',
      volume: '150 million tonnes',
      management: 'Engineered tailings storage facilities',
      containment: 'Multi-layer liner systems',
      monitoring: '24/7 groundwater and air quality',
      icon: Activity
    },
    {
      type: 'Low-Level Radioactive Waste',
      volume: '2,500 m³/year',
      management: 'On-site engineered disposal',
      containment: 'Concrete barriers and steel containers',
      monitoring: 'Radiation monitoring systems',
      icon: Shield
    },
    {
      type: 'Process Water',
      volume: '8.5 million m³/year',
      management: 'Treatment and recycling systems',
      containment: 'Evaporation ponds and treatment plants',
      monitoring: 'Water quality analysis',
      icon: Droplets
    },
    {
      type: 'Chemical Reagents',
      volume: '45,000 tonnes/year',
      management: 'Chemical neutralization',
      containment: 'Secure storage and treatment facilities',
      monitoring: 'Chemical composition analysis',
      icon: Beaker
    }
  ];

  const environmentalImpacts = [
    {
      category: 'Water Resources',
      icon: Droplets,
      issues: [
        'Potential groundwater contamination from tailings seepage',
        'Increased water consumption in arid regions',
        'Acid mine drainage from exposed ore',
        'Competition with agricultural and domestic water use'
      ],
      mitigation: [
        'Advanced liner systems in tailings facilities',
        'Water recycling achieving 95%+ efficiency',
        'Continuous groundwater monitoring networks',
        'Desalination plants for process water supply'
      ],
      status: 'Well Managed'
    },
    {
      category: 'Air Quality',
      icon: Activity,
      issues: [
        'Dust generation from mining operations',
        'Radon gas emissions from ore processing',
        'Particulate matter from tailings areas',
        'Vehicle emissions from heavy machinery'
      ],
      mitigation: [
        'Dust suppression systems and water spraying',
        'Air filtration systems in processing plants',
        'Revegetation of completed mining areas',
        'Real-time air quality monitoring stations'
      ],
      status: 'Continuously Monitored'
    },
    {
      category: 'Soil & Land Use',
      icon: TreePine,
      issues: [
        'Topsoil removal and stockpiling challenges',
        'Habitat disruption and biodiversity loss',
        'Long-term land use restrictions',
        'Erosion and sediment transport'
      ],
      mitigation: [
        'Progressive rehabilitation during operations',
        'Native species reestablishment programs',
        'Soil quality restoration techniques',
        'Wildlife corridor preservation'
      ],
      status: 'Active Rehabilitation'
    },
    {
      category: 'Radiation Exposure',
      icon: Shield,
      issues: [
        'Worker exposure to naturally occurring radiation',
        'Community exposure from airborne particles',
        'Long-term radiation from tailings facilities',
        'Transportation radiation risks'
      ],
      mitigation: [
        'ALARA principle implementation',
        'Personal dosimetry for all workers',
        'Community radiation monitoring',
        'Specialized transport containers'
      ],
      status: 'Strictly Controlled'
    }
  ];

  const wasteManagementTechnologies = [
    {
      technology: 'Tailings Dewatering',
      description: 'Advanced filtration systems to reduce water content and improve stability',
      benefits: ['Reduced tailings volume', 'Water recovery', 'Improved stability']
    },
    {
      technology: 'In-Situ Leaching',
      description: 'Extracting uranium without conventional mining, reducing surface waste',
      benefits: ['Minimal surface disturbance', 'Lower waste volumes', 'Reduced environmental impact']
    },
    {
      technology: 'Acid Neutralization',
      description: 'Chemical treatment to neutralize acidic process waters and tailings',
      benefits: ['pH control', 'Metal precipitation', 'Environmental protection']
    },
    {
      technology: 'Phytoremediation',
      description: 'Using plants to remove contaminants and stabilize tailings areas',
      benefits: ['Natural contaminant uptake', 'Soil stabilization', 'Biodiversity restoration']
    }
  ];

  const monitoringPrograms = [
    {
      program: 'Groundwater Monitoring',
      frequency: 'Monthly',
      parameters: ['pH', 'Heavy metals', 'Radioactivity', 'Major ions'],
      locations: '120+ monitoring wells'
    },
    {
      program: 'Air Quality Monitoring',
      frequency: 'Continuous',
      parameters: ['PM10/PM2.5', 'Radon', 'Dust fallout', 'Wind patterns'],
      locations: '25 monitoring stations'
    },
    {
      program: 'Soil Quality Assessment',
      frequency: 'Quarterly',
      parameters: ['Heavy metals', 'pH', 'Organic content', 'Radioactivity'],
      locations: '200+ sampling points'
    },
    {
      program: 'Biological Monitoring',
      frequency: 'Bi-annual',
      parameters: ['Species diversity', 'Population health', 'Bioaccumulation'],
      locations: 'Flora and fauna surveys'
    }
  ];

  return (
    <section id="waste-management" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Waste Management & Environmental Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive approach to managing uranium mining waste and minimizing environmental impact 
            through advanced technologies and continuous monitoring.
          </p>
        </div>

        {/* Waste Types Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {wasteTypes.map((waste, index) => {
            const Icon = waste.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    {waste.type}
                  </CardTitle>
                  <CardDescription>Annual volume: {waste.volume}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Management Approach</h4>
                    <p className="text-sm text-muted-foreground">{waste.management}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Containment</h4>
                    <p className="text-sm text-muted-foreground">{waste.containment}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Monitoring</h4>
                    <p className="text-sm text-muted-foreground">{waste.monitoring}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Environmental Impacts and Mitigation */}
        <Tabs defaultValue="water" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="water">Water Resources</TabsTrigger>
            <TabsTrigger value="air">Air Quality</TabsTrigger>
            <TabsTrigger value="land">Soil & Land</TabsTrigger>
            <TabsTrigger value="radiation">Radiation</TabsTrigger>
          </TabsList>

          {environmentalImpacts.map((impact, index) => (
            <TabsContent key={index} value={impact.category.toLowerCase().split(' ')[0]} className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <impact.icon className="h-5 w-5 text-primary" />
                      {impact.category} Impact Management
                    </CardTitle>
                    <Badge variant="outline">{impact.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Potential Issues
                      </h4>
                      <ul className="space-y-2">
                        {impact.issues.map((issue, issueIndex) => (
                          <li key={issueIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                            <span className="text-muted-foreground">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Mitigation Measures
                      </h4>
                      <ul className="space-y-2">
                        {impact.mitigation.map((measure, measureIndex) => (
                          <li key={measureIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                            <span className="text-muted-foreground">{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Waste Management Technologies */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-primary" />
              Advanced Waste Management Technologies
            </CardTitle>
            <CardDescription>
              Innovative technologies deployed to minimize environmental impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wasteManagementTechnologies.map((tech, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{tech.technology}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Monitoring */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Environmental Monitoring Programs
            </CardTitle>
            <CardDescription>
              Comprehensive monitoring to ensure environmental compliance and safety
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringPrograms.map((program, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{program.program}</h4>
                    <Badge variant="outline">{program.frequency}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Locations:</strong> {program.locations}
                  </p>
                  <div>
                    <h5 className="font-medium text-sm mb-1">Parameters Monitored:</h5>
                    <div className="flex flex-wrap gap-1">
                      {program.parameters.map((param, paramIndex) => (
                        <Badge key={paramIndex} variant="secondary" className="text-xs">
                          {param}
                        </Badge>
                      ))}
                    </div>
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

export default WasteManagementSection;