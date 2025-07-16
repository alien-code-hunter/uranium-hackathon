import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GamepadIcon, Brain, Target, Zap, Trophy, Star, RotateCcw, Shuffle, Play, Pause } from 'lucide-react';
import ReactPlayer from 'react-player';
import MiningGameSimulator from './MiningGameSimulator';
import { supabase } from '@/integrations/supabase/client';

interface QuizQuestion {
  id: string;
  question_text: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  difficulty_level: 'easy' | 'medium' | 'hard';
  category: string;
  points: number;
}

const AdvancedKidsGames = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'results'>('menu');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [miningGameLevel, setMiningGameLevel] = useState(1);
  const [miningScore, setMiningScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    loadQuizQuestions();
    insertSampleQuestions();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, timeLeft]);

  const loadQuizQuestions = async () => {
    const { data } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('age_group', 'children')
      .order('difficulty_level', { ascending: true });
    
    if (data) {
      setQuizQuestions(data as QuizQuestion[]);
    }
  };

  const insertSampleQuestions = async () => {
    const sampleQuestions = [
      // Easy Questions
      {
        question_text: "What color is uranium when it's processed into yellowcake?",
        options: ["Bright yellow", "Deep blue", "Green", "Red"],
        correct_answer: 0,
        explanation: "Uranium is called 'yellowcake' because it turns bright yellow when processed!",
        difficulty_level: "easy",
        category: "uranium",
        age_group: "children",
        points: 10
      },
      {
        question_text: "Which country is famous for uranium mining in Africa?",
        options: ["Egypt", "Namibia", "Morocco", "Kenya"],
        correct_answer: 1,
        explanation: "Namibia is one of the world's largest uranium producers in Africa!",
        difficulty_level: "easy",
        category: "mining",
        age_group: "children",
        points: 10
      },
      {
        question_text: "What do we call energy that doesn't pollute the air?",
        options: ["Dirty energy", "Clean energy", "Old energy", "Slow energy"],
        correct_answer: 1,
        explanation: "Clean energy includes nuclear, solar, and wind power that don't create pollution!",
        difficulty_level: "easy",
        category: "nuclear",
        age_group: "children",
        points: 10
      },
      // Medium Questions
      {
        question_text: "How deep underground is uranium usually found?",
        options: ["Just under the grass", "Very deep in rocks", "In tree roots", "In clouds"],
        correct_answer: 1,
        explanation: "Uranium is found deep underground in special rocks that formed millions of years ago!",
        difficulty_level: "medium",
        category: "mining",
        age_group: "children",
        points: 20
      },
      {
        question_text: "What safety equipment do uranium miners wear?",
        options: ["Swimming suits", "Special protective suits", "Regular clothes", "Superhero costumes"],
        correct_answer: 1,
        explanation: "Miners wear special protective suits and equipment to stay safe while working!",
        difficulty_level: "medium",
        category: "safety",
        age_group: "children",
        points: 20
      },
      // Hard Questions
      {
        question_text: "Which type of mining uses special liquids to dissolve uranium underground?",
        options: ["Open pit mining", "Underground mining", "In-situ leaching", "Surface mining"],
        correct_answer: 2,
        explanation: "In-situ leaching uses special solutions to dissolve uranium without digging big holes!",
        difficulty_level: "hard",
        category: "mining",
        age_group: "children",
        points: 30
      }
    ];

    // Check if questions already exist
    const { data: existing } = await supabase
      .from('quiz_questions')
      .select('id')
      .eq('age_group', 'children')
      .limit(1);

    if (!existing || existing.length === 0) {
      for (const question of sampleQuestions) {
        await supabase
          .from('quiz_questions')
          .insert(question);
      }
      loadQuizQuestions();
    }
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    if (gameState === 'playing') {
      // Auto-select wrong answer when time runs out
      handleQuizAnswer(-1);
    }
  };

  const startQuiz = (selectedDifficulty: 'easy' | 'medium' | 'hard') => {
    const filteredQuestions = quizQuestions.filter(q => q.difficulty_level === selectedDifficulty);
    if (filteredQuestions.length > 0) {
      setDifficulty(selectedDifficulty);
      setCurrentQuiz(0);
      setScore(0);
      setGameState('playing');
      setSelectedAnswer(null);
      setTimeLeft(30);
      setIsTimerActive(true);
    }
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setIsTimerActive(false);
    
    const filteredQuestions = quizQuestions.filter(q => q.difficulty_level === difficulty);
    const currentQuestion = filteredQuestions[currentQuiz];
    
    setTimeout(() => {
      if (answerIndex === currentQuestion.correct_answer) {
        setScore(score + currentQuestion.points);
      }
      
      if (currentQuiz < filteredQuestions.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectedAnswer(null);
        setTimeLeft(30);
        setIsTimerActive(true);
      } else {
        setGameState('results');
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setGameState('menu');
    setSelectedAnswer(null);
    setIsTimerActive(false);
    setTimeLeft(30);
  };

  // Mining simulation game data
  const miningGameData = {
    levels: [
      {
        id: 1,
        name: "Uranium Detective",
        description: "Use your detector to find uranium deposits!",
        target: 5,
        timeLimit: 60,
        tools: ["Geiger Counter", "Rock Samples"],
        difficulty: "Easy"
      },
      {
        id: 2,
        name: "Safety Inspector",
        description: "Check that all safety equipment is in place!",
        target: 8,
        timeLimit: 45,
        tools: ["Safety Checklist", "Protective Gear"],
        difficulty: "Medium"
      },
      {
        id: 3,
        name: "Mining Engineer",
        description: "Design the perfect mining operation!",
        target: 10,
        timeLimit: 90,
        tools: ["Engineering Tools", "Computer Design"],
        difficulty: "Hard"
      }
    ]
  };

  const startMiningGame = (level: number) => {
    setMiningGameLevel(level);
    setMiningScore(0);
    // Start mining game logic here
  };

  const filteredQuestions = quizQuestions.filter(q => q.difficulty_level === difficulty);
  const currentQuestion = filteredQuestions[currentQuiz];

  return (
    <section className="py-16 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-green-950 dark:via-blue-950 dark:to-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <GamepadIcon className="h-10 w-10 text-green-500" />
            Advanced Learning Games
            <Brain className="h-10 w-10 text-purple-500" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Challenge yourself with advanced quizzes, mining simulations, and interactive learning experiences!
          </p>
        </div>

        <Tabs defaultValue="quiz" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="quiz">Smart Quiz</TabsTrigger>
            <TabsTrigger value="mining">Mining Simulator</TabsTrigger>
            <TabsTrigger value="memory">Memory Game</TabsTrigger>
            <TabsTrigger value="puzzle">Uranium Puzzle</TabsTrigger>
            <TabsTrigger value="video">Learning Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <Card className="max-w-3xl mx-auto bg-card/90 backdrop-blur-sm">
              {gameState === 'menu' && (
                <CardContent className="p-8 text-center">
                  <Brain className="h-20 w-20 text-purple-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Choose Your Challenge Level</h3>
                  <p className="text-muted-foreground mb-8">
                    Select a difficulty level to start your uranium knowledge quiz!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button 
                      onClick={() => startQuiz('easy')}
                      className="bg-green-500 hover:bg-green-600 text-white p-6 h-auto flex-col"
                    >
                      <Target className="h-8 w-8 mb-2" />
                      <span className="text-lg font-semibold">Easy</span>
                      <span className="text-sm opacity-90">10 points per question</span>
                    </Button>
                    <Button 
                      onClick={() => startQuiz('medium')}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-6 h-auto flex-col"
                    >
                      <Zap className="h-8 w-8 mb-2" />
                      <span className="text-lg font-semibold">Medium</span>
                      <span className="text-sm opacity-90">20 points per question</span>
                    </Button>
                    <Button 
                      onClick={() => startQuiz('hard')}
                      className="bg-red-500 hover:bg-red-600 text-white p-6 h-auto flex-col"
                    >
                      <Trophy className="h-8 w-8 mb-2" />
                      <span className="text-lg font-semibold">Hard</span>
                      <span className="text-sm opacity-90">30 points per question</span>
                    </Button>
                  </div>
                </CardContent>
              )}

              {gameState === 'playing' && currentQuestion && (
                <>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        Question {currentQuiz + 1} of {filteredQuestions.length}
                      </Badge>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Score: {score}</span>
                        </div>
                        <div className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-foreground'}`}>
                          ⏰ {timeLeft}s
                        </div>
                      </div>
                    </div>
                    <Progress value={(currentQuiz / filteredQuestions.length) * 100} className="mt-2" />
                    <div className="mt-2">
                      <Progress 
                        value={(timeLeft / 30) * 100} 
                        className={`h-2 ${timeLeft <= 10 ? 'bg-red-100' : ''}`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <Badge className={`
                        ${difficulty === 'easy' ? 'bg-green-500' : ''}
                        ${difficulty === 'medium' ? 'bg-yellow-500' : ''}
                        ${difficulty === 'hard' ? 'bg-red-500' : ''}
                        text-white mb-4
                      `}>
                        {difficulty.toUpperCase()} - {currentQuestion.points} points
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-center">
                      {currentQuestion.question_text}
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {currentQuestion.options.map((option, index) => (
                        <Button
                          key={index}
                          variant={
                            selectedAnswer === null ? "outline" :
                            selectedAnswer === index && index === currentQuestion.correct_answer ? "default" :
                            selectedAnswer === index ? "destructive" :
                            index === currentQuestion.correct_answer ? "default" :
                            "outline"
                          }
                          className="p-4 text-left justify-start min-h-[3rem]"
                          onClick={() => selectedAnswer === null && handleQuizAnswer(index)}
                          disabled={selectedAnswer !== null}
                        >
                          <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                          {option}
                        </Button>
                      ))}
                    </div>

                    {selectedAnswer !== null && (
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <strong>Did you know?</strong> {currentQuestion.explanation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </>
              )}

              {gameState === 'results' && (
                <CardContent className="p-8 text-center">
                  <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                  <p className="text-2xl mb-4">
                    You scored {score} points!
                  </p>
                  <div className="mb-6">
                    {score >= filteredQuestions.length * (difficulty === 'easy' ? 8 : difficulty === 'medium' ? 16 : 24) && (
                      <Badge className="bg-yellow-500 text-yellow-900 text-lg px-4 py-2">
                        Uranium Expert! 🌟
                      </Badge>
                    )}
                    {score >= filteredQuestions.length * (difficulty === 'easy' ? 6 : difficulty === 'medium' ? 12 : 18) && 
                     score < filteredQuestions.length * (difficulty === 'easy' ? 8 : difficulty === 'medium' ? 16 : 24) && (
                      <Badge className="bg-green-500 text-green-900 text-lg px-4 py-2">
                        Great Knowledge! 🎉
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={resetQuiz}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Try Again
                    </Button>
                    <Button variant="outline" onClick={() => setGameState('menu')}>
                      <Shuffle className="h-4 w-4 mr-2" />
                      Change Level
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="mining">
            <MiningGameSimulator />
          </TabsContent>

          <TabsContent value="memory">
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Uranium Memory Match</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Match uranium-related terms and their descriptions to improve your memory!
                </p>
                <Button size="lg">
                  <Play className="h-5 w-5 mr-2" />
                  Start Memory Game
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="puzzle">
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Uranium Mining Puzzle</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Solve puzzles to learn about uranium mining processes and safety!
                </p>
                <Button size="lg">
                  <Play className="h-5 w-5 mr-2" />
                  Start Puzzle
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video">
            <div className="space-y-8">
              <Card className="max-w-4xl mx-auto bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center">Educational Videos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/rcOFV4y5z8c"
                      title="How Nuclear Energy Works"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">How Nuclear Energy Works</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about nuclear energy in a fun and simple way!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdvancedKidsGames;