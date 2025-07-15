import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Factory, Activity, AlertTriangle, CheckCircle, Clock, Zap, TrendingUp } from 'lucide-react';

const PlantOperations = () => {
  const [selectedPlant, setSelectedPlant] = useState('rossing');

  const plants = {
    rossing: {
      name: 'Rössing Mine',
      status: 'operational',
      capacity: '4,000 tonnes U3O8/year',
      production: '3,200 tonnes (2023)',
      efficiency: '85%',
      uptime: '92%',
      safety: 'excellent',
      location: 'Erongo Region',
      operator: 'China General Nuclear Power Corporation',
      employment: '1,200+ employees',
      operations: {
        mining: 'Open pit mining with 325-ton haul trucks',
        processing: 'Acid leaching and solvent extraction',
        production: '24/7 continuous operation',
        environmental: 'ISO 14001 certified environmental management'
      },
      keyStats: [
        { label: 'Daily Ore Processing', value: '35,000 tonnes', trend: 'up' },
        { label: 'Recovery Rate', value: '89.5%', trend: 'stable' },
        { label: 'Water Recycling', value: '95%', trend: 'up' },
        { label: 'Energy Efficiency', value: '87%', trend: 'up' }
      ]
    },
    husab: {
      name: 'Husab Mine',
      status: 'operational',
      capacity: '6,500 tonnes U3O8/year',
      production: '5,900 tonnes (2023)',
      efficiency: '91%',
      uptime: '95%',
      safety: 'excellent',
      location: 'Erongo Region',
      operator: 'Swakop Uranium (CNNC)',
      employment: '1,800+ employees',
      operations: {
        mining: 'Open pit with world\'s largest mining trucks',
        processing: 'Advanced heap leaching technology',
        production: 'Automated 24/7 operations',
        environmental: 'Zero liquid discharge system'
      },
      keyStats: [
        { label: 'Daily Ore Processing', value: '45,000 tonnes', trend: 'up' },
        { label: 'Recovery Rate', value: '92.3%', trend: 'up' },
        { label: 'Water Recycling', value: '98%', trend: 'up' },
        { label: 'Energy Efficiency', value: '93%', trend: 'up' }
      ]
    },
    langer: {
      name: 'Langer Heinrich',
      status: 'care-maintenance',
      capacity: '1,500 tonnes U3O8/year',
      production: '0 tonnes (suspended)',
      efficiency: 'N/A',
      uptime: 'N/A',
      safety: 'good',
      location: 'Erongo Region',
      operator: 'Paladin Energy Ltd',
      employment: '150+ (maintenance crew)',
      operations: {
        mining: 'Open pit (currently suspended)',
        processing: 'Heap leaching (on care & maintenance)',
        production: 'Suspended pending market conditions',
        environmental: 'Ongoing environmental monitoring'
      },
      keyStats: [
        { label: 'Maintenance Status', value: 'Active', trend: 'stable' },
        { label: 'Asset Preservation', value: '100%', trend: 'stable' },
        { label: 'Environmental Monitoring', value: '24/7', trend: 'stable' },
        { label: 'Restart Readiness', value: '75%', trend: 'up' }
      ]
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-500"><CheckCircle className="h-3 w-3 mr-1" />Operational</Badge>;
      case 'care-maintenance':
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" />Care & Maintenance</Badge>;
      default:
        return <Badge variant="destructive"><AlertTriangle className="h-3 w-3 mr-1" />Unknown</Badge>;
    }
  };

  const currentPlant = plants[selectedPlant as keyof typeof plants];

  return (
    <section id="plant-operations" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Plant Operations & Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring and performance metrics of Namibia's uranium processing facilities
          </p>
        </div>

        {/* Plant Selector */}
        <Tabs value={selectedPlant} onValueChange={setSelectedPlant} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="rossing">Rössing Mine</TabsTrigger>
            <TabsTrigger value="husab">Husab Mine</TabsTrigger>
            <TabsTrigger value="langer">Langer Heinrich</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedPlant} className="space-y-8">
            {/* Plant Overview */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Factory className="h-6 w-6 text-primary" />
                      {currentPlant.name}
                    </CardTitle>
                    <CardDescription>{currentPlant.location} • {currentPlant.operator}</CardDescription>
                  </div>
                  {getStatusBadge(currentPlant.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">CAPACITY</h4>
                    <p className="text-lg font-bold text-foreground">{currentPlant.capacity}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">PRODUCTION (2023)</h4>
                    <p className="text-lg font-bold text-foreground">{currentPlant.production}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">EFFICIENCY</h4>
                    <p className="text-lg font-bold text-foreground">{currentPlant.efficiency}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">EMPLOYMENT</h4>
                    <p className="text-lg font-bold text-foreground">{currentPlant.employment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPlant.keyStats.map((stat, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">{stat.label}</h4>
                      {stat.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                      {stat.trend === 'stable' && <Activity className="h-4 w-4 text-blue-500" />}
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Operations Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Operations Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mining Operations</h4>
                    <p className="text-sm text-muted-foreground">{currentPlant.operations.mining}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Processing</h4>
                    <p className="text-sm text-muted-foreground">{currentPlant.operations.processing}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Production Schedule</h4>
                    <p className="text-sm text-muted-foreground">{currentPlant.operations.production}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Management</h4>
                    <p className="text-sm text-muted-foreground">{currentPlant.operations.environmental}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Live Performance Dashboard</CardTitle>
                  <CardDescription>Real-time operational metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Plant Efficiency</span>
                        <span className="text-sm font-bold text-primary">{currentPlant.efficiency}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: currentPlant.efficiency }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Uptime</span>
                        <span className="text-sm font-bold text-primary">{currentPlant.uptime}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: currentPlant.uptime }}
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Safety Rating</span>
                        <Badge variant={currentPlant.safety === 'excellent' ? 'default' : 'secondary'}>
                          {currentPlant.safety}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PlantOperations;