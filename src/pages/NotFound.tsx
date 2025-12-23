import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-8xl font-display font-bold text-gradient">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
