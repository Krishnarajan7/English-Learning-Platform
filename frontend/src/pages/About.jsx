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
      
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={heroAnimation.ref}
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              About SpeakFlow
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering learners worldwide to master English with confidence and fluency
            </p>
          </div>

          <div 
            ref={storyAnimation.ref}
            className={`mb-12 md:mb-20 transition-all duration-1000 ${
              storyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="aspect-video rounded-xl md:rounded-2xl bg-primary mb-6 md:mb-8 flex items-center justify-center">
              <span className="text-primary-foreground text-4xl sm:text-5xl md:text-6xl font-heading font-bold">SF</span>
            </div>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 md:mb-6">
              Founded in 2020, SpeakFlow has become a trusted platform for English language learners 
              around the globe. Our mission is to break down language barriers and help individuals 
              achieve their personal and professional goals through effective communication.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              With over 10,000 active learners and a team of experienced instructors, we've created 
              a comprehensive learning ecosystem that combines expert-led video lessons, interactive 
              exercises, and a supportive community.
            </p>
          </div>

          <div 
            ref={valuesAnimation.ref}
            className={`grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20 transition-all duration-1000 ${
              valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border hover:shadow-hover transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-lg md:rounded-xl bg-primary mb-4 md:mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Mission</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                To make quality English education accessible to everyone, regardless of their location 
                or background, through innovative online learning experiences.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border hover:shadow-hover transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-lg md:rounded-xl bg-primary mb-4 md:mb-6">
                <Heart className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Values</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Excellence, accessibility, and community drive everything we do. We believe in 
                creating a supportive environment where every learner can thrive.
              </p>
            </div>
          </div>

          <div 
            ref={statsAnimation.ref}
            className={`mb-12 md:mb-20 transition-all duration-1000 ${
              statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12">
              Our Achievements
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
              <div className="text-center p-3 md:p-6">
                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary/10 mx-auto mb-2 md:mb-4">
                  <Users className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">10K+</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Active Learners</div>
              </div>

              <div className="text-center p-3 md:p-6">
                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-secondary/10 mx-auto mb-2 md:mb-4">
                  <Award className="h-5 w-5 md:h-8 md:w-8 text-secondary" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">50+</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Expert Courses</div>
              </div>

              <div className="text-center p-3 md:p-6">
                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/10 mx-auto mb-2 md:mb-4">
                  <Target className="h-5 w-5 md:h-8 md:w-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">95%</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div 
            ref={ctaAnimation.ref}
            className={`text-center bg-primary text-primary-foreground rounded-xl md:rounded-2xl p-8 md:p-12 transition-all duration-1000 ${
              ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Join Our Learning Community
            </h2>
            <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
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