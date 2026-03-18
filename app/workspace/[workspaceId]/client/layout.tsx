import { ClientSidebar } from "@/features/client/components/ClientSidebar";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  h-screen overflow-hidden " >
      {/* Sidebar - Fixed width, border right */}
      <div className="flex  overflow-hidden">
      <ClientSidebar  />
      </div>
      {/* Dynamic Content Area (Empty State or Client Details) */}
      <main className="flex-1 overflow-y-auto bg-slate-50/50">
        {children}
      </main>
    </div>
  );
}
