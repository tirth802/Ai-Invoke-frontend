import { AccountFormData } from "../types/account.schema"

export async function getAccount() {
  const res = await fetch("/api/account")

  if(!res.ok){
    throw new Error("Failed to fetch account")
  }

  return res.json()
}

export async function updateAccount(data:AccountFormData){

  const res = await fetch("/api/account",{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  })

  if(!res.ok){
    throw new Error("Update failed")
  }

  return res.json()
}