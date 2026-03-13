"use client"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { getCurrentUser } from "../services/user.service"
import { User } from "../types/user"



export default function UserProfile(){
  const [user,setUser]=useState<User|null >(null)

  useEffect (()=>{
    async function loadUser() {
      try {
         const data = await getCurrentUser()
      setUser(data)
      } catch (error) {
        console.error("User Fetch Error",error)
      }
     
    }
    loadUser()
  },[])

  if(!user) return null

    return(
    <div className="flex items-center gap-3 cursor-pointer ">
        
        <Image
        src={user.avatarUrl}
        alt={user.name}
        width={32}
        height={32}
        className="w-8 h-8 rounded-full"
       />
        <div className="flex flex-col leading-tight">
        <span className="text-sm font-medium">
          {user.name}
        </span>

        <span className="text-xs text-gray-500">
          {user.email}
        </span>
      </div>

       <ChevronDown className="w-4 h-4 text-gray-500"/>

    </div>
    ) 
}