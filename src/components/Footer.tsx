import React from 'react';
import { Globe, MapPin, BookOpen, Mail, Phone, ExternalLink } from 'lucide-react';
import unamLogo from '@/assets/unam-logo.jpg';
import iumLogo from '@/assets/ium-logo.jpg';
import ministryLogo from '@/assets/ministry-mines.jpg';
import rosatomLogo from '@/assets/rosatom-logo.jpg';

const Footer = () => {

  const resources = [
    { name: 'Mining Methods', href: '#' },
    { name: 'Datasets', href: '#' },
    { name: 'Research Papers', href: '#' },
    { name: 'Video Library', href: '#' },
  ];
  const quicklinks = [
    { name: 'Mining Methods', href: '/mining' },
    { name: 'Datasets', href: '/education' },
    { name: 'Research Papers', href: '/education' },
    { name: 'Video Library', href: '/src/omponents/educationSection.tsx:81:16' },
  ];

  const partners = [
    { name: 'UNAM', href: 'https://www.unam.edu.na', image: unamLogo },
    { name: 'IUM', href: 'https://www.ium.edu.na', image: iumLogo },
    { name: 'Ministry of Mines', href: '#', image: ministryLogo },
    { name: 'ROSATOM', href: '#', image: rosatomLogo },
    { name: 'World Nuclear Association', href: '#', image: null },
  ];

  return (
    <>
      <footer className="bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-1 animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4 group">
                <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/lovable-uploads/b1844ada-b971-4110-baf6-1a9ac1b92bd1.png"
                    alt="Namibia Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold">
                  Namibia <span className="text-uranium-green">Uranium</span> Portal
                </span>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Comprehensive uranium education and awareness platform for Namibia,
                promoting sustainable mining and nuclear energy literacy.
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-uranium-green transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-uranium-green transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-uranium-green transition-colors cursor-pointer">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quicklinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-uranium-green transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-white/80 hover:text-uranium-green transition-colors duration-200"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Partners</h3>
              <div className="space-y-3">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex items-center space-x-3">
                    {partner.image && (
                      <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                        <img
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <a
                      href={partner.href}
                      className="text-white/80 hover:text-uranium-green transition-colors duration-200 flex items-center"
                    >
                      {partner.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-uranium-green mb-1">25+</div>
                <div className="text-white/70 text-sm">Educational Resources</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-uranium-green mb-1">500+</div>
                <div className="text-white/70 text-sm">Young Scientists Engaged</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-uranium-green mb-1">15</div>
                <div className="text-white/70 text-sm">Data Visualizations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-uranium-green mb-1">3</div>
                <div className="text-white/70 text-sm">Interactive Games</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
                 <div className="text-white/70 text-sm">
                     © 2024 Namibia Uranium Portal. All rights reserved. Built and maintained by Geotech Hackers. All Rights Reserved.
                 </div>
                 </div>
                
                 <div>

          <div className="flex space-x-6 text-sm justify-center">
            <a href="/privacy" className="text-white/70 hover:text-uranium-green transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/70 hover:text-uranium-green transition-colors">
              Terms of Use
            </a>
            <a href="/contact" className="text-white/70 hover:text-uranium-green transition-colors">
              Contact
            </a>
          </div>
        </div>

      </footer>

      {/* Extra space below the footer */}
      <div className="h-8"></div>
    </>
  );
};

export default Footer;
