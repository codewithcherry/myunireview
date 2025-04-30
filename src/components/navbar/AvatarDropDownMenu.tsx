"use client";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import {
  User,
  Bell,
  Heart,
  Settings,
  Lock,
  EyeOff,
  Trash2,
  Share2,
  LifeBuoy,
  LogOut,
  Mail,
  ChevronRight,
  CreditCard,
  Users
} from "lucide-react";
import Image from "next/image";

const AvatarDropDownMenu: React.FC = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
        <Avatar className="border-2 border-indigo-500 hover:border-indigo-600 transition-all">
            {/* Improved image handling with fallback */}
            {session?.user?.image ? (
              <Image src={session.user.image} alt={session.user.name} width={60} height={60}/>
            ) : null}
            <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200">
              {session?.user?.name?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 rounded-lg shadow-lg dark:shadow-gray-800/50" align="end" sideOffset={8}>
        {/* User Profile Section */}
        <div className="px-2 py-1.5">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm  leading-none">Hello! <span className="text-md text-indigo-500 font-medium ">{session?.user?.name || "User"}</span></p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user?.email || "No email provided"}
              </p>
            </div>
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator />

        {/* Main Actions */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="group">
            <User className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Bell className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Notifications</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Heart className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Saved Universities</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* Account Settings */}
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="group">
              <Settings className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
              <span>Account Settings</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="rounded-lg">
                <DropdownMenuItem className="group">
                  <Lock className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
                  <span>Password</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group">
                  <EyeOff className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
                  <span>Privacy</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group">
                  <Trash2 className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
                  <span>Deactivate</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem className="group">
            <CreditCard className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Users className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* Support & Social */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="group">
            <Share2 className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Share Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Mail className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Invite Friends</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <LifeBuoy className="mr-2 h-4 w-4 text-indigo-500 group-hover:text-indigo-600" />
            <span>Support</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem 
          className="group text-red-600 dark:text-red-400 focus:bg-red-50 dark:focus:bg-red-900/30"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDownMenu;