import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Scale, FileText, Globe, Shield, ExternalLink, Calendar, Users } from 'lucide-react';

const LegalSection = () => {
  const nationalLaws = [
    {
      law: 'Atomic Energy and Radiation Protection Act (Act No. 5 of 2005)',
      description: 'Primary legislation governing nuclear materials, radiation protection, and uranium mining operations',
      keyProvisions: [
        'Licensing requirements for uranium mining operations',
        'Radiation protection standards for workers and public',
        'Nuclear material transport and storage regulations',
        'Environmental impact assessment requirements',
        'Emergency response and incident reporting'
      ],
      authority: 'National Radiation Protection Authority (NRPA)',
      status: 'In Force',
      lastUpdated: '2019'
    },
    {
      law: 'Environmental Management Act (Act No. 7 of 2007)',
      description: 'Environmental protection framework for mining operations including uranium extraction',
      keyProvisions: [
        'Environmental impact assessments (EIA) for all mining projects',
        'Environmental compliance monitoring requirements',
        'Public participation in environmental decision-making',
        'Environmental management plans for mining operations',
        'Penalties for environmental violations'
      ],
      authority: 'Ministry of Environment, Forestry and Tourism',
      status: 'In Force',
      lastUpdated: '2012'
    },
    {
      law: 'Minerals (Prospecting and Mining) Act (Act No. 33 of 1992)',
      description: 'Mining rights, licensing, and operational requirements for uranium and other minerals',
      keyProvisions: [
        'Mining license application and approval processes',
        'Mining lease terms and conditions',
        'Royalty payments and tax obligations',
        'Mine closure and rehabilitation requirements',
        'Health and safety standards in mining operations'
      ],
      authority: 'Ministry of Mines and Energy',
      status: 'In Force',
      lastUpdated: '2008'
    },
    {
      law: 'Labour Act (Act No. 11 of 2007)',
      description: 'Worker protection and employment standards in uranium mining operations',
      keyProvisions: [
        'Occupational health and safety requirements',
        'Worker compensation and benefits',
        'Training and skills development programs',
        'Anti-discrimination and equal opportunity',
        'Collective bargaining rights'
      ],
      authority: 'Ministry of Labour, Industrial Relations and Employment Creation',
      status: 'In Force',
      lastUpdated: '2012'
    }
  ];

  const internationalFrameworks = [
    {
      framework: 'IAEA Safety Standards',
      description: 'International Atomic Energy Agency safety requirements for uranium mining',
      compliance: 'Full Compliance',
      standards: [
        'Safety Requirements for Uranium Mining (SSR-6)',
        'Radiation Protection and Safety in Uranium Mining (WS-G-1.3)',
        'Regulatory Control of Radioactive Discharges (WS-G-2.3)',
        'Safe Transport of Radioactive Material (SSR-6)',
        'Emergency Preparedness and Response (GS-R-2)'
      ]
    },
    {
      framework: 'Nuclear Non-Proliferation Treaty (NPT)',
      description: 'International treaty preventing nuclear weapons proliferation',
      compliance: 'Signatory State',
      standards: [
        'Safeguards agreements with IAEA',
        'Nuclear material accounting and control',
        'Peaceful use commitments',
        'Regular inspections and reporting',
        'Export control measures'
      ]
    },
    {
      framework: 'Convention on Nuclear Safety',
      description: 'International framework for nuclear safety',
      compliance: 'Ratified',
      standards: [
        'Safety culture development',
        'Regulatory framework establishment',
        'Emergency preparedness requirements',
        'Radiation protection principles',
        'Quality assurance systems'
      ]
    },
    {
      framework: 'Joint Convention on Radioactive Waste',
      description: 'International convention on radioactive waste management',
      compliance: 'Ratified',
      standards: [
        'Radioactive waste management principles',
        'Spent fuel management requirements',
        'Transboundary movement controls',
        'Long-term safety requirements',
        'Public information obligations'
      ]
    }
  ];

  const regulatoryBodies = [
    {
      authority: 'National Radiation Protection Authority (NRPA)',
      role: 'Primary nuclear regulator',
      responsibilities: [
        'Nuclear licensing and authorization',
        'Radiation protection oversight',
        'Nuclear security enforcement',
        'Emergency response coordination',
        'Public dose monitoring'
      ],
      contact: 'https://nrpa.gov.na',
      established: '2005'
    },
    {
      authority: 'Ministry of Mines and Energy',
      role: 'Mining sector oversight',
      responsibilities: [
        'Mining license administration',
        'Mineral resource management',
        'Mining policy development',
        'Industry promotion and regulation',
        'Revenue collection'
      ],
      contact: 'https://mme.gov.na',
      established: '1990'
    },
    {
      authority: 'Environmental Commissioner',
      role: 'Environmental compliance',
      responsibilities: [
        'Environmental impact assessment review',
        'Environmental compliance monitoring',
        'Environmental authorization',
        'Public consultation facilitation',
        'Environmental enforcement'
      ],
      contact: 'https://met.gov.na',
      established: '2007'
    }
  ];

  const licensing = [
    {
      licenseType: 'Nuclear Installation License',
      description: 'Required for uranium processing facilities',
      duration: '10 years (renewable)',
      requirements: [
        'Detailed safety analysis report',
        'Environmental impact assessment',
        'Emergency preparedness plan',
        'Quality assurance program',
        'Financial provisions for decommissioning'
      ],
      fee: 'N$500,000 application fee'
    },
    {
      licenseType: 'Radioactive Material License',
      description: 'For possession and use of uranium and byproducts',
      duration: '5 years (renewable)',
      requirements: [
        'Radiation protection program',
        'Personnel training certification',
        'Monitoring and surveillance systems',
        'Waste management procedures',
        'Security arrangements'
      ],
      fee: 'N$150,000 application fee'
    },
    {
      licenseType: 'Nuclear Material Transport License',
      description: 'For transportation of uranium concentrates',
      duration: '3 years (renewable)',
      requirements: [
        'Transport safety analysis',
        'Emergency response procedures',
        'Driver training certification',
        'Vehicle inspection certificates',
        'Insurance coverage proof'
      ],
      fee: 'N$50,000 application fee'
    }
  ];

  const orgLinks = [
    { name: 'UNAM', url: 'https://www.unam.edu.na', description: 'University of Namibia - Research and Education' },
    { name: 'IUM', url: 'https://www.ium.edu.na', description: 'International University of Management' },
    { name: 'Ministry of Mines', url: 'https://mme.gov.na', description: 'Ministry of Mines and Energy' },
    { name: 'ROSATOM', url: 'https://rosatom.ru', description: 'Russian State Nuclear Energy Corporation' },
    { name: 'World Nuclear Association', url: 'https://world-nuclear.org', description: 'Global nuclear industry organization' }
  ];

  return (
    <section id="legal-framework" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Legal Framework & Regulations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive overview of national laws, international frameworks, and regulatory 
            requirements governing uranium mining operations in Namibia.
          </p>
        </div>

        {/* Important Links */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              Key Organizations & Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orgLinks.map((org, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{org.name}</h4>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={org.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{org.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="national" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="national">National Laws</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="regulatory">Regulatory Bodies</TabsTrigger>
            <TabsTrigger value="licensing">Licensing</TabsTrigger>
          </TabsList>

          {/* National Laws */}
          <TabsContent value="national" className="space-y-6">
            <div className="space-y-6">
              {nationalLaws.map((law, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{law.law}</CardTitle>
                        <CardDescription>{law.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="default">{law.status}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">Updated: {law.lastUpdated}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Provisions</h4>
                        <ul className="space-y-2">
                          {law.keyProvisions.map((provision, provisionIndex) => (
                            <li key={provisionIndex} className="flex items-start gap-2 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                              <span className="text-muted-foreground">{provision}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Implementing Authority</h4>
                        <p className="text-sm text-muted-foreground">{law.authority}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* International Frameworks */}
          <TabsContent value="international" className="space-y-6">
            <div className="space-y-6">
              {internationalFrameworks.map((framework, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        {framework.framework}
                      </CardTitle>
                      <Badge variant="default">{framework.compliance}</Badge>
                    </div>
                    <CardDescription>{framework.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Standards and Requirements</h4>
                    <ul className="space-y-2">
                      {framework.standards.map((standard, standardIndex) => (
                        <li key={standardIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                          <span className="text-muted-foreground">{standard}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Regulatory Bodies */}
          <TabsContent value="regulatory" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {regulatoryBodies.map((body, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      {body.authority}
                    </CardTitle>
                    <CardDescription>{body.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                        <ul className="space-y-1">
                          {body.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                              <span className="text-muted-foreground">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span><strong>Established:</strong> {body.established}</span>
                        <Button variant="outline" size="sm" asChild>
                          <a href={body.contact} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Licensing Requirements */}
          <TabsContent value="licensing" className="space-y-6">
            <div className="space-y-6">
              {licensing.map((license, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        {license.licenseType}
                      </CardTitle>
                      <div className="text-right">
                        <Badge variant="outline">{license.duration}</Badge>
                        <p className="text-sm font-semibold text-primary mt-1">{license.fee}</p>
                      </div>
                    </div>
                    <CardDescription>{license.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Application Requirements</h4>
                    <ul className="space-y-2">
                      {license.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LegalSection;