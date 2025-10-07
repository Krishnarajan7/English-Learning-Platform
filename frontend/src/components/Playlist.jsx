import { Clock, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";


const Playlist = ({ items, currentId, onSelect }) => {
  return (
    <div className="h-full bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="font-heading text-lg font-semibold">Course Playlist</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {items.length} lessons
        </p>
      </div>
      
      <ScrollArea className="h-[calc(100%-80px)]">
        <div className="p-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={cn(
                "w-full p-3 rounded-lg mb-2 flex gap-3 items-start transition-all duration-200",
                "hover:bg-muted/50 hover:shadow-sm",
                currentId === item.id 
                  ? "bg-primary/10 border-2 border-primary shadow-soft" 
                  : "border border-transparent"
              )}
            >
              <div className="flex-shrink-0 text-sm font-medium text-muted-foreground w-6">
                {index + 1}
              </div>
              
              <div className="relative flex-shrink-0 w-28 aspect-video rounded overflow-hidden bg-muted">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {currentId === item.id && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex-1 text-left min-w-0">
                <h4 className={cn(
                  "font-medium text-sm line-clamp-2 mb-1",
                  currentId === item.id ? "text-primary" : "text-foreground"
                )}>
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{item.duration}</span>
                  {item.completed && (
                    <CheckCircle2 className="h-3 w-3 text-secondary ml-auto" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Playlist;
