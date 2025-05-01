import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button' 

const studentAvatars = [
    'https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740',
    'https://www.shutterstock.com/image-photo/joyful-happy-african-american-young-600nw-1470743384.jpg',
    'https://img.freepik.com/free-photo/young-woman-wearing-striped-shirt-eyeglasses_273609-13226.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR897UK9WPcc_Nc85e4IUMN_UKdiKTWPBfLj7BUIv-HIRagxtvohG6YoCLInqRF7TgtB_8&usqp=CAU',
    'https://plus.unsplash.com/premium_photo-1682089877310-b2308b0dc719?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
]

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 bg-white dark:bg-zinc-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
            Your Global University <span className="text-indigo-600 dark:text-indigo-400">Companion</span>
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            Connect with peers, explore courses, and make informed decisions about your international education journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Find Your University
            </Button>
            <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg text-lg dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-zinc-800">
              Connect with Students
            </Button>
          </div>
          
          <div className="flex items-center gap-2 pt-4">
            <div className="flex -space-x-2">
              {studentAvatars.map((item, index) => (
                <img 
                  key={index}
                  src={item}
                  alt="Student avatar"
                  className="rounded-full border-2 border-white dark:border-zinc-800 object-cover w-12 h-12 md:w-14 md:h-14 overflow-hidden"
                />
              ))}
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              Join <span className="font-semibold text-zinc-900 dark:text-zinc-100">10,000+</span> international students
            </p>
          </div>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 relative">
          <Image 
            src="/HeroSectionImage.png" 
            alt="International students discussing"
            width={600}
            height={500}
            className=""
            priority
          />
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-medium text-zinc-800 dark:text-zinc-200">500+ Universities listed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection