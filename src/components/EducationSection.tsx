import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Video, FileText, Download, ArrowRight } from 'lucide-react';
import miningMethodsImage from '@/assets/mining-methods.jpg';

const EducationSection = () => {
  const resources = [
    {
      icon: Video,
      title: 'Video Library',
      description: 'Watch documentaries about uranium mining, processing, and safety procedures.',
      items: '12 videos',
      category: 'Interactive'
    },
    {
      icon: FileText,
      title: 'Research Papers',
      description: 'Access peer-reviewed studies on Namibian uranium geology and economics.',
      items: '25+ papers',
      category: 'Academic'
    },
    {
      icon: Download,
      title: 'Datasets',
      description: 'Download production data, environmental monitoring, and geological surveys.',
      items: '8 datasets',
      category: 'Data'
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educational <span className="text-uranium">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive learning materials for students, researchers, and anyone interested 
            in understanding uranium mining and nuclear energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mining Methods Visual */}
          <div className="order-2 lg:order-1">
            <img
              src={miningMethodsImage}
              alt="Uranium mining methods comparison"
              className="w-full rounded-2xl shadow-elevate"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Mining Methods Explained
            </h3>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-uranium pl-4">
                <h4 className="font-semibold text-foreground mb-2">Open Pit Mining</h4>
                <p className="text-muted-foreground">Surface extraction for shallow uranium deposits, used at Rössing and Husab mines.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-foreground mb-2">Underground Mining</h4>
                <p className="text-muted-foreground">Deep extraction through tunnels and shafts for high-grade ore bodies.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold text-foreground mb-2">In-Situ Recovery</h4>
                <p className="text-muted-foreground">Solution mining that dissolves uranium underground without traditional excavation.</p>
              </div>
            </div>
            <Button variant="educational" className="group">
              Learn More About Mining
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card 
                key={resource.title}
                className="group hover:shadow-uranium transition-all duration-300 hover:scale-105 bg-card border-border"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-mining rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {resource.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-uranium">
                      {resource.items}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:text-uranium">
                      <BookOpen className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Dive Deeper?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Access our complete educational portal with interactive simulations, 
            virtual mine tours, and expert interviews.
          </p>
          <Button variant="secondary" size="xl" className="bg-white text-uranium hover:bg-white/90">
            Access Full Portal
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;