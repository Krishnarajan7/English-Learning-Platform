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
      <div className="container flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
            <span className="font-heading text-lg font-bold text-white">SF</span>
          </div>
          <span className="font-heading text-lg font-bold text-foreground">SpeakFlow</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Courses
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm" className="bg-gradient-hero hover:opacity-90">Get Started</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
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
              <Button className="w-full bg-gradient-hero hover:opacity-90">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
