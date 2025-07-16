import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GamepadIcon, Zap, Gem, Shield, Target, Timer } from 'lucide-react';

interface GameState {
  level: number;
  score: number;
  timeLeft: number;
  uraniumFound: number;
  safetyPoints: number;
  isPlaying: boolean;
  gameOver: boolean;
}

const MiningGameSimulator = () => {
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    score: 0,
    timeLeft: 60,
    uraniumFound: 0,
    safetyPoints: 100,
    isPlaying: false,
    gameOver: false
  });

  const [clickGrid, setClickGrid] = useState<boolean[]>(Array(16).fill(false));
  const [uraniumPositions] = useState<Set<number>>(new Set([3, 7, 10, 14]));
  const [hazardPositions] = useState<Set<number>>(new Set([2, 8, 13]));

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (gameState.isPlaying && gameState.timeLeft > 0) {
      interval = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (gameState.timeLeft === 0) {
      endGame();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState.isPlaying, gameState.timeLeft]);

  const startGame = () => {
    setGameState({
      level: 1,
      score: 0,
      timeLeft: 60,
      uraniumFound: 0,
      safetyPoints: 100,
      isPlaying: true,
      gameOver: false
    });
    setClickGrid(Array(16).fill(false));
  };

  const endGame = () => {
    setGameState(prev => ({
      ...prev,
      isPlaying: false,
      gameOver: true
    }));
  };

  const handleCellClick = (index: number) => {
    if (!gameState.isPlaying || clickGrid[index]) return;

    const newClickGrid = [...clickGrid];
    newClickGrid[index] = true;
    setClickGrid(newClickGrid);

    if (uraniumPositions.has(index)) {
      // Found uranium!
      setGameState(prev => ({
        ...prev,
        uraniumFound: prev.uraniumFound + 1,
        score: prev.score + 100
      }));
    } else if (hazardPositions.has(index)) {
      // Hit a hazard!
      setGameState(prev => ({
        ...prev,
        safetyPoints: Math.max(0, prev.safetyPoints - 25),
        score: Math.max(0, prev.score - 50)
      }));
    } else {
      // Empty space
      setGameState(prev => ({
        ...prev,
        score: prev.score + 10
      }));
    }

    // Check win condition
    if (gameState.uraniumFound >= 3) {
      endGame();
    }
  };

  const getCellContent = (index: number) => {
    if (!clickGrid[index]) {
      return '?';
    }
    
    if (uraniumPositions.has(index)) {
      return '💎';
    } else if (hazardPositions.has(index)) {
      return '⚠️';
    } else {
      return '⭕';
    }
  };

  const getCellStyle = (index: number) => {
    if (!clickGrid[index]) {
      return 'bg-muted hover:bg-muted/80 cursor-pointer';
    }
    
    if (uraniumPositions.has(index)) {
      return 'bg-green-200 dark:bg-green-800';
    } else if (hazardPositions.has(index)) {
      return 'bg-red-200 dark:bg-red-800';
    } else {
      return 'bg-gray-200 dark:bg-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <GamepadIcon className="h-10 w-10 text-blue-500" />
            Mining Game Simulator
            <Gem className="h-10 w-10 text-purple-500" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Test your uranium detection skills! Find uranium deposits while avoiding hazards and maintaining safety protocols.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">Uranium Detection Challenge</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Game Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Target className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Score</span>
                </div>
                <div className="text-xl font-bold text-blue-600">{gameState.score}</div>
              </div>
              
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Timer className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Time</span>
                </div>
                <div className="text-xl font-bold text-orange-600">{gameState.timeLeft}s</div>
              </div>
              
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Gem className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Found</span>
                </div>
                <div className="text-xl font-bold text-green-600">{gameState.uraniumFound}/4</div>
              </div>
              
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Shield className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Safety</span>
                </div>
                <div className="text-xl font-bold text-purple-600">{gameState.safetyPoints}%</div>
              </div>
            </div>

            {/* Safety Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Safety Level</span>
                <span>{gameState.safetyPoints}%</span>
              </div>
              <Progress 
                value={gameState.safetyPoints} 
                className={`h-3 ${gameState.safetyPoints <= 25 ? 'bg-red-100' : ''}`}
              />
            </div>

            {/* Game Grid */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                {Array.from({ length: 16 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCellClick(index)}
                    disabled={!gameState.isPlaying || clickGrid[index]}
                    className={`
                      aspect-square w-16 h-16 rounded-lg border-2 border-border
                      flex items-center justify-center text-lg font-bold
                      transition-all duration-200 hover:scale-105
                      ${getCellStyle(index)}
                      ${!gameState.isPlaying ? 'cursor-not-allowed opacity-50' : ''}
                    `}
                  >
                    {getCellContent(index)}
                  </button>
                ))}
              </div>
            </div>

            {/* Game Instructions */}
            <div className="text-center space-y-2">
              <h3 className="font-semibold">How to Play:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span>💎</span>
                  <span>Find uranium deposits (+100 points)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Avoid hazards (-25 safety, -50 points)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⭕</span>
                  <span>Safe exploration (+10 points)</span>
                </div>
              </div>
            </div>

            {/* Game Controls */}
            <div className="text-center space-y-4">
              {!gameState.isPlaying && !gameState.gameOver && (
                <Button onClick={startGame} className="bg-blue-500 hover:bg-blue-600">
                  <Zap className="h-4 w-4 mr-2" />
                  Start Mining Expedition
                </Button>
              )}

              {gameState.gameOver && (
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">
                      {gameState.uraniumFound >= 3 ? '🎉 Mission Success!' : '⏰ Time\'s Up!'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Final Score: {gameState.score} points
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Uranium Found: {gameState.uraniumFound}/4 deposits
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Safety Rating: {gameState.safetyPoints}%
                    </p>
                    
                    {gameState.score >= 300 && (
                      <Badge className="mt-2 bg-yellow-500 text-yellow-900">
                        🏆 Expert Miner!
                      </Badge>
                    )}
                    {gameState.score >= 200 && gameState.score < 300 && (
                      <Badge className="mt-2 bg-green-500 text-green-900">
                        ⭐ Skilled Explorer!
                      </Badge>
                    )}
                  </div>
                  
                  <Button onClick={startGame} variant="outline">
                    <Zap className="h-4 w-4 mr-2" />
                    Play Again
                  </Button>
                </div>
              )}

              {gameState.isPlaying && (
                <div className="text-sm text-muted-foreground">
                  Click on the grid to explore! Find uranium while maintaining safety.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MiningGameSimulator;