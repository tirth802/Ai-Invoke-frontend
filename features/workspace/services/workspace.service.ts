export async function getWorkspaces() {

  const res = await fetch("/api/workspaces",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed to fetch workspaces")
  }

  return res.json()
}


export async function createWorkspace(data:{
  name:string
  members:string[]
}){

  const res = await fetch("/api/workspaces",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })

  if(!res.ok){
    throw new Error("Failed to create workspace")
  }

  return res.json()
}