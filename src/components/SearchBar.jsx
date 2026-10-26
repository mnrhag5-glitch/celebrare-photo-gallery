function SearchBar({ search, onSearchChange }) {
  return (
    <div className="mb-8">
      <label
        htmlFor="photo-search"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Search by author
      </label>

      <input
        id="photo-search"
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Enter author name..."
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  )
}

export default SearchBar