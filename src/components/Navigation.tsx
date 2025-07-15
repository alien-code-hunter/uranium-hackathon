import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, BookOpen, MapPin, BarChart3, Users, Gamepad2 } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Overview', href: '#overview', icon: Globe },
    { name: 'Interactive Map', href: '#map', icon: MapPin },
    { name: 'Education', href: '#education', icon: BookOpen },
    { name: 'Sustainability', href: '#sustainability', icon: BarChart3 },
    { name: 'For Kids', href: '#kids', icon: Gamepad2 },
    { name: 'About', href: '#about', icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Namibia <span className="text-uranium">Uranium</span> Portal
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-uranium transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <Button variant="uranium" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-uranium hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <div className="px-3 pt-2">
              <Button variant="uranium" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;