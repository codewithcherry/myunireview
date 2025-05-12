import { useState } from 'react';
import { Mail, ArrowRight, School, GraduationCap, Award } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      setIsError(true);
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setIsError(false);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400">
              Stay Updated on Educational Opportunities
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
              Subscribe to our newsletter for the latest updates on universities, admissions, scholarships, and more.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                  <School className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-200 text-nowrap">University Updates</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Latest news from top universities worldwide</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                  <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-200 text-nowrap">Admission Guidance</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Application tips and deadline reminders</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
                  <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-200 text-nowrap">Scholarship Opportunities</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Financial aid and scholarship alerts</p>
              </div>
            </div>

            {isSubmitted && (
              <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <AlertTitle className="text-green-800 dark:text-green-400">Subscription Successful!</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                  Thank you for subscribing. You'll start receiving our updates soon.
                </AlertDescription>
              </Alert>
            )}

            {isError && (
              <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <AlertTitle className="text-red-800 dark:text-red-400">Invalid Email</AlertTitle>
                <AlertDescription className="text-red-700 dark:text-red-300">
                  Please enter a valid email address to subscribe.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10 border-indigo-200 dark:border-indigo-800 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit();
                    }
                  }}
                />
              </div>
              <Button 
                onClick={handleSubmit} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscribeSection;