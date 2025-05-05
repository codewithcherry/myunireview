import React from "react";
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  Users, 
  Compass, 
  MapPin, 
  ArrowRight, 
  FileText, 
  CheckCircle 
} from "lucide-react";

const RegistrationCTA:React.FC = () => {
  // Features highlighting why students should register
  const studentFeatures = [
    {
      icon: <School className="h-5 w-5" />,
      title: "University Reviews",
      description: "Access authentic student reviews about programs and campus life",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Course Insights",
      description: "Get details about course difficulty, professors, and workload",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Connect with Peers",
      description: "Network with current students and alumni from your program",
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Personalized Recommendations",
      description: "Receive university suggestions based on your preferences",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Campus Maps & Info",
      description: "Navigate campus resources, housing, and student services",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Application Guidance",
      description: "Get tips for admission requirements and processes",
    },
  ];

  return (
    <div className=" dark:zinc-900 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
            Find Your Perfect University Match
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of students who use MyUniReview to access authentic reviews, connect with peers, and make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column with features */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {studentFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 dark:bg-zinc-800/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden"
                >
                  <div className="p-4 pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                        {feature.icon}
                      </div>
                      <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">{feature.title}</h3>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Right column with CTA card */}
          <div>
            <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30 shadow-xl relative overflow-hidden rounded-xl">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-indigo-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
                    Ready to Make Informed Decisions?
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
                    Create your free account and get started in less than 2 minutes
                  </p>
                </div>
              </div>
              
              <div className="px-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-xl">Access to 25,000+ verified university reviews</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-xl">Connect with students from your target universities</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-xl">Get personalized university recommendations</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-xl">Join webinars and virtual tours of campuses</p>
                </div>
              </div>
              
              <div className="p-6 mt-4">
                <button className="mx-auto min-w-sm bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-xl font-medium py-3 px-6 rounded-lg flex justify-center items-center gap-2 transition-all duration-300">
                  Create Free Account
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Sign in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCTA;