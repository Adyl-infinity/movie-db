import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";


const Browse = () => {
    const [films, setFilms] = useState({})
    const [page, setPage] = useState(1)
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?query=${id}&page=${page}&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setFilms(data)
                setIsLoading(false)
            })

    }, [page, id])

    if (isLoading) {
        return <Spinner/>
    }




    let pageButtons = ""
    if (films.total_pages > 1 && page === 1) {
        pageButtons = (
            <button className='pageButton rounded-full' onClick={() => setPage(page + 1)}>next
            </button>)
    } else if (films.total_pages > page && page > 1) {
        pageButtons = (<>
            <button className='pageButton rounded-full' onClick={() => setPage(page - 1)}>prev
            </button>
            <button className='pageButton rounded-full' onClick={() => setPage(page + 1)}>next
            </button>
        </>)
    } else if (films.total_pages === page) {
        pageButtons = (<button className='pageButton rounded-full' onClick={() => setPage(page - 1)}>prev</button>)
    }





    return (
        <div className="container">
            <div className="rows mt-16">
                {
                    films?.results?.length ? films?.results?.map(movie =>
                        <>
                            <div  key={movie.id} className="mr-2">
                                <Link to={`/moviedetails/${movie.id}`}>
                                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://i.pinimg.com/280x280_RS/ed/03/06/ed0306b0f54a221a1a4d17823d354a18.jpg'} alt="" className="rounded"/>
                                    <h4 className="browse__title">{movie.title}</h4>
                                </Link>
                            </div>
                        </>
                    ) : <h2 className="search__message">Совпадения не найдены. . .</h2>

                }
            </div>
            <div className="search__btn">
                {pageButtons}
            </div>
        </div>
    );
};


export default Browse;