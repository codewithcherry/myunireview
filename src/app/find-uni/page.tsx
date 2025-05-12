import SearchBar from '@/components/search/SearchBar'
import React from 'react'

const page:React.FC = () => {
  return (
    <div className='w-full h-screen bg-gray-50 dark:bg-zinc-900'>
      <div className='max-w-6xl mx-auto py-10'>
        <SearchBar />
      </div>

      <div className='mx-auto '>
        <h1 className='text-2xl text-center text-indigo-400 animate-pulse mt-12'>
            Coming Soon
        </h1>
      </div>
    </div>
  )
}

export default page
