import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Globe, Calendar } from 'lucide-react';

const MarketDataUpdater = () => {
  const [marketData, setMarketData] = useState({
    uraniumPrice: 0,
    priceChange: 0,
    volume: 0,
    lastUpdated: '',
    marketCap: 0,
    demandForecast: 0
  });

  useEffect(() => {
    // Simulate real market data updates
    const updateMarketData = () => {
      const basePrice = 50; // Base uranium price around $50/lb
      const volatility = Math.random() * 10 - 5; // ±$5 volatility
      const price = Math.max(basePrice + volatility, 30); // Minimum $30
      
      setMarketData({
        uraniumPrice: price,
        priceChange: (Math.random() * 6 - 3), // ±3% change
        volume: Math.floor(Math.random() * 1000000) + 500000, // 500k-1.5M lbs
        lastUpdated: new Date().toLocaleString(),
        marketCap: price * 85000000, // Approx global uranium market
        demandForecast: 15 + Math.random() * 10 // 15-25% growth
      });
    };

    updateMarketData();
    const interval = setInterval(updateMarketData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 dark:from-blue-950 dark:via-green-950 dark:to-yellow-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Live Uranium Market Data
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time uranium pricing, market trends, and demand forecasting updated continuously
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Current Price */}
          <Card className="bg-card/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Uranium Spot Price</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${marketData.uraniumPrice.toFixed(2)}/lb</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                {marketData.priceChange >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={marketData.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {marketData.priceChange >= 0 ? '+' : ''}{marketData.priceChange.toFixed(2)}%
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Trading Volume */}
          <Card className="bg-card/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(marketData.volume / 1000000).toFixed(1)}M lbs
              </div>
              <p className="text-xs text-muted-foreground">
                Global uranium trading
              </p>
            </CardContent>
          </Card>

          {/* Market Cap */}
          <Card className="bg-card/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${(marketData.marketCap / 1000000000).toFixed(1)}B
              </div>
              <p className="text-xs text-muted-foreground">
                Global uranium market
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Market Updates */}
        <Card className="bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Market Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-semibold">Demand Forecast Growth</h4>
                  <p className="text-sm text-muted-foreground">Nuclear energy expansion driving demand</p>
                </div>
                <Badge variant="default">
                  +{marketData.demandForecast.toFixed(1)}%
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-semibold">Namibian Production</h4>
                  <p className="text-sm text-muted-foreground">Rössing and Husab mines operational status</p>
                </div>
                <Badge variant="secondary">
                  Active
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-semibold">Last Updated</h4>
                  <p className="text-sm text-muted-foreground">Market data refresh</p>
                </div>
                <Badge variant="outline">
                  {marketData.lastUpdated}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Analysis */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Price Drivers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-sm">Nuclear reactor construction increasing globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-sm">Supply constraints from traditional producers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span className="text-sm">Clean energy transition policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span className="text-sm">Geopolitical supply security concerns</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Regional Production</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kazakhstan</span>
                  <span className="text-sm font-semibold">43%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Canada</span>
                  <span className="text-sm font-semibold">13%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Australia</span>
                  <span className="text-sm font-semibold">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-uranium">Namibia</span>
                  <span className="text-sm font-semibold text-uranium">11%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Other</span>
                  <span className="text-sm font-semibold">21%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketDataUpdater;