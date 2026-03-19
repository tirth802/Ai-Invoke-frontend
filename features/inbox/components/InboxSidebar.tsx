import { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { InboxMessage } from "../types/inbox.types";


function groupByDate(messages: InboxMessage[]) {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  return {
    today: messages.filter(
      (m) => new Date(m.createdAt).toDateString() === today
    ),
    yesterday: messages.filter(
      (m) => new Date(m.createdAt).toDateString() === yesterday
    ),
  };
}

export default function InboxSidebar({
  onSelect,
  selectedId,
}: {
  onSelect: (msg: InboxMessage) => void;
  selectedId?: string;
}) {
  const [messages, setMessages] = useState<InboxMessage[]>([]);

  useEffect(() => {
  const loadMessages = async () => {
    try {
      const res = await fetch("/api/inbox");

      if (!res.ok) {
        // This will log the actual HTTP status (like 404)
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Failed to fetch inbox messages:", err);
    }
  };

  loadMessages();
}, []);

  const { today, yesterday } = groupByDate(messages);
  
  return (
    <div className="w-[320px] bg-white m-3 flex flex-col">
      {/* Header */}
      <div className="p-5 border-b">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <p className="text-sm text-gray-500">
          Workspace 01 • {messages.length} messages
        </p>
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between px-5 py-3 ">
        <span className="text-sm font-medium">All Message/Mails</span>
        <SlidersHorizontal size={18} className="text-gray-500" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Today */}
        {today.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-3">Today ({today.length})</p>
            {today.map((msg) => (
              <MessageCard
                key={msg.id}
                msg={msg}
                onSelect={onSelect}
                selectedId={selectedId}
              />
            ))}
          </div>
        )}

        {/* Yesterday */}
        {yesterday.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-3">
              Yesterday ({yesterday.length})
            </p>
            {yesterday.map((msg) => (
              <MessageCard
                key={msg.id}
                msg={msg}
                onSelect={onSelect}
                selectedId={selectedId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MessageCard({
  msg,
  onSelect,
  selectedId,
}: {
  msg: InboxMessage;
  onSelect: (msg: InboxMessage) => void;
  selectedId?: string;
}) {
  return (
    <div
      onClick={() => onSelect(msg)}
      className={`p-3 rounded-xl cursor-pointer ${
        selectedId === msg.id
          ? "bg-blue-50 border border-blue-200"
          : " hover:bg-blue-200"
      }`}
    >
      <h4 className="text-sm font-semibold">{msg.company}</h4>
      <p className="text-xs text-gray-500 mt-1">{msg.subject}</p>
      <div className="flex gap-2 mt-2 flex-wrap text-xs">
        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md">
          {msg.status}
        </span>
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          {msg.tag}
        </span>
        <span className="text-red-500">⏱ {msg.time}</span>
      </div>
    </div>
  );
}