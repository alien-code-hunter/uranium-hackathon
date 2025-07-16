import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, Globe, MapPin, Zap, Pickaxe, DollarSign, Leaf } from 'lucide-react';

const ComparisonSection = () => {
  const [activeView, setActiveView] = useState('namibia');

  const namibiaElements = [
    {
      name: 'Uranium',
      symbol: 'U',
      production: '5,413 tonnes',
      value: '$254M',
      rank: '#2 globally',
      impact: 'low',
      method: 'Open pit, Underground',
      jobs: '8,500',
      sustainability: 'high'
    },
    {
      name: 'Diamond',
      symbol: 'C',
      production: '1.8M carats',
      value: '$1.2B',
      rank: '#1 globally',
      impact: 'medium',
      method: 'Marine, Open pit',
      jobs: '12,000',
      sustainability: 'medium'
    },
    {
      name: 'Gold',
      symbol: 'Au',
      production: '8.2 tonnes',
      value: '$350M',
      rank: '#15 globally',
      impact: 'high',
      method: 'Underground, Heap leach',
      jobs: '6,200',
      sustainability: 'low'
    },
    {
      name: 'Copper',
      symbol: 'Cu',
      production: '15,800 tonnes',
      value: '$125M',
      rank: '#25 globally',
      impact: 'medium',
      method: 'Open pit',
      jobs: '3,500',
      sustainability: 'medium'
    },
    {
      name: 'Zinc',
      symbol: 'Zn',
      production: '12,400 tonnes',
      value: '$28M',
      rank: '#18 globally',
      impact: 'medium',
      method: 'Underground',
      jobs: '2,100',
      sustainability: 'medium'
    },
    {
      name: 'Lead',
      symbol: 'Pb',
      production: '9,200 tonnes',
      value: '$19M',
      rank: '#22 globally',
      impact: 'high',
      method: 'Underground',
      jobs: '1,800',
      sustainability: 'low'
    }
  ];

  const globalComparison = [
    {
      element: 'Uranium',
      topProducers: ['Kazakhstan 45%', 'Namibia 12%', 'Canada 8%'],
      avgPrice: '$48.50/lb',
      marketSize: '$7.2B',
      growth: '+12%',
      sustainability: 'Nuclear energy transition'
    },
    {
      element: 'Lithium',
      topProducers: ['Australia 55%', 'Chile 26%', 'China 14%'],
      avgPrice: '$24,000/tonne',
      marketSize: '$6.1B',
      growth: '+25%',
      sustainability: 'EV battery demand'
    },
    {
      element: 'Cobalt',
      topProducers: ['DRC 70%', 'Russia 4%', 'Australia 3%'],
      avgPrice: '$32,000/tonne',
      marketSize: '$5.8B',
      growth: '+18%',
      sustainability: 'Battery technology'
    },
    {
      element: 'Rare Earths',
      topProducers: ['China 60%', 'Myanmar 15%', 'USA 12%'],
      avgPrice: '$7,200/tonne',
      marketSize: '$4.9B',
      growth: '+22%',
      sustainability: 'Green tech demand'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low': return 'bg-green-500/20 text-green-700 dark:text-green-300';
      case 'medium': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300';
      case 'high': return 'bg-red-500/20 text-red-700 dark:text-red-300';
      default: return 'bg-gray-500/20 text-gray-700 dark:text-gray-300';
    }
  };

  const getSustainabilityColor = (sustainability: string) => {
    switch (sustainability) {
      case 'high': return 'bg-green-500/20 text-green-700 dark:text-green-300';
      case 'medium': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300';
      case 'low': return 'bg-red-500/20 text-red-700 dark:text-red-300';
      default: return 'bg-gray-500/20 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Mining Element Comparison
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of uranium vs other critical elements in Namibia and worldwide
          </p>
        </div>

        <Tabs value={activeView} onValueChange={setActiveView} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="namibia" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Namibia Focus
            </TabsTrigger>
            <TabsTrigger value="global" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Global Perspective
            </TabsTrigger>
          </TabsList>

          <TabsContent value="namibia" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {namibiaElements.map((element, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-2xl font-mono">{element.symbol}</span>
                        {element.name}
                      </span>
                      <Badge variant="outline">{element.rank}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Production:</span>
                        <p className="font-semibold">{element.production}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Value:</span>
                        <p className="font-semibold text-primary">{element.value}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground text-sm">Mining Method:</span>
                      <p className="font-medium">{element.method}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-muted-foreground text-sm">Jobs:</span>
                        <p className="font-semibold">{element.jobs}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4" />
                        <Badge className={getSustainabilityColor(element.sustainability)}>
                          {element.sustainability}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground text-sm">Environmental Impact:</span>
                      <Badge className={getImpactColor(element.impact)}>
                        {element.impact}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="global" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {globalComparison.map((item, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      {item.element}
                    </CardTitle>
                    <CardDescription>Global market overview</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Top Producers</h4>
                      <div className="space-y-1">
                        {item.topProducers.map((producer, idx) => (
                          <Badge key={idx} variant="outline" className="mr-2 mb-1">
                            {producer}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-muted-foreground text-sm">Avg Price:</span>
                        <p className="font-bold text-primary">{item.avgPrice}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Market Size:</span>
                        <p className="font-bold">{item.marketSize}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-muted-foreground text-sm">Growth:</span>
                        <p className="font-bold text-green-600">{item.growth}</p>
                      </div>
                      <Badge variant="secondary">{item.sustainability}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Uranium Advantage Section */}
{/* Uranium Advantage Section */}
<Card className="bg-gradient-primary text-black">
  <CardHeader>
    <CardTitle className="flex items-center gap-2 text-2xl">
      <Zap className="h-6 w-6 text-yellow-400" /> {/* Yellow lightning bolt */}
      Why Uranium Matters for Namibia
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="text-center">
        <DollarSign className="h-12 w-12 mx-auto mb-3 text-green-500" /> {/* Green dollar sign */}
        <h3 className="font-bold mb-2">Economic Impact</h3>
        <p className="opacity-90">$254M export value with highest growth potential among all minerals</p>
      </div>
      <div className="text-center">
        <Pickaxe className="h-12 w-12 mx-auto mb-3 text-red-500" /> {/* Red pickaxe */}
        <h3 className="font-bold mb-2">Job Creation</h3>
        <p className="opacity-90">8,500+ direct jobs with lowest environmental impact compared to gold/diamond mining</p>
      </div>
      <div className="text-center">
        <Leaf className="h-12 w-12 mx-auto mb-3 text-emerald-500" /> {/* Emerald green leaf */}
        <h3 className="font-bold mb-2">Clean Energy Future</h3>
        <p className="opacity-90">Essential for nuclear power, supporting global carbon neutrality goals</p>
      </div>
    </div>
  </CardContent>
</Card>


      </div>
    </section>
  );
};

export default ComparisonSection;