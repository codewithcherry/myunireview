"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type University = {
  title: string;
  cover: string;
  logo: string;
  country: string;
  location: string;
  ranking?: number;
  established?: number;
};

interface UniversityCardProps {
  university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
  return (
    <Card className="relative w-full max-w-md h-80 overflow-hidden rounded-2xl group transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] dark:hover:shadow-gray-700/40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={university.cover}
          alt={university.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 text-white">
        {/* Top Info */}
        <div className="flex justify-between items-start gap-2">
          {university.established && (
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm text-xs px-2 py-0.5 rounded-md">
              Est. {university.established}
            </Badge>
          )}
          {university.ranking && (
            <Badge className="flex items-center gap-1 bg-yellow-400/90 text-black font-semibold text-xs px-2 py-0.5 rounded-md shadow-md">
              <Star className="w-3 h-3 fill-current" />
              #{university.ranking}
            </Badge>
          )}
        </div>

        {/* Bottom Info */}
        <div>
          <div className="flex items-end gap-4">
            <Avatar className="w-16 h-16 border-4 border-white shadow-md">
              <AvatarImage src={university.logo} />
              <AvatarFallback className="bg-gray-200 text-gray-800 font-semibold">
                {university.title.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="text-base font-medium text-left truncate drop-shadow-sm">
                {university.title}
              </h3>
              <div className="flex items-center gap-1 mt-1 text-sm text-white/90">
                <MapPin className="w-4 h-4" />
                <span>{university.location}, {university.country}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-white/10 text-white border border-white/20 rounded-lg transition hover:bg-white/20 hover:border-white/30">
              View Programs
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UniversityCard;
