"use client";
import React ,{useState, useEffect}from 'react';
import BlogCard from '@/components/blogs/BlogCard';

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

const allBlogPosts: BlogCardProps[] = [
  {
    title: "Top Scholarships for International Students in 2025",
    summary: "Explore the most generous scholarships available in the US, UK, Canada, and Australia for international students this year.",
    author: "Priya Garg",
    authorAvatar: "/avatars/priya.png",
    date: "May 11, 2025",
    readTime: "7 min read",
    coverImage: "https://images.shiksha.com/mediadata/images/articles/1708671908php6DISTa.jpeg",
    tags: ["Scholarships", "International", "Finance"],
    url: "https://www.shiksha.com/studyabroad/top-fully-funded-scholarships-for-indian-students-to-study-abroad-articlepage-156443"
  },
  {
    title: "How to Choose the Right Course Abroad",
    summary: "Not sure what to study overseas? Learn how to align your interests, career goals, and budget when picking a course.",
    author: "Carlos Nguyen",
    authorAvatar: "/avatars/carlos.png",
    date: "May 9, 2025",
    readTime: "6 min read",
    coverImage: "https://www.georgecollege.org/blog/wp-content/uploads/2023/04/right-course.png",
    tags: ["Courses", "Career", "Guidance"],
    url: "https://www.idp.com/india/how-to-choose-study-destination/"
  },
  {
    title: "Top Universities in the United States for Computer Science",
    summary: "A comprehensive list of the best U.S. universities for studying CS, along with insights into placements and tuition.",
    author: "Sarah Lee",
    authorAvatar: "/avatars/sarah.png",
    date: "May 7, 2025",
    readTime: "5 min read",
    coverImage: "https://www.siecindia.com/uploads/blog/blog_c1cd320efb0c499e63d162a73e20a698_1742800544study-in-usa.jpg",
    tags: ["USA", "Computer Science", "Colleges"],
    url: "https://www.usnews.com/best-graduate-schools/top-science-schools/computer-science-rankings"
  },
  {
    title: "Admission Timeline for Fall 2025 Intake",
    summary: "Keep track of important dates and deadlines for applying to universities abroad for the Fall 2025 intake.",
    author: "Aditya Rao",
    authorAvatar: "/avatars/aditya.png",
    date: "May 3, 2025",
    readTime: "4 min read",
    coverImage: "https://images.shiksha.com/mediadata/images/articles/1719839259phplzaKQB.jpeg",
    tags: ["Admissions", "Timeline", "Fall 2025"],
    url: "https://www.shiksha.com/studyabroad/fall-intake-in-usa-guidepage-416"
  },
  {
    title: "Best Student Cities in Canada for International Students",
    summary: "From Toronto to Vancouver, discover which Canadian cities offer the best student experience, affordability, and safety.",
    author: "Emily Chen",
    authorAvatar: "/avatars/emily.png",
    date: "May 1, 2025",
    readTime: "6 min read",
    coverImage: "https://images.shiksha.com/mediadata/images/articles/1709283851phpBb3v4p.jpeg",
    tags: ["Canada", "Cities", "Lifestyle"],
    url: "https://www.shiksha.com/studyabroad/8-most-popular-student-cities-of-canada-articlepage-592"
  },
  {
    title: "Top Universities in the UK for Business and Management",
    summary: "Thinking about studying business in the UK? Check out these top-ranked universities and what they offer.",
    author: "David Kumar",
    authorAvatar: "/avatars/david.png",
    date: "April 28, 2025",
    readTime: "5 min read",
    coverImage: "https://siuk-europe.s3.amazonaws.com/static/original_images/best-universities-in-the-uk.webp",
    tags: ["UK", "Business", "Colleges"],
    url: "https://www.topuniversities.com/university-subject-rankings/business-management-studies"
  },
  {
    title: "A Guide to Australian Student Visas (Subclass 500)",
    summary: "Everything you need to know about the Australian Student Visa process, requirements, and post-study work rights.",
    author: "Zara Ali",
    authorAvatar: "/avatars/zara.png",
    date: "April 25, 2025",
    readTime: "7 min read",
    coverImage: "/images/australia-student-visa.jpg",
    tags: ["Australia", "Visas", "International"],
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
  },
  {
    title: "How to Write a Great Statement of Purpose (SOP)",
    summary: "Your SOP can make or break your application. Learn how to write an impactful SOP that stands out.",
    author: "Nikhil Sharma",
    authorAvatar: "/avatars/nikhil.png",
    date: "April 20, 2025",
    readTime: "6 min read",
    coverImage: "https://images.squarespace-cdn.com/content/v1/527cc9ffe4b06105448def23/cae4dd3b-7778-4a9c-907b-f049b8d4dc9a/statement-of-purpose-examples.png?format=2500w",
    tags: ["SOP", "Applications", "Admissions"],
    url: "https://www.collegeessayguy.com/blog/statement-of-purpose-examples"
  }
];


const BlogPage = () => {

  const [visibleCount, setVisibleCount] = useState(3);
  const [blogPosts, setBlogPosts] = useState<BlogCardProps[]>([]);

  useEffect(() => {
    setBlogPosts(allBlogPosts.slice(0, visibleCount));
  }, [visibleCount]);

  const handleMoreArticles = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const hasMore = visibleCount < allBlogPosts.length;
  

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          <span className="block">Our Latest</span>
          <span className="block text-indigo-600 dark:text-indigo-400">Insights & Articles</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 px-2">
          Dive into our collection of thought-provoking articles on admissions, 
          course trends, and choosing uni best practices.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <div className="relative text-sm mb-2">
            <select 
              className="appearance-none bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg py-2 pl-3 pr-10 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue="all"
            >
              <option value="all">All Categories</option>
              <option value="react">Admissions</option>
              <option value="typescript">Curriculum</option>
              <option value="css">Scholarships</option>
              <option value="javascript">Internships</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700 dark:text-zinc-300">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          
          <div className="relative text-sm mb-2">
            <select 
              className="appearance-none bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg py-2 pl-3 pr-10 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue="newest"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700 dark:text-zinc-300">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="transform transition duration-300 hover:-translate-y-1">
            <BlogCard {...post} />
          </div>
        ))}
      </div>
      
      <div className="mt-12 sm:mt-16 flex justify-center">
        {
          hasMore && <button 
          onClick={handleMoreArticles}
          className="px-5 py-2 sm:px-6 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300 flex items-center gap-2">
          Load More Articles
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        }
      </div>
    </div>
  );
};

export default BlogPage;