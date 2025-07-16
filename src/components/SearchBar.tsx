import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, X, FileText, Video, MapPin, Book, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'video' | 'location' | 'method' | 'news' | 'quiz' | 'study';
  url?: string;
  relevance: number;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    try {
      const searchTerms = searchQuery.toLowerCase();
      
      // Search across multiple tables
      const [
        videosResult,
        locationsResult,
        methodsResult,
        newsResult,
        quizResult,
        studiesResult
      ] = await Promise.all([
        supabase
          .from('educational_videos')
          .select('id, title, description, topics')
          .ilike('title', `%${searchTerms}%`),
        
        supabase
          .from('mining_locations')
          .select('id, name, description, region')
          .ilike('name', `%${searchTerms}%`),
          
        supabase
          .from('mining_methods')
          .select('id, method_name, description')
          .ilike('method_name', `%${searchTerms}%`),
          
        supabase
          .from('news_updates')
          .select('id, title, content, category')
          .ilike('title', `%${searchTerms}%`),
          
        supabase
          .from('quiz_questions')
          .select('id, question_text, category')
          .ilike('question_text', `%${searchTerms}%`),
          
        supabase
          .from('environmental_studies')
          .select('id, study_title, findings')
          .ilike('study_title', `%${searchTerms}%`)
      ]);

      const searchResults: SearchResult[] = [];

      // Process videos
      if (videosResult.data) {
        videosResult.data.forEach(video => {
          const relevance = calculateRelevance(searchTerms, video.title, video.description);
          searchResults.push({
            id: video.id,
            title: video.title,
            description: video.description || '',
            category: 'Educational Content',
            type: 'video',
            relevance
          });
        });
      }

      // Process locations
      if (locationsResult.data) {
        locationsResult.data.forEach(location => {
          const relevance = calculateRelevance(searchTerms, location.name, location.description);
          searchResults.push({
            id: location.id,
            title: location.name,
            description: `${location.description || ''} (${location.region})`,
            category: 'Mining Locations',
            type: 'location',
            relevance
          });
        });
      }

      // Process methods
      if (methodsResult.data) {
        methodsResult.data.forEach(method => {
          const relevance = calculateRelevance(searchTerms, method.method_name, method.description);
          searchResults.push({
            id: method.id,
            title: method.method_name,
            description: method.description || '',
            category: 'Mining Methods',
            type: 'method',
            relevance
          });
        });
      }

      // Process news
      if (newsResult.data) {
        newsResult.data.forEach(news => {
          const relevance = calculateRelevance(searchTerms, news.title, news.content);
          searchResults.push({
            id: news.id,
            title: news.title,
            description: news.content?.substring(0, 150) + '...' || '',
            category: news.category,
            type: 'news',
            relevance
          });
        });
      }

      // Process quiz questions
      if (quizResult.data) {
        quizResult.data.forEach(quiz => {
          const relevance = calculateRelevance(searchTerms, quiz.question_text, '');
          searchResults.push({
            id: quiz.id,
            title: `Quiz: ${quiz.question_text.substring(0, 50)}...`,
            description: `Category: ${quiz.category}`,
            category: 'Quiz Questions',
            type: 'quiz',
            relevance
          });
        });
      }

      // Process studies
      if (studiesResult.data) {
        studiesResult.data.forEach(study => {
          const relevance = calculateRelevance(searchTerms, study.study_title, study.findings);
          searchResults.push({
            id: study.id,
            title: study.study_title,
            description: study.findings?.substring(0, 150) + '...' || '',
            category: 'Environmental Studies',
            type: 'study',
            relevance
          });
        });
      }

      // Sort by relevance and limit results
      const sortedResults = searchResults
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 10);

      setResults(sortedResults);
      setIsExpanded(true);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateRelevance = (searchTerms: string, title: string, description: string): number => {
    const titleMatch = title.toLowerCase().includes(searchTerms) ? 10 : 0;
    const descMatch = description?.toLowerCase().includes(searchTerms) ? 5 : 0;
    const exactMatch = title.toLowerCase() === searchTerms ? 20 : 0;
    return exactMatch + titleMatch + descMatch;
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'location': return <MapPin className="h-4 w-4" />;
      case 'method': return <FileText className="h-4 w-4" />;
      case 'news': return <ExternalLink className="h-4 w-4" />;
      case 'quiz': return <Book className="h-4 w-4" />;
      case 'study': return <FileText className="h-4 w-4" />;
      default: return <Search className="h-4 w-4" />;
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 2) {
        performSearch(query);
      } else {
        setResults([]);
        setIsExpanded(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search uranium mining data, videos, locations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-12 py-3 text-lg"
          onFocus={() => query && setIsExpanded(true)}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsExpanded(false);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isExpanded && (query || results.length > 0) && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto bg-card/95 backdrop-blur-sm border shadow-lg">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-4 text-center text-muted-foreground">
                Searching...
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-1">
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="p-3 hover:bg-muted/50 cursor-pointer border-b border-border/50 last:border-b-0"
                    onClick={() => {
                      // Handle navigation based on type
                      setIsExpanded(false);
                      setQuery('');
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-muted-foreground">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-foreground truncate">
                          {result.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {result.description}
                        </p>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {result.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : query && (
              <div className="p-4 text-center text-muted-foreground">
                No results found for "{query}"
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;