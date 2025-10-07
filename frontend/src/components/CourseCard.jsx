import { Clock, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";


const CourseCard = ({ id, title, description, image, duration, students, rating, level }) => {
  return (
    <Link to={`/lesson/${id}`}>
      <Card className="group overflow-hidden border-border bg-gradient-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1 cursor-pointer">
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0">
            {level}
          </Badge>
        </div>
        
        <div className="p-5 space-y-3">
          <h3 className="font-heading text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                <span>{students.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-sm font-medium">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;