"use client";

import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Heart
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Universities", href: "/universities" },
    { name: "Countries", href: "/countries" },
    { name: "Reviews", href: "/reviews" },
    { name: "Student Stories", href: "/stories" },
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
  ];
  
  const resourceLinks = [
    { name: "Visa Guidelines", href: "/resources/visa" },
    { name: "Scholarship Finder", href: "/resources/scholarships" },
    { name: "Accommodation", href: "/resources/accommodation" },
    { name: "Student Discounts", href: "/resources/discounts" },
  ];
  
  const countries = [
    { name: "United States", href: "/countries/us" },
    { name: "United Kingdom", href: "/countries/uk" },
    { name: "Canada", href: "/countries/canada" },
    { name: "Australia", href: "/countries/australia" },
  ];
  
  const contactInfo = [
    { icon: Mail, info: "contact@myunireview.com" },
    { icon: Phone, info: "+1 (555) 123-4567" },
    { icon: MapPin, info: "123 Student Way, Education City" },
  ];
  
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-indigo-100 dark:border-indigo-900/50">
      {/* Newsletter Section */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
              Stay Updated with the Latest University Insights
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Join thousands of students receiving our weekly newsletter with university reviews, 
              application tips, and scholarship opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-0 flex-1 sm:max-w-sm"
              />
              <button className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">MyUniReview</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Connecting international students with authentic university experiences around the globe.
            </p>
            
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Contact Us</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item.info}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-6 mb-4">Student Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Countries */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Study Destinations</h3>
            <ul className="space-y-4">
              {countries.map((country, index) => (
                <li key={index}>
                  <a 
                    href={country.href} 
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200 group"
                  >
                    <div className="h-6 w-6 rounded-full bg-indigo-100 group-hover:bg-indigo-200 dark:bg-indigo-900/30 dark:group-hover:bg-indigo-800/50 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <ArrowRight className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span>{country.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Are You An Alumni?</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Share your university experience and help future students make informed decisions.
              </p>
              <a 
                href="/share-experience" 
                className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Share Your Experience
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          {/* Download & Social */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Mobile App</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Access MyUniReview on the go. Download our app to explore universities and connect with students anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a 
                href="#" 
                className="h-10 px-4 flex items-center justify-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                App Store
              </a>
              <a 
                href="#" 
                className="h-10 px-4 flex items-center justify-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Google Play
              </a>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:hover:bg-indigo-800/50 flex items-center justify-center transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-indigo-100 dark:border-indigo-900/50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <span>&copy; {currentYear} MyUniReview. All rights reserved.</span>
              <div className="hidden md:flex items-center gap-1 ml-1">
                <Heart className="h-3 w-3 text-red-500" />
                <span className="text-xs">Made with love for students worldwide</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                About Us
              </a>
              <a href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}