"use client"

import { useState } from "react"
import AccountForm from "./AccountForm"
import SecurityForm from "./SecurityForm"

export default function ProfileTabs(){

  const [tab,setTab] = useState<"account" | "security">("account")

  return(

    <div className="max-w-3xl mx-auto">

      <h1 className="text-xl font-semibold mb-1">
        Profile Settings
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        Manage your account information and preferences
      </p>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">

        <button
        onClick={()=>setTab("account")}
        className={`px-4 py-1.5 rounded-full text-sm
        ${tab==="account"
        ? "bg-blue-100 text-blue-600"
        : "bg-gray-100 text-gray-600"}`}
        >
          Account
        </button>

        <button
        onClick={()=>setTab("security")}
        className={`px-4 py-1.5 rounded-full text-sm
        ${tab==="security"
        ? "bg-blue-100 text-blue-600"
        : "bg-gray-100 text-gray-600"}`}
        >
          Security
        </button>

      </div>

      {tab === "account" && <AccountForm/>}
      {tab === "security" && <SecurityForm/>}

    </div>

  )

}