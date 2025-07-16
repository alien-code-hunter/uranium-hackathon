import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ExternalLink, Settings, Key } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const InteractiveMap = () => {
  const [selectedMine, setSelectedMine] = useState<number | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const mineLocations = [
    {
      name: 'Rössing Mine',
      coordinates: [-15.2969, 15.0947] as [number, number],
      location: 'Erongo Region',
      type: 'Open Pit',
      production: '2,500 tonnes/year',
      status: 'Operating',
      operator: 'Rio Tinto',
      established: '1976',
      details: 'World\'s longest-running open-pit uranium mine'
    },
    {
      name: 'Husab Mine',
      coordinates: [-15.1500, 15.2000] as [number, number],
      location: 'Erongo Region', 
      type: 'Open Pit',
      production: '5,500 tonnes/year',
      status: 'Operating',
      operator: 'Swakop Uranium',
      established: '2016',
      details: 'Namibia\'s largest uranium mine by production'
    },
    {
      name: 'Langer Heinrich',
      coordinates: [-15.4167, 15.0833] as [number, number],
      location: 'Erongo Region',
      type: 'Open Pit', 
      production: '1,350 tonnes/year',
      status: 'Care & Maintenance',
      operator: 'Paladin Energy',
      established: '2007',
      details: 'Heap leach processing facility'
    }
  ];

  useEffect(() => {
    checkForApiKey();
  }, []);

  const checkForApiKey = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('get-google-maps-key');
      if (data?.api_key) {
        setApiKey(data.api_key);
      }
    } catch (error) {
      console.log('No API key configured yet');
    }
    setLoading(false);
  };

  const generateGoogleMapsUrl = (mine?: typeof mineLocations[0]) => {
    if (!apiKey) return '';
    
    if (mine) {
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${mine.coordinates[0]},${mine.coordinates[1]}&zoom=12`;
    }
    // Default view of Namibia uranium mining region
    return `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=-15.2,15.1&zoom=8`;
  };

  const openInGoogleMaps = (mine: typeof mineLocations[0]) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${mine.coordinates[0]},${mine.coordinates[1]}`;
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-uranium mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading map configuration...</p>
        </div>
      </div>
    );
  }

  if (!apiKey) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Key className="w-16 h-16 text-uranium mx-auto mb-4" />
          <CardTitle>Google Maps API Key Required</CardTitle>
          <CardDescription className="space-y-2">
            <p>To display the interactive map, you need a free Google Maps API key.</p>
            <p className="text-sm">Follow these steps to get your free API key:</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-sm">How to get your Google Maps API key:</h4>
            <ol className="text-sm space-y-2 list-decimal list-inside">
              <li>Go to the <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer" className="text-uranium hover:underline">Google Cloud Console</a></li>
              <li>Create a new project or select an existing one</li>
              <li>Enable the "Maps Embed API"</li>
              <li>Create credentials → API key</li>
              <li>Copy your API key and add it using the button below</li>
            </ol>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Once you have your API key, add it securely using our configuration system:
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Interactive Mining Map</h3>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setSelectedMine(null)}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Show All Mines
          </Button>
        </div>
      </div>
      
      <div className="relative h-[600px] rounded-xl overflow-hidden border border-border">
        <iframe
          src={generateGoogleMapsUrl(selectedMine !== null ? mineLocations[selectedMine] : undefined)}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        />
        
        {/* Map Overlay Info */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border max-w-xs">
          <h4 className="font-semibold text-sm mb-2">
            {selectedMine !== null ? mineLocations[selectedMine].name : 'Namibia Uranium Mines'}
          </h4>
          {selectedMine !== null ? (
            <div className="space-y-1 text-xs">
              <p><strong>Status:</strong> <span className={`${
                mineLocations[selectedMine].status === 'Operating' ? 'text-green-600' : 'text-yellow-600'
              }`}>{mineLocations[selectedMine].status}</span></p>
              <p><strong>Production:</strong> {mineLocations[selectedMine].production}</p>
              <p><strong>Operator:</strong> {mineLocations[selectedMine].operator}</p>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">
              Click on mine cards below to focus on specific locations
            </p>
          )}
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
          <h4 className="font-semibold text-sm mb-2">Mine Status</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Operating</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Care & Maintenance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mine Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mineLocations.map((mine, index) => (
          <Card 
            key={mine.name}
            className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
              selectedMine === index ? 'ring-2 ring-uranium shadow-lg' : ''
            }`}
            onClick={() => setSelectedMine(index)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{mine.name}</CardTitle>
                <div className={`w-3 h-3 rounded-full ${
                  mine.status === 'Operating' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
              </div>
              <CardDescription>{mine.location}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Production:</span>
                  <span className="font-medium">{mine.production}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Operator:</span>
                  <span className="font-medium">{mine.operator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Since:</span>
                  <span className="font-medium">{mine.established}</span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-border">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMine(index);
                    }}
                  >
                    <Navigation className="w-3 h-3 mr-1" />
                    Focus
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      openInGoogleMaps(mine);
                    }}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-xs text-muted-foreground">
        <p>Interactive map powered by Google Maps • Click mine cards to focus on specific locations</p>
      </div>
    </div>
  );
};

export default InteractiveMap;