"use client";

import { FC } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, BookOpen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  title: string;
  summary: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags?: string[];
  url:string;
}

type link = string;

const BlogCard: FC<BlogCardProps> = ({
  title,
  summary,
  author,
  authorAvatar,
  date,
  readTime,
  coverImage,
  tags = [],
  url
}) => {
  // Get author initials for avatar fallback
  const authorInitials = author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

    const router=useRouter();

    const viewBlog=(link:link)=>{
        router.push(link)
    }

  return (
    <Card className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 transition-all duration-300">
      <div className="relative">
        <Image
          src={coverImage}
          alt={title}
          width={600}
          height={300}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2 hover:text-blue-500 hover:cursor-pointer" onClick={()=>viewBlog(url)}>
            {title}
          </h2>
        </div>
      </div>

      <CardContent className="p-4">
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-2">
          {summary.slice(0,100)}...
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0 flex flex-wrap sm:flex-nowrap items-center justify-between border-t border-zinc-100 dark:border-zinc-800 gap-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-7 w-7 border border-zinc-200 dark:border-zinc-700">
            <AvatarImage src={authorAvatar} alt={author} />
            <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs">
              {authorInitials}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {author}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;