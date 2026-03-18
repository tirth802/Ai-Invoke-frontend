"use client";

import { useState } from "react";

export default function CompanyContextForm() {
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet consectetur.");
  const [services, setServices] = useState({
    AirFreight: true,
    SeaFreight: false,
    RoadFreight: true,
    CustomsClearance: false,
    Warehousing: false,
  });
  const [excluded, setExcluded] = useState(
    "We do not handle live animals, perishable goods without proper packaging, or shipments to embargoed countries."
  );

  const handleToggle = (key: keyof typeof services) => {
    setServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Card 1: Business Description */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Business Description</h2>
        <p className="text-sm text-gray-500 mb-3">
          Describe your business to help AI understand your services and capabilities.
        </p>
        <h2 className="text-lg font-semibold mb-2">Add Description</h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
       
      

      {/* Card 2: Services Offered */}
      
        <h2 className="text-lg font-semibold mb-2">Services Offered</h2>
        <div className="space-y-3">
          {Object.entries(services).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              
              <button
                onClick={() => handleToggle(key as keyof typeof services)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  value ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    value ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
               <span>{key.replace(/([A-Z])/g, " $1")}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      
      </div>

      {/* Card 3: What We Don't Handle */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">What We Don&apos;t Handle</h2>
        <p className="text-sm text-gray-500 mb-3">
          Specify cargo types or services you don&apos;t offer to help AI decline inappropriate requests politely.
        </p>
        <textarea
          value={excluded}
          onChange={(e) => setExcluded(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <div className="flex justify-end">
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}