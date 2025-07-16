import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Puzzle, Video, Award, Star, Heart } from 'lucide-react';
import kidsImage from '@/assets/kids-uranium.jpg';

const KidsSection = () => {
  const activities = [
    {
      icon: Gamepad2,
      title: 'Mining Simulator',
      description: 'Build your own virtual uranium mine and learn about different extraction methods!',
      difficulty: 'Easy',
      time: '15 min',
      color: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      icon: Puzzle,
      title: 'Nuclear Quiz',
      description: 'Test your knowledge about uranium, nuclear power, and clean energy.',
      difficulty: 'Medium',
      time: '10 min',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      icon: Video,
      title: 'Animated Stories',
      description: 'Watch fun animations about uranium\'s journey from mine to power plant.',
      difficulty: 'Easy',
      time: '20 min',
      color: 'bg-gradient-to-br from-green-400 to-green-600'
    }
  ];

  const achievements = [
    { icon: Star, text: 'Young Scientist', count: '245 kids earned this!' },
    { icon: Award, text: 'Mine Expert', count: '189 kids earned this!' },
    { icon: Heart, text: 'Earth Protector', count: '312 kids earned this!' }
  ];

  return (
    <section id="kids" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            For Young <span className="text-uranium">Scientists</span> 👩‍🔬👨‍🔬
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the amazing world of uranium through fun games, interactive stories, 
            and cool experiments designed just for curious minds!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Fun Visual */}
          <div className="order-2 lg:order-1">
            <img
              src={kidsImage}
              alt="Kids learning about uranium and nuclear science"
              className="w-full rounded-2xl shadow-elevate"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Learn While You Play! 🎮
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Safe Learning</h4>
                  <p className="text-muted-foreground text-sm">All content is age-appropriate and scientifically accurate.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-mining rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Interactive Fun</h4>
                  <p className="text-muted-foreground text-sm">Games and activities that make learning exciting.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-earth rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Earn Badges</h4>
                  <p className="text-muted-foreground text-sm">Complete challenges and earn cool scientist badges!</p>
                </div>
              </div>
            </div>
            <Button 
              variant="uranium" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = '/kids-adventure'}
            >
              Start Your Adventure! 🚀
            </Button>
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card 
                key={activity.title}
                className="group hover:shadow-uranium transition-all duration-300 hover:scale-105 bg-card border-border overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {activity.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <span className="text-xs bg-uranium/10 text-uranium px-2 py-1 rounded-full">
                      {activity.difficulty}
                    </span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {activity.time}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {activity.description}
                  </CardDescription>
                  <Button variant="educational" size="sm" className="w-full">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-uranium/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Young Scientists Achievements 🏆
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.text}
                  className="flex items-center space-x-4 bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{achievement.text}</div>
                    <div className="text-sm text-muted-foreground">{achievement.count}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Parent/Teacher Note */}
        <div className="mt-12 text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Parents & Teachers:</strong> All activities are educational, 
            scientifically accurate, and designed to inspire the next generation of scientists and engineers. 
            Perfect for STEM education and science fair projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default KidsSection;