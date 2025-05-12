"use client";

import { useState } from "react";
import { 
  Globe, 
  School, 
  Users, 
  MessageCircle, 
  Award, 
  Star, 
  BookOpen, 
  CheckCircle,
  BarChart3,
  Building2,
  Plane,
  Heart
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { icon: School, value: "500+", label: "Universities Listed" },
    { icon: Users, value: "10,000+", label: "Enrolled Students" },
    { icon: Star, value: "2,000+", label: "Students Guided" },
    { icon: MessageCircle, value: "1000s", label: "Peer Conversations" },
  ];

  const benefits = [
    {
      title: "Authentic, Unfiltered Reviews",
      description: "Say goodbye to sugar-coated brochures. Get honest feedback about campus culture, academics, internships, scholarships, and living situations.",
      icon: CheckCircle,
    },
    {
      title: "Direct Access to Students & Alumni",
      description: "Chat with people currently studying or recently graduated from your target university. Ask real questions. Get real answers.",
      icon: Users,
    },
    {
      title: "Explore by Country, University, or Course",
      description: "Compare universities, understand course structures, and discover local job, visa, and living situations.",
      icon: Globe,
    },
    {
      title: "Student-Driven Community",
      description: "From visa doubts to roommate hunting, our discussion boards and communities support students every step of the way.",
      icon: MessageCircle,
    },
    {
      title: "Tools That Save Time & Stress",
      description: "Course comparison tools, scholarship finders, visa timeline trackers, and rankings based on real student experience.",
      icon: BarChart3,
    },
  ];

  const countries = ["US", "UK", "Canada", "Australia"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-100 dark:from-indigo-950/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Globe className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              MyUniReview
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">
              Where global dreams meet real student experiences
            </p>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Helping international students make confident decisions about their education abroad 
              through authentic reviews and real connections.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-700 dark:to-purple-900 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-10">
              <div className="bg-white mx-auto dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <Heart className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            
            <div className="text-center mx-auto md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mb-6">
                To <span className="font-bold underline decoration-2 decoration-yellow-300">empower every international student</span> to make 
                confident, well-informed decisions about their education and life abroad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white font-medium">Not based on marketing brochures</p>
                </div>
                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white font-medium">Based on real student experiences</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
                <p className="italic text-indigo-100 border-l-4 border-yellow-300 pl-4 max-w-lg">
                  "We believe the best advice doesn't come from marketing departments — 
                  it comes from students just like you."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          Our Impact So Far
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-indigo-100 dark:border-indigo-900 bg-white dark:bg-gray-900">
              <CardHeader className="pb-2 flex justify-center">
                <stat.icon className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Countries */}
      <div className="bg-indigo-50 dark:bg-indigo-900/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
            Explore Top Study Destinations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 
                border border-indigo-200 dark:border-indigo-800 shadow-sm"
              >
                <Plane className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                <span className="font-medium text-indigo-600 dark:text-indigo-400">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What is MyUniReview */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
            What is MyUniReview?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <span className="font-bold text-indigo-600 dark:text-indigo-400">MyUniReview</span> is a 
            student-first platform built to help international aspirants confidently plan their study 
            abroad journey. We connect students with real stories, real experiences, and real people — 
            so they can make smarter, more informed decisions about universities, courses, and life abroad.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We've built a community of <span className="font-bold text-indigo-600 dark:text-indigo-400">over 10,000 students</span>, 
            with insights from <span className="font-bold text-indigo-600 dark:text-indigo-400">500+ top universities</span> across 
            the <span className="font-bold text-indigo-600 dark:text-indigo-400">US, UK, Canada, and Australia</span> — and we've already helped 
            <span className="font-bold text-indigo-600 dark:text-indigo-400"> 2,000+ students</span> successfully choose the right path.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-b from-white to-indigo-50 dark:from-gray-950 dark:to-indigo-950/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
            Why Students Choose MyUniReview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{benefit.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More Information Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
          Learn More About Us
        </h2>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 w-full">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="join">Join Us</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-indigo-100 dark:border-indigo-900">
              <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We believe the best advice doesn't come from marketing departments — it comes from students.
                That's why we've built a platform where authentic experiences are valued above all else.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our mission is to empower every international student to make confident, well-informed 
                decisions about their education and life abroad — not based on ads or agents, but on the 
                lived experiences of students just like them.
              </p>
            </TabsContent>
            <TabsContent value="community" className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-indigo-100 dark:border-indigo-900">
              <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Student-Driven Community</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                From visa doubts to roommate hunting, our discussion boards and communities let students 
                support each other every step of the way — before and after getting admitted.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                It's more than a platform. It's your global student community where you can ask questions, 
                share experiences, and build connections that last beyond your academic journey.
              </p>
            </TabsContent>
            <TabsContent value="join" className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-indigo-100 dark:border-indigo-900">
              <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Join the Movement</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Whether you're just exploring, preparing for your visa, or weeks away from flying out — 
                MyUniReview is your trusted space to learn, connect, and thrive in your study abroad journey.
              </p>
              <div className="flex justify-center mt-6">
                <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                  Sign Up Now
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 dark:bg-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Join thousands of students who have found their perfect university match through 
            authentic reviews and real connections on MyUniReview.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-50 font-bold rounded-lg transition-colors duration-200">
              Browse Universities
            </button>
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-lg transition-colors duration-200">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}