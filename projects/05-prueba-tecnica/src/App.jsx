import { useState, useEffect } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useGetMovies } from './hooks/getmovies'
import { useSearch } from './hooks/useSearch'

const API_KEY = "1bbd76ca"
const MOVIE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`


function App() {


  const { searchText, updateSearch, error } = useSearch()
  const { movies, getMovies } = useGetMovies({ searchText });

  const searchMovies = async ({ search }) => {


    try {

      console.log(json.Search)
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=term}`)
      const json = await response.json()

      console.log(json.Search)
      const movies = json.Search

      return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
      }))
    } catch (e) {

      console.log(e)
      throw new Error('Error searching movies')
    }
  }

  const handleSubmit = () => {
    console.log("ENTRAMOS")
    searchMovies().then(mov => { console.log(mov) })
    console.log("HOLA")
  }
  const handleChange = () => { }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <button type='submit' >Buscar</button>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={searchText} name='query' placeholder='Avengers, Star Wars, The Matrix...'
          />

        </form>

      </header>
      <main>

        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
