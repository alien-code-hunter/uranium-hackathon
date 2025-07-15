import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, MapPin, BookOpen } from 'lucide-react';
import heroImage from '@/assets/uranium-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Namibian uranium mining landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Namibia's{' '}
            <span className="text-uranium bg-gradient-hero bg-clip-text text-transparent">
              Uranium
            </span>{' '}
            Future
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how Namibia's uranium resources power the world while building a sustainable future. 
            Explore interactive maps, learn about mining methods, and understand the journey from mine to reactor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="uranium" size="xl" className="group">
              Explore Interactive Map
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            
            <Button variant="educational" size="xl" className="group">
              Start Learning
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            
            <Button variant="ghost" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Introduction
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-3xl font-bold text-uranium mb-2">#2</div>
              <div className="text-muted-foreground">World's largest uranium producer</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-3xl font-bold text-namibian-blue mb-2">11%</div>
              <div className="text-muted-foreground">Global uranium supply from Namibia</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Years of uranium mining experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-uranium rounded-full flex justify-center">
          <div className="w-1 h-3 bg-uranium rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;