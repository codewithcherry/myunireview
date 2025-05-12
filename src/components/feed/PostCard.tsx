import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  MoreHorizontal,
  MapPin,
  Calendar,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PostImage {
  id: string;
  url: string;
}

interface PostAuthor {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  department?: string;
  university?: string;
}

interface PostProps {
  id: string;
  author: PostAuthor;
  content: string;
  images?: PostImage[];
  location?: string;
  eventDate?: string;
  postedAt: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  tags?: string[];
}

interface PostFeedProps {
  posts: PostProps[];
}

export  default function PostCard({ post }: { post: PostProps }) {
  const [liked, setLiked] = useState<boolean>(post.isLiked || false);
  const [likesCount, setLikesCount] = useState<number>(post.likes);
  const [bookmarked, setBookmarked] = useState<boolean>(post.isBookmarked || false);
  const [showAllContent, setShowAllContent] = useState<boolean>(false);
  
  const toggleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };
  
  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };
  
  // Function to format the posted time (e.g., "2h ago", "Yesterday", etc.)
  const formatPostedTime = (timeString: string): string => {
    // In a real app, you would compare the current time with the posted time
    // For demo purposes, we'll just return the string
    return timeString;
  };
  
  // Content truncation with "See more" functionality
  const contentIsLong = post.content.length > 280;
  const displayContent = showAllContent || !contentIsLong 
    ? post.content 
    : `${post.content.substring(0, 280)}...`;
  
  return (
    <Card className="w-full border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start space-y-0 gap-3 p-4">
        <Avatar className="h-10 w-10 border-2 border-white dark:border-gray-800 shadow-sm">
          <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            {post.author.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">{post.author.name}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>@{post.author.username}</span>
                <span className="mx-1">·</span>
                <span>{formatPostedTime(post.postedAt)}</span>
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <MoreHorizontal className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="cursor-pointer">Not interested in this post</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Follow {post.author.name}</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-500 dark:text-red-400">Report post</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {(post.author.department || post.author.university) && (
            <div className="mt-1 flex flex-wrap gap-1">
              {post.author.department && (
                <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-900 text-xs">
                  {post.author.department}
                </Badge>
              )}
              {post.author.university && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900 text-xs">
                  {post.author.university}
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="px-4 py-2">
        {/* Post content */}
        <div className="space-y-3">
          {/* Text content */}
          <div className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
            <p>{displayContent}</p>
            {contentIsLong && !showAllContent && (
              <button 
                onClick={() => setShowAllContent(true)}
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline mt-1"
              >
                See more
              </button>
            )}
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Location and event date */}
          {(post.location || post.eventDate) && (
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mt-2">
              {post.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{post.location}</span>
                </div>
              )}
              {post.eventDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.eventDate}</span>
                </div>
              )}
            </div>
          )}
          
          {/* Images */}
          {post.images && post.images.length > 0 && (
            <div className={cn(
              "grid gap-2 mt-3",
              post.images.length === 1 ? "grid-cols-1" : 
              post.images.length === 2 ? "grid-cols-2" : 
              post.images.length >= 3 ? "grid-cols-2 md:grid-cols-3" : ""
            )}>
              {post.images.map((image, index) => (
                <div 
                  key={image.id} 
                  className={cn(
                    "relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800",
                    post.images && post.images.length === 1 ? "aspect-video" : 
                    "aspect-square"
                  )}
                >
                  <img 
                    src={image.url} 
                    alt={`Post image ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      
      <Separator className="my-1" />
      
      <CardFooter className="p-2 flex justify-between">
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={toggleLike}
          >
            <Heart 
              className={cn(
                "h-4 w-4 mr-1", 
                liked ? "fill-red-500 text-red-500" : "fill-none"
              )} 
            />
            <span className="text-sm">{likesCount}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            <span className="text-sm">{post.comments}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Share2 className="h-4 w-4 mr-1" />
            <span className="text-sm">{post.shares}</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300"
          >
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300"
          >
            <ThumbsDown className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={cn(
              "flex items-center gap-1",
              bookmarked ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-300"
            )}
            onClick={toggleBookmark}
          >
            <Bookmark className={cn("h-4 w-4", bookmarked ? "fill-indigo-600 dark:fill-indigo-400" : "fill-none")} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}



