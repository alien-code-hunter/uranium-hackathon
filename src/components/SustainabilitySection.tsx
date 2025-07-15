import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Droplets, Recycle, Users, TrendingUp, Shield } from 'lucide-react';

const SustainabilitySection = () => {
  const sustainabilityMetrics = [
    {
      icon: Leaf,
      title: 'Carbon Footprint',
      value: '2.1 kg CO₂/kg U',
      description: 'Significantly lower than fossil fuel extraction',
      trend: 'down',
      color: 'text-green-600'
    },
    {
      icon: Droplets,
      title: 'Water Usage',
      value: '95%',
      description: 'Water recycling rate in modern operations',
      trend: 'up',
      color: 'text-blue-600'
    },
    {
      icon: Recycle,
      title: 'Land Rehabilitation',
      value: '87%',
      description: 'Of mined areas successfully rehabilitated',
      trend: 'up',
      color: 'text-green-600'
    }
  ];

  const initiatives = [
    {
      icon: Shield,
      title: 'Environmental Protection',
      description: 'Comprehensive monitoring of air, water, and soil quality around all mining operations.',
      progress: 95
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Supporting local education, healthcare, and infrastructure development programs.',
      progress: 88
    },
    {
      icon: TrendingUp,
      title: 'Economic Growth',
      description: 'Contributing to Namibia\'s GDP while maintaining sustainable practices.',
      progress: 92
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sustainable <span className="text-uranium">Mining</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Namibia leads the world in responsible uranium mining, balancing energy needs 
            with environmental protection and community development.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sustainabilityMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={metric.title}
                className="group hover:shadow-elevate transition-all duration-300 hover:scale-105 bg-card border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-earth rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {metric.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-uranium mb-2">
                    {metric.value}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {metric.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Environmental Impact Comparison */}
        <div className="bg-gradient-earth rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-earth-brown mb-8 text-center">
            Environmental Impact Comparison
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-earth-brown mb-2">Uranium</div>
              <div className="text-sm text-earth-brown/80 mb-3">Per TWh electricity</div>
              <div className="text-lg font-semibold text-uranium">0.02 deaths</div>
              <div className="text-xs text-earth-brown/70">Safest energy source</div>
            </div>
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-earth-brown mb-2">Solar</div>
              <div className="text-sm text-earth-brown/80 mb-3">Per TWh electricity</div>
              <div className="text-lg font-semibold text-blue-600">0.44 deaths</div>
              <div className="text-xs text-earth-brown/70">Very safe renewable</div>
            </div>
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-earth-brown mb-2">Oil</div>
              <div className="text-sm text-earth-brown/80 mb-3">Per TWh electricity</div>
              <div className="text-lg font-semibold text-orange-500">18.4 deaths</div>
              <div className="text-xs text-earth-brown/70">High emissions</div>
            </div>
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-earth-brown mb-2">Coal</div>
              <div className="text-sm text-earth-brown/80 mb-3">Per TWh electricity</div>
              <div className="text-lg font-semibold text-red-500">24.6 deaths</div>
              <div className="text-xs text-earth-brown/70">Highest emissions</div>
            </div>
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <Card 
                key={initiative.title}
                className="group hover:shadow-uranium transition-all duration-300 hover:scale-105 bg-card border-border"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-mining rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {initiative.description}
                  </CardDescription>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                      <span className="text-sm font-bold text-uranium">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-hero h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-mining rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join the Sustainable Future
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Learn how nuclear energy powered by Namibian uranium contributes to global 
            climate goals and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-uranium hover:bg-white/90">
              View Sustainability Report
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Download Impact Data
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;