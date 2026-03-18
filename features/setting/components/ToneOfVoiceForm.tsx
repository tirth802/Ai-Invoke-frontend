"use client";

import { useState } from "react";

export default function ToneOfVoiceForm() {
  const [tone, setTone] = useState("Professional");
  const [languagePref, setLanguagePref] = useState("Auto-detect");

  return (
    <div className="space-y-8">
      {/* Card 1: Communication Style */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Communication Style</h2>
        <p className="text-sm text-gray-500 mb-3">
          Configure how AI drafts replies to customers.
        </p>

        <label className="block text-sm  font-bold text-gray-700 mb-2">
          Tone of Voice
        </label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option>Professional</option>
          <option>Friendly</option>
          <option>Formal</option>
          <option>Casual</option>
        </select>

        <div className="mt-4 p-4">
          <p className="text-sm text-gray-500 mb-1">Example Reply:</p>
          {tone === "Professional" && (
            <p className="text-gray-500 bg-blue-200">
              Thank you for your inquiry. We would be pleased to provide you with a competitive quote for your shipment requirements.
            </p>
          )}
          {tone === "Friendly" && (
            <p className="text-gray-700">
              Thanks for reaching out! We’d love to help with your shipment and will get you a great quote soon.
            </p>
          )}
          {tone === "Formal" && (
            <p className="text-gray-700">
              We appreciate your request. Kindly allow us to prepare a detailed quotation for your shipment needs.
            </p>
          )}
          {tone === "Casual" && (
            <p className="text-gray-700">
              Hey there! We’ll get back to you quickly with a quote for your shipment.
            </p>
          )}
        </div>
      
     
      <div >
        <h2 className="text-lg font-semibold mb-2">Language Preference</h2>
        <p className="text-sm text-gray-500 mb-3">
          AI will respond in the detected language or your preferred language.
        </p>

        <select
          value={languagePref}
          onChange={(e) => setLanguagePref(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option>Auto-detect</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Hindi</option>
        </select>

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