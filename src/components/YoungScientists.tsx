import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Trophy, Medal, Award, BookOpen, Microscope, FlaskConical, Download } from 'lucide-react';
import youngScientistImage from '@/assets/young-scientist.jpg';

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'research' | 'safety' | 'innovation' | 'education';
  points: number;
  difficulty: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  unlocked: boolean;
  progress: number;
  requirements: string[];
}

interface Scientist {
  id: string;
  name: string;
  age: number;
  country: string;
  achievements: string[];
  totalPoints: number;
  rank: number;
  specialization: string;
  avatar?: string;
}

const YoungScientists = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [topScientists, setTopScientists] = useState<Scientist[]>([]);
  const [currentUser, setCurrentUser] = useState<Scientist | null>(null);

  useEffect(() => {
    loadAchievements();
    loadTopScientists();
    loadCurrentUser();
  }, []);

  const loadAchievements = () => {
    const sampleAchievements: Achievement[] = [
      {
        id: '1',
        title: 'Uranium Explorer',
        description: 'Complete the basic uranium knowledge quiz with 80% or higher',
        category: 'education',
        points: 100,
        difficulty: 'Bronze',
        unlocked: true,
        progress: 100,
        requirements: ['Complete Uranium Basics Quiz', 'Score 80% or higher']
      },
      {
        id: '2',
        title: 'Safety Champion',
        description: 'Identify all safety protocols in the mining safety game',
        category: 'safety',
        points: 150,
        difficulty: 'Silver',
        unlocked: true,
        progress: 100,
        requirements: ['Complete Safety Training', 'Perfect Safety Quiz Score']
      },
      {
        id: '3',
        title: 'Environmental Guardian',
        description: 'Design an eco-friendly mining solution',
        category: 'innovation',
        points: 200,
        difficulty: 'Silver',
        unlocked: false,
        progress: 65,
        requirements: ['Environmental Impact Study', 'Sustainable Design Proposal']
      },
      {
        id: '4',
        title: 'Young Researcher',
        description: 'Conduct and present a uranium research project',
        category: 'research',
        points: 300,
        difficulty: 'Gold',
        unlocked: false,
        progress: 30,
        requirements: ['Research Project Submission', 'Peer Review', 'Presentation']
      },
      {
        id: '5',
        title: 'Nuclear Innovator',
        description: 'Propose innovative solutions for nuclear energy',
        category: 'innovation',
        points: 500,
        difficulty: 'Platinum',
        unlocked: false,
        progress: 10,
        requirements: ['Innovation Proposal', 'Technical Feasibility', 'Expert Review']
      }
    ];
    setAchievements(sampleAchievements);
  };

  const loadTopScientists = () => {
    const scientists: Scientist[] = [
      {
        id: '1',
        name: 'Emma Chen',
        age: 16,
        country: 'Singapore',
        achievements: ['Uranium Explorer', 'Safety Champion', 'Environmental Guardian'],
        totalPoints: 450,
        rank: 1,
        specialization: 'Environmental Safety'
      },
      {
        id: '2',
        name: 'Carlos Rodriguez',
        age: 15,
        country: 'Mexico',
        achievements: ['Uranium Explorer', 'Safety Champion'],
        totalPoints: 380,
        rank: 2,
        specialization: 'Mining Technology'
      },
      {
        id: '3',
        name: 'Aisha Patel',
        age: 17,
        country: 'India',
        achievements: ['Uranium Explorer', 'Young Researcher'],
        totalPoints: 350,
        rank: 3,
        specialization: 'Nuclear Physics'
      },
      {
        id: '4',
        name: 'David Kim',
        age: 16,
        country: 'South Korea',
        achievements: ['Safety Champion', 'Environmental Guardian'],
        totalPoints: 320,
        rank: 4,
        specialization: 'Sustainable Energy'
      },
      {
        id: '5',
        name: 'Sophie Dubois',
        age: 15,
        country: 'France',
        achievements: ['Uranium Explorer'],
        totalPoints: 280,
        rank: 5,
        specialization: 'Geology'
      }
    ];
    setTopScientists(scientists);
  };

  const loadCurrentUser = () => {
    // Mock current user data
    setCurrentUser({
      id: 'current',
      name: 'You',
      age: 15,
      country: 'Your Country',
      achievements: ['Uranium Explorer'],
      totalPoints: 100,
      rank: 15,
      specialization: 'Learning'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'research': return <Microscope className="h-4 w-4" />;
      case 'safety': return <Award className="h-4 w-4" />;
      case 'innovation': return <FlaskConical className="h-4 w-4" />;
      case 'education': return <BookOpen className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Bronze': return 'text-orange-600';
      case 'Silver': return 'text-gray-600';
      case 'Gold': return 'text-yellow-600';
      case 'Platinum': return 'text-purple-600';
      default: return 'text-blue-600';
    }
  };

  const generateAchievementCertificate = (achievement: Achievement) => {
    const certificateContent = `
YOUNG SCIENTISTS ACHIEVEMENT CERTIFICATE
========================================

This certifies that

[SCIENTIST NAME]

has successfully completed the requirements for the

${achievement.title.toUpperCase()}

${achievement.description}

Achievement Category: ${achievement.category.toUpperCase()}
Difficulty Level: ${achievement.difficulty}
Points Earned: ${achievement.points}

Requirements Completed:
${achievement.requirements.map(req => `✓ ${req}`).join('\n')}

Date: ${new Date().toLocaleDateString()}

Congratulations on this outstanding achievement in nuclear science education!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Young Scientists Nuclear Education Program
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    const blob = new Blob([certificateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${achievement.title.replace(/\s+/g, '-')}-certificate.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Trophy className="h-10 w-10 text-yellow-500" />
            Young Scientists Achievements
            <Medal className="h-10 w-10 text-purple-500" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrate the achievements of young nuclear scientists from around the world and track your own progress!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements Gallery */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold">Achievement Gallery</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`bg-card/90 backdrop-blur-sm ${achievement.unlocked ? 'ring-2 ring-green-500' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`${getDifficultyColor(achievement.difficulty)}`}>
                          {getCategoryIcon(achievement.category)}
                        </div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      </div>
                      <Badge variant={achievement.unlocked ? 'default' : 'outline'}>
                        {achievement.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Requirements:</h4>
                      <ul className="space-y-1">
                        {achievement.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs">
                            <div className={`w-3 h-3 rounded-full ${achievement.progress === 100 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            <span className={achievement.progress === 100 ? 'line-through text-muted-foreground' : ''}>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{achievement.points} points</span>
                      </div>
                      {achievement.unlocked && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => generateAchievementCertificate(achievement)}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Certificate
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leaderboard & Current User */}
          <div className="space-y-6">
            {/* Current User Stats */}
            {currentUser && (
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <img 
                      src={youngScientistImage} 
                      alt="Young Scientist"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{currentUser.name}</h3>
                    <p className="text-sm text-muted-foreground">{currentUser.specialization}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{currentUser.totalPoints}</div>
                      <div className="text-xs text-muted-foreground">Total Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">#{currentUser.rank}</div>
                      <div className="text-xs text-muted-foreground">Global Rank</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary">{currentUser.achievements.length} Achievements</Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Top Scientists Leaderboard */}
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Global Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topScientists.map((scientist, index) => (
                  <div key={scientist.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className={`text-lg font-bold ${
                      index === 0 ? 'text-yellow-500' : 
                      index === 1 ? 'text-gray-500' : 
                      index === 2 ? 'text-orange-500' : 'text-muted-foreground'
                    }`}>
                      #{scientist.rank}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={scientist.avatar} alt={scientist.name} />
                      <AvatarFallback>{scientist.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{scientist.name}</h4>
                      <p className="text-xs text-muted-foreground">{scientist.country} • Age {scientist.age}</p>
                      <p className="text-xs text-muted-foreground">{scientist.specialization}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{scientist.totalPoints}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievement Categories */}
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Achievement Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Education</div>
                    <div className="text-xs text-muted-foreground">Learning achievements</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50 dark:bg-green-950/20">
                  <Award className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Safety</div>
                    <div className="text-xs text-muted-foreground">Safety protocol mastery</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                  <FlaskConical className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Innovation</div>
                    <div className="text-xs text-muted-foreground">Creative solutions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                  <Microscope className="h-5 w-5 text-orange-600" />
                  <div>
                    <div className="font-medium">Research</div>
                    <div className="text-xs text-muted-foreground">Scientific contributions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoungScientists;