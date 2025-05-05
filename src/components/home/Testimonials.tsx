import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { 
  Star, 
  Quote, 
  BadgeCheck 
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ReviewType = {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating?: number;
  university?: string;
};

const Testimonials = () => {
  // Sample expanded reviews data
  const reviews: ReviewType[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Computer Science Student",
      university: "University of Toronto Scarborough",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      review: "myunireview helped me connect with senior students who guided me through course selection. The platform's university reviews gave me insights I couldn't find anywhere else!",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Business Major",
      university: "Western University",
      image: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      rating: 4,
      review: "Thanks to the detailed reviews on this platform, I was able to make an informed decision about which residence to choose. The community here is supportive and responsive!",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Engineering Student",
      university: "University of Waterloo",
      image: "https://cdn-useast1.kapwing.com/static/templates/clubhouse-colored-background-profile-picture-maker-full-50a8f7a7.webp",
      rating: 5,
      review: "Finding the right co-op opportunities was challenging until I discovered myunireview. The alumni connections and program-specific insights were game-changers for my academic journey.",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Health Sciences Student",
      university: "McMaster University",
      image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640%2C427",
      rating: 4,
      review: "The professor reviews and course difficulty ratings helped me plan my semester effectively. I love how the platform connects students across different years and programs.",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Arts & Humanities Student",
      university: "Queen's University",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      rating: 5,
      review: "The cultural insights about different campuses helped me find a university with the right atmosphere for me. The alumni network through myunireview has been invaluable for career advice.",
    },
    {
      id: 6,
      name: "Aisha Mahmood",
      role: "Life Sciences Student",
      university: "University of British Columbia",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2Vzf90CMXNaJzJ6kKGm-nGNhmYIhkDGEFV6SzvfcuEY5MlvGLFfPHFlOwxVTWuqFZm0&usqp=CAU",
      rating: 5,
      review: "As an international student, finding authentic perspectives about Canadian universities was crucial. myunireview connected me with students from my home country who shared their experiences.",
    }
  ];

  // Generate star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex mt-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={` text-left ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-800 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            What Students Say About MyUniReview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect university fit and connected with peers through our platform
          </p>
        </div>

        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-white/80 dark:bg-zinc-800/70 backdrop-blur-sm border border-gray-100 dark:border-zinc-700 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-12 w-12 ring-2 ring-blue-100 dark:ring-blue-900 rounded-full">
                            <AvatarImage src={review.image} alt={review.name} className="rounded-full" />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1 text-left">
                            <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100 ">
                              {review.name}
                            </CardTitle>
                            <CardDescription className="text-sm dark:text-gray-300">
                              {review.role}
                            </CardDescription>
                            <CardDescription className="text-xs text-blue-600 dark:text-blue-400">
                              {review.university}
                            </CardDescription>
                            {review.rating && <StarRating rating={review.rating} />}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-3">
                        <div className="relative">
                          <Quote className="absolute -top-1 -left-1 w-5 h-5 text-blue-200 dark:text-blue-800 opacity-50" />
                          <p className="text-gray-700 dark:text-gray-200 pl-5 italic text-sm">
                            "{review.review}"
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end pt-2">
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <BadgeCheck size={14} className="text-green-500" />
                          <span>Verified Student</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static lg:absolute -left-12 bg-white/80 dark:bg-zinc-800/70 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30" />
              <CarouselNext className="relative static lg:absolute -right-12 bg-white/80 dark:bg-zinc-800/70 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;