import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Gamepad2, Map, Compass, Zap, Star, Trophy, Play } from 'lucide-react';
import adventureImage from '@/assets/adventure-game.jpg';

interface AdventureLevel {
  id: number;
  title: string;
  description: string;
  objective: string;
  challenges: string[];
  rewards: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
}

const AdvancedKidsAdventure = () => {
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [playerStats, setPlayerStats] = useState({
    knowledge: 25,
    exploration: 40,
    safety: 60,
    teamwork: 30
  });
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'completed'>('menu');

  const adventureLevels: AdventureLevel[] = [
    {
      id: 1,
      title: "The Uranium Detective",
      description: "Help Dr. Glow discover hidden uranium deposits using special detection tools!",
      objective: "Find 5 uranium samples using your Geiger counter and rock analyzer",
      challenges: [
        "Navigate through the desert maze",
        "Identify real uranium from fake rocks",
        "Avoid radiation hotspots",
        "Collect safety equipment along the way"
      ],
      rewards: ["Geology Badge", "Safety Certificate", "50 Knowledge Points"],
      difficulty: "Easy",
      completed: false
    },
    {
      id: 2,
      title: "The Mining Safety Inspector",
      description: "Ensure all mining operations follow safety protocols and protect workers!",
      objective: "Complete safety inspections at 3 different mining sites",
      challenges: [
        "Check all safety equipment is working",
        "Interview workers about safety procedures",
        "Identify potential hazards",
        "Create safety improvement plans"
      ],
      rewards: ["Safety Expert Badge", "Leadership Certificate", "75 Knowledge Points"],
      difficulty: "Medium",
      completed: false
    },
    {
      id: 3,
      title: "The Environmental Guardian",
      description: "Balance uranium mining with environmental protection in this challenging mission!",
      objective: "Design an eco-friendly mining operation that protects local wildlife",
      challenges: [
        "Study animal migration patterns",
        "Plan water conservation systems",
        "Design waste management solutions",
        "Create rehabilitation plans"
      ],
      rewards: ["Environmental Hero Badge", "Conservation Certificate", "100 Knowledge Points"],
      difficulty: "Hard",
      completed: false
    }
  ];

  const [levels, setLevels] = useState(adventureLevels);

  const startLevel = (levelId: number) => {
    setCurrentLevel(levelId);
    setGameState('playing');
  };

  const completeLevel = (levelId: number) => {
    setLevels(prev => prev.map(level => 
      level.id === levelId ? { ...level, completed: true } : level
    ));
    
    // Update player stats based on level completion
    setPlayerStats(prev => ({
      knowledge: Math.min(100, prev.knowledge + 10),
      exploration: Math.min(100, prev.exploration + 15),
      safety: Math.min(100, prev.safety + 8),
      teamwork: Math.min(100, prev.teamwork + 12)
    }));
    
    setGameState('completed');
  };

  const getCurrentLevel = () => levels.find(l => l.id === currentLevel);

  const MiningSimulator = () => {
    const [miningProgress, setMiningProgress] = useState(0);
    const [isExtracting, setIsExtracting] = useState(false);
    const [uraniumFound, setUraniumFound] = useState(0);

    const startMining = () => {
      setIsExtracting(true);
      const interval = setInterval(() => {
        setMiningProgress(prev => {
          const newProgress = prev + Math.random() * 10;
          if (newProgress >= 100) {
            setIsExtracting(false);
            setUraniumFound(u => u + Math.floor(Math.random() * 5) + 1);
            clearInterval(interval);
            return 0;
          }
          return newProgress;
        });
      }, 200);
    };

    return (
      <Card className="bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            Interactive Mining Simulator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <img 
              src={adventureImage} 
              alt="Mining Adventure"
              className="w-full max-w-md mx-auto rounded-lg mb-4"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{uraniumFound}</div>
              <div className="text-sm">Uranium Samples Found</div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{Math.floor(miningProgress)}%</div>
              <div className="text-sm">Extraction Progress</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Mining Progress</span>
              <span>{Math.floor(miningProgress)}%</span>
            </div>
            <Progress value={miningProgress} className="h-2" />
          </div>

          <Button 
            onClick={startMining} 
            disabled={isExtracting}
            className="w-full"
          >
            {isExtracting ? "Extracting..." : "Start Mining Operation"}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Use your mining tools to safely extract uranium samples!
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 dark:from-orange-950 dark:via-red-950 dark:to-pink-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Compass className="h-10 w-10 text-orange-500" />
            Start Your Adventure!
            <Map className="h-10 w-10 text-red-500" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Embark on exciting missions to learn about uranium mining, safety, and environmental protection!
          </p>
        </div>

        {gameState === 'menu' && (
          <div className="space-y-8">
            {/* Player Stats */}
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Your Explorer Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Knowledge</span>
                      <span>{playerStats.knowledge}/100</span>
                    </div>
                    <Progress value={playerStats.knowledge} className="h-2 mb-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Exploration</span>
                      <span>{playerStats.exploration}/100</span>
                    </div>
                    <Progress value={playerStats.exploration} className="h-2 mb-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Safety</span>
                      <span>{playerStats.safety}/100</span>
                    </div>
                    <Progress value={playerStats.safety} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Teamwork</span>
                      <span>{playerStats.teamwork}/100</span>
                    </div>
                    <Progress value={playerStats.teamwork} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adventure Levels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {levels.map((level) => (
                <Card key={level.id} className={`bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all ${level.completed ? 'ring-2 ring-green-500' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {level.title}
                      {level.completed && <Trophy className="h-5 w-5 text-yellow-500" />}
                    </CardTitle>
                    <Badge variant={
                      level.difficulty === 'Easy' ? 'default' :
                      level.difficulty === 'Medium' ? 'secondary' : 'destructive'
                    }>
                      {level.difficulty}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Mission:</h4>
                      <p className="text-sm">{level.objective}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Challenges:</h4>
                      <ul className="text-xs space-y-1">
                        {level.challenges.slice(0, 2).map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <Star className="h-3 w-3 text-yellow-500 mt-0.5 shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Rewards:</h4>
                      <div className="flex flex-wrap gap-1">
                        {level.rewards.map((reward, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {reward}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={() => startLevel(level.id)}
                      className="w-full"
                      disabled={level.completed}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {level.completed ? 'Completed!' : 'Start Mission'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mining Simulator */}
            <div className="max-w-2xl mx-auto">
              <MiningSimulator />
            </div>
          </div>
        )}

        {gameState === 'playing' && currentLevel && (
          <Card className="max-w-3xl mx-auto bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Mission: {getCurrentLevel()?.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <img 
                  src={adventureImage} 
                  alt="Adventure Scene"
                  className="w-full max-w-md mx-auto rounded-lg mb-4"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Mission Objective:</h3>
                <p>{getCurrentLevel()?.objective}</p>
                
                <h3 className="text-lg font-semibold">Your Tasks:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getCurrentLevel()?.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <Zap className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Complete this mission to earn rewards and advance your explorer skills!
                </p>
                <Button 
                  onClick={() => completeLevel(currentLevel)}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Complete Mission
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setGameState('menu')}
                >
                  Back to Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {gameState === 'completed' && (
          <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-8">
              <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mission Completed!</h3>
              <p className="text-lg mb-6">
                Congratulations! You've successfully completed the mission and earned valuable rewards!
              </p>
              <Button onClick={() => setGameState('menu')}>
                Continue Adventure
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default AdvancedKidsAdventure;