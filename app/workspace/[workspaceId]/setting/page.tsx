// app/workspace/[workspaceId]/settings/page.tsx
"use client";

import { useState } from "react";
import { Briefcase, Sliders, MessageSquare, Cpu } from "lucide-react";
import CompanyContextForm from "@/features/setting/components/CompanyContextForm";
import OperatingRuleForm from "@/features/setting/components/OperatingRuleForm";
import AiBehaviorForm from "@/features/setting/components/AiBehaviorForm";
import ToneOfVoiceForm from "@/features/setting/components/ToneOfVoiceForm";


export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"company" | "rules" | "tone" | "ai">("company");

  const tabs = [
    { id: "company", label: "Company Context", icon: Briefcase },
    { id: "rules", label: "Operating Rule", icon: Sliders },
    { id: "tone", label: "Tone of Voice", icon: MessageSquare },
    { id: "ai", label: "AI Behavior", icon: Cpu },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl  p-8">
        <h1 className="text-2xl font-semibold mb-2">Settings</h1>
        <p className="text-gray-500 mb-6">
          Configure how AIRA understands and responds to your requests
        </p>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full  transition-colors ${
                activeTab === id
                  ? "bg-blue-600 text-white font-medium"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "company" && <CompanyContextForm />}
        {activeTab === "rules" && <OperatingRuleForm/>}
        {activeTab === "tone" && <ToneOfVoiceForm/>}
        {activeTab === "ai" && <AiBehaviorForm/>}
      </div>
    </div>
  );
}