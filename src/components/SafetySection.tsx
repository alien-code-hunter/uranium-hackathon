import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Users, Zap, HardHat, Heart, Eye, Activity } from 'lucide-react';

const SafetySection = () => {
  const safetyMetrics = [
    {
      icon: Shield,
      title: 'Zero Fatalities',
      value: '1,247 days',
      description: 'Continuous operation without workplace fatalities',
      status: 'excellent'
    },
    {
      icon: HardHat,
      title: 'Lost Time Injury Rate',
      value: '0.12',
      description: 'Per 200,000 work hours (Industry leading)',
      status: 'excellent'
    },
    {
      icon: Activity,
      title: 'Safety Training Hours',
      value: '125,000+',
      description: 'Annual safety training across all operations',
      status: 'good'
    },
    {
      icon: Eye,
      title: 'Radiation Exposure',
      value: '<1 mSv/year',
      description: 'Average worker exposure (Well below 20 mSv limit)',
      status: 'excellent'
    }
  ];

  const safetyProtocols = [
    {
      category: 'Radiation Safety',
      icon: Zap,
      measures: [
        'ALARA (As Low As Reasonably Achievable) principle implementation',
        'Continuous air monitoring systems throughout facilities',
        'Personal dosimetry badges for all workers',
        'Radiation safety training and annual refresher courses',
        'Emergency response procedures for radiation incidents',
        'Regular health surveillance and medical examinations'
      ]
    },
    {
      category: 'Occupational Health',
      icon: Heart,
      measures: [
        'Comprehensive pre-employment medical screening',
        'Annual health assessments for all employees',
        'Specialized pulmonary function testing',
        'Mental health and wellness programs',
        'Ergonomic assessments and workplace modifications',
        'On-site medical facilities with trained personnel'
      ]
    },
    {
      category: 'Workplace Safety',
      icon: HardHat,
      measures: [
        'Mandatory personal protective equipment (PPE)',
        'Safety induction for all new employees and contractors',
        'Regular safety audits and inspections',
        'Hazard identification and risk assessment (HIRA)',
        'Lock-out/Tag-out (LOTO) procedures for equipment',
        'Emergency evacuation plans and regular drills'
      ]
    },
    {
      category: 'Environmental Safety',
      icon: Shield,
      measures: [
        '24/7 environmental monitoring systems',
        'Groundwater protection and monitoring',
        'Air quality monitoring around communities',
        'Tailings dam safety and structural integrity',
        'Wildlife protection and habitat restoration',
        'Emergency response for environmental incidents'
      ]
    }
  ];

  const regulatoryCompliance = [
    {
      standard: 'IAEA Safety Standards',
      description: 'International Atomic Energy Agency safety requirements for uranium mining',
      status: 'Fully Compliant'
    },
    {
      standard: 'Namibian Atomic Energy Act',
      description: 'National legislation governing nuclear materials and radiation safety',
      status: 'Fully Compliant'
    },
    {
      standard: 'ISO 45001',
      description: 'Occupational health and safety management system certification',
      status: 'Certified'
    },
    {
      standard: 'ICMM Safety Standards',
      description: 'International Council on Mining and Metals safety principles',
      status: 'Fully Compliant'
    }
  ];

  const emergencyProcedures = [
    {
      type: 'Radiation Emergency',
      response: 'Immediate evacuation, decontamination procedures, medical assessment',
      timeframe: '< 5 minutes'
    },
    {
      type: 'Medical Emergency',
      response: 'On-site medical response, helicopter evacuation if needed',
      timeframe: '< 3 minutes'
    },
    {
      type: 'Equipment Failure',
      response: 'Automatic shutdown systems, emergency containment',
      timeframe: '< 30 seconds'
    },
    {
      type: 'Environmental Incident',
      response: 'Containment, environmental assessment, regulatory notification',
      timeframe: '< 15 minutes'
    }
  ];

  return (
    <section id="safety" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Safety & Radiation Protection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Namibian uranium operations maintain world-class safety standards, protecting workers, 
            communities, and the environment through comprehensive safety management systems.
          </p>
        </div>

        {/* Safety Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {safetyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <CardDescription>{metric.description}</CardDescription>
                  <Badge 
                    variant={metric.status === 'excellent' ? 'default' : 'secondary'}
                    className="mt-2"
                  >
                    {metric.status}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Safety Protocols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {safetyProtocols.map((protocol, index) => {
            const Icon = protocol.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    {protocol.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {protocol.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Regulatory Compliance */}
        <Card className="bg-card/80 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Regulatory Compliance & Certifications
            </CardTitle>
            <CardDescription>
              Adherence to international and national safety standards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regulatoryCompliance.map((compliance, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{compliance.standard}</h4>
                    <Badge variant="default">{compliance.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{compliance.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Response */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Emergency Response Procedures
            </CardTitle>
            <CardDescription>
              Rapid response protocols for various emergency scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyProcedures.map((procedure, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{procedure.type}</h4>
                    <Badge variant="outline">{procedure.timeframe}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{procedure.response}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SafetySection;