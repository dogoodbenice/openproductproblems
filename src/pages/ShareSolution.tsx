
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ShareSolution = () => {
  const contactEmail = "name@example.com";
  
  return (
    <div className="min-h-screen bg-background pb-20">
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

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Share Your Solution</CardTitle>
              <CardDescription>
                Contribute to our community by sharing your approach to a product problem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">How to Submit Your Solution</h3>
                <ol className="space-y-4 pl-6 list-decimal">
                  <li>
                    <span className="font-medium">Create your solution</span>
                    <p className="text-muted-foreground mt-1">
                      Develop a solution for any problem on our platform. This could be a document, blog post, video walkthrough, or any other format that effectively communicates your approach.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Host it somewhere public</span>
                    <p className="text-muted-foreground mt-1">
                      Upload your solution to a service where it can be publicly accessed (Medium, your personal blog, GitHub, LinkedIn article, etc.)
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Email us your submission</span>
                    <p className="text-muted-foreground mt-1">
                      Send us an email with:
                      <ul className="list-disc pl-6 mt-2">
                        <li>The problem you're solving</li>
                        <li>A brief description of your approach</li>
                        <li>Your name and background (optional)</li>
                        <li>The link to your published solution</li>
                      </ul>
                    </p>
                  </li>
                </ol>
              </div>

              <div className="text-center">
                <p className="mb-6">
                  We'll review your submission and add it to our community solutions!
                </p>
                <a
                  href={`mailto:${contactEmail}?subject=Solution%20Submission%20for%20Open%20Product%20Problems`}
                  className="inline-block"
                >
                  <Button size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Submit Your Solution
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

export default ShareSolution;
