
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { problemsData, getDifficultyColor } from '../data/problemsData';

const featuredProblems = problemsData.slice(0, 6);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag mb-4 inline-block">
              Product Management Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Open Product Problems
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A curated collection of real-world product challenges to sharpen your 
              product management skills and prepare for interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/problems" className="button-primary">
                Explore Problems
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="#about" className="button-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to discover</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* Featured Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="tag mb-4">Featured Problems</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Challenges
            </h2>
            <p className="text-muted-foreground">
              Try these product management challenges to test your skills and prepare for interviews.
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
            <Link to="/problems" className="button-primary">
              View All Problems
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="tag mb-4">Why Practice Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Product Thinking
            </h2>
            <p className="text-muted-foreground">
              Deliberate practice with real-world scenarios is the most effective way to develop 
              your product management skills and prepare for interviews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-World Cases",
                description: "Practice with authentic problems faced by product managers at leading companies."
              },
              {
                title: "Structured Approach",
                description: "Each problem includes context, data, constraints, and suggested frameworks."
              },
              {
                title: "Diverse Challenges",
                description: "From feature prioritization to market entry, cover the full spectrum of PM skills."
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
              Ready to challenge yourself?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our collection of product problems and start improving your skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/problems" className="button-primary">
                Browse All Problems
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/share-problem" className="button-secondary">
                Share an Open Problem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Open Product Problems. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
              <Link to="/share-problem" className="text-sm text-muted-foreground hover:text-foreground">Contribute</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
              <Link to="/sponsor" className="text-sm text-muted-foreground hover:text-foreground">Sponsor</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
