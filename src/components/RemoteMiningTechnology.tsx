import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Satellite, Plane, Bot, Monitor, Cpu, Wifi, Download } from 'lucide-react';
import remoteMiningImage from '@/assets/remote-mining.jpg';

const RemoteMiningTechnology = () => {
  const remoteTechnologies = [
    {
      name: "Autonomous Mining Vehicles",
      description: "Self-driving trucks and excavators that operate 24/7 without human intervention",
      advantages: [
        "Reduced human exposure to radiation",
        "Continuous operation capabilities", 
        "Precise GPS-guided extraction",
        "Real-time performance monitoring"
      ],
      technology: "Advanced AI, LiDAR sensors, GPS systems",
      icon: <Bot className="h-6 w-6" />
    },
    {
      name: "Drone Surveillance Systems",
      description: "Unmanned aerial vehicles for site monitoring and geological surveys",
      advantages: [
        "Aerial radiation mapping",
        "Environmental monitoring",
        "Security and safety oversight",
        "Cost-effective surveying"
      ],
      technology: "High-resolution cameras, radiation detectors, thermal imaging",
      icon: <Plane className="h-6 w-6" />
    },
    {
      name: "Satellite Communication Networks",
      description: "Global connectivity for remote operations management and data transmission",
      advantages: [
        "Real-time data transmission",
        "Global operation oversight",
        "Emergency communication",
        "Weather monitoring"
      ],
      technology: "Geostationary satellites, 5G networks, IoT sensors",
      icon: <Satellite className="h-6 w-6" />
    },
    {
      name: "Remote Control Centers",
      description: "Centralized facilities for monitoring and controlling mining operations from distance",
      advantages: [
        "Expert supervision from safe locations",
        "Multi-site management",
        "Quick response to issues",
        "Data analytics and optimization"
      ],
      technology: "Advanced control systems, AR/VR interfaces, AI analytics",
      icon: <Monitor className="h-6 w-6" />
    }
  ];

  const generateTechnologyReport = () => {
    const reportContent = `
REMOTE MINING TECHNOLOGY REPORT
===============================

Executive Summary:
Remote mining technology represents the future of uranium extraction, combining autonomous systems, 
AI-driven analytics, and satellite communications to create safer, more efficient operations.

Key Technologies:

1. AUTONOMOUS MINING VEHICLES
   - Self-driving haul trucks with 300-tonne capacity
   - GPS accuracy within 5cm for precise navigation
   - Continuous operation reduces extraction time by 40%
   - Advanced sensor arrays for obstacle detection

2. DRONE SURVEILLANCE SYSTEMS
   - Multi-spectral imaging for geological analysis
   - Real-time radiation level monitoring
   - Wildlife and environmental impact assessment
   - Cost reduction of 60% compared to manned aircraft

3. SATELLITE COMMUNICATION NETWORKS
   - Low-latency global connectivity
   - Redundant communication pathways
   - Real-time data transmission capabilities
   - Integration with weather monitoring systems

4. REMOTE CONTROL CENTERS
   - Centralized operation management
   - Advanced AI analytics for predictive maintenance
   - Virtual reality interfaces for immersive control
   - 24/7 expert supervision capabilities

Benefits:
- 80% reduction in worker radiation exposure
- 35% increase in operational efficiency
- 50% reduction in operational costs
- 90% improvement in safety metrics

Implementation Timeline:
Phase 1 (2024-2025): Autonomous vehicle deployment
Phase 2 (2025-2026): Drone integration and satellite upgrades
Phase 3 (2026-2027): Full remote operations capability

Conclusion:
Remote mining technology is transforming uranium extraction into a safer, more sustainable,
and economically viable industry while maintaining environmental responsibility.
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'remote-mining-technology-report.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Remote Mining Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Revolutionary technologies enabling safe, efficient uranium extraction from remote locations 
            using autonomous systems, AI, and satellite communications.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="future">Future</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={remoteMiningImage} 
                  alt="Remote Mining Operations"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">The Future of Uranium Mining</h3>
                <p className="text-muted-foreground">
                  Remote mining technology represents a paradigm shift in uranium extraction, 
                  utilizing cutting-edge autonomous systems, artificial intelligence, and 
                  satellite communications to operate mining equipment from thousands of miles away.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-green-600">80%</div>
                    <div className="text-sm text-muted-foreground">Reduced Human Exposure</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-muted-foreground">Continuous Operation</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">35%</div>
                    <div className="text-sm text-muted-foreground">Efficiency Increase</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">50%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                </div>
                <Button onClick={generateTechnologyReport} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Technology Report
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="technologies">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remoteTechnologies.map((tech, index) => (
                <Card key={index} className="bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="text-blue-500">{tech.icon}</div>
                      {tech.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{tech.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Advantages:</h4>
                      <ul className="space-y-1">
                        {tech.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h4 className="font-semibold mb-1 text-sm">Technology Stack:</h4>
                      <p className="text-sm text-muted-foreground">{tech.technology}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center bg-green-50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">Safety First</div>
                    <p className="text-sm text-muted-foreground">
                      Dramatically reduces worker exposure to radiation and hazardous conditions
                      through remote operation capabilities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center bg-blue-50 dark:bg-blue-950/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Efficiency</div>
                    <p className="text-sm text-muted-foreground">
                      24/7 operation capabilities with AI-optimized processes result in 
                      significantly higher productivity rates.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center bg-purple-50 dark:bg-purple-950/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Sustainability</div>
                    <p className="text-sm text-muted-foreground">
                      Reduced environmental impact through precise extraction and 
                      optimized resource utilization.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Economic Impact Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Cost Savings</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Labor costs reduced by 40-60%</li>
                        <li>• Safety insurance premiums decreased by 70%</li>
                        <li>• Equipment maintenance costs optimized</li>
                        <li>• Transportation expenses minimized</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Revenue Enhancement</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Increased extraction precision</li>
                        <li>• Extended operational hours</li>
                        <li>• Reduced downtime and delays</li>
                        <li>• Higher quality uranium output</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="future">
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Future Innovations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Emerging Technologies</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Quantum sensors for ultra-precise detection</li>
                        <li>• AI-powered geological predictions</li>
                        <li>• Holographic remote interfaces</li>
                        <li>• Swarm robotics for collaborative mining</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Integration Goals</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Fully autonomous mine sites by 2030</li>
                        <li>• Integration with renewable energy</li>
                        <li>• Real-time environmental monitoring</li>
                        <li>• Predictive maintenance systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Leading the Mining Revolution</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Remote mining technology is not just changing how we extract uranium—it's revolutionizing 
                  the entire mining industry, setting new standards for safety, efficiency, and environmental 
                  responsibility that will benefit generations to come.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RemoteMiningTechnology;