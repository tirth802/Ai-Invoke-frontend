import InboxSidebar from "@/features/inbox/components/InboxSidebar"

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">

      <InboxSidebar/>

      <div className="flex-1">
        {children}
      </div>

    </div>
  )
}