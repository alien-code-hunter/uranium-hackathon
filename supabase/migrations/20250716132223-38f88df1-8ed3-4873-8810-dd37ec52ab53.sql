-- Create comprehensive educational content tables

-- Educational videos table
CREATE TABLE public.educational_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  duration TEXT,
  difficulty_level TEXT CHECK (difficulty_level IN ('Beginner', 'Intermediate', 'Advanced', 'Professional')),
  video_url TEXT,
  thumbnail_url TEXT,
  topics TEXT[],
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Mining locations and strategic data
CREATE TABLE public.mining_locations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location_type TEXT NOT NULL, -- 'mine', 'exploration', 'processing_plant'
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  region TEXT,
  description TEXT,
  operational_status TEXT,
  production_capacity TEXT,
  mining_method TEXT,
  environmental_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Uranium mining methods and techniques
CREATE TABLE public.mining_methods (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  method_name TEXT NOT NULL,
  method_type TEXT NOT NULL, -- 'open_pit', 'underground', 'isl', 'heap_leach'
  description TEXT,
  advantages TEXT[],
  disadvantages TEXT[],
  environmental_impact TEXT,
  cost_factors JSONB,
  suitable_deposits TEXT[],
  case_studies TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- IAEA classifications and standards
CREATE TABLE public.iaea_classifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  classification_type TEXT NOT NULL, -- 'deposit', 'waste', 'safety', 'security'
  category TEXT NOT NULL,
  description TEXT,
  criteria JSONB,
  standards TEXT,
  compliance_requirements TEXT[],
  documentation_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Environmental studies and assessments
CREATE TABLE public.environmental_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  study_title TEXT NOT NULL,
  study_type TEXT NOT NULL, -- 'eia', 'baseline', 'monitoring', 'impact_assessment'
  location_id UUID REFERENCES public.mining_locations(id),
  study_date DATE,
  findings TEXT,
  recommendations TEXT[],
  mitigation_measures TEXT[],
  monitoring_parameters JSONB,
  compliance_status TEXT,
  report_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Job creation and employment data
CREATE TABLE public.employment_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  location_id UUID REFERENCES public.mining_locations(id),
  employment_type TEXT NOT NULL, -- 'direct', 'indirect', 'induced'
  job_category TEXT, -- 'mining', 'processing', 'support', 'management'
  job_count INTEGER,
  skill_level TEXT, -- 'entry', 'skilled', 'professional', 'management'
  training_programs TEXT[],
  salary_range TEXT,
  reporting_period DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Nuclear power plant requirements
CREATE TABLE public.nuclear_plant_requirements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  component_category TEXT NOT NULL, -- 'raw_materials', 'metallic_materials', 'safety_systems'
  component_name TEXT NOT NULL,
  component_type TEXT, -- 'ferrous', 'non_ferrous', 'precious', 'nuclear_fuel'
  specifications JSONB,
  quality_standards TEXT[],
  suppliers TEXT[],
  cost_estimate TEXT,
  availability TEXT,
  strategic_importance TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Risk assessments table
CREATE TABLE public.risk_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_type TEXT NOT NULL, -- 'operational', 'environmental', 'financial', 'geological'
  risk_category TEXT NOT NULL,
  location_id UUID REFERENCES public.mining_locations(id),
  risk_description TEXT,
  probability TEXT, -- 'low', 'medium', 'high'
  impact_severity TEXT, -- 'low', 'medium', 'high', 'critical'
  mitigation_strategies TEXT[],
  monitoring_requirements TEXT[],
  assessment_date DATE,
  next_review_date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Market predictions and analysis
CREATE TABLE public.market_predictions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prediction_type TEXT NOT NULL, -- 'price', 'demand', 'production', 'exploration'
  timeframe TEXT, -- 'short_term', 'medium_term', 'long_term'
  commodity TEXT DEFAULT 'uranium',
  predicted_value DECIMAL(15, 2),
  unit TEXT,
  confidence_level TEXT, -- 'low', 'medium', 'high'
  methodology TEXT,
  key_factors TEXT[],
  prediction_date DATE,
  target_date DATE,
  actual_value DECIMAL(15, 2), -- filled when prediction period ends
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Kids quiz questions with difficulty levels
CREATE TABLE public.quiz_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question_text TEXT NOT NULL,
  options TEXT[] NOT NULL,
  correct_answer INTEGER NOT NULL,
  explanation TEXT,
  difficulty_level TEXT CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
  category TEXT, -- 'uranium', 'mining', 'nuclear', 'safety', 'environment'
  age_group TEXT, -- 'children', 'teenagers', 'adults'
  points INTEGER DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- News and updates table
CREATE TABLE public.news_updates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT NOT NULL, -- 'industry', 'market', 'technology', 'regulation', 'namibia'
  source TEXT,
  author TEXT,
  publication_date DATE,
  importance_level TEXT, -- 'low', 'medium', 'high', 'critical'
  tags TEXT[],
  external_url TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 80th anniversary nuclear content
CREATE TABLE public.nuclear_anniversary (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  milestone_year INTEGER NOT NULL,
  milestone_title TEXT NOT NULL,
  description TEXT,
  significance TEXT,
  country TEXT,
  key_figures TEXT[],
  achievements TEXT[],
  impact_areas TEXT[],
  historical_context TEXT,
  images TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.educational_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mining_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mining_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.iaea_classifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.environmental_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employment_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nuclear_plant_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.risk_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nuclear_anniversary ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is educational content)
CREATE POLICY "Public can view educational videos" ON public.educational_videos FOR SELECT USING (true);
CREATE POLICY "Public can view mining locations" ON public.mining_locations FOR SELECT USING (true);
CREATE POLICY "Public can view mining methods" ON public.mining_methods FOR SELECT USING (true);
CREATE POLICY "Public can view IAEA classifications" ON public.iaea_classifications FOR SELECT USING (true);
CREATE POLICY "Public can view environmental studies" ON public.environmental_studies FOR SELECT USING (true);
CREATE POLICY "Public can view employment data" ON public.employment_data FOR SELECT USING (true);
CREATE POLICY "Public can view nuclear plant requirements" ON public.nuclear_plant_requirements FOR SELECT USING (true);
CREATE POLICY "Public can view risk assessments" ON public.risk_assessments FOR SELECT USING (true);
CREATE POLICY "Public can view market predictions" ON public.market_predictions FOR SELECT USING (true);
CREATE POLICY "Public can view quiz questions" ON public.quiz_questions FOR SELECT USING (true);
CREATE POLICY "Public can view news updates" ON public.news_updates FOR SELECT USING (true);
CREATE POLICY "Public can view nuclear anniversary" ON public.nuclear_anniversary FOR SELECT USING (true);

-- Create indexes for better search performance
CREATE INDEX idx_educational_videos_title ON public.educational_videos USING gin(to_tsvector('english', title));
CREATE INDEX idx_mining_locations_name ON public.mining_locations USING gin(to_tsvector('english', name));
CREATE INDEX idx_mining_methods_name ON public.mining_methods USING gin(to_tsvector('english', method_name));
CREATE INDEX idx_news_updates_title ON public.news_updates USING gin(to_tsvector('english', title));
CREATE INDEX idx_quiz_questions_text ON public.quiz_questions USING gin(to_tsvector('english', question_text));

-- Create triggers for updated_at
CREATE TRIGGER update_educational_videos_updated_at BEFORE UPDATE ON public.educational_videos FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_mining_locations_updated_at BEFORE UPDATE ON public.mining_locations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_mining_methods_updated_at BEFORE UPDATE ON public.mining_methods FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_iaea_classifications_updated_at BEFORE UPDATE ON public.iaea_classifications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_environmental_studies_updated_at BEFORE UPDATE ON public.environmental_studies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_employment_data_updated_at BEFORE UPDATE ON public.employment_data FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_nuclear_plant_requirements_updated_at BEFORE UPDATE ON public.nuclear_plant_requirements FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_risk_assessments_updated_at BEFORE UPDATE ON public.risk_assessments FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_market_predictions_updated_at BEFORE UPDATE ON public.market_predictions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_quiz_questions_updated_at BEFORE UPDATE ON public.quiz_questions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_news_updates_updated_at BEFORE UPDATE ON public.news_updates FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_nuclear_anniversary_updated_at BEFORE UPDATE ON public.nuclear_anniversary FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();