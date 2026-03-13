

export async function getCurrentUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`,{
  cache:"no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch user")
  }

  return res.json()
}