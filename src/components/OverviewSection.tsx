import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Pickaxe, Zap, Leaf, Users, TrendingUp } from 'lucide-react';

const OverviewSection = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Strategic Locations',
      description: 'Explore Namibia\'s major uranium deposits across the Erongo and Hardap regions.',
      color: 'text-uranium'
    },
    {
      icon: Pickaxe,
      title: 'Mining Methods',
      description: 'Learn about open pit, underground, and in-situ recovery techniques.',
      color: 'text-earth-brown'
    },
    {
      icon: Zap,
      title: 'Clean Energy',
      description: 'Understand uranium\'s role in nuclear power and carbon-free electricity.',
      color: 'text-namibian-blue'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Discover environmental protection and rehabilitation efforts.',
      color: 'text-uranium'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'See how uranium mining creates jobs and supports local communities.',
      color: 'text-secondary'
    },
    {
      icon: TrendingUp,
      title: 'Economic Growth',
      description: 'Track uranium\'s contribution to Namibia\'s economic development.',
      color: 'text-accent'
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Understanding Namibian <span className="text-uranium">Uranium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From desert deposits to global energy security - explore the complete journey of uranium 
            in Namibia through interactive education and real-world data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="group hover:shadow-elevate transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:animate-glow-pulse transition-all duration-300`}>
                    <Icon className={`w-6 h-6 text-white`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Facts */}
        <div className="mt-20 bg-gradient-earth rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-earth-brown mb-8 text-center">
            Quick Facts About Namibian Uranium
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-brown mb-2">1976</div>
              <div className="text-earth-brown/80">First uranium production</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-brown mb-2">3</div>
              <div className="text-earth-brown/80">Major operating mines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-brown mb-2">5,000+</div>
              <div className="text-earth-brown/80">Direct jobs created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-brown mb-2">15,000+</div>
              <div className="text-earth-brown/80">Indirect jobs supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;