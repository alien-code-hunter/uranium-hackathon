import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Eye, Truck, Shield, TrendingUp, Bot, Cpu, Database, Settings } from 'lucide-react';

const AISection = () => {
  const aiApplications = [
    {
      category: 'Exploration & Geological Analysis',
      icon: Eye,
      technologies: [
        {
          name: 'Satellite Image Analysis',
          description: 'AI-powered analysis of satellite imagery to identify potential uranium deposits',
          benefits: ['95% faster prospect identification', 'Reduced exploration costs', 'Enhanced accuracy'],
          implementation: 'Machine learning algorithms analyze geological formations and mineral signatures'
        },
        {
          name: 'Geological Data Processing',
          description: 'Deep learning models to interpret complex geological data and predict ore body characteristics',
          benefits: ['Improved resource estimation', 'Better deposit modeling', 'Risk reduction'],
          implementation: 'Neural networks process drill hole data, geophysics, and geochemistry'
        }
      ]
    },
    {
      category: 'Mining Operations',
      icon: Truck,
      technologies: [
        {
          name: 'Autonomous Mining Equipment',
          description: 'Self-driving haul trucks and drilling equipment for safer, more efficient operations',
          benefits: ['24/7 operation capability', 'Reduced human exposure', '15% productivity increase'],
          implementation: 'Computer vision, GPS, and AI control systems guide autonomous vehicles'
        },
        {
          name: 'Predictive Maintenance',
          description: 'AI systems predict equipment failures before they occur',
          benefits: ['60% reduction in downtime', 'Lower maintenance costs', 'Extended equipment life'],
          implementation: 'IoT sensors and machine learning analyze equipment performance patterns'
        }
      ]
    },
    {
      category: 'Processing & Refinement',
      icon: Settings,
      technologies: [
        {
          name: 'Process Optimization',
          description: 'AI optimizes chemical processes for maximum uranium recovery',
          benefits: ['5-8% increase in recovery rates', 'Reduced chemical consumption', 'Energy savings'],
          implementation: 'Real-time process control using machine learning algorithms'
        },
        {
          name: 'Quality Control',
          description: 'Computer vision systems for automated quality inspection',
          benefits: ['Consistent quality standards', 'Faster processing', 'Reduced human error'],
          implementation: 'AI-powered cameras and sensors analyze product quality in real-time'
        }
      ]
    },
    {
      category: 'Safety & Environmental Monitoring',
      icon: Shield,
      technologies: [
        {
          name: 'Radiation Monitoring',
          description: 'AI-enhanced radiation detection and prediction systems',
          benefits: ['Early hazard detection', 'Automated safety responses', 'Worker protection'],
          implementation: 'Smart sensors with AI algorithms predict and respond to radiation levels'
        },
        {
          name: 'Environmental Impact Prediction',
          description: 'Machine learning models predict long-term environmental impacts',
          benefits: ['Better environmental planning', 'Compliance assurance', 'Sustainability'],
          implementation: 'AI analyzes environmental data to model future impacts and mitigation strategies'
        }
      ]
    }
  ];

  const futureTechnologies = [
    {
      technology: 'Digital Twin Technology',
      description: 'Virtual replicas of entire mining operations for optimization and planning',
      timeline: '2025-2027',
      impact: 'Revolutionary',
      details: 'Create digital replicas of mines, processing plants, and equipment for real-time optimization and scenario planning'
    },
    {
      technology: 'Quantum Computing for Optimization',
      description: 'Quantum algorithms for complex mining optimization problems',
      timeline: '2030-2035',
      impact: 'Transformational',
      details: 'Solve complex optimization problems in resource allocation, scheduling, and processing that are impossible with classical computers'
    },
    {
      technology: 'AI-Powered Robotics',
      description: 'Advanced robots for dangerous mining tasks and precision operations',
      timeline: '2026-2030',
      impact: 'High',
      details: 'Deploy sophisticated robots for high-radiation environments, precise drilling, and complex maintenance tasks'
    },
    {
      technology: 'Blockchain for Supply Chain',
      description: 'Secure, transparent tracking of uranium from mine to reactor',
      timeline: '2024-2026',
      impact: 'Moderate',
      details: 'Ensure complete traceability and security of uranium materials throughout the nuclear fuel cycle'
    }
  ];

  const implementationChallenges = [
    {
      challenge: 'Data Quality & Integration',
      description: 'Ensuring high-quality, integrated data from various mining systems',
      solutions: ['Standardized data formats', 'IoT sensor networks', 'Data cleaning protocols']
    },
    {
      challenge: 'Skilled Workforce',
      description: 'Training mining professionals in AI and data science technologies',
      solutions: ['Partnership with universities', 'Continuous learning programs', 'International expertise exchange']
    },
    {
      challenge: 'Infrastructure Requirements',
      description: 'Reliable internet connectivity and computing infrastructure in remote locations',
      solutions: ['Satellite internet deployment', 'Edge computing systems', 'Hybrid cloud architectures']
    },
    {
      challenge: 'Regulatory Compliance',
      description: 'Ensuring AI systems meet nuclear industry safety and security standards',
      solutions: ['Regulatory sandboxes', 'Safety-by-design principles', 'Continuous monitoring systems']
    }
  ];

  const successStories = [
    {
      company: 'Rössing Uranium',
      implementation: 'Predictive Maintenance AI',
      result: '25% reduction in equipment downtime',
      description: 'Implemented machine learning algorithms to predict crusher and mill failures'
    },
    {
      company: 'Husab Mine',
      implementation: 'Automated Ore Sorting',
      result: '12% increase in ore grade',
      description: 'AI-powered optical sorting to separate high-grade ore from waste material'
    },
    {
      company: 'Swakop Uranium',
      implementation: 'Environmental Monitoring AI',
      result: '40% faster anomaly detection',
      description: 'Real-time AI analysis of environmental sensors for immediate response to issues'
    }
  ];

  return (
    <section id="ai-uranium" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            AI in Uranium Mining & Nuclear Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring how artificial intelligence is revolutionizing uranium extraction, processing, 
            and safety management in Namibia's mining operations.
          </p>
        </div>

        {/* AI Applications */}
        <div className="space-y-12 mb-16">
          {aiApplications.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-6 w-6 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="p-4 border border-border/50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                        
                        <div className="mb-3">
                          <h5 className="font-medium text-sm mb-1">Key Benefits:</h5>
                          <div className="flex flex-wrap gap-1">
                            {tech.benefits.map((benefit, benefitIndex) => (
                              <Badge key={benefitIndex} variant="secondary" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-sm mb-1">Implementation:</h5>
                          <p className="text-xs text-muted-foreground">{tech.implementation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Namibian AI Success Stories
            </CardTitle>
            <CardDescription>Real implementations and results from local uranium operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{story.company}</h4>
                  <Badge variant="outline" className="mb-2">{story.implementation}</Badge>
                  <p className="text-2xl font-bold text-primary mb-2">{story.result}</p>
                  <p className="text-sm text-muted-foreground">{story.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Technologies */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Future AI Technologies
            </CardTitle>
            <CardDescription>Emerging technologies that will shape the future of uranium mining</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {futureTechnologies.map((future, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">{future.technology}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{future.timeline}</Badge>
                      <Badge variant={
                        future.impact === 'Revolutionary' ? 'default' : 
                        future.impact === 'Transformational' ? 'destructive' : 'secondary'
                      }>
                        {future.impact} Impact
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{future.description}</p>
                  <p className="text-xs text-muted-foreground">{future.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Challenges */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Implementation Challenges & Solutions
            </CardTitle>
            <CardDescription>Key challenges in deploying AI in uranium mining and proposed solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {implementationChallenges.map((challenge, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{challenge.challenge}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Proposed Solutions:</h5>
                    <ul className="space-y-1">
                      {challenge.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AISection;