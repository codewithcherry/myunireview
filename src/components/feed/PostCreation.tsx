'use client';

import { useState, useRef, ChangeEvent, MouseEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  ImagePlus, 
  Calendar, 
  MapPin, 
  Smile, 
  X, 
  Send,
  Link2,
  AtSign
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

interface SelectedImage {
  id: string;
  url: string;
  file: File;
}

export default function PostCreation() {
  const [postText, setPostText] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
    if (!isExpanded && e.target.value.length > 0) {
      setIsExpanded(true);
    }
  };

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substring(2),
        url: URL.createObjectURL(file),
        file
      }));
      setSelectedImages(prev => [...prev, ...newFiles]);
      setIsExpanded(true);
      
      // Clear the input to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeImage = (id: string) => {
    setSelectedImages(prevImages => {
      const updatedImages = prevImages.filter(img => img.id !== id);
      // Revoke object URLs to prevent memory leaks
      const removedImage = prevImages.find(img => img.id === id);
      if (removedImage) {
        URL.revokeObjectURL(removedImage.url);
      }
      return updatedImages;
    });
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!postText.trim() && selectedImages.length === 0) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Post submitted:', { text: postText, images: selectedImages });
      
      // Reset state
      setPostText('');
      setSelectedImages(prev => {
        // Cleanup URLs
        prev.forEach(img => URL.revokeObjectURL(img.url));
        return [];
      });
      setIsExpanded(false);
    } catch (error) {
      console.error('Error submitting post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconButtonClass = "rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors";

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md overflow-hidden">
      <div className="p-4 md:p-6">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10 ring-2 ring-indigo-100 dark:ring-indigo-900">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">UN</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-4">
            <Textarea
              placeholder="What's happening at your university?"
              className="w-full border-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-gray-900 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-0 text-lg"
              value={postText}
              onChange={handlePostTextChange}
              onClick={() => setIsExpanded(true)}
              rows={isExpanded ? 3 : 1}
            />
            
            {selectedImages.length > 0 && (
              <div className={cn(
                "grid gap-3 mt-3", 
                selectedImages.length === 1 ? "grid-cols-1" : 
                selectedImages.length === 2 ? "grid-cols-2" : 
                "grid-cols-2 md:grid-cols-3"
              )}>
                {selectedImages.map(img => (
                  <div key={img.id} className="relative rounded-lg overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800 group shadow-sm">
                    <img 
                      src={img.url} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      alt="Selected media"
                    />
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon"
                      className="absolute top-2 right-2 h-7 w-7 bg-black/50 hover:bg-black/70 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(img.id)}
                    >
                      <X className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <>
          <Separator className="my-2 dark:bg-gray-800" />
          
          <div className="px-4 md:px-6 py-3 flex items-center justify-between">
            <TooltipProvider delayDuration={300}>
              <div className="flex items-center gap-1">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  onChange={handleImageSelect}
                  accept="image/*"
                  multiple
                />
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      className={iconButtonClass}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <ImagePlus className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Add image</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      className={iconButtonClass}
                    >
                      <Calendar className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Add event</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      className={iconButtonClass}
                    >
                      <MapPin className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Add location</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      className={iconButtonClass}
                    >
                      <Link2 className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Add link</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      className={iconButtonClass}
                    >
                      <AtSign className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Mention</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      className={iconButtonClass}
                    >
                      <Smile className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Add emoji</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
            
            <div className="flex items-center gap-3">
              {postText.length > 0 && (
                <span className={cn(
                  "text-xs font-medium",
                  postText.length > 500 ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400"
                )}>
                  {postText.length}/500
                </span>
              )}
              
              <Button 
                type="button"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 py-2 font-medium shadow-sm dark:bg-indigo-700 dark:hover:bg-indigo-600 flex items-center gap-2 transition-all"
                disabled={(!postText.trim() && selectedImages.length === 0) || isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? 'Posting...' : 'Post'}
                {!isSubmitting && <Send className="h-4 w-4 ml-1" />}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}