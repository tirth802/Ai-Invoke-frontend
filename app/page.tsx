"use client"
import { getCurrentUser } from "@/features/workspace/services/user.service"
import { User } from "@/features/workspace/types/user"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"



export default  function HomePage(){

  const[user,setUser]=useState<User|null>(null)

  useEffect(()=>{
    async function findId(){
    try {
         const data = await getCurrentUser()
      setUser(data)
      } catch (error) {
        console.error("User Fetch Error",error)
      }
    }
    findId()
  },[])
  if(!user)  return<div>Loading ...</div>
  
 

  redirect(`/workspace/${user.id}/inbox`)
}