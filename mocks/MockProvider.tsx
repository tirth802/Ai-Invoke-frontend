"use client"

import { useEffect, useState } from "react"

export default function MockProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function initMocks() {
      if (process.env.NODE_ENV === "development") {
        const { worker } = await import("./browser")

        await worker.start({
          onUnhandledRequest: "bypass",
        })
      }

      setReady(true)
    }

    initMocks()
  }, [])

  if (!ready) return null

  return <>{children}</>
}