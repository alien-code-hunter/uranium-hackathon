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

  // Latest industry news and updates
  const industryUpdates = [
    {
      id: 1,
      title: "Nuclear Family Celebrates 80 Years of Peaceful Atomic Energy",
      summary: "The nuclear industry marks eight decades of technological advancement, from the first controlled nuclear reaction to modern Generation III+ reactors.",
      source: "IAEA",
      date: "2025-01-10",
      category: "Industry",
      priority: "high",
      link: "https://www.iaea.org/newscenter"
    },
    {
      id: 2,
      title: "Namibia's Uranium Production Reaches Record High in Q4 2024",
      summary: "Combined output from Rössing and Husab mines achieved 4,025 tonnes, marking a 12% increase from the previous year.",
      source: "Ministry of Mines",
      date: "2025-01-08",
      category: "Production",
      priority: "high"
    },
    {
      id: 3,
      title: "New Uranium Exploration Licenses Granted in Erongo Region",
      summary: "Three international mining companies receive exploration permits for potential uranium deposits in the Damara Belt.",
      source: "Namibian Mining Journal",
      date: "2025-01-05",
      category: "Exploration",
      priority: "medium"
    },
    {
      id: 4,
      title: "Global Uranium Spot Price Stabilizes at $78/lb",
      summary: "Market analysts report increased demand from nuclear power expansion programs worldwide.",
      source: "UxC Market Intelligence",
      date: "2025-01-03",
      category: "Market",
      priority: "medium"
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
      title: "Namibia Launches Nuclear Medicine Program",
      summary: "Partnership with IAEA to establish radiopharmaceutical production for cancer treatment.",
      date: "2025-01-12",
      category: "Healthcare",
      impact: "Positive"
    },
    {
      id: 2,
      title: "Uranium Mining Training Center Opens in Swakopmund",
      summary: "New facility will train 500 mining professionals annually in advanced uranium extraction techniques.",
      date: "2025-01-10",
      category: "Education",
      impact: "Positive"
    },
    {
      id: 3,
      title: "Environmental Monitoring System Upgraded",
      summary: "Advanced radiation monitoring network deployed across all active mining sites.",
      date: "2025-01-08",
      category: "Environment",
      impact: "Positive"
    }
  ];

  const technicalUpdates = [
    {
      id: 1,
      title: "AI-Powered Ore Grade Prediction System Deployed",
      summary: "Machine learning algorithms improve uranium ore grade prediction accuracy by 35%.",
      date: "2025-01-14",
      technology: "Artificial Intelligence"
    },
    {
      id: 2,
      title: "Autonomous Mining Vehicles Begin Operations",
      summary: "Fleet of 12 autonomous hauling trucks operational at Husab mine, improving safety and efficiency.",
      date: "2025-01-11",
      technology: "Automation"
    },
    {
      id: 3,
      title: "Advanced Waste Management Technology Installed",
      summary: "New dry stack tailings technology reduces environmental footprint by 40%.",
      date: "2025-01-09",
      technology: "Environmental"
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
              Industry <span className="text-uranium">Updates</span>
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
                            <Button variant="outline" size="sm">
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
                <h2 className="text-2xl font-bold">Namibia Developments</h2>
                
                <div className="grid gap-6">
                  {namibianUpdates.map((update) => (
                    <Card key={update.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{update.category}</Badge>
                              <Badge className={getImpactColor(update.impact)}>
                                {update.impact}
                              </Badge>
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