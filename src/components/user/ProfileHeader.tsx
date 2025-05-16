'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ExternalLink, Pencil, Archive } from 'lucide-react';

interface ProfileHeaderProps {
  username: string;
  displayName: string;
  bio: string;
  profileImage: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isOwnProfile?: boolean;
  externalUrl?: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  username,
  displayName,
  bio,
  profileImage,
  postsCount,
  followersCount,
  followingCount,
  isOwnProfile = false,
  externalUrl,
}) => {
  return (
    <div className="w-full dark:bg-zinc-900 py-6 px-4 md:px-6 flex justify-center gap-6">
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-6 ">
        {/* Profile Image */}
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-24 w-24 border-2 border-indigo-200 dark:border-indigo-800">
            <AvatarImage src={profileImage} alt={displayName} />
            <AvatarFallback className="bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 text-xl">
              {displayName.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-base font-medium text-zinc-900 dark:text-zinc-100">@{username}</h1>
        </div>

        {/* Profile Info */}
        <div className="">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
            <div className="flex gap-2">
              {isOwnProfile ? (
                <>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Pencil className="h-3 w-3 mr-1" />
                    Edit profile
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Archive className="h-3 w-3 mr-1" />
                    View archive
                  </Button>
                </>
              ) : (
                <Button 
                  size="sm" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs"
                >
                  Follow
                </Button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mb-3">
            <div className="flex flex-col justify-center gap-1">
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 text-center">{postsCount}</span>
              <span className="text-zinc-600 dark:text-zinc-400">posts</span>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 text-center">{followersCount}</span>
              <span className="text-zinc-600 dark:text-zinc-400">followers</span>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 text-center">{followingCount}</span>
              <span className="text-zinc-600 dark:text-zinc-400">following</span>
            </div>
          </div>

          {/* Bio */}
          <div className="text-sm text-zinc-800 dark:text-zinc-200 space-y-1">
            <p className="font-medium">{displayName}</p>
            <p className="text-zinc-600 dark:text-zinc-400">{bio}</p>
            {externalUrl && (
              <a 
                href={externalUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mt-1 text-xs"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                {externalUrl.replace(/^https?:\/\//, '')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
