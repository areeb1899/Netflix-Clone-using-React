import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const base_URL = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <>
        <div className="row">
            

            <h2>{title}</h2>
            <div className="row-posters">

                {movies?.map((movie) =>
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            className={`row-poster ${isLargeRow ? 'row-posterLarge' : ''}`}
                            key={movie.id}
                            src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name || movie.title || "Movie Poster"}
                        />
                    )
                )}
               
            </div>


        </div>
        
        </>
    );
}

export default Row;
