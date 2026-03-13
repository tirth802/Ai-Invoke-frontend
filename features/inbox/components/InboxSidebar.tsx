"use client"

import { SlidersHorizontal } from "lucide-react"

export default function InboxSidebar() {
  return (
    <div className="w-[320px] bg-white border-r flex flex-col m-3">

      {/* Inbox Header */}
      <div className="p-5 border-b">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <p className="text-sm text-gray-500">
          Workspace 01 • 60 messages, 20 unread
        </p>
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between px-5 py-3 border-b">
        <span className="text-sm font-medium">All Message/Mails</span>
        <SlidersHorizontal size={18} className="text-gray-500" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* Today */}
        <div>
          <p className="text-xs text-gray-500 mb-3">Today (4)</p>

          <div className="bg-gray-100 rounded-xl p-3 relative cursor-pointer hover:bg-gray-200">
            <div className="flex justify-between">
              <h4 className="text-sm font-semibold">
                Global Trade Co.
              </h4>
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              Quote request – AMS→DXB – 450kg general cargo
            </p>

            <div className="flex gap-2 mt-2 flex-wrap">

              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-md">
                Quote
              </span>

              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md">
                New
              </span>

              <span className="text-xs text-red-500">
                ⏱ 6 min
              </span>

            </div>
          </div>

        </div>

        {/* Yesterday */}
        <div>
          <p className="text-xs text-gray-500 mb-3">
            Yesterday (20)
          </p>

          <div className="bg-white border rounded-xl p-3 hover:bg-gray-50 cursor-pointer">

            <h4 className="text-sm font-semibold">
              FashionForward Ltd.
            </h4>

            <p className="text-xs text-gray-500 mt-1">
              Status inquiry – shipment tracking
            </p>

            <div className="flex gap-2 mt-2">

              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-md">
                Status
              </span>

              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md">
                Lost
              </span>

              <span className="text-xs text-gray-500">
                ⏱ 3h 30m
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}