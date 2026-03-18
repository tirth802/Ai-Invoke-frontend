"use client"
import NavItem from "@/features/workspace/components/NavItem";
import UserProfile from "@/features/workspace/components/UserProfile";
import WorkspaceDropdown from "@/features/workspace/components/WorkspaceDropdown";

import { Flame, Inbox, Settings, Users } from "lucide-react";
import { useParams } from "next/navigation";

export default  function Header() {
     
  const {workspaceId}=useParams()as{workspaceId:string}
  return (
    <header className="h-16  flex items-center px-4 bg-white justify-between gap-40">
      <div className="flex items-center gap-5 flex-1 justify-start">
        {/* Logo or Brand Name */}
        <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5  text-blue-600 fill-blue-600 " />

          <div className="text-lg font-semibold">
            Product<span className="text-blue-600">name</span>
          </div>
        </div>

        {/* workspace Dropdown */}
        <WorkspaceDropdown/>
        {/* <button className="flex items-center gap-1 text-sm p-1 bg-gray-100 rounded-full font-medium text-gray-700 hover:text-black">
          Workspace Name
          <ChevronDown className="w-4 h-4" />
        </button> */}
        </div>
        {/* Nav-icons */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <NavItem icon={Inbox} label="Inbox" href={`/workspace/${workspaceId}/inbox`} />

          <NavItem icon={Users} label="Client" href={`/workspace/${workspaceId}/client`} />

          <NavItem
            icon={Settings}
            label="Settings"
            href={`/workspace/${workspaceId}/setting`}
          />
        </div>

        {/* Profile */}
        <div className=" flex items-center justify-end ">
        <UserProfile />
        </div>
      </div>
    </header>
  );
}
