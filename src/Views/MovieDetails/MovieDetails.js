import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, useHistory, Link} from "react-router-dom";
import Trailer from "../../Components/Trailer/Trailer";


const MovieDetails = () => {
    const [film, setFilm] = useState({})
    const [actors, setActors] = useState([])
    const [trailer, setTrailer] = useState([])
    const [loading, setLoading] = useState(true)
    const [actorsLoading, setActorsLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setFilm(data)
                setLoading(false)
            })
    }, [id])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setActors(data.cast)
                setActorsLoading(false)
            })

    }, [id])

    useEffect(() =>{
        axios(`http://api.themoviedb.org/3/movie/${id}/videos?&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setTrailer(data.results))
    },[id])

    const filmTypes = film.genres
    const getActors = () => {
        history.push(`/people/${id}`)
    }

    if (loading || actorsLoading){
        return "Loading...."
    }  return (
        <div className="container">
            <div className='movie__details'>
                <div className="w-3/6 mt-8">
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" className="movie__img__title"/>
                </div>


                <div className="w-3/6 mt-8">
                    <h1 className="film__description"><span className="title__decor">Название : </span> {film.title}</h1>
                    <p className="film__description"><span className="title__decor">Дата выхода : </span> {film.release_date}</p>
                    <div>
                        {
                            filmTypes?.map(el =>
                                <span className="film__type">{el.name}, </span>
                            )
                        }
                    </div>
                    <p className="film__description"><span className="title__decor">Продолжительность : </span> {Math.floor(film.runtime/60)}ч {Math.floor(film.runtime%60)}м</p>
                    <p className="film__description"><span className="title__decor">Описание : </span> {film.overview}</p>
                    <p className="film__description"><span className="title__decor">Рейтинг : </span> {film.vote_average}</p>
                    <p className="film__description"><span className="title__decor">Бюджет : </span> {film?.budget?.toLocaleString()} $</p>
                </div>
            </div>
            <div className="movie__actors rows mt-10 text-center">
                {
                    actors.filter(item => item.popularity > 5).map(el =>
                        <Link to={`/actor/${el.id}`} key={el.id} className="col-4">
                            <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt="" className="actor__img"/>
                            <h4 className="actor__name">{el.name}</h4>
                            <p className="bold actor__role">{el.character}</p>
                        </Link>
                    )
                }
                <button className='btn-actors' onClick={getActors}>Смотреть еще<i className='fas fa-arrow-right'></i></button>
            </div>
            {
                trailer.map(item =>
                    <Trailer key={item.key} id={item.key}/>
                )
            }
        </div>
    );
};

export default MovieDetails;