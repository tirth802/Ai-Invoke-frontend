
"use client";


import { useState } from "react";

export default function AiBehaviorForm() {
  const [cautionLevel, setCautionLevel] = useState(50); // 0 = Conservative, 100 = Fast
  const [autoSuggestions, setAutoSuggestions] = useState(true);
  const [autoEscalation, setAutoEscalation] = useState(false);

  return (
    <div className="space-y-8">
      {/* Card 1: AI Caution Level */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">AI Caution Level</h2>
        <p className="text-sm text-gray-500 mb-3">
          Adjust how conservative or fast-paced the AI operates
        </p>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            value={cautionLevel}
            onChange={(e) => setCautionLevel(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Conservative</span>
            <span>Balanced</span>
            <span>Fast</span>
          </div>
          <p className="text-xl mt-3 bg-blue-200">
            {cautionLevel < 33
              ?<span> <span className="font-bold">Conservative:</span>AI will escalate most cases to humans.</span>
              : cautionLevel < 66
              ? <span><span className="font-bold">Balanced:</span>AI handles routine requests autonomously while escalating complex cases.</span>
              : <span><span className="font-bold">Fast:</span> AI responds quickly and autonomously, escalating only rare cases.</span>}
          </p>
        </div>
        <div className="flex justify-end">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      

      {/* Card 2: Auto-generate Suggestions */}
      <div >
        <h2 className="text-lg font-semibold mb-2">Auto-generate Suggestions</h2>
         <div className="flex justify-between">
        <p className="text-sm text-gray-500 mb-3">
          AI automatically drafts replies for all incoming requests
        </p>
       
          <button
            onClick={() => setAutoSuggestions(!autoSuggestions)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              autoSuggestions ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                autoSuggestions ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        
      </div>

      {/* Card 3: Auto-escalation Flags */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Auto-escalation Flags</h2>
        <div className="flex justify-between">
        <p className="text-sm text-gray-500 mb-3">
          AI automatically flags requests that need human attention
        </p>
    
          
          <button
            onClick={() => setAutoEscalation(!autoEscalation)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              autoEscalation ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                autoEscalation ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        <div className="flex justify-end">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}


