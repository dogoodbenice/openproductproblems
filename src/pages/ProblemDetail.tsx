import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Database, Link as LinkIcon, ExternalLink, MessageSquare, User, FileText, PlusCircle } from 'lucide-react';
import { problemsData, problemsDetails, getDifficultyColor } from '../data/problemsData';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const ProblemDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !problemsDetails[id as keyof typeof problemsDetails]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Problem Not Found</h1>
          <Link to="/problems" className="button-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Problems
          </Link>
        </div>
      </div>
    );
  }
  
  const problem = problemsDetails[id as keyof typeof problemsDetails];
  
  // Find the current problem index to enable next/prev navigation
  const currentIndex = problemsData.findIndex(p => p.id === id);
  const prevProblem = currentIndex > 0 ? problemsData[currentIndex - 1] : null;
  const nextProblem = currentIndex < problemsData.length - 1 ? problemsData[currentIndex + 1] : null;
  
  // Check if solutions exist for this problem
  const hasSolutions = problem.solutions && problem.solutions.length > 0;
  
  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Open Product Problems</Link>
            <Link to="/problems" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Problems
            </Link>
          </div>
        </div>
      </header>
      
      {/* Problem Header */}
      <section className="border-b">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                </span>
                {problem.categories.map(category => (
                  <span key={category} className="tag">
                    {category.replace('-', ' ')}
                  </span>
                ))}
                <span className="tag">{problem.company}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{problem.title}</h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container py-8 flex-grow">
        {/* Background Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <div className="glass-card rounded-xl p-6">
            <p className="whitespace-pre-line">{problem.background}</p>
          </div>
        </section>
        
        {/* Key Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Questions</h2>
          <div className="glass-card rounded-xl p-6">
            <ul className="space-y-2">
              {problem.keyQuestions.map((question, index) => (
                <li key={index} className="flex">
                  <span className="font-bold text-primary mr-2">{index + 1}.</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Data */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-2xl font-bold">Available Data</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {problem.data.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Resources */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <BookOpen className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-2xl font-bold">Recommended Resources</h2>
          </div>
          <div className="glass-card rounded-xl p-6">
            <ul className="space-y-4">
              {problem.resources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0 mt-0.5">
                    <LinkIcon className="h-3 w-3" />
                  </span>
                  <div>
                    <a href={resource.url} className="font-medium hover:text-primary flex items-center" target="_blank" rel="noopener noreferrer">
                      {resource.title}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <span className="text-xs text-muted-foreground capitalize">{resource.type}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Community Solutions */}
        <section className="mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Community Solutions
              </CardTitle>
              <Link to="/share-solution" className="button-secondary">
                Share Your Solution
              </Link>
            </CardHeader>
            <CardContent>
              {hasSolutions ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Solution</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead className="text-right">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {problem.solutions.map((solution) => (
                      <TableRow key={solution.id} className="cursor-pointer hover:bg-muted/60">
                        <TableCell className="py-4">
                          <div className="font-medium mb-1">{solution.title}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            {solution.description}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {new Date(solution.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1.5 text-muted-foreground" />
                            <span>{solution.author}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <a href={solution.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              View
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No community solutions yet!</p>
                  <p className="text-sm mt-2 mb-4">Be the first to contribute a solution to this problem.</p>
                  <Link to="/share-solution" className="button-primary">
                    Share Your Solution
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        
        {/* Suggested Frameworks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Suggested Frameworks</h2>
          <div className="flex flex-wrap gap-2">
            {problem.frameworks.map((framework, index) => (
              <span key={index} className="tag">{framework}</span>
            ))}
          </div>
        </section>
        
        {/* Suggested Approach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Suggested Approach</h2>
          <div className="glass-card rounded-xl p-6">
            <p className="whitespace-pre-line">{problem.approach}</p>
          </div>
        </section>
        
        {/* Contribute section - after Suggested Approach */}
        <section className="mb-12 bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Contribute to Open Product Problems</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Solution</h3>
              <p className="text-muted-foreground mb-4">
                Have an approach to this problem? Share your solution with the community.
              </p>
              <Link to="/share-solution" className="button-primary w-full">
                Share Solution
              </Link>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <PlusCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suggest a Problem</h3>
              <p className="text-muted-foreground mb-4">
                Know a great product problem? Help grow our collection.
              </p>
              <Link to="/share-problem" className="button-primary w-full">
                Share Problem
              </Link>
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        <div className="mt-16 border-t pt-8 flex justify-between">
          {prevProblem ? (
            <Link to={`/problem/${prevProblem.id}`} className="button-secondary">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Problem
            </Link>
          ) : (
            <Link to="/problems" className="button-secondary">
              <ChevronLeft className="mr-2 h-4 w-4" />
              All Problems
            </Link>
          )}
          
          {nextProblem ? (
            <Link to={`/problem/${nextProblem.id}`} className="button-primary">
              Next Problem
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <Link to="/problems" className="button-primary">
              All Problems
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProblemDetail;
