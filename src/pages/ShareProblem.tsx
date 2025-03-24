
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, LightbulbIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ShareProblem = () => {
  const contactEmail = "name@example.com";
  
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Open Product Problems</Link>
            <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Share an Open Problem</CardTitle>
              <CardDescription>
                Contribute a new product problem to our growing collection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">What Makes a Good Problem?</h3>
                <ul className="space-y-3 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Real-world relevance:</span>
                    <p className="text-muted-foreground mt-1">
                      Based on actual challenges faced by product teams or inspired by real industry situations.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Clear context and constraints:</span>
                    <p className="text-muted-foreground mt-1">
                      Provides enough background information and constraints to make the problem solvable.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Open to multiple approaches</span>
                    <p className="text-muted-foreground mt-1">
                      Allows for different frameworks and methodologies to be applied.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Challenging but accessible</span>
                    <p className="text-muted-foreground mt-1">
                      Provides an appropriate level of difficulty that stretches product thinking.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">How to Submit a Problem</h3>
                <p className="mb-4">
                  Send us an email with the following information:
                </p>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Problem title</li>
                  <li>Background/context</li>
                  <li>Key questions to answer</li>
                  <li>Available data (what information would be accessible)</li>
                  <li>Suggested frameworks or approaches (optional)</li>
                  <li>Difficulty level (Easy, Medium, Hard)</li>
                  <li>Your name if you'd like to be credited (optional)</li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href={`mailto:${contactEmail}?subject=Problem%20Submission%20for%20Open%20Product%20Problems`}
                  className="inline-block"
                >
                  <Button size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Submit Your Problem
                  </Button>
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Or email us directly at: <span className="font-medium text-foreground">{contactEmail}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ShareProblem;
