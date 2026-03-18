"use client";

import { useState } from "react";

export default function OperatingRuleForm() {
  const [requiredFields, setRequiredFields] = useState({
    Origin: true,
    Destination: false,
    Weight: false,
    Dimensions: false,
    CargoType: false,
  });

  const [slaTargets, setSlaTargets] = useState({
    QuoteRequests: "2 hours",
    BookingRequests: "2 hours",
    StatusInquiries: "30 min",
    UrgentRequests: "15 min",
  });

  const [autoEscalation, setAutoEscalation] = useState({
    Trigger1: true,
    Trigger2: false,
    Trigger3: false,
    Trigger4: true,
    Trigger5: false,
  });

  const toggleField = (key: keyof typeof requiredFields) => {
    setRequiredFields((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleEscalation = (key: keyof typeof autoEscalation) => {
    setAutoEscalation((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Card 1: Required Fields */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Required Fields</h2>
        <p className="text-sm text-gray-500 mb-3">
          Define which information is required for each request type.
        </p>
        <div className="space-y-3">
          {Object.entries(requiredFields).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2 ">
              
              <button
                onClick={() => toggleField(key as keyof typeof requiredFields)}
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
              <span>{key}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>

      {/* Card 2: SLA Targets */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
  <h2 className="text-lg font-semibold mb-2">SLA Targets</h2>
  <p className="text-sm text-gray-500 mb-3">
    Set response time targets for different request types.
  </p>

  <div >
    <div className=" flex justify-between w-100 py-3">
    {/* Quote Requests */}
    <div className="flex flex-col gap-1">
      <span >Quote Requests</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          value={slaTargets.QuoteRequests}
          onChange={(e) =>
            setSlaTargets((prev) => ({
              ...prev,
              QuoteRequests: e.target.value,
            }))
          }
          className="w-20 border border-gray-300  bg-gray-100 text-gray-500 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">hours</span>
      </div>
    </div>

    {/* Booking Requests */}
    
    <div className="flex flex-col gap-1 items-center ">
      <span >Booking Requests</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          value={slaTargets.BookingRequests}
          onChange={(e) =>
            setSlaTargets((prev) => ({
              ...prev,
              BookingRequests: e.target.value,
            }))
          }
          className="w-20 border border-gray-300  bg-gray-100 text-gray-500 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">hours</span>
      </div>
    </div>
   </div>
   <div className="flex justify-between w-105 p-3">
    {/* Status Inquiries */}
    <div className="flex items-center flex-col gap-1">
      <span >Status Inquiries</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          value={slaTargets.StatusInquiries}
          onChange={(e) =>
            setSlaTargets((prev) => ({
              ...prev,
              StatusInquiries: e.target.value,
            }))
          }
          className="w-20 border border-gray-300  bg-gray-100 text-gray-500 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">minutes</span>
      </div>
    </div>
   
    {/* Urgent Requests */}
    <div className="flex items-center flex-col gap-1">
      <span>Urgent Requests</span>
      <div className="flex items-center gap-2">
        <input
        
          type="number"
          min="0"
          value={slaTargets.UrgentRequests}
          onChange={(e) =>
            setSlaTargets((prev) => ({
              ...prev,
              UrgentRequests: e.target.value,
            }))
          }
          className="w-20 border border-gray-300 bg-gray-100 text-gray-500 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">minutes</span>
      </div>
    </div>
  </div>    
      </div>

      {/* Card 3: Auto-Escalation Triggers */}
      <div className=" m-3">
        <h2 className="text-lg font-semibold mb-2">Auto-Escalation Triggers</h2>
        <div className="space-y-3">
          {Object.entries(autoEscalation).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span>{key.replace(/([A-Z])/g, " $1")}</span>
              <button
                onClick={() => toggleEscalation(key as keyof typeof autoEscalation)}
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
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}