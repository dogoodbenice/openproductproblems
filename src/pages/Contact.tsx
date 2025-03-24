import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactEmail = 'contact@openproductproblems.com';

  return (
    <div className="min-h-screen bg-background">
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

      <main className="container py-12 flex-grow">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>
                Have questions, suggestions, or want to contribute to Open Product Problems?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="mb-6">
                  We'd love to hear from you! Send us an email and we'll get back to you as soon as possible.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-block"
                >
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact via Email
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

export default Contact;
