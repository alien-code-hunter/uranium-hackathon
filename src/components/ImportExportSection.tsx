import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, Ship, Plane, Truck, Globe, DollarSign, TrendingUp } from 'lucide-react';

const ImportExportSection = () => {
  const exportData = {
    totalExports: {
      value: '$987.2M',
      change: '+12.4%',
      volume: '5,413 tonnes U3O8',
      year: '2023'
    },
    topDestinations: [
      {
        country: 'China',
        value: '$432.1M',
        volume: '2,387 tonnes',
        percentage: '43.8%',
        growth: '+18.2%',
        description: 'Primary destination for nuclear fuel cycle'
      },
      {
        country: 'France',
        value: '$198.7M',
        volume: '1,098 tonnes',
        percentage: '20.3%',
        growth: '+8.1%',
        description: 'European nuclear fuel processing'
      },
      {
        country: 'United Kingdom',
        value: '$156.3M',
        volume: '864 tonnes',
        percentage: '16.0%',
        growth: '+5.9%',
        description: 'Nuclear fuel cycle services'
      },
      {
        country: 'Canada',
        value: '$89.4M',
        volume: '494 tonnes',
        percentage: '9.1%',
        growth: '+12.7%',
        description: 'Uranium conversion services'
      },
      {
        country: 'United States',
        value: '$67.8M',
        volume: '375 tonnes',
        percentage: '6.9%',
        growth: '+15.3%',
        description: 'Strategic uranium reserves'
      },
      {
        country: 'Others',
        value: '$42.9M',
        volume: '195 tonnes',
        percentage: '3.9%',
        growth: '+4.2%',
        description: 'Various nuclear programs'
      }
    ]
  };

  const importData = {
    totalImports: {
      value: '$123.8M',
      change: '+8.7%',
      description: 'Mining equipment and nuclear technology',
      year: '2023'
    },
    categories: [
      {
        category: 'Mining Equipment',
        value: '$45.6M',
        percentage: '36.8%',
        description: 'Heavy machinery, trucks, processing equipment'
      },
      {
        category: 'Nuclear Technology',
        value: '$32.1M',
        percentage: '25.9%',
        description: 'Radiation detection, monitoring systems'
      },
      {
        category: 'Chemical Reagents',
        value: '$18.4M',
        percentage: '14.9%',
        description: 'Acid, solvents for uranium processing'
      },
      {
        category: 'Safety Equipment',
        value: '$14.7M',
        percentage: '11.9%',
        description: 'Personal protective equipment, safety systems'
      },
      {
        category: 'Technical Services',
        value: '$13.0M',
        percentage: '10.5%',
        description: 'Consulting, engineering, training'
      }
    ]
  };

  const logisticsRoutes = [
    {
      route: 'Walvis Bay Port',
      type: 'Sea',
      icon: Ship,
      volume: '85% of exports',
      destinations: 'China, France, UK',
      description: 'Primary export route via deep-water port'
    },
    {
      route: 'Windhoek Airport',
      type: 'Air',
      icon: Plane,
      volume: '10% of exports',
      destinations: 'Europe, North America',
      description: 'High-value, time-sensitive shipments'
    },
    {
      route: 'Overland Routes',
      type: 'Land',
      icon: Truck,
      volume: '5% of exports',
      destinations: 'South Africa, Botswana',
      description: 'Regional trade and transport'
    }
  ];

  const tradeAgreements = [
    {
      agreement: 'Nuclear Cooperation Agreement with China',
      status: 'Active',
      value: '$2.1B (10-year term)',
      description: 'Strategic partnership for uranium supply and nuclear technology'
    },
    {
      agreement: 'EU-Namibia Trade Agreement',
      status: 'Active',
      value: '$890M annually',
      description: 'Preferential trade terms for uranium exports to EU'
    },
    {
      agreement: 'SADC Trade Protocol',
      status: 'Active',
      value: '$150M annually',
      description: 'Regional trade facilitation and customs cooperation'
    },
    {
      agreement: 'Bilateral Agreement with France',
      status: 'Active',
      value: '$420M (5-year term)',
      description: 'Nuclear fuel cycle cooperation and technology transfer'
    }
  ];

  return (
    <section id="import-export" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Import & Export Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive overview of Namibia's uranium trade flows, destinations, 
            and international partnerships in the nuclear fuel cycle.
          </p>
        </div>

        {/* Export Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUp className="h-5 w-5 text-green-500" />
                Uranium Exports ({exportData.totalExports.year})
              </CardTitle>
              <CardDescription>Total uranium exports and international trade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-1">TOTAL VALUE</h4>
                  <p className="text-2xl font-bold text-foreground">{exportData.totalExports.value}</p>
                  <Badge variant="default" className="mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {exportData.totalExports.change}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-1">VOLUME</h4>
                  <p className="text-2xl font-bold text-foreground">{exportData.totalExports.volume}</p>
                  <p className="text-sm text-muted-foreground">World's 4th largest producer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowDown className="h-5 w-5 text-blue-500" />
                Technology & Equipment Imports
              </CardTitle>
              <CardDescription>Supporting infrastructure and technology imports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-1">TOTAL VALUE</h4>
                  <p className="text-2xl font-bold text-foreground">{importData.totalImports.value}</p>
                  <Badge variant="secondary" className="mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {importData.totalImports.change}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-1">FOCUS</h4>
                  <p className="text-lg font-bold text-foreground">Technology</p>
                  <p className="text-sm text-muted-foreground">{importData.totalImports.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Destinations */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Top Export Destinations
            </CardTitle>
            <CardDescription>Major uranium importing countries and trade values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exportData.topDestinations.map((destination, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-lg">{destination.country}</h4>
                      <Badge variant="outline">{destination.percentage}</Badge>
                      <Badge variant="default">{destination.growth}</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">{destination.value}</p>
                      <p className="text-sm text-muted-foreground">{destination.volume}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{destination.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Import Categories */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle>Import Categories</CardTitle>
            <CardDescription>Technology and equipment imports supporting uranium operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {importData.categories.map((category, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{category.category}</h4>
                    <Badge variant="secondary">{category.percentage}</Badge>
                  </div>
                  <p className="text-lg font-bold text-primary mb-1">{category.value}</p>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Logistics Routes */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle>Export Logistics Routes</CardTitle>
            <CardDescription>Transportation infrastructure and export channels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {logisticsRoutes.map((route, index) => {
                const Icon = route.icon;
                return (
                  <div key={index} className="p-6 bg-muted/50 rounded-lg text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-lg mb-2">{route.route}</h4>
                    <Badge variant="outline" className="mb-3">{route.volume}</Badge>
                    <p className="text-sm text-muted-foreground mb-2">To: {route.destinations}</p>
                    <p className="text-xs text-muted-foreground">{route.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Trade Agreements */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Key Trade Agreements
            </CardTitle>
            <CardDescription>Strategic partnerships and bilateral agreements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tradeAgreements.map((agreement, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{agreement.agreement}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">{agreement.status}</Badge>
                      <span className="text-lg font-bold text-primary">{agreement.value}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{agreement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImportExportSection;