"use client";

import { AiContextData } from "../types/inbox.types";

export default function AiContext({ context }: { context: AiContextData }) {
  if (!context) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        No AI context available
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-4 m-3">
        <h2 className="text-lg font-semibold">AI Context</h2>
        <p className="text-sm text-gray-500">Insights generated for this thread</p>
      </div>

      {/* Context Cards */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <ContextCard title="Extracted Details" value={context.extracted} color="blue" />
        <ContextCard title="Missing Information" value={context.missing} color="red" />
        <ContextCard title="Suggested Quote" value={context.quote} color="green" />
        <ContextCard title="Customer Profile" value={context.profile} color="purple" />
        <ContextCard title="Reasoning" value={context.reasoning} color="orange" />
      </div>
    </div>
  );
}

function ContextCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 border-blue-200",
    red: "bg-red-50 border-red-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    orange: "bg-orange-50 border-orange-200",
  };

  return (
    <div className={`p-4 rounded-lg border ${colorClasses[color]}`}>
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{value}</p>
    </div>
  );
}