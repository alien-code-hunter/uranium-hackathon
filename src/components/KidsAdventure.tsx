import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { Gamepad2, Brain, BookOpen, Award, Star, Zap, Atom, Trophy, Play, RotateCcw, Shuffle, Heart, Target, Clock, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PlayerStats {
  player_name: string;
  total_score: number;
  games_played: number;
  quiz_completed: number;
  mining_levels_completed: number;
  stories_watched: number;
  achievements_earned: string[];
}

const KidsAdventure = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [leaderboard, setLeaderboard] = useState<PlayerStats[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'results'>('menu');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [miningLevel, setMiningLevel] = useState(1);
  const [memoryCards, setMemoryCards] = useState<Array<{id: number, symbol: string, flipped: boolean, matched: boolean}>>([]);
  const [puzzleState, setPuzzleState] = useState<Array<Array<number>>>([]);
  const { toast } = useToast();

  // Extended Nuclear Quiz Questions (30+ questions)
  const quizQuestions = [
    // Easy Questions (1-12)
    {
      question: "What is uranium?",
      options: ["A type of dinosaur", "A metal found in rocks", "A kind of food", "A color"],
      correct: 1,
      explanation: "Uranium is a special metal found naturally in rocks and soil. It's very important for making clean energy!",
      difficulty: "easy"
    },
    {
      question: "What color is uranium ore when it's processed?",
      options: ["Bright yellow", "Deep blue", "Bright red", "Pure green"],
      correct: 0,
      explanation: "Processed uranium is bright yellow and is called 'yellowcake'! It looks like yellow powder.",
      difficulty: "easy"
    },
    {
      question: "Which country is famous for uranium mining in Africa?",
      options: ["Egypt", "Namibia", "Morocco", "Kenya"],
      correct: 1,
      explanation: "Namibia is one of the world's largest uranium producers in Africa!",
      difficulty: "easy"
    },
    {
      question: "How does uranium help make electricity?",
      options: ["It burns like wood", "It spins turbines with wind", "Its atoms split to release energy", "It reflects sunlight"],
      correct: 2,
      explanation: "Uranium atoms can split apart and release lots of energy, which we use to make electricity for our homes!",
      difficulty: "easy"
    },
    {
      question: "What do we call energy that doesn't pollute the air?",
      options: ["Dirty energy", "Clean energy", "Old energy", "Slow energy"],
      correct: 1,
      explanation: "Clean energy includes nuclear, solar, and wind power that don't create pollution!",
      difficulty: "easy"
    },
    {
      question: "Where is most of the world's uranium found?",
      options: ["In the ocean", "In trees", "In underground rocks", "In the clouds"],
      correct: 2,
      explanation: "Uranium is hidden deep underground in special rocks. Miners work carefully to dig it up safely!",
      difficulty: "easy"
    },
    {
      question: "What safety equipment do uranium miners wear?",
      options: ["Swimming suits", "Special protective suits", "Regular clothes", "Superhero costumes"],
      correct: 1,
      explanation: "Miners wear special protective suits and equipment to stay safe while working!",
      difficulty: "easy"
    },
    {
      question: "How deep underground is uranium usually found?",
      options: ["Just under the grass", "Very deep in rocks", "In tree roots", "In clouds"],
      correct: 1,
      explanation: "Uranium is found deep underground in special rocks that formed millions of years ago!",
      difficulty: "easy"
    },
    {
      question: "What is the center of an atom called?",
      options: ["The shell", "The nucleus", "The electron", "The proton"],
      correct: 1,
      explanation: "The nucleus is at the center of every atom, like the core of an apple!",
      difficulty: "easy"
    },
    {
      question: "What are the tiny particles that orbit around the nucleus?",
      options: ["Neutrons", "Protons", "Electrons", "Atoms"],
      correct: 2,
      explanation: "Electrons are tiny particles that zoom around the nucleus like planets around the sun!",
      difficulty: "easy"
    },
    {
      question: "What happens when uranium atoms split?",
      options: ["They disappear", "They release energy", "They turn into water", "They become bigger"],
      correct: 1,
      explanation: "When uranium atoms split, they release lots of energy that we can use to make electricity!",
      difficulty: "easy"
    },
    {
      question: "Nuclear power plants make electricity without creating what?",
      options: ["Heat", "Light", "Air pollution", "Noise"],
      correct: 2,
      explanation: "Nuclear power plants make electricity without creating air pollution, making them very clean!",
      difficulty: "easy"
    },

    // Medium Questions (13-24)
    {
      question: "What is the process called when uranium atoms split?",
      options: ["Nuclear fusion", "Nuclear fission", "Nuclear rotation", "Nuclear creation"],
      correct: 1,
      explanation: "Nuclear fission is when uranium atoms split apart, releasing energy we can use!",
      difficulty: "medium"
    },
    {
      question: "Which type of mining uses special liquids to dissolve uranium underground?",
      options: ["Open pit mining", "Underground mining", "In-situ leaching", "Surface mining"],
      correct: 2,
      explanation: "In-situ leaching uses special solutions to dissolve uranium without digging big holes!",
      difficulty: "medium"
    },
    {
      question: "What is the name of Namibia's largest uranium mine?",
      options: ["Rössing Mine", "Gold Mine", "Diamond Mine", "Silver Mine"],
      correct: 0,
      explanation: "The Rössing Mine in Namibia is one of the world's largest uranium mines!",
      difficulty: "medium"
    },
    {
      question: "How many neutrons does a uranium-235 atom have?",
      options: ["92", "235", "143", "327"],
      correct: 2,
      explanation: "Uranium-235 has 143 neutrons! (235 total particles minus 92 protons = 143 neutrons)",
      difficulty: "medium"
    },
    {
      question: "What device measures radiation levels?",
      options: ["Thermometer", "Geiger counter", "Compass", "Calculator"],
      correct: 1,
      explanation: "A Geiger counter is a special device that can detect and measure radiation levels!",
      difficulty: "medium"
    },
    {
      question: "What do nuclear power plants use to control the reaction?",
      options: ["Water", "Control rods", "Magnets", "Fans"],
      correct: 1,
      explanation: "Control rods can be inserted or removed to control how fast the nuclear reaction happens!",
      difficulty: "medium"
    },
    {
      question: "What is used to slow down neutrons in a nuclear reactor?",
      options: ["Accelerator", "Moderator", "Amplifier", "Generator"],
      correct: 1,
      explanation: "A moderator slows down neutrons so they can better split other uranium atoms!",
      difficulty: "medium"
    },
    {
      question: "How long has uranium been used for energy?",
      options: ["10 years", "50 years", "80+ years", "200 years"],
      correct: 2,
      explanation: "Uranium has been used for energy for over 80 years, starting in the 1940s!",
      difficulty: "medium"
    },
    {
      question: "What percentage of the world's electricity comes from nuclear power?",
      options: ["About 5%", "About 10%", "About 20%", "About 50%"],
      correct: 1,
      explanation: "Nuclear power provides about 10% of the world's electricity - that's a lot of clean energy!",
      difficulty: "medium"
    },
    {
      question: "What is enriched uranium?",
      options: ["Uranium with added vitamins", "Uranium with more U-235", "Uranium mixed with gold", "Uranium from space"],
      correct: 1,
      explanation: "Enriched uranium has more of the special U-235 atoms that are good for making energy!",
      difficulty: "medium"
    },
    {
      question: "How many uranium atoms are in one gram of uranium?",
      options: ["About 1 million", "About 1 billion", "About 1 trillion", "About 2.5 trillion"],
      correct: 3,
      explanation: "There are about 2.5 trillion uranium atoms in just one gram - that's a huge number!",
      difficulty: "medium"
    },
    {
      question: "What happens to used nuclear fuel?",
      options: ["It disappears", "It's safely stored", "It turns into gold", "It goes to space"],
      correct: 1,
      explanation: "Used nuclear fuel is carefully stored in special containers to keep everyone safe!",
      difficulty: "medium"
    },

    // Hard Questions (25-35)
    {
      question: "What is the half-life of uranium-235?",
      options: ["1 year", "100 years", "700 million years", "1 billion years"],
      correct: 2,
      explanation: "Uranium-235 has a half-life of about 700 million years - that's incredibly long!",
      difficulty: "hard"
    },
    {
      question: "Which scientist discovered uranium?",
      options: ["Marie Curie", "Albert Einstein", "Martin Klaproth", "Isaac Newton"],
      correct: 2,
      explanation: "Martin Klaproth discovered uranium in 1789 and named it after the planet Uranus!",
      difficulty: "hard"
    },
    {
      question: "What is the atomic number of uranium?",
      options: ["90", "92", "94", "96"],
      correct: 1,
      explanation: "Uranium has 92 protons in its nucleus, giving it the atomic number 92!",
      difficulty: "hard"
    },
    {
      question: "Which uranium isotope is most common in nature?",
      options: ["Uranium-235", "Uranium-238", "Uranium-234", "Uranium-236"],
      correct: 1,
      explanation: "Uranium-238 makes up about 99.3% of all natural uranium!",
      difficulty: "hard"
    },
    {
      question: "What type of radiation does uranium naturally emit?",
      options: ["Only alpha", "Only beta", "Only gamma", "Alpha, beta, and gamma"],
      correct: 3,
      explanation: "Natural uranium emits all three types of radiation: alpha, beta, and gamma particles!",
      difficulty: "hard"
    },
    {
      question: "How much energy can one uranium pellet produce compared to coal?",
      options: ["Same as 1 ton of coal", "Same as 3 tons of coal", "Same as 1,000 tons of coal", "Same as 1 million tons of coal"],
      correct: 2,
      explanation: "One small uranium pellet can produce as much energy as 1,000 tons of coal!",
      difficulty: "hard"
    },
    {
      question: "What is uranium's melting point?",
      options: ["100°C", "1,000°C", "1,135°C", "3,000°C"],
      correct: 2,
      explanation: "Uranium melts at 1,135°C - that's much hotter than boiling water!",
      difficulty: "hard"
    },
    {
      question: "Which process combines atoms instead of splitting them?",
      options: ["Nuclear fission", "Nuclear fusion", "Nuclear decay", "Nuclear absorption"],
      correct: 1,
      explanation: "Nuclear fusion combines atoms together, like what happens in the sun!",
      difficulty: "hard"
    },
    {
      question: "What percentage of uranium-235 is needed for reactor fuel?",
      options: ["About 1%", "About 3-5%", "About 20%", "About 90%"],
      correct: 1,
      explanation: "Reactor fuel needs about 3-5% uranium-235, much more than the 0.7% found in nature!",
      difficulty: "hard"
    },
    {
      question: "How many countries use nuclear power for electricity?",
      options: ["About 10", "About 20", "About 30", "About 50"],
      correct: 2,
      explanation: "About 30 countries around the world use nuclear power to generate electricity!",
      difficulty: "hard"
    },
    {
      question: "What is depleted uranium?",
      options: ["Uranium from space", "Uranium with less U-235", "Uranium mixed with water", "Uranium that glows"],
      correct: 1,
      explanation: "Depleted uranium has had most of its U-235 removed during the enrichment process!",
      difficulty: "hard"
    }
  ];

  // Memory Game Setup
  const initializeMemoryGame = () => {
    const symbols = ['⚛️', '☢️', '🔬', '⚡', '🏭', '🌱', '💡', '🔋'];
    const pairs = [...symbols, ...symbols];
    const shuffled = pairs.sort(() => Math.random() - 0.5);
    
    setMemoryCards(shuffled.map((symbol, index) => ({
      id: index,
      symbol,
      flipped: false,
      matched: false
    })));
  };

  // Puzzle Game Setup (3x3 sliding puzzle)
  const initializePuzzle = () => {
    const solved = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    const shuffled = [...solved];
    
    // Shuffle the puzzle
    for (let i = 0; i < 100; i++) {
      const moves = getPossibleMoves(shuffled);
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      movePuzzlePiece(shuffled, randomMove.row, randomMove.col);
    }
    
    setPuzzleState(shuffled);
  };

  const getPossibleMoves = (puzzle: number[][]) => {
    const moves = [];
    const emptyPos = findEmptyPosition(puzzle);
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    directions.forEach(([dr, dc]) => {
      const newRow = emptyPos.row + dr;
      const newCol = emptyPos.col + dc;
      if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 3) {
        moves.push({ row: newRow, col: newCol });
      }
    });
    
    return moves;
  };

  const findEmptyPosition = (puzzle: number[][]) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (puzzle[i][j] === 0) return { row: i, col: j };
      }
    }
    return { row: 0, col: 0 };
  };

  const movePuzzlePiece = (puzzle: number[][], row: number, col: number) => {
    const emptyPos = findEmptyPosition(puzzle);
    if (Math.abs(emptyPos.row - row) + Math.abs(emptyPos.col - col) === 1) {
      puzzle[emptyPos.row][emptyPos.col] = puzzle[row][col];
      puzzle[row][col] = 0;
      return true;
    }
    return false;
  };

  // Load player stats
  useEffect(() => {
    loadPlayerStats();
    loadLeaderboard();
    initializeMemoryGame();
    initializePuzzle();
  }, []);

  const loadPlayerStats = async () => {
    const savedName = localStorage.getItem('kidsPlayerName');
    if (savedName) {
      setPlayerName(savedName);
      const { data } = await supabase
        .from('player_stats')
        .select('*')
        .eq('player_name', savedName)
        .single();
      
      if (data) {
        setPlayerStats(data);
      }
    }
  };

  const loadLeaderboard = async () => {
    const { data } = await supabase
      .from('player_stats')
      .select('*')
      .order('total_score', { ascending: false })
      .limit(10);
    
    if (data) {
      setLeaderboard(data);
    }
  };

  const updatePlayerStats = async (updates: Partial<PlayerStats>) => {
    if (!playerName) return;

    const { data, error } = await supabase
      .from('player_stats')
      .upsert({
        player_name: playerName,
        ...updates
      }, { onConflict: 'player_name' });

    if (!error) {
      loadPlayerStats();
      loadLeaderboard();
      toast({
        title: "Stats Updated!",
        description: "Your progress has been saved.",
      });
    }
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      const isCorrect = answerIndex === quizQuestions[currentQuiz].correct;
      if (isCorrect) {
        setScore(score + (quizQuestions[currentQuiz].difficulty === 'easy' ? 10 : 
                         quizQuestions[currentQuiz].difficulty === 'medium' ? 20 : 30));
      }
      
      if (currentQuiz < quizQuestions.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectedAnswer(null);
      } else {
        setGameState('results');
        updatePlayerStats({
          total_score: (playerStats?.total_score || 0) + score,
          quiz_completed: (playerStats?.quiz_completed || 0) + 1,
          games_played: (playerStats?.games_played || 0) + 1
        });
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setGameState('menu');
    setSelectedAnswer(null);
  };

  const savePlayerName = () => {
    localStorage.setItem('kidsPlayerName', playerName);
    updatePlayerStats({
      player_name: playerName,
      total_score: 0,
      games_played: 0,
      quiz_completed: 0,
      mining_levels_completed: 0,
      stories_watched: 0,
      achievements_earned: []
    });
  };

  if (!playerName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 dark:from-purple-950 dark:via-blue-950 dark:to-green-950 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Welcome, Young Scientist! 🧪</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              Enter your name to start your uranium learning adventure!
            </p>
            <input
              type="text"
              placeholder="Your name..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full p-3 border border-border rounded-lg"
              onKeyPress={(e) => e.key === 'Enter' && playerName && savePlayerName()}
            />
            <Button 
              onClick={savePlayerName} 
              disabled={!playerName}
              className="w-full"
            >
              Start Adventure! 🚀
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 dark:from-purple-950 dark:via-blue-950 dark:to-green-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Atom className="h-10 w-10 text-purple-500" />
            Welcome back, {playerName}! 
            <Trophy className="h-10 w-10 text-yellow-500" />
          </h2>
          
          {/* Player Stats Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{playerStats?.total_score || 0}</div>
                <div className="text-sm text-muted-foreground">Total Score</div>
              </CardContent>
            </Card>
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Gamepad2 className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{playerStats?.games_played || 0}</div>
                <div className="text-sm text-muted-foreground">Games Played</div>
              </CardContent>
            </Card>
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Brain className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{playerStats?.quiz_completed || 0}</div>
                <div className="text-sm text-muted-foreground">Quizzes Done</div>
              </CardContent>
            </Card>
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{playerStats?.mining_levels_completed || 0}</div>
                <div className="text-sm text-muted-foreground">Levels Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="quiz" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Nuclear Quiz
            </TabsTrigger>
            <TabsTrigger value="mining" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              Mining Games
            </TabsTrigger>
            <TabsTrigger value="memory" className="flex items-center gap-2">
              <Shuffle className="h-4 w-4" />
              Memory Game
            </TabsTrigger>
            <TabsTrigger value="puzzle" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Uranium Puzzle
            </TabsTrigger>
            <TabsTrigger value="stories" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Stories
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          {/* Quiz Tab */}
          <TabsContent value="quiz">
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
              {gameState === 'menu' && (
                <CardContent className="p-8 text-center">
                  <Brain className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Nuclear Science Quiz</h3>
                  <p className="text-muted-foreground mb-6">
                    30+ questions about uranium, nuclear science, and clean energy!
                  </p>
                  <Button onClick={() => setGameState('playing')} size="lg" className="bg-purple-500 hover:bg-purple-600">
                    Start Quiz!
                  </Button>
                </CardContent>
              )}

              {gameState === 'playing' && (
                <>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Question {currentQuiz + 1} of {quizQuestions.length}</Badge>
                      <Badge variant={quizQuestions[currentQuiz].difficulty === 'easy' ? 'default' : 
                                   quizQuestions[currentQuiz].difficulty === 'medium' ? 'secondary' : 'destructive'}>
                        {quizQuestions[currentQuiz].difficulty}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>Score: {score}</span>
                      </div>
                    </div>
                    <Progress value={(currentQuiz / quizQuestions.length) * 100} className="mt-2" />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <h3 className="text-xl font-semibold text-center">
                      {quizQuestions[currentQuiz].question}
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {quizQuestions[currentQuiz].options.map((option, index) => (
                        <Button
                          key={index}
                          variant={
                            selectedAnswer === null ? "outline" :
                            selectedAnswer === index && index === quizQuestions[currentQuiz].correct ? "default" :
                            selectedAnswer === index ? "destructive" :
                            index === quizQuestions[currentQuiz].correct ? "default" :
                            "outline"
                          }
                          className="p-4 text-left justify-start"
                          onClick={() => selectedAnswer === null && handleQuizAnswer(index)}
                          disabled={selectedAnswer !== null}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>

                    {selectedAnswer !== null && (
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <strong>Did you know?</strong> {quizQuestions[currentQuiz].explanation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </>
              )}

              {gameState === 'results' && (
                <CardContent className="p-8 text-center">
                  <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                  <p className="text-xl mb-4">
                    You scored {score} points!
                  </p>
                  <div className="mb-6">
                    {score >= 200 && <Badge className="bg-yellow-500 text-yellow-900">Nuclear Expert! 🌟</Badge>}
                    {score >= 150 && score < 200 && <Badge className="bg-green-500 text-green-900">Great Scientist! 🎉</Badge>}
                    {score >= 100 && score < 150 && <Badge className="bg-blue-500 text-blue-900">Good Work! 👍</Badge>}
                    {score < 100 && <Badge className="bg-purple-500 text-purple-900">Keep Learning! 📚</Badge>}
                  </div>
                  <Button onClick={resetQuiz} size="lg">
                    Try Again
                  </Button>
                </CardContent>
              )}
            </Card>
          </TabsContent>

          {/* Mining Games Tab */}
          <TabsContent value="mining">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Uranium Detective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Find uranium deposits using your Geiger counter!</p>
                  <Button className="w-full" onClick={() => toast({title: "Starting Uranium Detective!", description: "Use your detector to find uranium!"})}>
                    Start Detection
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Safety First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Learn about uranium mining safety equipment!</p>
                  <Button className="w-full" onClick={() => toast({title: "Safety Training Started!", description: "Learning about protective equipment!"})}>
                    Start Safety Training
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Mining Engineer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Design and build your own uranium mine!</p>
                  <Button className="w-full" onClick={() => toast({title: "Engineering Mode Activated!", description: "Design your mine layout!"})}>
                    Start Engineering
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Memory Game Tab */}
          <TabsContent value="memory">
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Nuclear Memory Game</CardTitle>
                <p className="text-center text-muted-foreground">Match the nuclear science symbols!</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                  {memoryCards.map((card) => (
                    <Button
                      key={card.id}
                      variant="outline"
                      className="h-16 w-16 text-2xl"
                      onClick={() => {
                        if (!card.flipped && !card.matched) {
                          const newCards = [...memoryCards];
                          newCards[card.id].flipped = true;
                          setMemoryCards(newCards);
                          
                          const flippedCards = newCards.filter(c => c.flipped && !c.matched);
                          if (flippedCards.length === 2) {
                            setTimeout(() => {
                              if (flippedCards[0].symbol === flippedCards[1].symbol) {
                                flippedCards.forEach(c => c.matched = true);
                              } else {
                                flippedCards.forEach(c => c.flipped = false);
                              }
                              setMemoryCards([...newCards]);
                            }, 1000);
                          }
                        }
                      }}
                      disabled={card.flipped || card.matched}
                    >
                      {card.flipped || card.matched ? card.symbol : '❓'}
                    </Button>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Button onClick={initializeMemoryGame} variant="outline">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset Game
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Puzzle Tab */}
          <TabsContent value="puzzle">
            <Card className="max-w-md mx-auto bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Uranium Puzzle</CardTitle>
                <p className="text-center text-muted-foreground">Arrange the numbers in order!</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                  {puzzleState.map((row, rowIndex) => 
                    row.map((num, colIndex) => (
                      <Button
                        key={`${rowIndex}-${colIndex}`}
                        variant={num === 0 ? "ghost" : "outline"}
                        className="h-16 w-16 text-xl font-bold"
                        onClick={() => {
                          if (num !== 0) {
                            const newPuzzle = puzzleState.map(row => [...row]);
                            if (movePuzzlePiece(newPuzzle, rowIndex, colIndex)) {
                              setPuzzleState(newPuzzle);
                            }
                          }
                        }}
                        disabled={num === 0}
                      >
                        {num === 0 ? '' : num}
                      </Button>
                    ))
                  )}
                </div>
                <div className="text-center mt-4">
                  <Button onClick={initializePuzzle} variant="outline">
                    <Shuffle className="h-4 w-4 mr-2" />
                    Shuffle Puzzle
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stories Tab */}
          <TabsContent value="stories">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 text-center">🔬</div>
                  <h3 className="text-xl font-bold mb-2">Atom's Adventure</h3>
                  <p className="text-muted-foreground mb-4">Follow Uranium the Atom on his journey from rock to power!</p>
                  <Button className="w-full" onClick={() => updatePlayerStats({stories_watched: (playerStats?.stories_watched || 0) + 1})}>
                    <Play className="h-4 w-4 mr-2" />
                    Watch Story
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 text-center">🏜️</div>
                  <h3 className="text-xl font-bold mb-2">Desert Discovery</h3>
                  <p className="text-muted-foreground mb-4">Explore Namibia's desert and discover uranium!</p>
                  <Button className="w-full" onClick={() => updatePlayerStats({stories_watched: (playerStats?.stories_watched || 0) + 1})}>
                    <Play className="h-4 w-4 mr-2" />
                    Watch Story
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard">
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  Global Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((player, index) => (
                    <div key={player.player_name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          index === 0 ? 'bg-yellow-500 text-yellow-900' :
                          index === 1 ? 'bg-gray-400 text-gray-900' :
                          index === 2 ? 'bg-amber-600 text-amber-100' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{player.player_name}</div>
                          <div className="text-sm text-muted-foreground">
                            {player.games_played} games played
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{player.total_score}</div>
                        <div className="text-sm text-muted-foreground">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default KidsAdventure;