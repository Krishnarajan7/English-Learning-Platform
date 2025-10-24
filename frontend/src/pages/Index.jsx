import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featuredCourses = [
  {
    id: "1",
    title: "Complete English Pronunciation Mastery",
    description: "Master the art of English pronunciation with expert guidance and practical exercises",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop",
    duration: "8 hours",
    students: 2547,
    rating: 4.8,
    level: "Beginner"
  },
  {
    id: "2",
    title: "Advanced Business English Communication",
    description: "Elevate your professional communication skills for the global business environment",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&fit=crop",
    duration: "12 hours",
    students: 1893,
    rating: 4.9,
    level: "Advanced"
  },
  {
    id: "4",
    title: "Conversational English Fluency",
    description: "Speak English naturally and confidently in everyday conversations",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=450&fit=crop",
    duration: "15 hours",
    students: 4102,
    rating: 4.9,
    level: "Intermediate"
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from experienced instructors with years of teaching expertise"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of learners on their journey to English mastery"
  },
  {
    icon: Trophy,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed analytics and certificates"
  },
  {
    icon: Sparkles,
    title: "Interactive Learning",
    description: "Engage with dynamic content and real-world practice scenarios"
  }
];

const Index = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const coursesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`relative overflow-hidden py-24 md:py-40 transition-all duration-1000 ${
          heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,182,193,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(152,193,180,0.1),transparent_50%)]" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-foreground">Your journey to English fluency starts here</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Master English with{" "}
              <span className="text-primary relative inline-block">
                Confidence
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your English skills through expert-led video lessons, interactive courses, 
              and a supportive learning community designed for your success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 font-semibold px-8 shadow-lg hover:shadow-xl transition-all">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/courses" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full px-8 border-2 hover:bg-accent/10">
                  Explore Courses
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-2xl mx-auto">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Expert Courses</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">4.9★</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresAnimation.ref}
        className={`py-16 md:py-20 bg-muted/30 transition-all duration-1000 ${
          featuresAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section 
        ref={coursesAnimation.ref}
        className={`py-16 md:py-20 transition-all duration-1000 ${
          coursesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Courses
              </h2>
              <p className="text-muted-foreground">
                Start with our most popular learning paths
              </p>
            </div>
            <Link to="/courses" className="hidden md:block">
              <Button variant="outline">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/courses">
              <Button variant="outline" className="w-full sm:w-auto">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.ref}
        className={`py-16 md:py-20 bg-primary text-primary-foreground transition-all duration-1000 ${
          ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Ready to Transform Your English?
            </h2>
            <p className="text-lg opacity-90">
              Join over 10,000 students who are already on their path to fluency
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="px-8">
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary-foreground hover:bg-primary-foreground/20">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-border">
        <div className="container px-4 md:px-6">
          {/* Logo Section - Full width on mobile */}
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-xl font-bold text-primary-foreground">SF</span>
              </div>
              <span className="font-heading text-xl font-bold">SpeakFlow</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto md:mx-0">
              Your trusted partner in English language learning
            </p>
          </div>

          {/* Links Grid - 2 columns on mobile, 3 on tablet, 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10">
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Courses</h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Beginner</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Intermediate</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Advanced</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Business English</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Company</h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4 text-sm md:text-base">Support</h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-xs md:text-sm text-muted-foreground">
            <p>© 2025 SpeakFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
