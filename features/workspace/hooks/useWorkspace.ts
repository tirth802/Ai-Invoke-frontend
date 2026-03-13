"use client"

import { useEffect, useState } from "react"
import { getWorkspaces } from "../services/workspace.service"
import { Workspace } from "../types/workspace.types"

export function useWorkspace(){

  const [workspaces,setWorkspaces] = useState<Workspace[]>([])
  const [loading,setLoading] = useState(true)
useEffect(()=>{
  async function loadWorkspaces(){

    const data = await getWorkspaces()
    setWorkspaces(data)
    setLoading(false)
  }
  
    loadWorkspaces()
  },[])

  return {
    workspaces,
    loading,
    reload:async () => {
      const data = await getWorkspaces();
      setWorkspaces(data);
      setLoading(false);
    },

  }

}