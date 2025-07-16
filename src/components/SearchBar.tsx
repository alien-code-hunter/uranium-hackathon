import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  page: string;
  section?: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from an API or database
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'Open Pit Mining',
      description: 'Large-scale surface excavation method for extracting uranium from shallow deposits',
      page: '/mining',
      section: 'methods'
    },
    {
      id: '2',
      title: 'In-Situ Leaching (ISL)',
      description: 'Solution mining technique that dissolves uranium underground using chemical solutions',
      page: '/mining',
      section: 'methods'
    },
    {
      id: '3',
      title: 'Nuclear Quiz',
      description: 'Test your knowledge about nuclear energy and uranium mining',
      page: '/kids',
      section: 'quiz'
    },
    {
      id: '4',
      title: 'Mining Simulator',
      description: 'Interactive game simulating uranium mining operations',
      page: '/kids',
      section: 'simulator'
    },
    {
      id: '5',
      title: 'Technology Report',
      description: 'Comprehensive report on technology and AI in uranium mining',
      page: '/technology',
      section: 'report'
    },
    {
      id: '6',
      title: 'Educational Videos',
      description: 'Learn about uranium mining through educational videos',
      page: '/education',
      section: 'videos'
    },
    {
      id: '7',
      title: 'Research Papers',
      description: 'Scientific papers on uranium mining and nuclear energy',
      page: '/education',
      section: 'papers'
    },
    {
      id: '8',
      title: 'Production Dashboard',
      description: 'Real-time uranium production statistics and charts',
      page: '/dashboards',
      section: 'production'
    },
    {
      id: '9',
      title: 'Market Analysis',
      description: 'Uranium market trends, prices, and forecasts',
      page: '/market',
      section: 'analysis'
    },
    {
      id: '10',
      title: 'Safety Protocols',
      description: 'Safety measures and protocols in uranium mining operations',
      page: '/safety',
      section: 'protocols'
    },
    {
      id: '11',
      title: 'Environmental Impact',
      description: 'Environmental considerations and mitigation strategies',
      page: '/mining',
      section: 'environment'
    },
    {
      id: '12',
      title: 'Remote Mining Technology',
      description: 'Advanced remote mining technologies and automation',
      page: '/technology',
      section: 'remote'
    }
  ];

  useEffect(() => {
    if (query.length > 2) {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults.slice(0, 6)); // Limit to 6 results
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      handleResultClick(results[0]);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.page);
    setQuery('');
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search mining methods, technologies, education..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10 w-full"
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result)}
                className="w-full text-left p-4 hover:bg-muted/50 border-b border-border last:border-b-0 transition-colors"
              >
                <div className="font-medium text-sm">{result.title}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {result.description}
                </div>
                <div className="text-xs text-primary mt-1">
                  {result.page === '/mining' && 'Mining'}
                  {result.page === '/technology' && 'Technology'}
                  {result.page === '/education' && 'Education'}
                  {result.page === '/kids' && 'Kids Section'}
                  {result.page === '/dashboards' && 'Dashboards'}
                  {result.page === '/market' && 'Market'}
                  {result.page === '/safety' && 'Safety'}
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;