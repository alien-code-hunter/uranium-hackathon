import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, Download, FileText, Users, Award, ChevronRight, Play, Calendar, Clock } from 'lucide-react';

const EducationalContent = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  // Real educational content
  const videoLibrary = [
    {
      id: 'uranium-101',
      title: 'Uranium 101: The Basics of Nuclear Fuel',
      duration: '12:45',
      level: 'Beginner',
      description: 'Introduction to uranium properties, discovery, and basic nuclear physics concepts.',
      topics: ['Atomic structure', 'Radioactivity', 'Nuclear fission', 'Energy release'],
      views: '2.4M'
    },
    {
      id: 'namibia-mining',
      title: 'Namibian Uranium Mining Operations',
      duration: '18:30',
      level: 'Intermediate',
      description: 'Deep dive into how uranium is extracted in Namibia\'s major mines.',
      topics: ['Open pit mining', 'Processing plants', 'Safety protocols', 'Environmental impact'],
      views: '856K'
    },
    {
      id: 'nuclear-cycle',
      title: 'From Mine to Reactor: The Nuclear Fuel Cycle',
      duration: '25:15',
      level: 'Advanced',
      description: 'Complete journey of uranium from extraction to nuclear reactor fuel.',
      topics: ['Enrichment', 'Fuel fabrication', 'Reactor operation', 'Waste management'],
      views: '1.2M'
    },
    {
      id: 'safety-protocols',
      title: 'Radiation Safety in Uranium Mining',
      duration: '15:20',
      level: 'Professional',
      description: 'Comprehensive safety measures and radiation protection protocols.',
      topics: ['ALARA principles', 'Monitoring equipment', 'Personal protection', 'Emergency procedures'],
      views: '643K'
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
      downloadUrl: '#',
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
      downloadUrl: '#',
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
      downloadUrl: '#',
      citations: 23
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
      downloads: 3420
    },
    {
      id: 'market-prices',
      name: 'Global Uranium Price Index (2000-2024)',
      format: 'CSV, Excel',
      size: '1.8 MB',
      lastUpdated: '2024-07-15',
      description: 'Daily, weekly, and monthly uranium spot prices from major exchanges and trading platforms.',
      variables: ['Date', 'Spot Price (USD/lb)', 'Volume', 'Exchange', 'Contract Type'],
      downloads: 5670
    },
    {
      id: 'geological-data',
      name: 'Namibian Uranium Deposits Geological Survey',
      format: 'GeoJSON, Shapefile',
      size: '15.7 MB',
      lastUpdated: '2024-06-15',
      description: 'Comprehensive geological data of uranium deposits, including coordinates, ore grades, and geological formations.',
      variables: ['Coordinates', 'Deposit Type', 'Estimated Reserves', 'Geological Age', 'Host Rock'],
      downloads: 1890
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
      id: 'professional-path',
      title: 'Advanced Mining Operations',
      duration: '12-16 weeks',
      modules: 12,
      level: 'Professional',
      description: 'Advanced technical knowledge for mining professionals and engineers.',
      progress: 0,
      topics: [
        'Advanced Geological Modeling',
        'Mine Planning and Design',
        'Advanced Processing Technologies',
        'Environmental Impact Assessment',
        'Health Physics and Radiation Safety',
        'Quality Control and Assurance',
        'Project Management',
        'International Regulations',
        'Economic Analysis',
        'Technology Innovation',
        'Sustainability Practices',
        'Leadership in Mining'
      ]
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
                      <Button variant="ghost" size="sm" className="shrink-0">
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
                      <Button variant="outline" size="sm">
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

                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Dataset
                    </Button>
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
                      <Button>
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