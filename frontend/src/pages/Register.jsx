import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 13 && num <= 120;
  }, "Age must be between 13 and 120"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number is too long"),
  country: z.string().min(1, "Please select a country"),
  englishLevel: z.string().min(1, "Please select your English level"),
  learningGoal: z.string().trim().min(10, "Please tell us more about your learning goals (at least 10 characters)").max(500, "Learning goals must be less than 500 characters")
});


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    phone: "",
    country: "",
    englishLevel: "",
    learningGoal: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = registerSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Registration Successful!",
        description: "Welcome to SpeakFlow. You can now start learning.",
      });
      
      navigate("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Create Your Account
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Join thousands of learners on their journey to English fluency
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    placeholder="Enter your age"
                    min="13"
                    max="120"
                    className={errors.age ? "border-destructive" : ""}
                  />
                  {errors.age && (
                    <p className="text-sm text-destructive">{errors.age}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 234 567 8900"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => handleChange("country", value)}
                >
                  <SelectTrigger className={errors.country ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="cn">China</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="kr">South Korea</SelectItem>
                    <SelectItem value="br">Brazil</SelectItem>
                    <SelectItem value="mx">Mexico</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-sm text-destructive">{errors.country}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="englishLevel">Current English Level *</Label>
                <Select
                  value={formData.englishLevel}
                  onValueChange={(value) => handleChange("englishLevel", value)}
                >
                  <SelectTrigger className={errors.englishLevel ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your English level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner - Just starting</SelectItem>
                    <SelectItem value="elementary">Elementary - Basic understanding</SelectItem>
                    <SelectItem value="intermediate">Intermediate - Comfortable with basics</SelectItem>
                    <SelectItem value="upper-intermediate">Upper Intermediate - Good understanding</SelectItem>
                    <SelectItem value="advanced">Advanced - Fluent speaker</SelectItem>
                  </SelectContent>
                </Select>
                {errors.englishLevel && (
                  <p className="text-sm text-destructive">{errors.englishLevel}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="learningGoal">Learning Goals *</Label>
                <Input
                  id="learningGoal"
                  value={formData.learningGoal}
                  onChange={(e) => handleChange("learningGoal", e.target.value)}
                  placeholder="What do you want to achieve? (e.g., business communication, travel, academics)"
                  className={errors.learningGoal ? "border-destructive" : ""}
                />
                {errors.learningGoal && (
                  <p className="text-sm text-destructive">{errors.learningGoal}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By registering, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;