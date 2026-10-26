
export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const photoId = action.payload

      if (state.includes(photoId)) {
        return state.filter((id) => id !== photoId)
      }

      return [...state, photoId]
    }

    default:
      return state
  }
}

export function getInitialFavourites() {
  try {
    const savedFavourites = localStorage.getItem('celebrare-favourites')

    return savedFavourites ? JSON.parse(savedFavourites) : []
  } catch {
    return []
  }
}
