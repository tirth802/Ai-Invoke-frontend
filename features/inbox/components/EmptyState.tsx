export default function EmptyState() {
  return (
    <div className="flex items-center justify-center bg-white m-3 h-lvh">
      <div className="flex flex-col items-center text-center">

        {/* Blue Circle */}
        <div className="w-44 h-44 rounded-full bg-blue-100 mb-6" />

        <h2 className="text-lg font-medium text-gray-800">
          Select a message to view
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          No item selected
        </p>

      </div>

    </div>
  )
}