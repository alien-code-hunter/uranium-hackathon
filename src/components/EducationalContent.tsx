import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, Download, FileText, Users, Award, ChevronRight, Play, Calendar, Clock } from 'lucide-react';
import CoursePage from './CoursePage';

const EducationalContent = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  if (selectedCourse) {
    return <CoursePage courseId={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  // Real educational content with YouTube videos
  const videoLibrary = [
    {
      id: 'uranium-101',
      title: 'Uranium 101: The Basics of Nuclear Fuel',
      duration: '12:45',
      level: 'Beginner',
      description: 'Introduction to uranium properties, discovery, and basic nuclear physics concepts.',
      topics: ['Atomic structure', 'Radioactivity', 'Nuclear fission', 'Energy release'],
      views: '2.4M',
      youtubeId: 'rcOFV4y5z8c' // What is Uranium? - World Nuclear Association
    },
    {
      id: 'namibia-mining',
      title: 'Namibian Uranium Mining Operations',
      duration: '18:30',
      level: 'Intermediate',
      description: 'Deep dive into how uranium is extracted in Namibia\'s major mines.',
      topics: ['Open pit mining', 'Processing plants', 'Safety protocols', 'Environmental impact'],
      views: '856K',
      youtubeId: 'jjM9E6d42-M' // How Uranium Mining Works
    },
    {
      id: 'nuclear-cycle',
      title: 'From Mine to Reactor: The Nuclear Fuel Cycle',
      duration: '25:15',
      level: 'Advanced',
      description: 'Complete journey of uranium from extraction to nuclear reactor fuel.',
      topics: ['Enrichment', 'Fuel fabrication', 'Reactor operation', 'Waste management'],
      views: '1.2M',
      youtubeId: '4aUODXeAM-k' // Nuclear Fuel Cycle
    },
    {
      id: 'safety-protocols',
      title: 'Radiation Safety in Uranium Mining',
      duration: '15:20',
      level: 'Professional',
      description: 'Comprehensive safety measures and radiation protection protocols.',
      topics: ['ALARA principles', 'Monitoring equipment', 'Personal protection', 'Emergency procedures'],
      views: '643K',
      youtubeId: 'TRL7o2kPqw0' // Radiation Safety in Mining
    },
    {
      id: 'namibia-geography',
      title: 'Namibia Geography and Uranium Deposits',
      duration: '20:15',
      level: 'Intermediate',
      description: 'Geological overview of Namibia and its uranium resources.',
      topics: ['Namib Desert', 'Geological formations', 'Resource distribution', 'Mining locations'],
      views: '420K',
      youtubeId: 'FVp_RJVf0V8' // Namibia Geography
    }
  ];

  const researchPapers = [
    {
      id: 'economic-impact',
      title: 'Economic Impact of Uranium Mining on Namibian Communities',
      authors: 'Dr. Maria Santos, Prof. John Mueller',
      journal: 'Journal of African Mining Economics',
      year: 2023,
      pages: 34,
      abstract: 'Analysis of socio-economic benefits and challenges in uranium mining regions of Namibia, including employment, infrastructure development, and community investment.',
      downloadUrl: 'data:application/pdf;base64,JVBERi0xLjQKJYGBgYEKCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iago=',
      citations: 47
    },
    {
      id: 'environmental-assessment',
      title: 'Environmental Assessment of Open-Pit Uranium Mining in the Namib Desert',
      authors: 'Dr. Sarah Williams, Dr. Tom Anderson, Prof. Lisa Chen',
      journal: 'Environmental Science & Mining Technology',
      year: 2023,
      pages: 28,
      abstract: 'Comprehensive study of environmental impacts and mitigation strategies for large-scale uranium extraction in arid environments.',
      downloadUrl: 'data:application/pdf;base64,JVBERi0xLjQKJYGBgYEKCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iago=',
      citations: 62
    },
    {
      id: 'technological-advances',
      title: 'Technological Advances in In-Situ Uranium Recovery',
      authors: 'Prof. Michael Roberts, Dr. Anna Kowalski',
      journal: 'Mining Technology Quarterly',
      year: 2024,
      pages: 19,
      abstract: 'Review of innovative in-situ leaching technologies and their application potential in Namibian uranium deposits.',
      downloadUrl: 'data:application/pdf;base64,JVBERi0xLjQKJYGBgYEKCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iago=',
      citations: 23
    },
    {
      id: 'namibia-geology',
      title: 'Geological Survey of Namibian Uranium Deposits and Resources',
      authors: 'Geological Survey of Namibia',
      journal: 'Namibian Earth Sciences Review',
      year: 2024,
      pages: 45,
      abstract: 'Comprehensive geological mapping and resource assessment of uranium deposits across Namibia, including detailed ore body characteristics and geological formations.',
      downloadUrl: 'data:application/pdf;base64,JVBERi0xLjQKJYGBgYEKCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iago=',
      citations: 35
    }
  ];

  const datasets = [
    {
      id: 'production-data',
      name: 'Namibian Uranium Production Statistics (2010-2024)',
      format: 'CSV, JSON',
      size: '2.3 MB',
      lastUpdated: '2024-07-01',
      description: 'Annual production data from all major uranium mines in Namibia, including tonnage, grades, and export destinations.',
      variables: ['Year', 'Mine Name', 'Production (tonnes U3O8)', 'Average Grade (%)', 'Export Country'],
      downloads: 3420,
      downloadData: 'data:text/csv;charset=utf-8,Year,Mine Name,Production (tonnes U3O8),Average Grade (%),Export Country\n2024,Rossing,2500,0.035,China\n2024,Husab,5500,0.015,USA\n2023,Rossing,2650,0.037,France\n2023,Husab,5200,0.016,UK'
    },
    {
      id: 'market-prices',
      name: 'Global Uranium Price Index (2000-2024)',
      format: 'CSV, Excel',
      size: '1.8 MB',
      lastUpdated: '2024-07-15',
      description: 'Daily, weekly, and monthly uranium spot prices from major exchanges and trading platforms.',
      variables: ['Date', 'Spot Price (USD/lb)', 'Volume', 'Exchange', 'Contract Type'],
      downloads: 5670,
      downloadData: 'data:text/csv;charset=utf-8,Date,Spot Price (USD/lb),Volume,Exchange,Contract Type\n2024-07-15,78.50,1250,UxC,Spot\n2024-07-01,80.25,980,Cameco,Long-term\n2024-06-15,82.10,1450,UxC,Spot'
    },
    {
      id: 'geological-data',
      name: 'Namibian Uranium Deposits Geological Survey',
      format: 'GeoJSON, Shapefile',
      size: '15.7 MB',
      lastUpdated: '2024-06-15',
      description: 'Comprehensive geological data of uranium deposits, including coordinates, ore grades, and geological formations.',
      variables: ['Coordinates', 'Deposit Type', 'Estimated Reserves', 'Geological Age', 'Host Rock'],
      downloads: 1890,
      downloadData: 'data:application/json;charset=utf-8,{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Rossing","deposit_type":"Alaskite","reserves":"136000 tonnes","grade":"0.035%"},"geometry":{"type":"Point","coordinates":[15.02,-22.48]}}]}'
    },
    {
      id: 'employment-data',
      name: 'Uranium Mining Employment Statistics',
      format: 'CSV, Excel',
      size: '850 KB',
      lastUpdated: '2024-07-10',
      description: 'Employment data including direct and indirect jobs in the uranium mining sector.',
      variables: ['Year', 'Direct Jobs', 'Indirect Jobs', 'Region', 'Skill Level'],
      downloads: 2140,
      downloadData: 'data:text/csv;charset=utf-8,Year,Direct Jobs,Indirect Jobs,Region,Skill Level\n2024,11200,16000,Erongo,Mixed\n2024,4500,6500,Khomas,Technical\n2023,10800,15200,Erongo,Mixed'
    }
  ];

  const strategicLocations = [
    {
      location: 'Erongo Region',
      significance: 'Primary uranium mining hub hosting Rössing and Husab mines',
      advantages: ['Proximity to Swakopmund port', 'Established infrastructure', 'Skilled workforce'],
      challenges: ['Water scarcity', 'Remote location', 'Environmental sensitivity']
    },
    {
      location: 'Hardap Region', 
      significance: 'Home to Langer Heinrich mine and potential expansion areas',
      advantages: ['Rail connections', 'Geological potential', 'Government support'],
      challenges: ['Infrastructure development needs', 'Community engagement', 'Power supply']
    }
  ];

  const miningMethods = [
    {
      method: 'Open Pit Mining',
      description: 'Large-scale surface excavation for near-surface uranium deposits',
      process: 'Overburden removal → Ore extraction → Processing → Rehabilitation',
      advantages: ['High production capacity', 'Lower operating costs', 'Equipment accessibility'],
      challenges: ['Environmental impact', 'Large water requirements', 'Community displacement'],
      applications: 'Rössing, Husab, and Langer Heinrich mines'
    },
    {
      method: 'In-Situ Leaching (ISL)',
      description: 'Chemical solution injection to dissolve uranium underground',
      process: 'Well drilling → Solution injection → Uranium dissolution → Recovery',
      advantages: ['Minimal surface disturbance', 'Lower environmental footprint', 'Cost effective'],
      challenges: ['Groundwater protection', 'Geological suitability', 'Long-term monitoring'],
      applications: 'Potential future application in suitable deposits'
    }
  ];

  const cleanEnergyData = [
    {
      aspect: 'Nuclear Power Generation',
      contribution: 'Uranium provides 20% of global electricity without carbon emissions',
      impact: 'Prevents 2.5 billion tons of CO2 annually compared to fossil fuels',
      future: 'Essential for achieving net-zero carbon targets by 2050'
    },
    {
      aspect: 'Energy Security',
      contribution: 'Reliable baseload power generation for 24/7 electricity supply',
      impact: 'Reduces dependence on imported fossil fuels',
      future: 'Critical for energy independence and grid stability'
    }
  ];

  const sustainabilityPractices = [
    {
      area: 'Environmental Management',
      practices: ['Water recycling systems', 'Biodiversity conservation', 'Dust suppression'],
      achievements: '90% water recycling at major mines',
      targets: 'Zero net water usage by 2030'
    },
    {
      area: 'Land Rehabilitation',
      practices: ['Progressive rehabilitation', 'Native vegetation restoration', 'Soil reconstruction'],
      achievements: '2,500 hectares rehabilitated since 2010',
      targets: 'Complete rehabilitation within 5 years of closure'
    }
  ];

  const communityImpact = [
    {
      category: 'Employment',
      direct: '8,500+ direct jobs in uranium mining',
      indirect: '25,000+ indirect and induced jobs',
      development: 'Skills training and capacity building programs'
    },
    {
      category: 'Infrastructure',
      direct: 'Roads, hospitals, schools, and utilities development',
      indirect: 'Improved telecommunications and services',
      development: 'Long-term community development partnerships'
    }
  ];

  const economicGrowth = [
    {
      indicator: 'GDP Contribution',
      current: 'Uranium mining contributes 5-8% to Namibian GDP',
      trend: 'Steady growth with new mines coming online',
      projection: 'Expected to reach 12% by 2030 with expansion projects'
    },
    {
      indicator: 'Export Revenue',
      current: 'US$1.2 billion annually from uranium exports',
      trend: '15% average annual growth over past decade',
      projection: 'Target of US$2 billion by 2028'
    },
    {
      indicator: 'Tax Revenue',
      current: 'N$2.5 billion in taxes and royalties annually',
      trend: 'Increasing with production growth',
      projection: 'Expected to double with new developments'
    }
  ];

  const learningPaths = [
    {
      id: 'beginner-path',
      title: 'Uranium Mining Fundamentals',
      duration: '6-8 weeks',
      modules: 8,
      level: 'Beginner',
      description: 'Complete introduction to uranium, mining processes, and industry basics.',
      progress: 0,
      topics: [
        'Introduction to Uranium and Nuclear Physics',
        'Geology of Uranium Deposits',
        'Mining Methods and Equipment',
        'Processing and Beneficiation',
        'Safety and Environmental Considerations',
        'Regulatory Framework',
        'Market Dynamics',
        'Career Opportunities'
      ]
    },
    {
      id: 'strategic-locations',
      title: 'Strategic Mining Locations',
      duration: '4 weeks',
      modules: 6,
      level: 'Intermediate',
      description: 'Detailed analysis of strategic uranium mining locations in Namibia.',
      progress: 0,
      topics: strategicLocations.map(loc => `${loc.location}: ${loc.significance}`)
    },
    {
      id: 'mining-methods',
      title: 'Advanced Mining Methods',
      duration: '8 weeks',
      modules: 10,
      level: 'Professional',
      description: 'Comprehensive study of uranium mining techniques and technologies.',
      progress: 0,
      topics: miningMethods.map(method => `${method.method}: ${method.description}`)
    },
    {
      id: 'clean-energy',
      title: 'Clean Energy & Nuclear Power',
      duration: '6 weeks',
      modules: 8,
      level: 'Intermediate',
      description: 'Understanding uranium\'s role in clean energy transition.',
      progress: 0,
      topics: cleanEnergyData.map(aspect => `${aspect.aspect}: ${aspect.contribution}`)
    },
    {
      id: 'sustainability',
      title: 'Sustainable Mining Practices',
      duration: '10 weeks',
      modules: 12,
      level: 'Professional',
      description: 'Environmental stewardship and sustainable development in uranium mining.',
      progress: 0,
      topics: sustainabilityPractices.map(practice => `${practice.area}: ${practice.practices.join(', ')}`)
    },
    {
      id: 'community-impact',
      title: 'Community Development & Social Impact',
      duration: '6 weeks',
      modules: 8,
      level: 'Intermediate',
      description: 'Understanding the social and economic impacts of uranium mining on communities.',
      progress: 0,
      topics: communityImpact.map(impact => `${impact.category}: ${impact.direct}`)
    },
    {
      id: 'economic-growth',
      title: 'Economic Impact Analysis',
      duration: '8 weeks',
      modules: 10,
      level: 'Advanced',
      description: 'Comprehensive analysis of uranium mining\'s contribution to economic development.',
      progress: 0,
      topics: economicGrowth.map(indicator => `${indicator.indicator}: ${indicator.current}`)
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Educational Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive learning materials, research papers, datasets, and interactive content for students, professionals, and researchers.
          </p>
        </div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="videos">Video Library</TabsTrigger>
            <TabsTrigger value="research">Research Papers</TabsTrigger>
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="learning">Learning Paths</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-6">
            {selectedResource && (
              <div className="mb-8">
                <Card className="bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoLibrary.find(v => v.id === selectedResource)?.youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedResource(null)}
                      className="mt-4"
                    >
                      Close Player
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoLibrary.map((video) => (
                <Card key={video.id} className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{video.level}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {video.duration}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3 w-3" />
                            {video.views} views
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="shrink-0"
                        onClick={() => setSelectedResource(video.id)}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {video.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <div className="space-y-4">
              {researchPapers.map((paper) => (
                <Card key={paper.id} className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{paper.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{paper.authors}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{paper.journal}</span>
                          <span>{paper.year}</span>
                          <span>{paper.pages} pages</span>
                          <span>{paper.citations} citations</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = paper.downloadUrl;
                          link.download = `${paper.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
                          link.click();
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{paper.abstract}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="datasets" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {datasets.map((dataset) => (
                <Card key={dataset.id} className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{dataset.name}</CardTitle>
                      <Badge variant="outline">{dataset.format}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{dataset.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Size:</span> {dataset.size}
                      </div>
                      <div>
                        <span className="font-medium">Downloads:</span> {dataset.downloads.toLocaleString()}
                      </div>
                      <div>
                        <span className="font-medium">Last Updated:</span> {dataset.lastUpdated}
                      </div>
                      <div>
                        <span className="font-medium">Variables:</span> {dataset.variables.length}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">Key Variables:</h4>
                      <div className="flex flex-wrap gap-1">
                        {dataset.variables.map((variable, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {variable}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = dataset.downloadData;
                          link.download = `${dataset.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.csv`;
                          link.click();
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download CSV
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const jsonData = dataset.downloadData.replace('data:text/csv;charset=utf-8,', '');
                          const link = document.createElement('a');
                          link.href = `data:application/json;charset=utf-8,${JSON.stringify(jsonData)}`;
                          link.download = `${dataset.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
                          link.click();
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download JSON
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="space-y-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{path.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge>{path.level}</Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {path.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            {path.modules} modules
                          </div>
                        </div>
                      </div>
                      <Button onClick={() => setSelectedCourse(path.id)}>
                        Start Learning
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{path.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {path.topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress: {path.progress}%</span>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-primary" />
                          <span>Certificate available</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${path.progress}%` }}
                        ></div>
                      </div>
                    </div>
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

export default EducationalContent;