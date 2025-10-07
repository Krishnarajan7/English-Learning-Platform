import { useState } from "react";
import Navigation from "@/components/Navigation";
import VideoPlayer from "@/components/VideoPlayer";
import Playlist from "@/components/Playlist";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkPlus, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const playlistItems = [
  {
    id: "1",
    title: "Introduction to English Pronunciation",
    duration: "12:30",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
    completed: true
  },
  {
    id: "2",
    title: "Mastering Vowel Sounds",
    duration: "15:45",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=225&fit=crop",
    completed: false
  },
  {
    id: "3",
    title: "Consonant Combinations",
    duration: "18:20",
    thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=225&fit=crop"
  },
  {
    id: "4",
    title: "Intonation and Rhythm",
    duration: "14:10",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=225&fit=crop"
  },
  {
    id: "5",
    title: "Common Pronunciation Mistakes",
    duration: "16:55",
    thumbnail: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=225&fit=crop"
  }
];

const VideoLesson = () => {
  const [currentVideoId, setCurrentVideoId] = useState("2");
  const { toast } = useToast();
  
  const currentVideo = playlistItems.find(item => item.id === currentVideoId);
  const currentIndex = playlistItems.findIndex(item => item.id === currentVideoId);
  
  const handleVideoEnd = () => {
    if (currentIndex < playlistItems.length - 1) {
      setCurrentVideoId(playlistItems[currentIndex + 1].id);
      toast({
        title: "Next lesson loading",
        description: "Moving to the next video in the playlist",
      });
    }
  };

  const handleBookmark = () => {
    toast({
      title: "Lesson bookmarked",
      description: "You can find this in your saved lessons",
    });
  };

  const handleShare = () => {
    toast({
      title: "Link copied",
      description: "Lesson link copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-6">
            <VideoPlayer 
              videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              onVideoEnd={handleVideoEnd}
            />
            
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">Pronunciation</Badge>
                    <Badge variant="outline">Beginner</Badge>
                  </div>
                  <h1 className="font-heading text-3xl font-bold text-foreground">
                    {currentVideo?.title}
                  </h1>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleBookmark}
                  >
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-muted-foreground">
                  In this comprehensive lesson, you'll learn the fundamentals of English pronunciation. 
                  We'll cover key vowel sounds, proper tongue placement, and common mistakes to avoid. 
                  Perfect for beginners looking to build a strong foundation in spoken English.
                </p>
                
                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">What you'll learn</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Understanding phonetic symbols and sounds</li>
                  <li>Proper mouth and tongue positioning</li>
                  <li>Common vowel and consonant combinations</li>
                  <li>Practice exercises with real-world examples</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:sticky lg:top-24 h-fit">
            <Playlist 
              items={playlistItems}
              currentId={currentVideoId}
              onSelect={setCurrentVideoId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLesson;