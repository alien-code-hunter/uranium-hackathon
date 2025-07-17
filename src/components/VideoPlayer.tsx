import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Volume2, VolumeX, Maximize, X } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
  description?: string;
  onClose?: () => void;
  autoPlay?: boolean;
  showMultipleVideos?: boolean;
}

const sampleVideos = [
  {
    id: 'intro',
    title: 'Introduction to Uranium Mining in Namibia',
    url: 'https://www.youtube.com/embed/GmHPN43xz20',
    description: 'Learn about Namibia’s role in global uranium production.',
    autoplay: true,

  },
  {
    id: 'safety',
    title: 'Safety in Uranium Mining Operations',
    url: 'https://www.youtube.com/embed/4pb_dNqM3Fk?si=WJmL5YDzbXgjwWJm',
    description: 'Discover safety protocols in modern uranium mining.',
    autoplay: true,
  },
  {
    id: 'process',
    title: 'From Mine to Nuclear Fuel',
    url: 'https://www.youtube.com/embed/apODDbgFFPI?si=JrvZAKoxZJQnfOzg',
    description: 'Follow the uranium journey to nuclear fuel.',
    autoplay: true,
  }
];

const VideoPlayer: React.FC<VideoPlayerProps> = ({
                                                   url,
                                                   title,
                                                   description,
                                                   onClose,
                                                   autoPlay = false,
                                                   showMultipleVideos = false
                                                 }) => {
  const [currentVideo, setCurrentVideo] = useState({ url, title, description });
  const [muted, setMuted] = useState(false);

  return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-5xl bg-card rounded-lg overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h2 className="text-xl font-bold text-foreground">{currentVideo.title}</h2>
                {currentVideo.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {currentVideo.description}
                    </p>
                )}
              </div>
              {onClose && (
                  <Button variant="ghost" size="sm" onClick={onClose}>
                    <X className="h-4 w-4" />
                  </Button>
              )}
            </div>

            {/* Embedded YouTube Video */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${currentVideo.url}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              />
            </div>

            {/* Controls */}
            <div className="flex justify-between p-4 bg-muted">
              <div className="flex gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMuted(!muted)}
                >
                  {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <Maximize className="h-5 w-5" />
              </Button>
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
                            onClick={() => setCurrentVideo(video)}
                        >
                          <h4 className="font-medium text-sm mb-1">{video.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{video.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-primary"></span>
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
