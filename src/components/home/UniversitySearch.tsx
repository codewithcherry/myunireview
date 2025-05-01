'use client';

import { useState, useEffect } from "react";
import { Search, X, ChevronDown } from "lucide-react";

// shadcn/ui imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { School, GraduationCap } from "lucide-react";

// Types
type Country = "USA" | "Canada" | "UK" | "Australia";

interface University {
  id: string;
  name: string;
  country: Country;
  courses: string[];
}

interface Course {
  id: string;
  name: string;
}

// Mock data
const mockCourses: Course[] = [
  { id: "cs", name: "Computer Science" },
  { id: "eng", name: "Engineering" },
  { id: "bus", name: "Business Administration" },
  { id: "med", name: "Medicine" },
  { id: "law", name: "Law" },
  { id: "art", name: "Art & Design" },
  { id: "psy", name: "Psychology" },
  { id: "eco", name: "Economics" },
  { id: "bio", name: "Biology" },
  { id: "math", name: "Mathematics" },
];

const mockUniversities: University[] = [
  {
    id: "harvard",
    name: "Harvard University",
    country: "USA",
    courses: ["cs", "law", "med", "bus"],
  },
  {
    id: "stanford",
    name: "Stanford University",
    country: "USA",
    courses: ["cs", "eng", "psy"],
  },
  {
    id: "mit",
    name: "Massachusetts Institute of Technology",
    country: "USA",
    courses: ["cs", "eng", "math"],
  },
  {
    id: "oxford",
    name: "University of Oxford",
    country: "UK",
    courses: ["law", "med", "eco"],
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    country: "UK",
    courses: ["cs", "eng", "bio"],
  },
  {
    id: "toronto",
    name: "University of Toronto",
    country: "Canada",
    courses: ["med", "bio", "psy"],
  },
  {
    id: "mcgill",
    name: "McGill University",
    country: "Canada",
    courses: ["law", "med", "bus"],
  },
  {
    id: "sydney",
    name: "University of Sydney",
    country: "Australia",
    courses: ["art", "eng", "med"],
  },
  {
    id: "melbourne",
    name: "University of Melbourne",
    country: "Australia",
    courses: ["law", "bus", "eco"],
  },
  {
    id: "yale",
    name: "Yale University",
    country: "USA",
    courses: ["law", "art", "eco"],
  },
  {
    id: "berkeley",
    name: "University of California, Berkeley",
    country: "USA",
    courses: ["cs", "eng", "bio"],
  },
  {
    id: "edinburgh",
    name: "University of Edinburgh",
    country: "UK",
    courses: ["med", "cs", "psy"],
  },
];

// Available countries
const countries: Country[] = ["USA", "Canada", "UK", "Australia"];

