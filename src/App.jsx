
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import PhotoGrid from './components/PhotoGrid'
import LoadingSpinner from './components/LoadingSpinner'
import useFetchPhotos from './hooks/useFetchPhotos'
import {
  favouritesReducer,
  getInitialFavourites,
} from './reducers/favouritesReducer'

function App() {
  const { photos, loading, error } = useFetchPhotos()

  const [search, setSearch] = useState('')

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    getInitialFavourites
  )

  useEffect(() => {
    localStorage.setItem(
      'celebrare-favourites',
      JSON.stringify(favourites)
    )
  }, [favourites])

  const handleSearchChange = useCallback((value) => {
    setSearch(value)
  }, [])

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      payload: photoId,
    })
  }, [])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.trim().toLowerCase())
    )
  }, [photos, search])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <SearchBar
          search={search}
          onSearchChange={handleSearchChange}
        />

        {loading && <LoadingSpinner />}

        {error && (
          <p role="alert" className="py-8 text-center text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && filteredPhotos.length === 0 && (
          <p className="py-8 text-center text-gray-500">
            No photos found.
          </p>
        )}

        {!loading && !error && filteredPhotos.length > 0 && (
          <PhotoGrid
            photos={filteredPhotos}
            favourites={favourites}
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </main>
    </div>
  )
}

export default App
