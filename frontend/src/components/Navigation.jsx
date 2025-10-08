import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-heading text-lg font-bold text-primary-foreground">BW</span>
          </div>
          <span className="font-heading text-xl font-bold text-foreground">BestPracticeWay</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1 ml-8">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
            Home
          </Link>
          <Link to="/courses" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
            Courses
          </Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
            About
          </Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-3 ml-auto">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>

        <button
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/courses" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Courses
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Button variant="outline" className="w-full">Sign In</Button>
            <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;