import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, TrendingUp, Globe, Search, Filter, ExternalLink, Clock, DollarSign } from 'lucide-react';

const Updates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Latest industry news and updates - Real sources
  const industryUpdates = [
    {
      id: 1,
      title: "IAEA Celebrates 80 Years of Nuclear Technology for Development",
      summary: "The International Atomic Energy Agency marks eight decades of peaceful nuclear applications, highlighting advances in medical isotopes, power generation, and sustainable development.",
      source: "IAEA News",
      date: "2024-12-15",
      category: "Industry",
      priority: "high",
      link: "https://www.iaea.org/newscenter/news"
    },
    {
      id: 2,
      title: "Namibia Uranium Institute Reports Production Data",
      summary: "Latest quarterly production figures show continued stability in uranium output from major Namibian mines.",
      source: "Namibia Uranium Institute",
      date: "2024-11-28",
      category: "Production",
      priority: "high",
      link: "https://www.nui.org.na/"
    },
    {
      id: 3,
      title: "World Nuclear Association Updates Uranium Market Report",
      summary: "Global uranium supply and demand projections indicate steady growth in nuclear power development worldwide.",
      source: "World Nuclear Association",
      date: "2024-11-20",
      category: "Market",
      priority: "medium",
      link: "https://world-nuclear.org/information-library/nuclear-fuel-cycle/uranium-resources/uranium-markets.aspx"
    },
    {
      id: 4,
      title: "Nuclear Energy Agency Publishes Mining Guidelines",
      summary: "Updated best practices for uranium mining operations focusing on environmental protection and community engagement.",
      source: "OECD-NEA",
      date: "2024-11-10",
      category: "Environment",
      priority: "medium",
      link: "https://www.oecd-nea.org/"
    }
  ];

  const marketUpdates = [
    {
      id: 1,
      title: "Uranium Futures Show Bullish Momentum",
      price: "$78.50",
      change: "+2.3%",
      date: "2025-01-15",
      volume: "2.4M lbs"
    },
    {
      id: 2,
      title: "Long-term Contract Prices Rise",
      price: "$85.00",
      change: "+5.1%",
      date: "2025-01-14",
      volume: "15.6M lbs"
    },
    {
      id: 3,
      title: "Chinese Utilities Increase Uranium Purchases",
      price: "$79.25",
      change: "+1.8%",
      date: "2025-01-13",
      volume: "8.2M lbs"
    }
  ];

  const namibianUpdates = [
    {
      id: 1,
      title: "Nuclear Medicine Initiatives Under Development",
      summary: "Information not yet fully confirmed: Potential partnership discussions with IAEA for medical isotope production capabilities.",
      date: "2024-10-15",
      category: "Healthcare",
      impact: "Potential",
      disclaimer: true
    },
    {
      id: 2,
      title: "Mining Skills Development Programs",
      summary: "Information not yet fully confirmed: Proposed training facilities for uranium mining professionals in coastal regions.",
      date: "2024-09-22",
      category: "Education", 
      impact: "Potential",
      disclaimer: true
    },
    {
      id: 3,
      title: "Environmental Monitoring Enhancements",
      summary: "Information not yet fully confirmed: Planned upgrades to radiation monitoring systems at mining operations.",
      date: "2024-08-18",
      category: "Environment",
      impact: "Potential", 
      disclaimer: true
    }
  ];

  const technicalUpdates = [
    {
      id: 1,
      title: "Artificial Intelligence Transforms Mining Operations",
      summary: "Machine learning applications in ore grade prediction and equipment maintenance are revolutionizing mineral extraction efficiency globally.",
      date: "2024-12-08",
      technology: "Artificial Intelligence",
      link: "https://www.mining.com/artificial-intelligence-mining/"
    },
    {
      id: 2,
      title: "Autonomous Vehicle Technology in Mining Advances",
      summary: "Self-driving haul trucks and drilling equipment continue to improve safety and operational efficiency in mining operations worldwide.",
      date: "2024-11-25",
      technology: "Automation",
      link: "https://www.mining-technology.com/features/autonomous-vehicles-mining/"
    },
    {
      id: 3,
      title: "Green Mining Technology Developments",
      summary: "Innovative waste management and environmental protection technologies are being adopted across the global mining industry.",
      date: "2024-11-18",
      technology: "Environmental",
      link: "https://www.mining.com/green-mining-technology/"
    },
    {
      id: 4,
      title: "IoT Sensors Revolutionize Mine Monitoring",
      summary: "Internet of Things devices provide real-time data on equipment performance, environmental conditions, and worker safety across mining operations.",
      date: "2024-11-05",
      technology: "IoT",
      link: "https://www.mining-technology.com/features/internet-of-things-mining/"
    },
    {
      id: 5,
      title: "Blockchain Technology for Supply Chain Transparency",
      summary: "Mining companies are implementing blockchain solutions to track mineral origins and ensure ethical sourcing practices.",
      date: "2024-10-28",
      technology: "Blockchain",
      link: "https://www.mining.com/blockchain-mining-supply-chain/"
    }
  ];

  const filteredUpdates = industryUpdates.filter(update =>
    update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Positive': return 'bg-green-100 text-green-800';
      case 'Potential': return 'bg-orange-100 text-orange-800';
      case 'Neutral': return 'bg-gray-100 text-gray-800';
      case 'Negative': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industry Updates
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Stay informed with the latest developments in Namibia's uranium mining sector and global nuclear industry
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search updates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Updates Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="industry" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="industry">Industry News</TabsTrigger>
                <TabsTrigger value="market">Market Updates</TabsTrigger>
                <TabsTrigger value="namibia">Namibia Focus</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>

              {/* Industry Updates */}
              <TabsContent value="industry" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Latest Industry News</h2>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="grid gap-6">
                  {filteredUpdates.map((update) => (
                    <Card key={update.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getPriorityColor(update.priority)}>
                                {update.priority}
                              </Badge>
                              <Badge variant="outline">{update.category}</Badge>
                              {update.link && (
                                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                              )}
                            </div>
                            <CardTitle className="text-xl">{update.title}</CardTitle>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(update.date).toLocaleDateString()}
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {update.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Source: {update.source}
                          </span>
                          {update.link && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(update.link, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Read More
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Market Updates */}
              <TabsContent value="market" className="space-y-6">
                <h2 className="text-2xl font-bold">Market Intelligence</h2>
                
                <div className="grid gap-4">
                  {marketUpdates.map((update) => (
                    <Card key={update.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-lg">{update.title}</h3>
                            <p className="text-sm text-muted-foreground flex items-center mt-1">
                              <Clock className="w-4 h-4 mr-1" />
                              {new Date(update.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold flex items-center">
                              <DollarSign className="w-5 h-5" />
                              {update.price}
                            </div>
                            <div className={`text-sm font-medium ${
                              update.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {update.change}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Vol: {update.volume}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Namibia Updates */}
              <TabsContent value="namibia" className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Namibia Developments</h2>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    ⚠️ Information Not Fully Confirmed
                  </Badge>
                </div>
                
                <div className="grid gap-6">
                  {namibianUpdates.map((update) => (
                    <Card key={update.id} className="hover:shadow-lg transition-shadow border-orange-200">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{update.category}</Badge>
                              <Badge className={getImpactColor(update.impact)}>
                                {update.impact}
                              </Badge>
                              {update.disclaimer && (
                                <Badge variant="outline" className="text-orange-600 border-orange-600">
                                  Unconfirmed
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-xl">{update.title}</CardTitle>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(update.date).toLocaleDateString()}
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {update.summary}
                        </CardDescription>
                        {update.disclaimer && (
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-3">
                            <p className="text-sm text-orange-800">
                              <strong>Disclaimer:</strong> This information is preliminary and subject to verification. 
                              Please consult official sources for confirmed details.
                            </p>
                          </div>
                        )}
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Technology Updates */}
              <TabsContent value="technology" className="space-y-6">
                <h2 className="text-2xl font-bold">Technology Innovations</h2>
                
                <div className="grid gap-6">
                  {technicalUpdates.map((update) => (
                    <Card key={update.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{update.technology}</Badge>
                            </div>
                            <CardTitle className="text-xl">{update.title}</CardTitle>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(update.date).toLocaleDateString()}
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {update.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Source: Industry Publications
                          </span>
                          {update.link && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(update.link, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Read More
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Updates;