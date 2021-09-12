import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const Actor = () => {
    const {id} = useParams()
    const [actor, setActor] = useState({})
    const [film, setFilm] = useState([])
    const [filmsList, setFilmsList] = useState([])

    useEffect( () => {
        axios(`https://api.themoviedb.org/3/person/${id}?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setActor(data))
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setFilm(data.cast))
    },[id])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}/combined_credits?&language=en&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setFilmsList(data.cast))
    }, [id])

    return (
        <div className="actor__details container">
            <div className="details__one">
                <img src={actor.profile_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${actor.profile_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}
                            alt="" className='actor__image text-center rounded'/>
                <p className="film__description title__description mt-4"><span className="title__decor">Известность за:</span> {actor.known_for_department === "Acting" ?  "Актерское исскуство" : ""}</p>
                <p className="film__description title__description"><span className="title__decor">Пол:</span> {actor.gender === 2 ? "Мужской" : "Женский"}</p>
                <p className="film__description title__description"><span className="title__decor">Дата рождения:</span> {actor.birthday}</p>
                <p className="film__description title__description"><span className="title__decor">Место рождения:</span> {actor.place_of_birth}</p>
                <p className="film__description title__description"><span className="title__decor">Известен как:</span></p>
                <div>
                    {
                        actor?.also_known_as?.map(el =>
                            <p className="title__description">{el}</p>
                        )
                    }
                </div>

            </div>

            <div className="details__two">
                    <h2 className="actor_name">{actor.name}</h2>
                    <h3><span className="title__decor">Биография:</span></h3>
                    <p className="film__description"> {actor.biography}</p>
                    <p className="title__decor title__decoration">Фильмы с участием актера:</p>
                <div className="rows__films">
                    {
                        film.slice(0, 10).map(el =>
                        <Link to={`/moviedetails/${el.id}`}>
                            <img src={el.poster_path?`https://www.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`:'https://i.pinimg.com/280x280_RS/ed/03/06/ed0306b0f54a221a1a4d17823d354a18.jpg'} alt="" className='actor__img actors__img'/>
                            <p className="title__name">{el.title}</p>
                        </Link>
                        )
                    }
                </div>
                <div className="mt-12">
                    {
                        filmsList.filter(item => item.release_date).sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).map(el =>
                            <Link to={`/moviedetails/${el.id}`}>
                                <div key={el.id} className='films-list'>
                                    <p className="film__date">{el.release_date.slice(0, 4)}</p>
                                    <h6 className="list__desc">{el.title}</h6>
                                    <span className='list__span'>how</span>
                                    <p className="heroes__name">{el.character}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Actor;