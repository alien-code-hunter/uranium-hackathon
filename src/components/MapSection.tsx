import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Zap, Truck, Building2 } from 'lucide-react';
import InteractiveMap from './InteractiveMap';

const MapSection = () => {
  const mineLocations = [
    {
      name: 'Rössing Mine',
      location: 'Erongo Region (-22.6667°S, 14.5399°E)',
      type: 'Open Pit',
      production: '2,500 tonnes/year',
      status: 'Operating',
      color: 'bg-uranium',
      operator: 'Rio Tinto',
      details: 'World\'s longest-running open-pit uranium mine'
    },
    {
      name: 'Husab Mine', 
      location: 'Erongo Region (-22.5852°S, 15.0243°E)',
      type: 'Open Pit',
      production: '5,500 tonnes/year',
      status: 'Operating',
      color: 'bg-accent',
      operator: 'Swakop Uranium',
      details: 'Namibia\'s largest uranium mine by production'
    },
    {
      name: 'Langer Heinrich',
      location: 'Erongo Region (-22.8145°S, 15.3250°E)',
      type: 'Open Pit',
      production: '1,350 tonnes/year',
      status: 'Care & Maintenance',
      color: 'bg-muted',
      operator: 'Paladin Energy',
      details: 'Heap leach processing facility'
    }
  ];

  return (
    <section id="map" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      {/* Interactive Map */}
        <InteractiveMap />

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
                  {mine.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Production:</span>
                    <span className="font-medium text-foreground">{mine.production}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Operator:</span>
                    <span className="font-medium text-foreground">{mine.operator}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium text-foreground">{mine.type}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{mine.details}</p>
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