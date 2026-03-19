"use client";

import { ThreadMessage } from "../types/inbox.types";


export default function MessageThread({ thread }: { thread: ThreadMessage[] }) {
  return (
    <div className="flex flex-col h-full bg-white m-3">
      {/* Thread Header */}
      <div className="p-4 ">
        <h2 className="text-lg font-semibold">Message Thread</h2>
        <p className="text-sm text-gray-500">Conversation details</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {thread.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] p-4 rounded-lg shadow-sm ${
              msg.from === "You"
                ? "ml-auto bg-blue-50 border border-blue-200"
                : "bg-gray-100"
            }`}
          >
            <p className="text-sm font-semibold mb-1">{msg.from}</p>
            <p className="text-sm text-gray-800">{msg.message}</p>
            <p className="text-xs text-gray-500 mt-2">{msg.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}