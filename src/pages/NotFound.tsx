
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md p-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
          <span className="text-2xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/" className="button-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
