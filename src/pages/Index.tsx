import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { problemsData, getDifficultyColor } from '../data/problemsData';

const featuredProblems = problemsData.slice(0, 6);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <div className="relative container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Open Product Problems
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8">
              A curated collection of product problems to strengthen your skills. 
            </p>
            <span className="tag mb-6">It's ok to fail here ❤️</span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" asChild>
                <Link to="/problems">
                  View Problems
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="tag mb-4">Featured Problems</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore The Problems 
            </h2>
            <p className="text-muted-foreground">
              Try out any of these product problems to test your skills, think about approaches and get feedback.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProblems.map((problem) => (
              <Link 
                key={problem.id} 
                to={`/problem/${problem.id}`}
                className="hover-lift transition-all no-underline"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="tag">{problem.categories[0].replace('-', ' ')}</span>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                    <CardDescription>{problem.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <span className="text-sm text-primary font-medium flex items-center">
                      View Problem
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild>
              <Link to="/problems">
                View All Problems
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="tag mb-4">Why Practice Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Product Thinking With Practice
            </h2>
            <p className="text-muted-foreground">
              Deliberate practice is one of the most effective ways to develop your product management skills. Use these problems to prepare for interviews, develop methods with your team and or just to flex!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-World Scenarios",
                description: "Practice with authentic problems faced by product teams at leading companies."
              },
              {
                title: "Structured Approach",
                description: "Each problem includes context, data, constraints, and suggested frameworks. Make it your own by using whatever you want."
              },
              {
                title: "Diverse Challenges",
                description: "From feature prioritization to market entry, cover the full spectrum of PM skills and suggest your own solutions."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to try?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our collection of product problems and start improving your skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/problems">
                  Browse All Problems
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/share-problem">
                  Share an Open Problem
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
