// Sidebar.tsx
import React from 'react';
import { UserButton } from "@clerk/nextjs";
import NavMenuItems from './NavMenuItems';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block  h-full fixed bg-background text-foreground  w-64 border border-border">
      <div className="flex flex-col h-full justify-start overflow-y-auto pt-8">
        <div>
          {/* Logo or other content can go here */}
          <Avatar>
            <UserButton/>
            
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <NavMenuItems />
      </div>
    </div>
  );
};

export default Sidebar;
