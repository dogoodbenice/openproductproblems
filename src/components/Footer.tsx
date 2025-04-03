import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Open Product Problems. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Helping others build better products, one problem at a time ✨
            </p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/dogoodbenice/openproductproblems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/surajrai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://bit.ly/buysurajacoffe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Coffee className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/share-problem" className="text-sm text-muted-foreground hover:text-foreground">Contribute</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <Link to="/sponsor" className="text-sm text-muted-foreground hover:text-foreground">Sponsor</Link>
            <Link to="/guestbook" className="text-sm text-muted-foreground hover:text-foreground">Guestbook</Link>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-lg h-1.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full opacity-70"></div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            The best products solve real customer problems in the most valuable and viable way ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
