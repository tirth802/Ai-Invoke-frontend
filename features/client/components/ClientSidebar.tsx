// src/features/Client/components/ClientSidebar.tsx
"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Building2 } from 'lucide-react';

// 1. Move this outside or fetch it from MSW in a useEffect
const MOCK_CLIENTS = [
  { id: '1', name: 'TechCorp NL', activity: 'Jan 31, 2026', open: 1 },
  { id: '2', name: 'VoltEdge Solutions', activity: 'Jan 31, 2026', open: 1 },
  { id: '3', name: 'GreenGrid Technologies', activity: 'Jan 31, 2026', open: 1 },
  { id: '4', name: 'ChargeFlow Systems', activity: 'Jan 31, 2026', open: 1 },
  { id: '5', name: 'EcoDrive Innovations', activity: 'Jan 31, 2026', open: 1 },
  { id: '6', name: 'GridNova Systems', activity: 'Jan 31, 2026', open: 1 },
];

export const ClientSidebar = () => {
  const params = useParams();
  
  // Extract params safely
  const workspaceId = params?.workspaceId || '1';
  const currentClientId = params?.clientId; 

  return (
    <div className="m-3">
    <aside className="flex flex-col h-full w-[320px] border-r border-gray-200 bg-white shrink-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">All Clients</h2>
        <p className="text-xs text-gray-500 mt-1">{MOCK_CLIENTS.length} total clients</p>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {MOCK_CLIENTS.map((client) => {
          const isActive = currentClientId === client.id;
          
          return (
            <Link 
              key={client.id}
              // Ensure this matches your folder: src/app/workspace/[workspaceId]/client/[clientId]
              href={`/workspace/${workspaceId}/client/${client.id}`}
              className={`flex items-center justify-between p-4 cursor-pointer border-b border-gray-100 transition-colors
                ${isActive ? 'bg-blue-50 border-l-4 border-l-blue-600' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <Building2 size={20} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className={`text-sm font-bold truncate ${isActive ? 'text-blue-900' : 'text-gray-800'}`}>
                    {client.name}
                  </span>
                  <span className="text-[11px] text-gray-400 truncate">
                    Last activity: {client.activity}
                  </span>
                </div>
              </div>
              
              <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full shrink-0">
                <span className="text-[10px] font-bold">0{client.open} Open</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
    </div>
  );
};
