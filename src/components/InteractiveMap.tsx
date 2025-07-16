import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Settings, Info } from 'lucide-react';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  const mineLocations = [
    {
      name: 'Rössing Mine',
      coordinates: [15.0947, -15.2969] as [number, number],
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
      coordinates: [15.2000, -15.1500] as [number, number],
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
      coordinates: [15.0833, -15.4167] as [number, number],
      location: 'Erongo Region',
      type: 'Open Pit', 
      production: '1,350 tonnes/year',
      status: 'Care & Maintenance',
      operator: 'Paladin Energy',
      established: '2007',
      details: 'Heap leach processing facility'
    }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [15.0, -22.0], // Center on Namibia
      zoom: 6,
      pitch: 45,
      bearing: 0
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add scale control
    map.current.addControl(new mapboxgl.ScaleControl());

    // Add mine markers
    map.current.on('load', () => {
      mineLocations.forEach((mine, index) => {
        // Create custom marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'custom-marker';
        markerEl.style.cssText = `
          width: 20px;
          height: 20px;
          background: ${mine.status === 'Operating' ? '#00ff00' : '#ffaa00'};
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        `;

        // Create popup content
        const popupContent = `
          <div style="padding: 10px; max-width: 300px;">
            <h3 style="margin: 0 0 8px 0; color: #333; font-weight: bold;">${mine.name}</h3>
            <p style="margin: 0 0 5px 0; color: #666; font-size: 12px;"><strong>Location:</strong> ${mine.location}</p>
            <p style="margin: 0 0 5px 0; color: #666; font-size: 12px;"><strong>Coordinates:</strong> ${Math.abs(mine.coordinates[1]).toFixed(4)}°S, ${mine.coordinates[0].toFixed(4)}°E</p>
            <p style="margin: 0 0 5px 0; color: #666; font-size: 12px;"><strong>Type:</strong> ${mine.type}</p>
            <p style="margin: 0 0 5px 0; color: #666; font-size: 12px;"><strong>Production:</strong> ${mine.production}</p>
            <p style="margin: 0 0 5px 0; color: #666; font-size: 12px;"><strong>Operator:</strong> ${mine.operator}</p>
            <p style="margin: 0 0 5px 0; color: #666; font-size: 12px;"><strong>Established:</strong> ${mine.established}</p>
            <p style="margin: 0 0 8px 0; color: #666; font-size: 12px;"><strong>Status:</strong> <span style="color: ${mine.status === 'Operating' ? '#00aa00' : '#aa6600'};">${mine.status}</span></p>
            <p style="margin: 0; color: #555; font-size: 11px; font-style: italic;">${mine.details}</p>
          </div>
        `;

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: false
        }).setHTML(popupContent);

        // Add marker to map
        new mapboxgl.Marker(markerEl)
          .setLngLat(mine.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    setMapInitialized(true);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox_token', mapboxToken);
      initializeMap(mapboxToken);
      setShowTokenInput(false);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapInitialized && !showTokenInput) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <MapPin className="w-16 h-16 text-uranium mx-auto mb-4" />
          <CardTitle>Interactive Mapping Portal</CardTitle>
          <CardDescription>
            To use the interactive map, you need a Mapbox access token. Get yours free at{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-uranium hover:underline">
              mapbox.com
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={() => setShowTokenInput(true)} variant="uranium">
            <Settings className="w-4 h-4 mr-2" />
            Configure Map Access
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showTokenInput && !mapInitialized) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Enter Mapbox Token</CardTitle>
          <CardDescription>
            Your token will be saved locally for future use
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="password"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6IjEyM..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <div className="flex gap-2">
            <Button onClick={handleTokenSubmit} className="flex-1">
              Initialize Map
            </Button>
            <Button variant="outline" onClick={() => setShowTokenInput(false)}>
              Cancel
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            <Info className="w-3 h-3 inline mr-1" />
            Get your free token at mapbox.com
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Live Mining Map Portal</h3>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => {
            localStorage.removeItem('mapbox_token');
            setMapInitialized(false);
            setMapboxToken('');
            map.current?.remove();
          }}
        >
          <Settings className="w-4 h-4 mr-2" />
          Reconfigure
        </Button>
      </div>
      
      <div className="relative h-[600px] rounded-xl overflow-hidden border border-border">
        <div ref={mapContainer} className="absolute inset-0" />
        
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
            className="hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => {
              if (map.current) {
                map.current.flyTo({
                  center: mine.coordinates,
                  zoom: 12,
                  pitch: 60
                });
              }
            }}
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
            <CardContent className="space-y-2 text-sm">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;