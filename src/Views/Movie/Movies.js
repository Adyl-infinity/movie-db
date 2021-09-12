import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Movies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const  {data: {results}} = await axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            setMovies(results)
        }
        fetchData()
    },[page])
    const handlePage = (num) => {
        setPage(num)
    }

    return (
        <div className="container xs:col-2 sm:col-3 md:col-4">
            <div className="buttons">
                {
                    Array(6).fill(0).map((el,idx) =>
                        <div>
                            <button onClick={() => handlePage(idx + 1)} className="w-8 border-2 border-indigo-600 mr-2 p-1.5 rounded-md hover:bg-blue-700">{idx + 1}</button>
                        </div>)
                }
            </div>

            <div className="movies row">
            {
                movies.map(el =>
                <div className="col-3  mb-6 mt-8">
                    <Link to={`/moviedetails/${el.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`} alt="" className="movie__img"/>
                        <h3 className="movie__name text-center font-semibold mt-2">{el.title}</h3>
                    </Link>
                </div>
                )
            }
            </div>
        </div>
    );
};

export default Movies;