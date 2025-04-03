import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, AlertCircle, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactEmail = "name@example.com";
  const githubIssuesUrl = "https://github.com/dogoodbenice/openproductproblems/issues";

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col">
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
      <main className="container py-12 flex-grow">
        <div className="max-w-md mx-auto space-y-6">
          {/* General Contact Card */}
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
                  className="inline-block w-full"
                >
                  <Button className="w-full">
                    <Mail className="h-4 w-4" />
                    Contact via Email
                  </Button>
                </a>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to send us some love? Leave a message in our guestbook! 💌
                  </p>
                  <Link to="/guestbook" className="inline-block w-full">
                    <Button variant="secondary" className="w-full">
                      Sign Our Guestbook
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report a Problem Card */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Report a Problem</CardTitle>
              <CardDescription>
                Found a bug, issue, or want to report a problem?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="mb-6">
                  Help us improve by reporting issues or bugs you've encountered.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${contactEmail}?subject=Problem Report`}
                    className="inline-block w-full"
                  >
                    <Button className="w-full">
                      <Mail className="h-4 w-4" />
                      Report via Email
                    </Button>
                  </a>
                  <a
                    href={githubIssuesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button variant="secondary" className="w-full">
                      <Github className="h-4 w-4" />
                      Report on GitHub
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  For technical issues, we recommend reporting them on GitHub for better tracking and community visibility.
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
