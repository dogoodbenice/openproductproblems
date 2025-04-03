import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Guestbook = () => {
  useEffect(() => {
    // Load Giscus script
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'dogoodbenice/openproductproblems');
    script.setAttribute('data-repo-id', 'R_kgDOON1EoA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOON1EoM4CotN_');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'noborder_light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Append script to the giscus container
    const giscusContainer = document.getElementById('giscus-container');
    if (giscusContainer) {
      giscusContainer.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (giscusContainer) {
        giscusContainer.innerHTML = '';
      }
    };
  }, []);

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
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Guestbook</h1>
          <p className="text-muted-foreground mb-8">
            Leave a message, share your thoughts, or just say hello! This guestbook is powered by Giscus, 
            which means you can use your GitHub account to comment.
          </p>
          <div id="giscus-container" className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Guestbook; 