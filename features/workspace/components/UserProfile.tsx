"use client";
import Image from "next/image";
import { ChevronDown, LogOut, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/user.service";
import { User } from "../types/user";
import 
{ useRouter } from "next/navigation";

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const router = useRouter()
 

 

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (error) {
        console.error("User Fetch Error", error);
      }
    }
    loadUser();
  }, []);

  if (!user) return null;

  return (
    <div className="flex items-center gap-3 cursor-pointer ">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src={user.avatarUrl}
          alt={user.name}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">{user.name}</span>

          <span className="text-xs text-gray-500">{user.email}</span>
        </div>

        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {/* DropDown */}
      {open && (
        <div className="absolute right-0 mt-30 w-44 bg-white  rounded-lg shadow-lg">
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
          onClick={()=>router.push(`/workspace/${user.id}/profile`)}>
            <UserIcon size={16} />
            Profile
          </button>

          

          <button className="flex  items-center gap-2  w-full  px-3 py-2 text-sm text-red-500 hover:bg-gray-100">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
