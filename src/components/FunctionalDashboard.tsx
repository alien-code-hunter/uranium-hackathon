import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Activity, TrendingUp, Globe, Filter, Download, RefreshCw } from 'lucide-react';
import html2canvas from 'html2canvas';

interface DashboardData {
  timeRange: string;
  region: string;
  production: any[];
  prices: any[];
  exports: any[];
  employment: any[];
  environment: any[];
}

const FunctionalDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1year');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [filteredData, setFilteredData] = useState<DashboardData | null>(null);
  const [activeTab, setActiveTab] = useState('production');
  const chartRef = useRef<HTMLDivElement>(null);

  // Sample data for different regions and time periods
  const allData = {
    '1month': {
      'all': {
        production: [
          { month: 'Dec', rossing: 210, husab: 458, total: 668 }
        ],
        prices: [
          { date: 'Dec 2024', spotPrice: 78, contractPrice: 80 }
        ],
        exports: [
          { destination: 'China', value: 45, color: '#ff6b6b' },
          { destination: 'USA', value: 25, color: '#4ecdc4' },
          { destination: 'France', value: 15, color: '#45b7d1' },
          { destination: 'UK', value: 10, color: '#96ceb4' },
          { destination: 'Others', value: 5, color: '#feca57' }
        ],
        employment: [
          { year: '2024', direct: 11200, indirect: 16000 }
        ],
        environment: [
          { metric: 'Water Usage', value: '2.3M m³', change: '+2%' },
          { metric: 'CO2 Emissions', value: '45,000 tonnes', change: '-8%' }
        ]
      },
      'erongo': {
        production: [
          { month: 'Dec', rossing: 210, husab: 0, total: 210 }
        ],
        prices: [
          { date: 'Dec 2024', spotPrice: 78, contractPrice: 80 }
        ],
        exports: [
          { destination: 'China', value: 35, color: '#ff6b6b' },
          { destination: 'USA', value: 30, color: '#4ecdc4' },
          { destination: 'France', value: 20, color: '#45b7d1' },
          { destination: 'Others', value: 15, color: '#feca57' }
        ],
        employment: [
          { year: '2024', direct: 6500, indirect: 9000 }
        ],
        environment: [
          { metric: 'Water Usage', value: '1.2M m³', change: '+1%' },
          { metric: 'CO2 Emissions', value: '20,000 tonnes', change: '-5%' }
        ]
      },
      'khomas': {
        production: [
          { month: 'Dec', rossing: 0, husab: 458, total: 458 }
        ],
        prices: [
          { date: 'Dec 2024', spotPrice: 78, contractPrice: 80 }
        ],
        exports: [
          { destination: 'China', value: 55, color: '#ff6b6b' },
          { destination: 'USA', value: 20, color: '#4ecdc4' },
          { destination: 'France', value: 15, color: '#45b7d1' },
          { destination: 'Others', value: 10, color: '#feca57' }
        ],
        employment: [
          { year: '2024', direct: 4700, indirect: 7000 }
        ],
        environment: [
          { metric: 'Water Usage', value: '1.1M m³', change: '+3%' },
          { metric: 'CO2 Emissions', value: '25,000 tonnes', change: '-12%' }
        ]
      }
    },
    '1year': {
      'all': {
        production: [
          { month: 'Jan', rossing: 210, husab: 458, total: 668 },
          { month: 'Feb', rossing: 195, husab: 442, total: 637 },
          { month: 'Mar', rossing: 220, husab: 475, total: 695 },
          { month: 'Apr', rossing: 205, husab: 460, total: 665 },
          { month: 'May', rossing: 225, husab: 480, total: 705 },
          { month: 'Jun', rossing: 210, husab: 465, total: 675 },
          { month: 'Jul', rossing: 230, husab: 485, total: 715 },
          { month: 'Aug', rossing: 215, husab: 470, total: 685 },
          { month: 'Sep', rossing: 225, husab: 490, total: 715 },
          { month: 'Oct', rossing: 220, husab: 475, total: 695 },
          { month: 'Nov', rossing: 235, husab: 495, total: 730 },
          { month: 'Dec', rossing: 210, husab: 458, total: 668 }
        ],
        prices: [
          { date: 'Q1 2024', spotPrice: 103, contractPrice: 85 },
          { date: 'Q2 2024', spotPrice: 108, contractPrice: 87 },
          { date: 'Q3 2024', spotPrice: 82, contractPrice: 82 },
          { date: 'Q4 2024', spotPrice: 78, contractPrice: 80 }
        ],
        exports: [
          { destination: 'China', value: 45, color: '#ff6b6b' },
          { destination: 'USA', value: 25, color: '#4ecdc4' },
          { destination: 'France', value: 15, color: '#45b7d1' },
          { destination: 'UK', value: 10, color: '#96ceb4' },
          { destination: 'Others', value: 5, color: '#feca57' }
        ],
        employment: [
          { year: '2024', direct: 11200, indirect: 16000 }
        ],
        environment: [
          { metric: 'Water Usage', value: '2.3M m³', change: '+2%' },
          { metric: 'CO2 Emissions', value: '45,000 tonnes', change: '-8%' }
        ]
      }
    }
  };

  useEffect(() => {
    updateFilteredData();
  }, [selectedTimeRange, selectedRegion]);

  const updateFilteredData = () => {
    const timeData = allData[selectedTimeRange as keyof typeof allData];
    if (timeData) {
      const regionData = timeData[selectedRegion as keyof typeof timeData] || timeData['all'];
      setFilteredData({
        timeRange: selectedTimeRange,
        region: selectedRegion,
        ...regionData
      });
    }
  };

  const exportChartImage = async () => {
    if (chartRef.current) {
      try {
        const canvas = await html2canvas(chartRef.current);
        const link = document.createElement('a');
        link.download = `dashboard-${activeTab}-${selectedRegion}-${selectedTimeRange}.png`;
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error exporting chart:', error);
      }
    }
  };

  const refreshData = () => {
    updateFilteredData();
    // In a real app, this would fetch fresh data from the API
  };

  if (!filteredData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Filter Controls */}
        <div className="mb-8 p-4 border border-border rounded-lg bg-card/50">
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
              <Button variant="outline" size="sm" onClick={refreshData}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm" onClick={exportChartImage}>
                <Download className="w-4 h-4 mr-2" />
                Export Chart
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                  <div className="text-2xl font-bold">
                    {filteredData.production.reduce((sum, item) => sum + item.total, 0).toLocaleString()} tonnes
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {selectedRegion === 'all' ? 'All regions' : selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Mines</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {selectedRegion === 'all' ? '2' : '1'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {selectedRegion === 'erongo' ? 'Rössing' : 
                     selectedRegion === 'khomas' ? 'Husab' : 'Rössing & Husab'}
                  </p>
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
                  <div className="text-2xl font-bold">
                    {selectedRegion === 'erongo' ? '92%' : 
                     selectedRegion === 'khomas' ? '85%' : '87%'}
                  </div>
                  <p className="text-xs text-muted-foreground">Capacity utilization</p>
                </CardContent>
              </Card>
            </div>

            <Card ref={chartRef}>
              <CardHeader>
                <CardTitle>
                  {selectedTimeRange === '1month' ? 'Monthly' : 'Annual'} Production by Mine
                </CardTitle>
                <CardDescription>
                  Uranium production in tonnes ({selectedRegion === 'all' ? 'All regions' : selectedRegion})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={filteredData.production}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      {selectedRegion !== 'khomas' && (
                        <Bar dataKey="rossing" fill="#ff6b6b" name="Rössing" />
                      )}
                      {selectedRegion !== 'erongo' && (
                        <Bar dataKey="husab" fill="#4ecdc4" name="Husab" />
                      )}
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    {selectedRegion !== 'khomas' && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#ff6b6b] rounded"></div>
                        <span className="text-sm">Rössing Mine</span>
                      </div>
                    )}
                    {selectedRegion !== 'erongo' && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#4ecdc4] rounded"></div>
                        <span className="text-sm">Husab Mine</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Market Dashboard */}
          <TabsContent value="market" className="space-y-6">
            <Card ref={chartRef}>
              <CardHeader>
                <CardTitle>Uranium Price Trends</CardTitle>
                <CardDescription>USD per pound U3O8</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={filteredData.prices}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="spotPrice" stroke="#ff6b6b" strokeWidth={2} name="Spot Price" />
                      <Line type="monotone" dataKey="contractPrice" stroke="#4ecdc4" strokeWidth={2} name="Contract Price" />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#ff6b6b] rounded"></div>
                      <span className="text-sm">Spot Price (USD/lb)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#4ecdc4] rounded"></div>
                      <span className="text-sm">Contract Price (USD/lb)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Exports Dashboard */}
          <TabsContent value="exports" className="space-y-6">
            <Card ref={chartRef}>
              <CardHeader>
                <CardTitle>Export Destinations</CardTitle>
                <CardDescription>
                  Uranium exports by country ({selectedRegion === 'all' ? 'All regions' : selectedRegion})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={filteredData.exports}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ destination, percent }) => `${destination} ${(percent * 100).toFixed(0)}%`}
                      >
                        {filteredData.exports.map((entry, index) => (
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
            <Card ref={chartRef}>
              <CardHeader>
                <CardTitle>Employment Statistics</CardTitle>
                <CardDescription>
                  Direct and indirect employment ({selectedRegion === 'all' ? 'All regions' : selectedRegion})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={filteredData.employment}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="direct" fill="#ff6b6b" name="Direct Jobs" />
                      <Bar dataKey="indirect" fill="#4ecdc4" name="Indirect Jobs" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#ff6b6b] rounded"></div>
                      <span className="text-sm">Direct Employment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#4ecdc4] rounded"></div>
                      <span className="text-sm">Indirect Employment</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Environment Dashboard */}
          <TabsContent value="environment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={chartRef}>
              <Card>
                <CardHeader>
                  <CardTitle>Water Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {filteredData.environment.find(e => e.metric === 'Water Usage')?.value || '2.3M m³'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Annual consumption ({selectedRegion === 'all' ? 'All regions' : selectedRegion})
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CO2 Emissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {filteredData.environment.find(e => e.metric === 'CO2 Emissions')?.value || '45,000 tonnes'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Annual emissions ({selectedRegion === 'all' ? 'All regions' : selectedRegion})
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FunctionalDashboard;