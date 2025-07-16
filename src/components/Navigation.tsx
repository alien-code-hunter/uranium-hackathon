import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, BookOpen, MapPin, BarChart3, Shield, Cpu, Scale, Baby, Database, TrendingUp } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    href: '/',
    icon: Globe
  }, {
    name: 'Mining',
    href: '/mining',
    icon: MapPin
  }, {
    name: 'Market',
    href: '/market',
    icon: BarChart3
  }, {
    name: 'Safety',
    href: '/safety',
    icon: Shield
  }, {
    name: 'Education',
    href: '/education',
    icon: BookOpen
  }, {
    name: 'Technology',
    href: '/technology',
    icon: Cpu
  }, {
    name: 'Legal',
    href: '/legal',
    icon: Scale
  }, {
    name: 'Kids',
    href: '/kids',
    icon: Baby
  }, {
    name: 'Dashboards',
    href: '/dashboards',
    icon: Database
  }, {
    name: 'Updates',
    href: '/updates',
    icon: TrendingUp
  }];
  return <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Namibia <span className="text-uranium">Uranium</span> Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return <Link key={item.name} to={item.href} className={`flex items-center space-x-1 transition-colors duration-200 text-sm ${isActive ? 'text-uranium font-medium' : 'text-muted-foreground hover:text-uranium'}`}>
                  <Icon className="w-3 h-3" />
                  <span>{item.name}</span>
                </Link>;
          })}
            
          </div>
          
          {/* Search Bar for desktop */}
          <div className="hidden md:block lg:hidden flex-1 max-w-sm mx-4">
            <SearchBar />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {/* Mobile Search */}
            <div className="px-3 pb-4">
              <SearchBar />
            </div>
            
            {navItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return <Link key={item.name} to={item.href} className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? 'text-uranium bg-muted font-medium' : 'text-muted-foreground hover:text-uranium hover:bg-muted'}`} onClick={() => setIsOpen(false)}>
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>;
        })}
            <div className="px-3 pt-2">
              <Button variant="uranium" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;