import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Users, Zap, Truck, GraduationCap, Factory, Globe, TrendingDown } from 'lucide-react';

const WhatsLackingSection = () => {
  const infrastructureGaps = [
    {
      category: 'Nuclear Infrastructure',
      icon: Zap,
      priority: 'Critical',
      issues: [
        'No domestic nuclear power generation capacity',
        'Limited uranium conversion and enrichment facilities',
        'Absence of nuclear fuel fabrication plants',
        'No domestic nuclear reactor technology'
      ],
      impact: 'Namibia exports raw uranium but imports nuclear technology and expertise',
      solutions: [
        'Partner with international nuclear companies',
        'Develop nuclear technology transfer agreements',
        'Invest in nuclear engineering education',
        'Consider small modular reactor (SMR) development'
      ]
    },
    {
      category: 'Transportation & Logistics',
      icon: Truck,
      priority: 'High',
      issues: [
        'Limited railway capacity for bulk uranium transport',
        'Port infrastructure constraints at Walvis Bay',
        'Poor road conditions to remote mining areas',
        'Inadequate storage facilities for uranium concentrates'
      ],
      impact: 'Higher transportation costs reduce competitiveness',
      solutions: [
        'Upgrade railway infrastructure',
        'Expand port handling capacity',
        'Improve road networks to mining areas',
        'Build strategic uranium storage facilities'
      ]
    },
    {
      category: 'Skilled Workforce',
      icon: Users,
      priority: 'Critical',
      issues: [
        'Shortage of nuclear engineers and specialists',
        'Limited mining engineering graduates',
        'Lack of radiation safety professionals',
        'Insufficient geological expertise'
      ],
      impact: 'Dependence on foreign expertise increases operational costs',
      solutions: [
        'Establish nuclear engineering programs',
        'Partner with international universities',
        'Create specialized training centers',
        'Develop scholarship programs'
      ]
    },
    {
      category: 'Research & Development',
      icon: GraduationCap,
      priority: 'Medium',
      issues: [
        'Limited nuclear research facilities',
        'Insufficient R&D investment',
        'Weak collaboration between industry and academia',
        'No indigenous nuclear technology development'
      ],
      impact: 'Reduced innovation and technology advancement',
      solutions: [
        'Establish nuclear research institute',
        'Increase R&D funding',
        'Create industry-academia partnerships',
        'Develop innovation hubs'
      ]
    }
  ];

  const economicChallenges = [
    {
      challenge: 'Value Chain Integration',
      description: 'Limited participation in downstream nuclear fuel cycle activities',
      currentState: 'Exports raw uranium concentrate (U3O8)',
      potential: 'Uranium conversion, enrichment, and fuel fabrication',
      valueAdd: '$2.1B additional annual revenue potential',
      barriers: ['High capital investment', 'Technical expertise', 'Market access', 'Regulatory framework']
    },
    {
      challenge: 'Market Diversification',
      description: 'Heavy dependence on few export markets, particularly China',
      currentState: '70% of exports to China and France',
      potential: 'Diversified global customer base',
      valueAdd: 'Price stability and risk reduction',
      barriers: ['Long-term contracts', 'Market access barriers', 'Transportation costs', 'Quality specifications']
    },
    {
      challenge: 'Technology Transfer',
      description: 'Limited acquisition of advanced nuclear technologies',
      currentState: 'Basic mining and processing technology',
      potential: 'Advanced nuclear fuel cycle technologies',
      valueAdd: 'Technological independence and innovation',
      barriers: ['Technology export controls', 'High licensing costs', 'Skill requirements', 'Infrastructure needs']
    }
  ];

  const policyGaps = [
    {
      area: 'Nuclear Energy Policy',
      status: 'Under Development',
      description: 'Comprehensive nuclear energy strategy for domestic use',
      requirements: [
        'Nuclear power development roadmap',
        'Regulatory framework for nuclear power',
        'Public acceptance and engagement strategy',
        'Nuclear waste management policy'
      ]
    },
    {
      area: 'Innovation Strategy',
      status: 'Limited',
      description: 'National strategy for nuclear technology innovation',
      requirements: [
        'R&D investment priorities',
        'Technology transfer mechanisms',
        'Innovation funding frameworks',
        'Intellectual property protection'
      ]
    },
    {
      area: 'Skills Development',
      status: 'Fragmented',
      description: 'Coordinated approach to nuclear skills development',
      requirements: [
        'National nuclear skills audit',
        'Education and training standards',
        'Career development pathways',
        'Regional cooperation agreements'
      ]
    }
  ];

  const opportunityAreas = [
    {
      opportunity: 'Small Modular Reactors (SMRs)',
      potential: 'Deploy SMRs for domestic electricity generation',
      benefits: ['Energy security', 'Grid stability', 'Industrial development', 'Technology leadership'],
      timeline: '2030-2035',
      investment: '$500M - $1B'
    },
    {
      opportunity: 'Nuclear Medicine Production',
      potential: 'Produce medical isotopes from uranium byproducts',
      benefits: ['Healthcare improvement', 'Export revenue', 'Technology development', 'Regional hub'],
      timeline: '2025-2028',
      investment: '$50M - $100M'
    },
    {
      opportunity: 'Uranium Banking',
      potential: 'Strategic uranium reserve and trading facility',
      benefits: ['Price stability', 'Market influence', 'Financial services', 'Economic development'],
      timeline: '2026-2030',
      investment: '$200M - $300M'
    },
    {
      opportunity: 'Nuclear Technology Hub',
      potential: 'Regional center for nuclear technology and services',
      benefits: ['Technology transfer', 'Skills development', 'Economic diversification', 'Regional leadership'],
      timeline: '2027-2032',
      investment: '$300M - $500M'
    }
  ];

  const recommendations = [
    {
      priority: 'Immediate (1-2 years)',
      actions: [
        'Establish National Nuclear Energy Commission',
        'Develop nuclear skills development program',
        'Upgrade uranium transport infrastructure',
        'Create nuclear technology investment incentives'
      ]
    },
    {
      priority: 'Short-term (3-5 years)',
      actions: [
        'Build nuclear engineering education capacity',
        'Establish uranium conversion pilot plant',
        'Develop nuclear medicine production facility',
        'Create nuclear technology research institute'
      ]
    },
    {
      priority: 'Medium-term (5-10 years)',
      actions: [
        'Deploy first small modular reactor',
        'Establish uranium enrichment facility',
        'Develop nuclear fuel fabrication capability',
        'Create regional nuclear technology hub'
      ]
    },
    {
      priority: 'Long-term (10+ years)',
      actions: [
        'Achieve energy independence through nuclear power',
        'Become regional nuclear technology leader',
        'Develop indigenous nuclear reactor technology',
        'Export nuclear technology and services'
      ]
    }
  ];

  return (
    <section id="whats-lacking" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What's Lacking in Namibia's Nuclear Sector
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identifying gaps, challenges, and opportunities to transform Namibia from a uranium 
            exporter into a comprehensive nuclear technology leader.
          </p>
        </div>

        {/* Infrastructure Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {infrastructureGaps.map((gap, index) => {
            const Icon = gap.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {gap.category}
                    </CardTitle>
                    <Badge variant={gap.priority === 'Critical' ? 'destructive' : 'secondary'}>
                      {gap.priority} Priority
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Current Issues
                    </h4>
                    <ul className="space-y-1">
                      {gap.issues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                          <span className="text-muted-foreground">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h5 className="font-medium text-sm mb-1">Impact:</h5>
                    <p className="text-xs text-muted-foreground">{gap.impact}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Potential Solutions</h4>
                    <ul className="space-y-1">
                      {gap.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Economic Challenges */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-primary" />
              Economic Development Challenges
            </CardTitle>
            <CardDescription>Key economic barriers limiting Namibia's nuclear sector growth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {economicChallenges.map((challenge, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{challenge.challenge}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <h5 className="font-medium text-sm mb-1">Current State:</h5>
                      <p className="text-xs text-muted-foreground">{challenge.currentState}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Potential:</h5>
                      <p className="text-xs text-muted-foreground">{challenge.potential}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Value Addition:</h5>
                      <p className="text-xs font-semibold text-primary">{challenge.valueAdd}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Key Barriers:</h5>
                      <div className="flex flex-wrap gap-1">
                        {challenge.barriers.map((barrier, barrierIndex) => (
                          <Badge key={barrierIndex} variant="outline" className="text-xs">
                            {barrier}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policy Gaps */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Factory className="h-5 w-5 text-primary" />
              Policy & Regulatory Gaps
            </CardTitle>
            <CardDescription>Areas requiring policy development and regulatory enhancement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {policyGaps.map((gap, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{gap.area}</h4>
                    <Badge variant="outline">{gap.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{gap.description}</p>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Requirements:</h5>
                    <ul className="space-y-1">
                      {gap.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Opportunity Areas */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Strategic Opportunity Areas
            </CardTitle>
            <CardDescription>High-potential areas for nuclear sector development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunityAreas.map((opportunity, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">{opportunity.opportunity}</h4>
                    <Badge variant="secondary">{opportunity.timeline}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{opportunity.potential}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm mb-1">Benefits:</h5>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span><strong>Investment:</strong> {opportunity.investment}</span>
                      <span className="font-semibold text-primary">High ROI Potential</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Timeline */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Strategic Development Roadmap</CardTitle>
            <CardDescription>Phased approach to addressing identified gaps and opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recommendations.map((phase, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">{phase.priority}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground">{action}</span>
                      </div>
                    ))}
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

export default WhatsLackingSection;