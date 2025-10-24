import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const heroAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={heroAnimation.ref}
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div 
            ref={contentAnimation.ref}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 transition-all duration-1000 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-lg md:rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300">
                    <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">support@speakflow.com</p>
                      <p className="text-xs md:text-sm text-muted-foreground">info@speakflow.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-lg md:rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300">
                    <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-lg md:rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300">
                    <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">Office</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">123 Learning Street</p>
                      <p className="text-xs md:text-sm text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 rounded-lg md:rounded-xl bg-muted/50">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border shadow-soft">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;