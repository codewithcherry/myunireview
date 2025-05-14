'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const HowItWorks:React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Register / Sign In',
      description: 'Create an account or log in to access personalized recommendations.',
      imageSrc: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1746345371~exp=1746348971~hmac=8f7244964bde6d92b4eb85941f147a2ce1f9c99f0d97bba4a2c75461e42d1f33&w=826',
      imageAlt: 'Registration icon',
    },
    {
      id: 2,
      title: 'Search or Select University',
      description: 'Find your university through our smart search or browse our directory.',
      imageSrc: 'https://img.freepik.com/free-vector/search-concept-illustration_114360-95.jpg?t=st=1746345507~exp=1746349107~hmac=5385e620686c4f4fed7bcb7f75d2dbe8c8a6b3440c80a5829bce8abc367e1423&w=826',
      imageAlt: 'Search icon',
    },
    {
      id: 3,
      title: 'Read or Write a Review',
      description: 'Explore authentic student experiences or contribute your insights.',
      imageSrc: 'https://img.freepik.com/free-vector/social-network-user-popularity-photo-rating-activity-indicator-likes-quantity-positive-negative-reviews-number-avatar-profile-picture_335657-2969.jpg?t=st=1746345635~exp=1746349235~hmac=62f3d7dbc6ed768753e4c95e8dbe583a4de3d4c69c929e0010aebf9453043631&w=826',
      imageAlt: 'Review icon',
    },
    {
      id: 4,
      title: 'Make Informed Decisions',
      description: 'Compare ratings and find your perfect academic match with confidence.',
      imageSrc: 'https://img.freepik.com/free-vector/decision-making-abstract-concept_335657-3039.jpg?t=st=1746345695~exp=1746349295~hmac=9f220ea47a9968be832cc7c0a0a03332adb4a04f7dad917fdca8c27ffb7cf984&w=826',
      imageAlt: 'Decision icon',
    },
  ]; 

  const router=useRouter();

  return (
    <section className="w-full py-6 lg:py-8 b dark:bg-zinc-900 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Simple Four-Step Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            How <span className="text-indigo-600 dark:text-indigo-400">MyUniReview</span> Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined platform helps you navigate your academic journey from start to finish with confidence
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-300 dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-900 transform -translate-y-1/2 z-0"></div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="group">
                <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2 p-6">
                  {/* Step Number */}
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{step.id}</span>
                  </div>
                  
                  {/* Icon Image */}
                  <div className="flex justify-center mb-6">
                    <img 
                      src={step.imageSrc} 
                      alt={step.imageAlt}
                      className="h-40 w-40 object-contain rounded-md"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connection Icon for Desktop */}
                  {/* {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 shadow-lg flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button className="px-8 py-4 text-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          onClick={()=>router.push("/find-uni")}>
            <span className="font-medium">Start Your University Journey</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Join thousands of students making informed decisions</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;