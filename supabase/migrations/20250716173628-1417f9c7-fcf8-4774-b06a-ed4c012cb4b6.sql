-- Enable public access for kids game data
CREATE POLICY "Enable insert for quiz questions" ON public.quiz_questions FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for mining methods" ON public.mining_methods FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for nuclear anniversary" ON public.nuclear_anniversary FOR INSERT WITH CHECK (true);

-- Create tables for kids game stats and leaderboard
CREATE TABLE public.player_stats (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    player_name TEXT NOT NULL,
    total_score INTEGER DEFAULT 0,
    games_played INTEGER DEFAULT 0,
    quiz_completed INTEGER DEFAULT 0,
    mining_levels_completed INTEGER DEFAULT 0,
    stories_watched INTEGER DEFAULT 0,
    achievements_earned TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.game_sessions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    player_name TEXT NOT NULL,
    game_type TEXT NOT NULL,
    score INTEGER DEFAULT 0,
    completed BOOLEAN DEFAULT false,
    session_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.player_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies for player stats
CREATE POLICY "Public can view player stats" ON public.player_stats FOR SELECT USING (true);
CREATE POLICY "Public can insert player stats" ON public.player_stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can update player stats" ON public.player_stats FOR UPDATE USING (true);

-- Create policies for game sessions
CREATE POLICY "Public can view game sessions" ON public.game_sessions FOR SELECT USING (true);
CREATE POLICY "Public can insert game sessions" ON public.game_sessions FOR INSERT WITH CHECK (true);

-- Create trigger for updated_at
CREATE TRIGGER update_player_stats_updated_at
    BEFORE UPDATE ON public.player_stats
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();