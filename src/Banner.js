import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Banner.css';
import requests from './Request';


const Banner = () => {
    const [movie, setMovie] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))])
            return request;

        }
        fetchData();

    }, [])




    console.log(movie)

    function truncate(string, n) {
        if (typeof string !== 'string') return ''; // Return an empty string if the input is not a string
        return string.length > n ? string.substr(0, n - 1) + '...' : string;

    }

    return (
        <>
            <header className="banner" style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: 'center center'
            }}>

                <div className="banner-contents">
                    <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name} </h1>
                    <div>
                        <button className="banner-button">
                            play
                        </button>
                        <button className="banner-button">
                            My list
                        </button>

                    </div>
                    <h1 className="banner-description"> {truncate(`${movie?.overview}`, 150)}</h1>

                </div>
                <div className="banner-fadeBottom"/>
            </header>

        </>
    )
}

export default Banner
