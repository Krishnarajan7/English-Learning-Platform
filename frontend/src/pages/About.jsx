import Navigation from "@/components/Navigation";
import { Users, Target, Award, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={heroAnimation.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              About BestPracticeWay
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering learners worldwide to master English with confidence and fluency
            </p>
          </div>

          <div 
            ref={storyAnimation.ref}
            className={`mb-20 transition-all duration-1000 ${
              storyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="aspect-video rounded-2xl bg-primary mb-8 flex items-center justify-center">
              <span className="text-primary-foreground text-6xl font-heading font-bold">BW</span>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Founded in 2020, BestPracticeWay has become a trusted platform for English language learners 
              around the globe. Our mission is to break down language barriers and help individuals 
              achieve their personal and professional goals through effective communication.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With over 10,000 active learners and a team of experienced instructors, we've created 
              a comprehensive learning ecosystem that combines expert-led video lessons, interactive 
              exercises, and a supportive community.
            </p>
          </div>

          <div 
            ref={valuesAnimation.ref}
            className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-1000 ${
              valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make quality English education accessible to everyone, regardless of their location 
                or background, through innovative online learning experiences.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-hover transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary mb-6">
                <Heart className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence, accessibility, and community drive everything we do. We believe in 
                creating a supportive environment where every learner can thrive.
              </p>
            </div>
          </div>

          <div 
            ref={statsAnimation.ref}
            className={`mb-20 transition-all duration-1000 ${
              statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">10,000+</div>
                <div className="text-muted-foreground">Active Learners</div>
              </div>

              <div className="text-center p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Expert Courses</div>
              </div>

              <div className="text-center p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div 
            ref={ctaAnimation.ref}
            className={`text-center bg-primary text-primary-foreground rounded-2xl p-12 transition-all duration-1000 ${
              ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Join Our Learning Community
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start your journey to English fluency today with our expert-led courses and 
              supportive community of learners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;