// Main component
export default function UniversitySearch() {
  // State
  const [selectedCountry, setSelectedCountry] = useState<Country | "any">(
    "any"
  );
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [universitySearch, setUniversitySearch] = useState("");
  const [universitySuggestions, setUniversitySuggestions] = useState<
    University[]
  >([]);
  const [courseSuggestions, setCourseSuggestions] = useState<Course[]>([]);
  const [openCoursePopover, setOpenCoursePopover] = useState(false);
  const [openUniversityPopover, setOpenUniversityPopover] = useState(false);
  const [sortAlphabetically, setSortAlphabetically] = useState(true);

  // Filter universities based on search
  useEffect(() => {
    if (universitySearch.trim() === "") {
      setUniversitySuggestions([]);
      return;
    }

    let filteredUniversities = mockUniversities.filter((university) =>
      university.name.toLowerCase().includes(universitySearch.toLowerCase())
    );

    if (selectedCountry && selectedCountry !== "any") {
      filteredUniversities = filteredUniversities.filter(
        (university) => university.country === selectedCountry
      );
    }

    if (selectedCourses.length > 0) {
      filteredUniversities = filteredUniversities.filter((university) =>
        selectedCourses.some((course) => university.courses.includes(course))
      );
    }

    if (sortAlphabetically) {
      filteredUniversities.sort((a, b) => a.name.localeCompare(b.name));
    }

    setUniversitySuggestions(filteredUniversities);
  }, [universitySearch, selectedCountry, selectedCourses, sortAlphabetically]);

  // Filter courses based on search
  useEffect(() => {
    let filtered = mockCourses;

    if (sortAlphabetically) {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    setCourseSuggestions(filtered);
  }, [sortAlphabetically]);

  // Select a course
  const selectCourse = (courseId: string) => {
    if (!selectedCourses.includes(courseId)) {
      setSelectedCourses([...selectedCourses, courseId]);
    }
    setOpenCoursePopover(false);
  };

  // Remove a course
  const removeCourse = (courseId: string) => {
    setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
  };

  // Get course name by id
  const getCourseNameById = (courseId: string) => {
    return (
      mockCourses.find((course) => course.id === courseId)?.name || courseId
    );
  };

  // Handle search submit
  const handleSearch = () => {
    console.log({
      country: selectedCountry,
      courses: selectedCourses,
      universityName: universitySearch,
      sortAlphabetically,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <School className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Find Your University
          </h1>
          <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the perfect institution for your academic journey
        </p>
      </div>
      <div className="relative bg-white dark:bg-zinc-900 rounded-full shadow-lg  border border-gray-100 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row items-center">
          {/* University Name Search - Fixed version */}
          <div className="w-full md:w-auto md:flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-zinc-800">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-zinc-400 mr-3">
                University
              </span>
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search universities..."
                  value={universitySearch}
                  onChange={(e) => {
                    setUniversitySearch(e.target.value);
                    setOpenUniversityPopover(e.target.value.length > 0);
                  }}
                  onFocus={() => setOpenUniversityPopover(true)}
                  className="w-full border-0 p-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base bg-transparent"
                />

                {/* Custom Suggestions Dropdown */}
                {openUniversityPopover && universitySuggestions.length > 0 && (
                  <div className="absolute z-[9999] w-full mt-1 bg-white dark:bg-zinc-800 rounded-md shadow-lg border border-gray-200 dark:border-zinc-700 ">
                    <div className="max-h-60 overflow-y-auto">
                      {universitySuggestions.map((university) => (
                        <div
                          key={university.id}
                          className="px-4 py-1  hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer flex items-center justify-between "
                          onClick={() => {
                            setUniversitySearch(university.name);
                            setOpenUniversityPopover(false);
                          }}
                        >
                          <span className="text-xs text-left">
                            {university.name}
                          </span>
                          <Badge className="ml-2 bg-gray-100  text-gray-800 dark:bg-zinc-700 dark:text-zinc-200">
                            {university.country}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Country Selection */}
          <div className="w-full md:w-48 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-zinc-800">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-zinc-400 mr-3">
                Country
              </span>
              <Select
                value={selectedCountry}
                onValueChange={(value) =>
                  setSelectedCountry(value as Country | "any")
                }
              >
                <SelectTrigger className="w-full border-0 p-0 shadow-none focus:ring-0 text-base bg-transparent h-auto">
                  <SelectValue placeholder="Any Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Country</SelectItem>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Course Selection */}
          <div className="w-full md:w-auto md:flex-1 px-6 py-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-zinc-400 mr-3">
                Courses
              </span>
              <div className="flex-1">
                <Popover
                  open={openCoursePopover}
                  onOpenChange={setOpenCoursePopover}
                >
                  <PopoverTrigger asChild>
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <div className="text-base">
                        {selectedCourses.length > 0
                          ? `${selectedCourses.length} course${
                              selectedCourses.length > 1 ? "s" : ""
                            }`
                          : "Select courses"}
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-72 p-0" align="start">
                    <Command>
                      <CommandInput
                        placeholder="Search courses..."
                        className="h-9"
                      />
                      <CommandEmpty>No course found.</CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-auto">
                        {courseSuggestions.map((course) => (
                          <CommandItem
                            key={course.id}
                            value={course.id}
                            onSelect={() => selectCourse(course.id)}
                          >
                            {course.name}
                            <div
                              className={`ml-auto h-4 w-4 rounded-full border ${
                                selectedCourses.includes(course.id)
                                  ? "bg-indigo-600 border-indigo-600"
                                  : "border-gray-300 dark:border-zinc-600"
                              }`}
                            >
                              {selectedCourses.includes(course.id) && (
                                <div className="flex items-center justify-center h-full">
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                  >
                                    <path
                                      d="M8 3L4 7L2 5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Selected Courses Badges (Mobile Only) */}
            {selectedCourses.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2 md:hidden">
                {selectedCourses.map((courseId) => (
                  <Badge
                    key={courseId}
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs px-2 py-0.5"
                  >
                    {getCourseNameById(courseId)}
                    <button
                      className="ml-1 rounded-full outline-none"
                      onClick={() => removeCourse(courseId)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
          {/* Search Button */}
          <div className="w-full md:w-auto p-2">
            <Button
              onClick={handleSearch}
              className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-800 rounded-full px-6"
              size="lg"
            >
              <Search className="mr-2 h-5 w-5" />
              <span>Find Uni</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Selected Courses Badges (Desktop) */}
      {selectedCourses.length > 0 && (
        <div className="hidden md:flex flex-wrap gap-1 mt-2 pl-2">
          {selectedCourses.map((courseId) => (
            <Badge
              key={courseId}
              variant="secondary"
              className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
            >
              {getCourseNameById(courseId)}
              <button
                className="ml-1 rounded-full outline-none"
                onClick={() => removeCourse(courseId)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}

          {/* Sort Option */}
          <div className="flex items-center ml-2 text-xs text-gray-500 dark:text-zinc-400">
            <input
              type="checkbox"
              id="sort-alphabetically"
              checked={sortAlphabetically}
              onChange={() => setSortAlphabetically(!sortAlphabetically)}
              className="mr-1 h-3 w-3 rounded text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            <label htmlFor="sort-alphabetically">Sort alphabetically</label>
          </div>
        </div>
      )}
    </div>
  );
}
