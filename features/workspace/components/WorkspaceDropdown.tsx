"use client"

import { ChevronDown, Plus } from "lucide-react"
import { useState } from "react"
import { useWorkspace } from "../hooks/useWorkspace"
import CreateWorkspaceModal from "./CreateWorkspaceModal"
import { useWorkspaceContext } from "../context/WorkspaceContext"

export default function WorkspaceDropdown(){

  const { workspaces,reload } = useWorkspace()
  const{workspace,setWorkspace}=useWorkspaceContext()
  const [open,setOpen] = useState(false)
  const [showModal,setShowModal] = useState(false)



  return(

    <>
    <div className="relative">

      <button
      onClick={()=>setOpen(!open)}
      className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm"
      >
        {workspace?.name || "Workspace name"}
        <ChevronDown size={16}/>
      </button>

      {open && (

        <div className="absolute mt-2 w-52 bg-white border rounded-lg shadow">

          {workspaces.map((w)=>(
            <div
            key={w.id}
              onClick={()=>{
                setWorkspace(w)   
                setOpen(false)
              }}
            className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {w.name}
            </div>
          ))}

          <div className="border-t"/>

          <button
          onClick={()=>{
           
            setOpen(false)
            setShowModal(true)
          }}
          className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
          >
            <Plus size={14}/>
            Add Workspace
          </button>

        </div>

      )}

    </div>

    {showModal &&

      <CreateWorkspaceModal
      onClose={()=>setShowModal(false)}
      onCreated={reload}
      />

    }

    </>

  )

}