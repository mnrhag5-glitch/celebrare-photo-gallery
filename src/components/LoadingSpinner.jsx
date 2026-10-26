
function LoadingSpinner() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-16"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

      <p className="text-sm text-gray-500">
        Loading photos...
      </p>
    </div>
  )
}

export default LoadingSpinner
