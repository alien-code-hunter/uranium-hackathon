import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mountain, Droplets, Drill, Factory, Truck, Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import RemoteMiningTechnology from './RemoteMiningTechnology';
import openPitImage from '@/assets/open-pit-mining.jpg';
import islImage from '@/assets/isl-mining.jpg';
import undergroundImage from '@/assets/underground-mining.jpg';
import heapLeachImage from '@/assets/heap-leaching.jpg';

interface MiningMethod {
  method_name: string;
  method_type: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  environmental_impact: string;
  suitable_deposits: string[];
  case_studies: string[];
}

const UraniumMiningMethods = () => {
  const [miningMethods, setMiningMethods] = useState<MiningMethod[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  useEffect(() => {
    loadMiningMethods();
    insertSampleMethods();
  }, []);

  useEffect(() => {
    if (miningMethods.length > 0 && !selectedMethod) {
      setSelectedMethod(miningMethods[0].method_type);
    }
  }, [miningMethods]);

  const loadMiningMethods = async () => {
    const { data } = await supabase
      .from('mining_methods')
      .select('*')
      .order('method_type', { ascending: true });
    
    if (data) {
      setMiningMethods(data as MiningMethod[]);
    }
  };

  const insertSampleMethods = async () => {
    const sampleMethods = [
      {
        method_name: "Open Pit Mining",
        method_type: "open_pit",
        description: "Large-scale surface excavation method for extracting uranium from shallow deposits. Involves removing overburden to access ore bodies.",
        advantages: [
          "High production rates and efficiency",
          "Lower operating costs per ton",
          "Easy equipment access and maintenance",
          "Suitable for large, low-grade deposits",
          "Good ore recovery rates"
        ],
        disadvantages: [
          "Large environmental footprint",
          "Significant landscape disturbance",
          "High initial capital investment",
          "Water management challenges",
          "Community displacement potential"
        ],
        environmental_impact: "Significant surface disturbance, habitat disruption, dust generation, and water table impacts. Requires comprehensive rehabilitation planning.",
        suitable_deposits: [
          "Shallow deposits (less than 200m depth)",
          "Large tonnage, low-grade ore bodies",
          "Sandstone-hosted deposits",
          "Unconformity-related deposits"
        ],
        case_studies: [
          "Rössing Mine, Namibia",
          "Husab Mine, Namibia",
          "Olympic Dam, Australia",
          "Cigar Lake, Canada"
        ]
      },
      {
        method_name: "In-Situ Leaching (ISL)",
        method_type: "isl",
        description: "Solution mining technique that dissolves uranium underground using chemical solutions pumped through injection wells, then extracted through recovery wells.",
        advantages: [
          "Minimal surface disturbance",
          "Lower environmental impact",
          "Reduced worker radiation exposure",
          "Lower capital and operating costs",
          "Faster project development"
        ],
        disadvantages: [
          "Limited to specific geological conditions",
          "Groundwater contamination risk",
          "Long-term monitoring requirements",
          "Lower recovery rates than conventional mining",
          "Regulatory complexity"
        ],
        environmental_impact: "Minimal surface impact but potential groundwater effects. Requires extensive hydrogeological monitoring and aquifer restoration.",
        suitable_deposits: [
          "Sandstone-hosted roll fronts",
          "Permeable sedimentary formations",
          "Confined aquifer systems",
          "Deposits below water table"
        ],
        case_studies: [
          "Kazakhstan operations",
          "Wyoming, USA deposits",
          "Texas, USA operations",
          "Potential Namibian applications"
        ]
      },
      {
        method_name: "Underground Mining",
        method_type: "underground",
        description: "Subsurface extraction method using shafts, tunnels, and underground workings to access deep, high-grade uranium deposits.",
        advantages: [
          "Minimal surface disturbance",
          "Access to deep, high-grade deposits",
          "Weather-independent operations",
          "Smaller surface infrastructure footprint",
          "Selective mining of high-grade areas"
        ],
        disadvantages: [
          "Higher operating costs",
          "Increased safety risks",
          "Complex ventilation requirements",
          "Higher radiation exposure potential",
          "Limited production rates"
        ],
        environmental_impact: "Limited surface impact but underground stability concerns. Requires careful mine water management and ventilation systems.",
        suitable_deposits: [
          "Deep, high-grade ore bodies",
          "Vein-type deposits",
          "Unconformity-related deposits",
          "Structurally controlled deposits"
        ],
        case_studies: [
          "McArthur River, Canada",
          "Cigar Lake, Canada",
          "Ranger Mine, Australia",
          "Historic Shinkolobwe, DRC"
        ]
      },
      {
        method_name: "Heap Leaching",
        method_type: "heap_leach",
        description: "Processing method where crushed ore is placed on lined pads and leached with chemical solutions to extract uranium.",
        advantages: [
          "Lower processing costs",
          "Suitable for low-grade ores",
          "Flexible operation scale",
          "Reduced infrastructure requirements",
          "Economic for marginal deposits"
        ],
        disadvantages: [
          "Weather dependent operations",
          "Lower recovery rates",
          "Long processing times",
          "Solution management complexity",
          "Environmental containment challenges"
        ],
        environmental_impact: "Requires proper liner systems and solution management to prevent environmental contamination. Generates processed ore residues.",
        suitable_deposits: [
          "Low-grade uranium ores",
          "Oxidized ore zones",
          "Secondary uranium minerals",
          "Stockpiled marginal ores"
        ],
        case_studies: [
          "Langer Heinrich, Namibia",
          "Rossing South, Namibia",
          "White Mesa, USA",
          "Honeymoon, Australia"
        ]
      }
    ];

    // Check if methods already exist
    const { data: existing } = await supabase
      .from('mining_methods')
      .select('id')
      .limit(1);

    if (!existing || existing.length === 0) {
      for (const method of sampleMethods) {
        await supabase
          .from('mining_methods')
          .insert(method);
      }
      loadMiningMethods();
    }
  };

  const getMethodIcon = (type: string) => {
    switch (type) {
      case 'open_pit': return <Mountain className="h-6 w-6" />;
      case 'isl': return <Droplets className="h-6 w-6" />;
      case 'underground': return <Drill className="h-6 w-6" />;
      case 'heap_leach': return <Factory className="h-6 w-6" />;
      default: return <Truck className="h-6 w-6" />;
    }
  };

  const getMethodImage = (type: string) => {
    switch (type) {
      case 'open_pit': return openPitImage;
      case 'isl': return islImage;
      case 'underground': return undergroundImage;
      case 'heap_leach': return heapLeachImage;
      default: return openPitImage;
    }
  };

  const getMethodColor = (type: string) => {
    switch (type) {
      case 'open_pit': return 'text-orange-500';
      case 'isl': return 'text-blue-500';
      case 'underground': return 'text-gray-500';
      case 'heap_leach': return 'text-green-500';
      default: return 'text-purple-500';
    }
  };

  const selectedMethodData = miningMethods.find(m => m.method_type === selectedMethod);

  // Special uranium occurrence data
  const uraniumOccurrences = [
    {
      type: "Uranium in Sand",
      title: "Sandstone-Hosted Deposits",
      description: "Uranium concentrated in permeable sandstone formations through groundwater flow and chemical precipitation",
      characteristics: [
        "Roll-front and tabular deposits",
        "Hosted in porous sandstone",
        "Associated with redox boundaries",
        "Often amenable to ISL mining"
      ],
      locations: ["Wyoming, USA", "Kazakhstan", "Niger", "Parts of Namibia"],
      extraction: "Primarily In-Situ Leaching (ISL)",
      grade: "0.05% - 0.2% U3O8",
      advantages: ["Low-cost extraction", "Minimal surface disturbance"],
      challenges: ["Groundwater protection", "Aquifer restoration"]
    },
    {
      type: "Uranium in Water",
      title: "Aqueous Uranium Extraction",
      description: "Uranium dissolved in groundwater, seawater, or produced waters from other operations",
      characteristics: [
        "Low concentrations (ppm levels)",
        "Requires concentration technologies",
        "Co-production opportunities",
        "Continuous extraction possible"
      ],
      locations: ["Seawater (global)", "Groundwater systems", "Phosphate processing waters"],
      extraction: "Ion exchange, membrane filtration, adsorption",
      grade: "3.3 ppm (seawater) to 100+ ppm (groundwater)",
      advantages: ["Vast resource base", "Co-production potential"],
      challenges: ["Very low concentrations", "High processing costs"]
    },
    {
      type: "Uranium in Unconformity Deposits",
      title: "High-Grade Unconformity-Related",
      description: "Extremely high-grade uranium deposits associated with geological unconformities",
      characteristics: [
        "Very high grades (>1% U3O8)",
        "Deep deposits (200-1000m+)",
        "Complex mineralogy",
        "Structural controls"
      ],
      locations: ["Athabasca Basin, Canada", "Alligator Rivers, Australia", "Kombolgie, Australia"],
      extraction: "Underground mining with extensive processing",
      grade: "1% - 20% U3O8",
      advantages: ["Extremely high grades", "Long mine life"],
      challenges: ["Technical complexity", "High radiation levels"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 dark:from-gray-950 dark:via-blue-950 dark:to-green-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Uranium Mining Methods & Extraction
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive guide to uranium extraction techniques, from conventional mining to advanced in-situ recovery, 
            including specialized extraction from sand, water, and various geological formations.
          </p>
        </div>

        <Tabs defaultValue="methods" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="methods">Mining Methods</TabsTrigger>
            <TabsTrigger value="occurrences">Uranium Occurrences</TabsTrigger>
            <TabsTrigger value="comparison">Method Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="methods">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Method Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Select Mining Method</h3>
                {miningMethods.map((method) => (
                  <Card 
                    key={method.method_type}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedMethod === method.method_type ? 'ring-2 ring-uranium bg-muted/50' : ''
                    }`}
                    onClick={() => setSelectedMethod(method.method_type)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={getMethodColor(method.method_type)}>
                          {getMethodIcon(method.method_type)}
                        </div>
                        <div>
                          <h4 className="font-semibold">{method.method_name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {method.method_type.replace('_', ' ').toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Method Details */}
              <div className="lg:col-span-2">
                {selectedMethodData ? (
                  <Card className="bg-card/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <div className={getMethodColor(selectedMethodData.method_type)}>
                          {getMethodIcon(selectedMethodData.method_type)}
                        </div>
                        {selectedMethodData.method_name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Method Image */}
                      <div className="w-full h-48 rounded-lg overflow-hidden">
                        <img 
                          src={getMethodImage(selectedMethodData.method_type)} 
                          alt={`${selectedMethodData.method_name} visualization`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <p className="text-lg">{selectedMethodData.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Advantages
                          </h4>
                          <ul className="space-y-2">
                            {selectedMethodData.advantages.map((advantage, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                                {advantage}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-red-600 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Challenges
                          </h4>
                          <ul className="space-y-2">
                            {selectedMethodData.disadvantages.map((disadvantage, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></div>
                                {disadvantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-500" />
                          Environmental Impact
                        </h4>
                        <p className="text-sm">{selectedMethodData.environmental_impact}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Suitable Deposit Types</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMethodData.suitable_deposits.map((deposit, idx) => (
                            <Badge key={idx} variant="outline">
                              {deposit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Case Studies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMethodData.case_studies.map((study, idx) => (
                            <Badge key={idx} variant="secondary">
                              {study}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-card/90 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <Mountain className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Select a Mining Method</h3>
                      <p className="text-muted-foreground">
                        Choose a mining method from the left to explore detailed information about uranium extraction techniques.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="occurrences">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Uranium Occurrences in Different Media
              </h3>
              
              {uraniumOccurrences.map((occurrence, index) => (
                <Card key={index} className="bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{occurrence.title}</CardTitle>
                    <Badge variant="outline">{occurrence.type}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{occurrence.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Characteristics</h4>
                        <ul className="space-y-1 text-sm">
                          {occurrence.characteristics.map((char, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-uranium rounded-full"></div>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Information</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Extraction Method:</strong> {occurrence.extraction}</div>
                          <div><strong>Typical Grade:</strong> {occurrence.grade}</div>
                          <div><strong>Main Locations:</strong> {occurrence.locations.join(', ')}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Trade-offs</h4>
                        <div className="space-y-2">
                          <div>
                            <h5 className="text-green-600 font-medium text-sm">Advantages</h5>
                            <ul className="text-xs space-y-1">
                              {occurrence.advantages.map((adv, idx) => (
                                <li key={idx}>• {adv}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-red-600 font-medium text-sm">Challenges</h5>
                            <ul className="text-xs space-y-1">
                              {occurrence.challenges.map((chal, idx) => (
                                <li key={idx}>• {chal}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Mining Method Comparison Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Method</th>
                        <th className="text-left p-2">Capital Cost</th>
                        <th className="text-left p-2">Operating Cost</th>
                        <th className="text-left p-2">Environmental Impact</th>
                        <th className="text-left p-2">Recovery Rate</th>
                        <th className="text-left p-2">Production Rate</th>
                        <th className="text-left p-2">Suitable Deposits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Open Pit</td>
                        <td className="p-2">High</td>
                        <td className="p-2">Low-Medium</td>
                        <td className="p-2">High</td>
                        <td className="p-2">High (85-95%)</td>
                        <td className="p-2">Very High</td>
                        <td className="p-2">Large, shallow, low-grade</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Underground</td>
                        <td className="p-2">High</td>
                        <td className="p-2">High</td>
                        <td className="p-2">Low-Medium</td>
                        <td className="p-2">High (80-90%)</td>
                        <td className="p-2">Medium</td>
                        <td className="p-2">Deep, high-grade</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">In-Situ Leaching</td>
                        <td className="p-2">Low-Medium</td>
                        <td className="p-2">Low</td>
                        <td className="p-2">Low</td>
                        <td className="p-2">Medium (60-80%)</td>
                        <td className="p-2">Medium</td>
                        <td className="p-2">Sandstone-hosted, permeable</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Heap Leaching</td>
                        <td className="p-2">Low</td>
                        <td className="p-2">Low</td>
                        <td className="p-2">Medium</td>
                        <td className="p-2">Low-Medium (50-70%)</td>
                        <td className="p-2">Low-Medium</td>
                        <td className="p-2">Low-grade, oxidized</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Explore Advanced Mining Technologies
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Learn about cutting-edge uranium extraction techniques and their applications in Namibian mining operations.
          </p>
          <Button variant="secondary" className="bg-white text-uranium hover:bg-white/90">
            Discover Mining Innovations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UraniumMiningMethods;