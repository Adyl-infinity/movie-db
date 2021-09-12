import React, {useEffect,useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const People = () => {
    const [actors, setActors] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setActors(data.cast))

    },[id])

    return (
        <div className="container mb-10">
            <h2 className="title__decor mt-8 mb-8 text-center">Актёрский состав:</h2>
            <div className="all__actors">
                {
                    actors.map(el =>
                        <div key={el.id}>
                            <Link to={`/actor/${el.id}`}>
                                <div>
                                    <img className='actor__img' src={el.profile_path ? `https://image.tmdb.org/t/p/w500${el.profile_path}` : 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-9.jpg'} alt=""/>
                                </div>
                                <div>
                                    <h4 className="actors__name">{el.name}</h4>
                                    <p className="actor__role">{el.character}</p>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default People;