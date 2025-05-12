"use client";

import PostCard from "./PostCard";

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
export default function PostFeed({ posts }: PostFeedProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      
      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-xl font-medium text-gray-900 dark:text-gray-100">No posts yet</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Be the first to share something with the community!</p>
        </div>
      )}
    </div>
  );
}