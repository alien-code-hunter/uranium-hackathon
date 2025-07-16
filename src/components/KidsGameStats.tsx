import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Star, Clock, TrendingUp, Award } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface PlayerStats {
  player_name: string;
  total_score: number;
  games_played: number;
  mining_levels_completed: number;
  quiz_completed: number;
  stories_watched: number;
  achievements_earned: string[];
}

interface GameSession {
  player_name: string;
  game_type: string;
  score: number;
  completed: boolean;
  created_at: string;
}

const KidsGameStats = () => {
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);
  const [recentSessions, setRecentSessions] = useState<GameSession[]>([]);
  const [leaderboard, setLeaderboard] = useState<PlayerStats[]>([]);

  useEffect(() => {
    loadGameStats();
  }, []);

  const loadGameStats = async () => {
    // Load player stats
    const { data: stats } = await supabase
      .from('player_stats')
      .select('*')
      .order('total_score', { ascending: false })
      .limit(10);

    if (stats) {
      setPlayerStats(stats as PlayerStats[]);
      setLeaderboard(stats as PlayerStats[]);
    }

    // Load recent game sessions
    const { data: sessions } = await supabase
      .from('game_sessions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (sessions) {
      setRecentSessions(sessions as GameSession[]);
    }
  };

  const addGameSession = async (playerName: string, gameType: string, score: number, completed: boolean) => {
    // Insert game session
    await supabase
      .from('game_sessions')
      .insert({
        player_name: playerName,
        game_type: gameType,
        score: score,
        completed: completed,
        session_data: { timestamp: new Date().toISOString() }
      });

    // Update or create player stats
    const { data: existingStats } = await supabase
      .from('player_stats')
      .select('*')
      .eq('player_name', playerName)
      .single();

    if (existingStats) {
      // Update existing stats
      const newGamesPlayed = (existingStats.games_played || 0) + 1;
      const newTotalScore = (existingStats.total_score || 0) + score;
      const newMiningLevels = gameType === 'mining' && completed ? 
        (existingStats.mining_levels_completed || 0) + 1 : 
        (existingStats.mining_levels_completed || 0);
      const newQuizCompleted = gameType === 'quiz' && completed ? 
        (existingStats.quiz_completed || 0) + 1 : 
        (existingStats.quiz_completed || 0);
      const newStoriesWatched = gameType === 'story' && completed ? 
        (existingStats.stories_watched || 0) + 1 : 
        (existingStats.stories_watched || 0);

      await supabase
        .from('player_stats')
        .update({
          total_score: newTotalScore,
          games_played: newGamesPlayed,
          mining_levels_completed: newMiningLevels,
          quiz_completed: newQuizCompleted,
          stories_watched: newStoriesWatched,
          updated_at: new Date().toISOString()
        })
        .eq('player_name', playerName);
    } else {
      // Create new player stats
      await supabase
        .from('player_stats')
        .insert({
          player_name: playerName,
          total_score: score,
          games_played: 1,
          mining_levels_completed: gameType === 'mining' && completed ? 1 : 0,
          quiz_completed: gameType === 'quiz' && completed ? 1 : 0,
          stories_watched: gameType === 'story' && completed ? 1 : 0,
          achievements_earned: []
        });
    }

    // Reload stats
    loadGameStats();
  };

  const getAchievementBadge = (achievement: string) => {
    const achievementColors: { [key: string]: string } = {
      'First Steps': 'bg-green-100 text-green-800',
      'Quiz Master': 'bg-blue-100 text-blue-800',
      'Mining Expert': 'bg-orange-100 text-orange-800',
      'Story Explorer': 'bg-purple-100 text-purple-800',
      'Safety Champion': 'bg-red-100 text-red-800'
    };
    return achievementColors[achievement] || 'bg-gray-100 text-gray-800';
  };

  // Simulate adding a game session for demo purposes
  const playDemo = async (gameType: string) => {
    const playerName = `Player${Math.floor(Math.random() * 1000)}`;
    const score = Math.floor(Math.random() * 100) + 50;
    await addGameSession(playerName, gameType, score, true);
  };

  return (
    <div className="space-y-8">
      {/* Your Explorer Stats */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Your Explorer Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {playerStats.reduce((sum, p) => sum + (p.games_played || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {playerStats.reduce((sum, p) => sum + (p.mining_levels_completed || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Mining Levels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {playerStats.reduce((sum, p) => sum + (p.quiz_completed || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Quizzes Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {playerStats.reduce((sum, p) => sum + (p.stories_watched || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Stories Watched</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Global Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-gold" />
            Global Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.slice(0, 5).map((player, index) => (
              <div key={player.player_name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0 ? 'bg-yellow-500' :
                    index === 1 ? 'bg-gray-400' :
                    index === 2 ? 'bg-orange-600' : 'bg-blue-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{player.player_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {player.games_played || 0} games played
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{player.total_score || 0}</div>
                  <div className="text-sm text-muted-foreground">points</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Young Scientists Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Young Scientists Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {playerStats.slice(0, 3).map((player) => (
              <div key={player.player_name} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{player.player_name}</h4>
                  <Badge variant="outline">{player.total_score || 0} pts</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(player.achievements_earned || []).map((achievement, index) => (
                    <Badge key={index} className={getAchievementBadge(achievement)}>
                      {achievement}
                    </Badge>
                  ))}
                  {(player.mining_levels_completed || 0) > 0 && (
                    <Badge className="bg-orange-100 text-orange-800">
                      Mining Expert
                    </Badge>
                  )}
                  {(player.quiz_completed || 0) > 3 && (
                    <Badge className="bg-blue-100 text-blue-800">
                      Quiz Master
                    </Badge>
                  )}
                  {(player.stories_watched || 0) > 0 && (
                    <Badge className="bg-purple-100 text-purple-800">
                      Story Explorer
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Demo Buttons for Testing */}
      <Card className="bg-yellow-50 dark:bg-yellow-950">
        <CardHeader>
          <CardTitle>Test Game Stats (Demo)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => playDemo('mining')}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Play Mining Game
            </button>
            <button
              onClick={() => playDemo('quiz')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Take Quiz
            </button>
            <button
              onClick={() => playDemo('story')}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Watch Story
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KidsGameStats;