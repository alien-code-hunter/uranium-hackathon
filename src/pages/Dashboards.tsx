import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Activity, TrendingUp, Globe, Filter, Download, RefreshCw } from 'lucide-react';

const Dashboards = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1year');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const productionData = [
    { month: 'Jan', rossing: 210, husab: 458, langerHeinrich: 0, total: 668 },
    { month: 'Feb', rossing: 195, husab: 442, langerHeinrich: 0, total: 637 },
    { month: 'Mar', rossing: 220, husab: 475, langerHeinrich: 0, total: 695 },
    { month: 'Apr', rossing: 205, husab: 460, langerHeinrich: 0, total: 665 },
    { month: 'May', rossing: 225, husab: 480, langerHeinrich: 0, total: 705 },
    { month: 'Jun', rossing: 210, husab: 465, langerHeinrich: 0, total: 675 }
  ];

  const priceData = [
    { date: 'Q1 2024', spotPrice: 103, contractPrice: 85 },
    { date: 'Q2 2024', spotPrice: 108, contractPrice: 87 },
    { date: 'Q3 2024', spotPrice: 82, contractPrice: 82 },
    { date: 'Q4 2024', spotPrice: 78, contractPrice: 80 }
  ];

  const exportData = [
    { destination: 'China', value: 45, color: '#ff6b6b' },
    { destination: 'USA', value: 25, color: '#4ecdc4' },
    { destination: 'France', value: 15, color: '#45b7d1' },
    { destination: 'UK', value: 10, color: '#96ceb4' },
    { destination: 'Others', value: 5, color: '#feca57' }
  ];

  const employmentData = [
    { year: '2020', direct: 8500, indirect: 12000 },
    { year: '2021', direct: 9200, indirect: 13500 },
    { year: '2022', direct: 9800, indirect: 14200 },
    { year: '2023', direct: 10500, indirect: 15000 },
    { year: '2024', direct: 11200, indirect: 16000 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Interactive <span className="text-uranium">Dashboards</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real-time analytics and insights into Namibia's uranium mining industry
            </p>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Time Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1month">Last Month</SelectItem>
                    <SelectItem value="3months">Last 3 Months</SelectItem>
                    <SelectItem value="6months">Last 6 Months</SelectItem>
                    <SelectItem value="1year">Last Year</SelectItem>
                    <SelectItem value="5years">Last 5 Years</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="erongo">Erongo</SelectItem>
                    <SelectItem value="khomas">Khomas</SelectItem>
                    <SelectItem value="otjozondjupa">Otjozondjupa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="production" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="production">Production</TabsTrigger>
                <TabsTrigger value="market">Market</TabsTrigger>
                <TabsTrigger value="exports">Exports</TabsTrigger>
                <TabsTrigger value="employment">Employment</TabsTrigger>
                <TabsTrigger value="environment">Environment</TabsTrigger>
              </TabsList>

              {/* Production Dashboard */}
              <TabsContent value="production" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Production</CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4,025 tonnes</div>
                      <p className="text-xs text-muted-foreground">+5.2% from last year</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Mines</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-muted-foreground">Rössing & Husab</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">World Ranking</CardTitle>
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">#2</div>
                      <p className="text-xs text-muted-foreground">Global producer</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Capacity Utilization</CardTitle>
                      <Filter className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">87%</div>
                      <p className="text-xs text-muted-foreground">+2% from last month</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Production by Mine</CardTitle>
                    <CardDescription>Uranium production in tonnes (2024)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={productionData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="rossing" fill="#ff6b6b" name="Rössing" />
                          <Bar dataKey="husab" fill="#4ecdc4" name="Husab" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Market Dashboard */}
              <TabsContent value="market" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Uranium Price Trends</CardTitle>
                    <CardDescription>USD per pound U3O8</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={priceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="spotPrice" stroke="#ff6b6b" strokeWidth={2} name="Spot Price" />
                          <Line type="monotone" dataKey="contractPrice" stroke="#4ecdc4" strokeWidth={2} name="Contract Price" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Exports Dashboard */}
              <TabsContent value="exports" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Export Destinations</CardTitle>
                    <CardDescription>Uranium exports by country (2024)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={exportData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {exportData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Employment Dashboard */}
              <TabsContent value="employment" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Employment Trends</CardTitle>
                    <CardDescription>Direct and indirect employment in uranium sector</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={employmentData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="direct" fill="#ff6b6b" name="Direct Jobs" />
                          <Bar dataKey="indirect" fill="#4ecdc4" name="Indirect Jobs" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Environment Dashboard */}
              <TabsContent value="environment" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Water Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2.3M m³</div>
                      <p className="text-xs text-muted-foreground">Annual consumption</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>CO2 Emissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45,000 tonnes</div>
                      <p className="text-xs text-muted-foreground">-8% from last year</p>
                    </CardContent>
                  </Card>
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

export default Dashboards;