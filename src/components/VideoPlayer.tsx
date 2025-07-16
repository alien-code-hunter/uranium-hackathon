import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
  description?: string;
  thumbnail?: string;
  onClose?: () => void;
  autoPlay?: boolean;
  showMultipleVideos?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  title,
  description,
  thumbnail,
  onClose,
  autoPlay = false,
  showMultipleVideos = false
}) => {
  const [playing, setPlaying] = useState(autoPlay);
  const [muted, setMuted] = useState(false);

  // Sample educational videos about uranium and mining
  const sampleVideos = [
    {
      id: 'intro',
      title: 'Introduction to Uranium Mining in Namibia',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Learn about Namibia\'s role in global uranium production and the importance of this industry to the nation\'s economy.',
      duration: '8:45'
    },
    {
      id: 'safety',
      title: 'Safety in Uranium Mining Operations',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Discover the safety protocols and environmental protection measures used in modern uranium mining.',
      duration: '12:30'
    },
    {
      id: 'process',
      title: 'From Mine to Nuclear Fuel',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Follow the journey of uranium from extraction to processing into nuclear fuel for power generation.',
      duration: '15:20'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-card">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h2 className="text-xl font-bold text-foreground">{title}</h2>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              )}
            </div>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Video Player Placeholder */}
          <div className="relative bg-black h-[400px] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                {playing ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8" />
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm opacity-80 mb-4">Educational Video Content</p>
              <Button
                variant="ghost"
                onClick={() => setPlaying(!playing)}
                className="text-white hover:bg-white/20"
              >
                {playing ? 'Pause' : 'Play'} Video
              </Button>
            </div>
            
            {/* Custom Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPlaying(!playing)}
                    className="text-white hover:bg-white/20"
                  >
                    {playing ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMuted(!muted)}
                    className="text-white hover:bg-white/20"
                  >
                    {muted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Related Videos */}
          {showMultipleVideos && (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Featured Educational Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sampleVideos.map((video) => (
                  <div
                    key={video.id}
                    className="p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
                    onClick={() => window.open(video.url, '_blank')}
                  >
                    <h4 className="font-medium text-sm mb-1">{video.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary">{video.duration}</span>
                      <Button variant="ghost" size="sm">
                        <Play className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoPlayer;