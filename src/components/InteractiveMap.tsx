import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, MapPin, Building, Truck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Mine {
  id: string;
  name: string;
  type: 'Open Pit' | 'Underground' | 'In-Situ';
  coordinates: [number, number];
  production: string;
  operator: string;
  status: 'Active' | 'Suspended' | 'Planned';
  employees: number;
  established: number;
  reserves: string;
  description: string;
}

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedMine, setSelectedMine] = useState<Mine | null>(null);

  // Real Namibian uranium mines data
  const mines: Mine[] = [
    {
      id: 'rossing',
      name: 'Rössing Uranium Mine',
      type: 'Open Pit',
      coordinates: [15.2167, -22.4667],
      production: '2,400 tonnes U3O8/year',
      operator: 'China National Uranium Corporation (CNUC)',
      status: 'Active',
      employees: 1200,
      established: 1976,
      reserves: '85,000 tonnes U3O8',
      description: 'Namibia\'s first commercial uranium mine and one of the largest open-pit uranium mines in the world. Located in the Namib Desert, 70km northeast of Swakopmund.'
    },
    {
      id: 'husab',
      name: 'Husab Uranium Mine',
      type: 'Open Pit',
      coordinates: [14.8333, -22.5],
      production: '5,500 tonnes U3O8/year',
      operator: 'Swakop Uranium (Pty) Ltd',
      status: 'Active',
      employees: 1800,
      established: 2016,
      reserves: '288,000 tonnes U3O8',
      description: 'The largest uranium mine in Africa and third-largest in the world. A joint venture between CGN Mining and the Namibian government, producing yellowcake for nuclear fuel.'
    },
    {
      id: 'langer-heinrich',
      name: 'Langer Heinrich Mine',
      type: 'Open Pit',
      coordinates: [15.3333, -23.0],
      production: '1,500 tonnes U3O8/year',
      operator: 'Paladin Energy Ltd (75%)',
      status: 'Active',
      employees: 450,
      established: 2007,
      reserves: '45,000 tonnes U3O8',
      description: 'Restarted production in 2024 after being placed on care and maintenance in 2018. Located in the Central Namib uranium province.'
    },
    {
      id: 'trekkopje',
      name: 'Trekkopje Project',
      type: 'Open Pit',
      coordinates: [14.9167, -22.7],
      production: 'Planned: 1,360 tonnes U3O8/year',
      operator: 'Areva Resources Namibia',
      status: 'Suspended',
      employees: 0,
      established: 2011,
      reserves: '55,000 tonnes U3O8',
      description: 'Suspended indefinitely in 2013 due to low uranium prices. Located between the Rössing and Husab mines in the Erongo region.'
    }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNscWc4NW1zZzBjeTMyaXFuODR2a3JqNzQifQ.example'; // Demo token, user should replace
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [15.0, -22.5], // Center on Namibian uranium region
      zoom: 8,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add mine markers
    mines.forEach((mine) => {
      const el = document.createElement('div');
      el.className = 'mine-marker';
      el.style.cssText = `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${mine.status === 'Active' ? '#22c55e' : mine.status === 'Suspended' ? '#f59e0b' : '#6b7280'};
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        cursor: pointer;
      `;

      el.addEventListener('click', () => {
        setSelectedMine(mine);
      });

      new mapboxgl.Marker(el)
        .setLngLat(mine.coordinates)
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive Mining Map
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore Namibia's uranium mining locations, production data, and operational details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div ref={mapContainer} className="h-[500px] rounded-lg overflow-hidden" />
                {!mapboxgl.accessToken && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white p-4 rounded-lg">
                    <div className="text-center">
                      <p className="mb-2">Map requires Mapbox token</p>
                      <p className="text-sm opacity-80">Get your free token at mapbox.com</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Mine Details */}
          <div>
            {selectedMine ? (
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">{selectedMine.name}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedMine(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant={selectedMine.status === 'Active' ? 'default' : 'secondary'}>
                      {selectedMine.status}
                    </Badge>
                    <Badge variant="outline">{selectedMine.type}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {selectedMine.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-primary" />
                      <span className="font-medium">Operator:</span>
                      <span>{selectedMine.operator}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="h-4 w-4 text-primary" />
                      <span className="font-medium">Production:</span>
                      <span>{selectedMine.production}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium">Employees:</span>
                      <span>{selectedMine.employees.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">Established:</span>
                      <span>{selectedMine.established}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Reserves</h4>
                    <p className="text-lg font-bold text-primary">{selectedMine.reserves}</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Select a Mine</h3>
                  <p className="text-muted-foreground">
                    Click on any mine marker to view detailed information about operations, production, and infrastructure.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center">
          <Card className="bg-card/90 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                  <span>Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white"></div>
                  <span>Suspended</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-500 border-2 border-white"></div>
                  <span>Planned</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;