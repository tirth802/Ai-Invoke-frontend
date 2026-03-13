"use client"

import { useState } from "react"
import { createWorkspace } from "../services/workspace.service"


type Props = {
  onClose: () => void
   onCreated:()=>void
}

export default function CreateWorkspaceModal({ onClose,onCreated }: Props) {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [members,setMembers] = useState<string[]>([])

  function addMember(){

    if(!email) return

    setMembers([...members,email])
    setEmail("")
  }

  function removeMember(index:number){

    setMembers(members.filter((_,i)=>i!==index))
  }

  async function handleCreate(){

    if(!name) return

    await createWorkspace({
      name,
      members
    })
    onCreated()
    onClose()
  }

  return(

    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

      <div className="bg-white w-720px rounded-2xl p-8">

        {/* Title */}

        <h2 className="text-lg font-semibold mb-2">
          Create New Workspace
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Set up a new workspace for your freight forwarding team
        </p>


        {/* Workspace Name */}

        <div className="mb-6">

          <label className="text-sm font-medium">
            Workspace Name 
          </label>

          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Add Name"
          className="w-full border rounded-lg p-3 mt-2"
          />

        </div>


        {/* Add Team Member */}

        <div className="mb-6">

          <label className="text-sm font-medium">
            Add Team Members
          </label>

          <div className="flex gap-2 mt-2">

            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="email@example.com"
            className="flex-1 border rounded-lg p-3"
            />

            <button
            onClick={addMember}
            className="bg-blue-600 text-white px-4 rounded-lg"
            >
            + Add
            </button>

          </div>

        </div>


        {/* Members List */}

        <div className="mb-8">

          <label className="text-sm font-medium">
            Team Members
          </label>

          <div className="mt-3 space-y-2">

            {members.map((m,i)=>(
              <div
              key={i}
              className="flex justify-between items-center border rounded-lg px-3 py-2"
              >

                <span className="text-sm">{i+1}. {m}</span>

                <button
                onClick={()=>removeMember(i)}
                className="text-blue-600 text-sm"
                >
                Remove
                </button>

              </div>
            ))}

          </div>

        </div>


        {/* Footer */}

        <div className="flex justify-end gap-3">

          <button
          onClick={onClose}
          className="border px-4 py-2 rounded-lg"
          >
          Cancel
          </button>

          <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
          Create Workspace
          </button>

        </div>

      </div>

    </div>

  )
}