import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Zap, Truck, Building2, ArrowRight } from 'lucide-react';

const MapSection = () => {
  const mineLocations = [
    {
      name: 'Rössing Mine',
      location: 'Erongo Region',
      type: 'Open Pit',
      production: '2,500 tonnes/year',
      status: 'Operating',
      color: 'bg-uranium'
    },
    {
      name: 'Husab Mine',
      location: 'Erongo Region',
      type: 'Open Pit',
      production: '5,500 tonnes/year',
      status: 'Operating',
      color: 'bg-accent'
    },
    {
      name: 'Langer Heinrich',
      location: 'Erongo Region',
      type: 'Open Pit',
      production: '1,350 tonnes/year',
      status: 'Care & Maintenance',
      color: 'bg-muted'
    }
  ];

  return (
    <section id="map" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interactive <span className="text-uranium">Mining Map</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Namibia's uranium deposits, operating mines, and infrastructure 
            on our comprehensive interactive map platform.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gradient-to-br from-earth-sand to-earth-brown/20 rounded-2xl h-96 md:h-[500px] mb-12 relative overflow-hidden border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-earth-brown/10"></div>
          
          {/* Namibia outline placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-uranium mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground mb-6">Full GIS mapping with real-time mine data</p>
              <Button variant="uranium">
                Access Map Portal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mine markers simulation */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-uranium rounded-full animate-pulse"></div>
          <div className="absolute top-2/5 left-1/3 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-muted-foreground rounded-full animate-pulse"></div>
        </div>

        {/* Mine Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mineLocations.map((mine, index) => (
            <Card 
              key={mine.name}
              className="group hover:shadow-elevate transition-all duration-300 hover:scale-105 bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-3 h-3 ${mine.color} rounded-full`}></div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    mine.status === 'Operating' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {mine.status}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground">
                  {mine.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {mine.location} • {mine.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Annual Production:</span>
                    <span className="font-medium text-foreground">{mine.production}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infrastructure Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-uranium transition-all duration-300">
            <Building2 className="w-8 h-8 text-uranium mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">3</div>
            <div className="text-sm text-muted-foreground">Processing Plants</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-uranium transition-all duration-300">
            <Truck className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">2</div>
            <div className="text-sm text-muted-foreground">Export Ports</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-uranium transition-all duration-300">
            <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">450km</div>
            <div className="text-sm text-muted-foreground">Power Lines</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-uranium transition-all duration-300">
            <MapPin className="w-8 h-8 text-namibian-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Exploration Sites</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;