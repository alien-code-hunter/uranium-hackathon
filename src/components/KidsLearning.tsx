import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GamepadIcon, Brain, BookOpen, Award, Star, Zap, Atom, Lightbulb, Trophy, Play, RotateCcw, Shuffle } from 'lucide-react';

const KidsLearning = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'results'>('menu');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Nuclear Science Quiz for Kids
  const quizQuestions = [
    {
      question: "What is uranium?",
      options: [
        "A type of dinosaur",
        "A metal found in rocks",
        "A kind of food",
        "A color"
      ],
      correct: 1,
      explanation: "Uranium is a special metal found naturally in rocks and soil. It's very important for making clean energy!"
    },
    {
      question: "Where is most of the world's uranium found?",
      options: [
        "In the ocean",
        "In trees",
        "In underground rocks",
        "In the clouds"
      ],
      correct: 2,
      explanation: "Uranium is hidden deep underground in special rocks. Miners work carefully to dig it up safely!"
    },
    {
      question: "What color is uranium ore when it's processed?",
      options: [
        "Bright yellow",
        "Deep blue",
        "Bright red",
        "Pure green"
      ],
      correct: 0,
      explanation: "Processed uranium is bright yellow and is called 'yellowcake'! It looks like yellow powder."
    },
    {
      question: "How does uranium help make electricity?",
      options: [
        "It burns like wood",
        "It spins turbines with wind",
        "Its atoms split to release energy",
        "It reflects sunlight"
      ],
      correct: 2,
      explanation: "Uranium atoms can split apart and release lots of energy, which we use to make electricity for our homes!"
    },
    {
      question: "Which country is famous for uranium mining?",
      options: [
        "Namibia",
        "Antarctica",
        "Moon",
        "Atlantis"
      ],
      correct: 0,
      explanation: "Namibia in Africa is one of the world's biggest uranium producers! It has lots of uranium in its desert."
    }
  ];

  // Mining Simulation Game Data
  const miningGame = {
    levels: [
      {
        id: 1,
        name: "Uranium Detective",
        description: "Find uranium deposits using special detectors!",
        completed: false,
        stars: 0,
        tools: ["Geiger Counter", "Rock Samples", "Maps"]
      },
      {
        id: 2,
        name: "Safety First",
        description: "Learn about safety equipment for uranium miners!",
        completed: false,
        stars: 0,
        tools: ["Hard Hat", "Safety Suit", "Dosimeter"]
      },
      {
        id: 3,
        name: "Mining Engineer",
        description: "Design a safe and efficient uranium mine!",
        completed: false,
        stars: 0,
        tools: ["Excavator", "Trucks", "Processing Plant"]
      }
    ]
  };

  // Animated Stories
  const stories = [
    {
      id: 'atoms-adventure',
      title: "The Tiny Atom's Big Adventure",
      duration: "5 min",
      description: "Follow Uranium the Atom as it travels from deep underground to powering a city!",
      characters: ["Uranium the Atom", "Electron Eddie", "Neutron Nancy"],
      lessons: ["Atomic structure", "Energy release", "Nuclear power"],
      thumbnail: "🔬"
    },
    {
      id: 'desert-discovery',
      title: "Mystery in the Namib Desert",
      duration: "7 min", 
      description: "Join Safari Sam as he discovers glowing rocks in Namibia's desert!",
      characters: ["Safari Sam", "Dr. Maya the Geologist", "Rocky the Camel"],
      lessons: ["Uranium deposits", "Namibian mining", "Desert exploration"],
      thumbnail: "🏜️"
    },
    {
      id: 'clean-energy-heroes',
      title: "The Clean Energy Heroes",
      duration: "6 min",
      description: "Meet the superhero team fighting climate change with nuclear power!",
      characters: ["Captain Uranium", "Solar Sally", "Wind Walker"],
      lessons: ["Clean energy", "Environmental protection", "Future technology"],
      thumbnail: "🦸"
    }
  ];

  // Achievement System
  const achievements = [
    { id: 'first-quiz', name: 'Quiz Master', description: 'Complete your first quiz!', icon: '🧠', earned: false },
    { id: 'perfect-score', name: 'Perfect Score', description: 'Get 100% on a quiz!', icon: '⭐', earned: false },
    { id: 'story-watcher', name: 'Story Explorer', description: 'Watch your first animated story!', icon: '📚', earned: false },
    { id: 'game-player', name: 'Mining Expert', description: 'Complete a mining game level!', icon: '⛏️', earned: false },
    { id: 'scientist', name: 'Young Scientist', description: 'Learn 10 uranium facts!', icon: '🔬', earned: false }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      if (answerIndex === quizQuestions[currentQuiz].correct) {
        setScore(score + 1);
      }
      
      if (currentQuiz < quizQuestions.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectedAnswer(null);
      } else {
        setGameState('results');
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setGameState('menu');
    setSelectedAnswer(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 dark:from-purple-950 dark:via-blue-950 dark:to-green-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Atom className="h-10 w-10 text-purple-500" />
            For Young Scientists
            <Lightbulb className="h-10 w-10 text-yellow-500" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the amazing world of uranium and nuclear science through fun games, quizzes, and animated stories!
          </p>
        </div>

        <Tabs defaultValue="quiz" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Nuclear Quiz
            </TabsTrigger>
            <TabsTrigger value="game" className="flex items-center gap-2">
              <GamepadIcon className="h-4 w-4" />
              Mining Game
            </TabsTrigger>
            <TabsTrigger value="stories" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Animated Stories
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur-sm">
              {gameState === 'menu' && (
                <CardContent className="p-8 text-center">
                  <Brain className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Nuclear Science Quiz</h3>
                  <p className="text-muted-foreground mb-6">
                    Test your knowledge about uranium and nuclear science with fun questions!
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
                    You scored {score} out of {quizQuestions.length}!
                  </p>
                  <div className="mb-6">
                    {score === quizQuestions.length && (
                      <Badge className="bg-yellow-500 text-yellow-900">Perfect Score! 🌟</Badge>
                    )}
                    {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && (
                      <Badge className="bg-green-500 text-green-900">Great Job! 🎉</Badge>
                    )}
                    {score >= quizQuestions.length * 0.6 && score < quizQuestions.length * 0.8 && (
                      <Badge className="bg-blue-500 text-blue-900">Good Work! 👍</Badge>
                    )}
                    {score < quizQuestions.length * 0.6 && (
                      <Badge className="bg-purple-500 text-purple-900">Keep Learning! 📚</Badge>
                    )}
                  </div>
                  <Button onClick={resetQuiz} size="lg">
                    Try Again
                  </Button>
                </CardContent>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="game">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {miningGame.levels.map((level) => (
                <Card key={level.id} className="bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{level.name}</CardTitle>
                      <div className="flex">
                        {[1, 2, 3].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${star <= level.stars ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Tools you'll use:</h4>
                      <div className="flex flex-wrap gap-1">
                        {level.tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" disabled={!level.completed && level.id > 1}>
                      {level.completed ? (
                        <>
                          <Trophy className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          {level.id === 1 ? 'Start Level' : 'Locked'}
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stories">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Card key={story.id} className="bg-card/90 backdrop-blur-sm hover:bg-card/95 transition-all group">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 text-center">{story.thumbnail}</div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{story.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-muted-foreground">
                        Duration: {story.duration}
                      </div>
                      <div className="text-xs">
                        <strong>Characters:</strong> {story.characters.join(', ')}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {story.lessons.map((lesson, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {lesson}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`bg-card/90 backdrop-blur-sm ${achievement.earned ? 'ring-2 ring-yellow-500' : 'opacity-60'}`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="font-semibold mb-1">{achievement.name}</h3>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    {achievement.earned && (
                      <Badge className="mt-2 bg-yellow-500 text-yellow-900">Earned!</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default KidsLearning;