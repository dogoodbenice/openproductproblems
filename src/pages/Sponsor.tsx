
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Sponsor = () => {
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sponsor Open Product Problems</h1>
          <p className="text-xl text-muted-foreground">
            Help us grow our platform and reach more product professionals
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Sponsor Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">For Companies</h3>
                  <ul className="space-y-3">
                    {[
                      "Access to talented product thinkers in our community",
                      "Brand visibility to product professionals",
                      "Opportunity to shape the future of product education",
                      "Demonstrate commitment to product excellence",
                      "Connect with a growing network of product managers"
                    ].map((benefit, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">For Individuals</h3>
                  <ul className="space-y-3">
                    {[
                      "Support a free educational resource for the PM community",
                      "Help us develop new content and features",
                      "Enable more comprehensive learning resources",
                      "Be acknowledged on our sponsors page",
                      "Help make product skills more accessible to all"
                    ].map((benefit, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Sponsorship Opportunities</h2>
            <div className="glass-card rounded-xl p-6">
              <p className="mb-6">
                We offer various sponsorship levels and opportunities that can be tailored to your organization's goals and budget. Whether you're interested in content sponsorship, platform enhancements, or community events, we'd love to discuss how we can collaborate.
              </p>
              <p className="mb-8">
                Our sponsors help us keep this resource free and accessible to everyone while continually improving the platform with new problems, frameworks, and learning resources.
              </p>
              <div className="text-center">
                <Link to="/contact">
                  <Button size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us About Sponsorship
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Sponsor;
