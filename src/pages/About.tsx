
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const About = () => {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Open Product Problems</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="glass-card rounded-xl p-6">
              <p className="mb-4">
                Open Product Problems is a platform designed to help product managers, aspiring PMs, and product teams sharpen their skills through real-world product challenges. We believe that deliberate practice with authentic scenarios is the most effective way to develop product thinking and prepare for interviews.
              </p>
              <p>
                Our curated collection of problems spans various industries, difficulty levels, and product areas to provide a comprehensive training ground for product professionals at all stages of their careers.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Use Open Product Problems</h2>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">For Individual Practice</h3>
              <p className="mb-6">
                Challenge yourself with our diverse set of product problems to develop your strategic thinking, analytical skills, and product intuition. Use our suggested frameworks as a starting point, then develop your unique approach.
              </p>
              
              <h3 className="font-bold text-lg mb-3">For Interview Preparation</h3>
              <p className="mb-6">
                Practice with our problems to build confidence and fluency in articulating product solutions. Our problems mirror the types of challenges you might face in PM interviews at top tech companies.
              </p>
              
              <h3 className="font-bold text-lg mb-3">For Team Building</h3>
              <p className="mb-6">
                Use these problems as team exercises to foster collaboration and alignment. They're excellent for onboarding new product team members or running workshops to improve cross-functional communication.
              </p>
              
              <h3 className="font-bold text-lg mb-3">For Trying New Approaches</h3>
              <p>
                Experiment with different frameworks and methodologies in a risk-free environment. Compare your approaches with the community solutions to gain new perspectives and refine your product thinking.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About the Creator</h2>
            <div className="glass-card rounded-xl p-6">
              <p className="mb-4">
                Open Product Problems was created by Suraj Rai, a product leader passionate about helping others develop their product skills and thinking.
              </p>
              <a 
                href="https://www.surajr.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Visit Suraj's Website
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <div className="glass-card rounded-xl p-6">
              <p className="mb-6">
                We believe in the power of community learning. Share your solutions, learn from others, and contribute to making this platform even better.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/share-problem" className="button-primary">
                  Submit a Problem
                </Link>
                <Link to="/contact" className="button-secondary">
                  Contact Us
                </Link>
                <Link to="/sponsor" className="button-secondary">
                  Sponsor the Project
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
