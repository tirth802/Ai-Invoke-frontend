"use client";

import { useState, useEffect } from "react";
import InboxSidebar from "@/features/inbox/components/InboxSidebar";
import MessageThread from "@/features/inbox/components/MessageThread";
import AiContext from "@/features/inbox/components/AiContext";
import EmptyState from "@/features/inbox/components/EmptyState";
import { AiContextData, ThreadMessage } from "@/features/inbox/types/inbox.types";


type MessageDetail = {
  thread: ThreadMessage[];
  aiContext: AiContextData;
};

export default function InboxLayout() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [details, setDetails] = useState<MessageDetail | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedId) return;

    const loadDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/inbox/${selectedId}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error("Failed to fetch message details:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [selectedId]);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <InboxSidebar
        onSelect={(msg) => setSelectedId(msg.id)}
        selectedId={selectedId ?? undefined}
      />

      {/* Middle panel */}
      <div className="flex-1 bg-white">
        {loading ? (
          <div className="p-6 text-gray-400">Loading thread...</div>
        ) : details ? (
          <MessageThread thread={details.thread} />
        ) : (
          <EmptyState />
        )}
      </div>

      {/* Right panel */}
      <div className="w-[320px] m-3 bg-white">
        {loading ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Loading AI context...
          </div>
        ) : details ? (
          <AiContext context={details.aiContext} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            AI context will appear here
          </div>
        )}
      </div>
    </div>
  );
}