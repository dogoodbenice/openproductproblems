import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X, PlusCircle } from 'lucide-react';
import { problemsData, allCategories, allDifficulties, getDifficultyColor } from '../data/problemsData';
import { Button } from "@/components/ui/button";

const Problems = () => {
  const [problems, setProblems] = useState(problemsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  useEffect(() => {
    let filtered = problemsData;
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(problem => 
        problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(problem => 
        problem.categories.some(category => selectedCategories.includes(category))
      );
    }
    
    // Apply difficulty filter
    if (selectedDifficulties.length > 0) {
      filtered = filtered.filter(problem => 
        selectedDifficulties.includes(problem.difficulty)
      );
    }
    
    setProblems(filtered);
  }, [searchTerm, selectedCategories, selectedDifficulties]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficulty) 
        ? prev.filter(d => d !== difficulty) 
        : [...prev, difficulty]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedDifficulties([]);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Open Product Problems</Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Problems</h1>
              <p className="text-muted-foreground">
                Explore our collection of product management problems to practice your skills.
              </p>
            </div>
            <Button asChild>
              <Link to="/share-problem">
                <PlusCircle className="mr-2 h-4 w-4" />
                Share an Open Problem
              </Link>
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <Button 
                onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                variant="secondary"
              >
                <Filter className="h-4 w-4" />
                Filter Problems
              </Button>
              
              {(selectedCategories.length > 0 || selectedDifficulties.length > 0) && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center"
                >
                  Clear filters
                  <X className="ml-1 h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Filter Panel */}
            {isFiltersVisible && (
              <div className="mt-4 p-4 border rounded-lg bg-white">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`tag ${selectedCategories.includes(category) ? 'bg-primary text-primary-foreground' : ''}`}
                      >
                        {category.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Difficulty</h3>
                  <div className="flex flex-wrap gap-2">
                    {allDifficulties.map(difficulty => (
                      <button
                        key={difficulty}
                        onClick={() => toggleDifficulty(difficulty)}
                        className={`tag ${selectedDifficulties.includes(difficulty) ? getDifficultyColor(difficulty) : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                      >
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedDifficulties.length > 0) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedCategories.map(category => (
                  <div key={category} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {category.replace('-', ' ')}
                    <button 
                      onClick={() => toggleCategory(category)}
                      className="ml-1 h-3.5 w-3.5 rounded-full hover:bg-primary/20"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                
                {selectedDifficulties.map(difficulty => (
                  <div key={difficulty} className={`inline-flex items-center rounded-full ${getDifficultyColor(difficulty)} px-2.5 py-0.5 text-xs font-medium`}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    <button 
                      onClick={() => toggleDifficulty(difficulty)}
                      className="ml-1 h-3.5 w-3.5 rounded-full hover:bg-black/10"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Problems Grid */}
          <div>
            {problems.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {problems.map((problem) => (
                  <Link 
                    key={problem.id} 
                    to={`/problem/${problem.id}`}
                    className="glass-card rounded-xl p-6 hover-lift"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                      </span>
                      <span className="text-xs text-muted-foreground">{problem.company}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground mb-4">{problem.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {problem.categories.map(category => (
                        <span key={category} className="tag">
                          {category.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-1">No problems found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                <Button onClick={clearFilters} variant="secondary">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Problems;
