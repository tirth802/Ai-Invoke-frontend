"use client"

import { createContext, useContext, useState } from "react"
import { Workspace } from "../types/workspace.types"

type WorkspaceContextType = {
  workspace: Workspace | null
  setWorkspace: (workspace: Workspace) => void
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null)

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {

  const [workspace, setWorkspace] = useState<Workspace | null>(null)

  return (
    <WorkspaceContext.Provider value={{ workspace, setWorkspace }}>
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspaceContext() {

  const context = useContext(WorkspaceContext)

  if (!context) {
    throw new Error("useWorkspaceContext must be used inside WorkspaceProvider")
  }

  return context
}