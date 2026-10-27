# Celebrare Photo Gallery

A responsive photo gallery built with React, Vite, and Tailwind CSS as part of the Celebrare Frontend Intern Pre-Screening Assignment.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid.
- Searches photos by author name in real time.
- Adds and removes favourites using React's `useReducer`.
- Persists favourites across page refreshes using `localStorage`.
- Uses a custom `useFetchPhotos` hook for API fetching.
- Handles loading and error states.
- Uses `useCallback` for event handlers and `useMemo` for filtered photos.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/mnrhag5-glitch/celebrare-photo-gallery.git
   ```

2. Open the project folder:

   ```bash
   cd celebrare-photo-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## API

Photos are fetched from:

https://picsum.photos/v2/list?limit=30

## Assignment Submission

Created for the Celebrare Frontend React Internship pre-screening assignment.
