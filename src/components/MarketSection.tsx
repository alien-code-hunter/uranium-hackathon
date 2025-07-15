import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Globe, MapPin } from 'lucide-react';

const MarketSection = () => {
  const marketData = {
    global: {
      price: 74.50,
      change: 3.8,
      trend: 'up',
      volume: '162,000 lbs',
      lastUpdate: '2024-07-15',
      source: 'TradingEconomics/UxC'
    },
    namibia: {
      price: 73.20,
      change: 2.1,
      trend: 'up',
      production: '5,413 tonnes',
      marketShare: '10.1%',
      yearlyProduction: '2023 data'
    }
  };

  const priceHistory = [
    { period: '2020', global: 29.50, namibia: 28.20, volume: 48000 },
    { period: '2021', global: 41.25, namibia: 39.80, volume: 52000 },
    { period: '2022', global: 49.80, namibia: 47.50, volume: 45000 },
    { period: '2023', global: 91.00, namibia: 89.40, volume: 38000 },
    { period: '2024', global: 74.50, namibia: 73.20, volume: 42000 }
  ];

  const keyMarkets = [
    { 
      country: 'United States', 
      demand: '18,745 tonnes', 
      price: '$74.80',
      imports: '$156.8M (2022)',
      description: 'World\'s largest uranium importer'
    },
    { 
      country: 'China', 
      demand: '12,000 tonnes', 
      price: '$73.50',
      imports: '$80.3K (2022)',
      description: 'Rapidly expanding nuclear program'
    },
    { 
      country: 'France', 
      demand: '8,900 tonnes', 
      price: '$75.10',
      imports: '$40.8K (2022)',
      description: '70% nuclear electricity generation'
    },
    { 
      country: 'Japan', 
      demand: '6,400 tonnes', 
      price: '$74.20',
      imports: 'Via trading companies',
      description: 'Post-Fukushima recovery'
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Uranium Market Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time pricing data and market insights for uranium trading in Namibia and globally
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Global Market */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Global Uranium Market
                </CardTitle>
                <CardDescription>U3O8 Spot Price (USD/lb)</CardDescription>
              </div>
              <Badge variant={marketData.global.trend === 'up' ? 'default' : 'destructive'}>
                {marketData.global.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {marketData.global.change > 0 ? '+' : ''}{marketData.global.change}%
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">
                ${marketData.global.price}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Volume:</span>
                  <br />
                  {marketData.global.volume}
                </div>
                <div>
                  <span className="font-medium">Last Update:</span>
                  <br />
                  {marketData.global.lastUpdate}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Namibia Market */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Namibian Market
                </CardTitle>
                <CardDescription>Local Production & Export Price</CardDescription>
              </div>
              <Badge variant={marketData.namibia.trend === 'up' ? 'default' : 'destructive'}>
                {marketData.namibia.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {marketData.namibia.change > 0 ? '+' : ''}{marketData.namibia.change}%
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">
                ${marketData.namibia.price}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Production:</span>
                  <br />
                  {marketData.namibia.production}
                </div>
                <div>
                  <span className="font-medium">Market Share:</span>
                  <br />
                  {marketData.namibia.marketShare}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Price History Chart */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-12">
          <CardHeader>
            <CardTitle>5-Year Price & Volume Analysis</CardTitle>
            <CardDescription>Uranium pricing trends and trading volumes (USD/lb)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Price Chart */}
              <div>
                <h4 className="font-semibold mb-4">Price Trends</h4>
                <div className="h-64 flex items-end justify-between gap-4 bg-muted/20 rounded-lg p-4">
                  {priceHistory.map((data, index) => (
                    <div key={data.period} className="flex-1 flex flex-col items-center gap-2">
                      <div className="flex gap-1 w-full">
                        <div
                          className="bg-gradient-to-t from-primary to-primary/70 rounded-t flex-1 relative group"
                          style={{ height: `${(data.global / 100) * 200}px` }}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            ${data.global}
                          </div>
                        </div>
                        <div
                          className="bg-gradient-to-t from-secondary to-secondary/70 rounded-t flex-1 relative group"
                          style={{ height: `${(data.namibia / 100) * 200}px` }}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            ${data.namibia}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">{data.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volume Chart */}
              <div>
                <h4 className="font-semibold mb-4">Trading Volume</h4>
                <div className="h-64 flex items-end justify-between gap-4 bg-muted/20 rounded-lg p-4">
                  {priceHistory.map((data, index) => (
                    <div key={data.period} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="bg-gradient-to-t from-uranium to-uranium/70 rounded-t w-full relative group"
                        style={{ height: `${(data.volume / 60000) * 200}px` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-uranium text-uranium-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {data.volume.toLocaleString()} lbs
                        </div>
                      </div>
                      <span className="text-sm font-medium">{data.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded" />
                <span className="text-sm">Global Price</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-secondary rounded" />
                <span className="text-sm">Namibia Price</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-uranium rounded" />
                <span className="text-sm">Trading Volume</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Markets */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Key Export Markets
            </CardTitle>
            <CardDescription>Major uranium importing countries and prices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyMarkets.map((market, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                  <h4 className="font-semibold text-foreground mb-2">{market.country}</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    Annual Demand: {market.demand}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    Imports: {market.imports}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {market.description}
                  </p>
                  <p className="text-lg font-bold text-primary">{market.price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MarketSection;