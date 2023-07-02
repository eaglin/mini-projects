import { useState } from 'react'


const API_KEY = "1bbd76ca"
const MOVIE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`
export function useGetMovies({ searchText }) {


    const [movies, setMovies] = useState()
    const getMovies = async () => {


        console.log("HOLA")

        const res = await fetch('http://www.omdbapi.com/?apikey=1bbd76ca&t=term')
        const movieList = await res.json()

        console.log(movieList.Search)
        setMovies(movieList)



    }

    return { movies, getMovies }

}