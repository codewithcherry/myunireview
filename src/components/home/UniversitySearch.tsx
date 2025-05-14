import { School, GraduationCap } from "lucide-react";
import SearchBar from "../search/SearchBar";

// Main component
export default function UniversitySearch() {


  return (
    <div className="w-full max-w-6xl mx-auto my-6 px-4 md:my-10 md:px-0">
      <div className="text-center mb-6 md:mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <School className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Find Your University
          </h1>
          <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the perfect institution for your academic journey
        </p>
      </div>
      <SearchBar />
      
    </div>
  );
}