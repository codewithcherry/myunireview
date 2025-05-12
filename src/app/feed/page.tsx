"use client";

import PostCreation from '@/components/feed/PostCreation'
import PostFeed from '@/components/feed/PostFeed';
import SessionAwareDrawer from '@/components/feed/SessionAwareDrawer';
import React from 'react'

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

const examplePosts: PostProps[] = [
    {
      id: "1",
      author: {
        id: "user1",
        name: "Sarah Johnson",
        username: "sarahj",
        department: "Computer Science",
        university: "Tech University"
      },
      content: "Just finished my final project for Advanced Algorithms! Anyone else struggling with the time complexity analysis? I found a really helpful resource that breaks down amortized analysis in a way that finally clicked for me. Happy to share if anyone needs it! #compsci #algorithms",
      images: [
        { id: "img1", url: "https://www.trincoll.edu/wp-content/uploads/2024/03/P1004663-edit-scaled.jpg" }
      ],
      postedAt: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ["compsci", "algorithms", "finalproject"]
    },
    {
      id: "2",
      author: {
        id: "user2",
        name: "Alex Chen",
        username: "alexc",
        department: "Business",
        university: "State University"
      },
      content: "The campus coffee shop just introduced their new spring menu and it's amazing! They've got this lavender honey latte that's perfect for those early morning study sessions. Has anyone tried it yet? Also, they're offering a student discount this week!",
      location: "University Center",
      postedAt: "Yesterday",
      likes: 42,
      comments: 15,
      shares: 7,
      isLiked: true
    },
    {
      id: "3",
      author: {
        id: "user3",
        name: "Jordan Taylor",
        username: "jordant",
        department: "Architecture",
        university: "Design Institute"
      },
      content: "Our department just announced a new workshop series on sustainable building practices! The first session is next Tuesday at 2 PM in the Design Building. They're bringing in some amazing guest speakers from industry. Registration is required but it's free for students. DM me if you need the link!",
      images: [
        { id: "img2", url: "https://images.stockcake.com/public/e/f/3/ef34750c-326b-4b5a-a303-3f9f8dbb8bf2_large/focused-engineering-students-stockcake.jpg" },
        { id: "img3", url: "https://images.stockcake.com/public/d/9/9/d99a7d5c-2b25-4c6e-9d01-d36eceaf9850_medium/robotics-workshop-focus-stockcake.jpg" },
        { id: "img4", url: "https://images.stockcake.com/public/0/d/1/0d1c5af0-5ea5-4180-93c1-69882d509ed6_medium/students-building-circuit-stockcake.jpg" }
      ],
      eventDate: "Next Tuesday, 2 PM",
      location: "Design Building, Room 302",
      postedAt: "2 days ago",
      likes: 18,
      comments: 5,
      shares: 12,
      tags: ["architecture", "sustainability", "workshop"]
    }
  ];

const page = () => {
  return (
    <div className='w-full bg-gray-50 dark:bg-zinc-900'>
      <div className='mx-auto py-10'>
        {/* <h1 className='text-2xl text-center text-indigo-400 animate-pulse mt-12'>
            Coming Soon
        </h1> */}
        <PostCreation />
        
      </div>
      <div className='py-6'>
        <PostFeed  posts={examplePosts} />
      </div>
      <SessionAwareDrawer />
    </div>
  )
}

export default page
