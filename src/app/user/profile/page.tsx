'use client';

import ProfileHeader from '@/components/user/ProfileHeader';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-zinc-950 px-4 md:px-6">
      <div className="w-full max-w-4xl mx-auto py-6">
        {/* Profile Header */}
        <ProfileHeader 
          username="justtcherryy"
          displayName="Prashanth"
          bio="DO WHAT EXCITES!! 😊"
          profileImage="/user-avatar.jpg"
          postsCount={22}
          followersCount={617}
          followingCount={674}
          isOwnProfile={true}
          externalUrl="https://twitter.com/tweetwithcherry"
        />

        {/* Profile Content Area */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array(6).fill(0).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 dark:bg-zinc-800 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
