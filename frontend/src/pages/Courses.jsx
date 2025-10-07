import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const courses = [
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
    id: "3",
    title: "English Grammar Foundations",
    description: "Build a solid foundation in English grammar with clear explanations and examples",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=450&fit=crop",
    duration: "10 hours",
    students: 3421,
    rating: 4.7,
    level: "Beginner"
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
  },
  {
    id: "5",
    title: "IELTS Test Preparation Complete",
    description: "Comprehensive preparation for all sections of the IELTS examination",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
    duration: "20 hours",
    students: 2156,
    rating: 4.8,
    level: "Intermediate"
  },
  {
    id: "6",
    title: "English Writing Excellence",
    description: "Improve your writing skills for academic and professional success",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&h=450&fit=crop",
    duration: "14 hours",
    students: 1654,
    rating: 4.6,
    level: "Advanced"
  }
];

const Courses = () => {
  const heroAnimation = useScrollAnimation();
  const coursesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 py-12">
        <div 
          ref={heroAnimation.ref}
          className={`max-w-3xl mb-12 transition-all duration-1000 ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose from our expertly crafted courses designed to help you achieve fluency in English
          </p>
        </div>

        <div 
          ref={coursesAnimation.ref}
          className={`transition-all duration-1000 ${
            coursesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-muted">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="beginner" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.filter(c => c.level === "Beginner").map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="intermediate" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.filter(c => c.level === "Intermediate").map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.filter(c => c.level === "Advanced").map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          </Tabs>
        </div>

        <div 
          ref={ctaAnimation.ref}
          className={`mt-12 text-center transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button size="lg" variant="outline">
            Request a Custom Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;