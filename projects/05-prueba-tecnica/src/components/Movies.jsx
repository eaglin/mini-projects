/* eslint-disable react/prop-types */

export function Movies({ movies }) {
    return (
        <ul>

            {movies?.length > 0 ? movies.map(movie =>
                <li className='movies' key={movie.imdbID}>
                    <p >{movie.title}</p>
                    <p >{movie.released}</p>
                    {movie.poster !== "N/A" && <img src={movie.poster} alt='movie.imdbID' />}
                </li>)
                : <p>Peliculas no encontradas</p>}
        </ul>
    );
}

