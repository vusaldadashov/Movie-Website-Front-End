import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faEye, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../Cards/Card'
import classes from './Movie.module.css'
import { getRequest } from '../../../functions/request'
function Movie(params) {
    const [options, setOptions] = useState([])
    const [movie, setMovie] = useState({})
    const props = useParams()
    useEffect(() => {
        getRequest('/getmovie', {
            movieId: props.id
        }).then(data => setMovie(data))

        getRequest('/getmovies')
            .then(data => setOptions(data))
    }, [props.id, setMovie, setOptions])
    return (
        <div>
            <div className='container-fluid'>
                <div className={classes.container}>
                    <div className={classes.movie_video}>
                        <iframe width='100%' height='100%'
                            src={movie.src}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className={classes.movie_details}>
                        <h4>{movie.title}</h4>
                        <p>{movie.year} | 1hr 46mins | PG-</p>
                        <div className={classes.view_and_like}>
                            <p><FontAwesomeIcon icon={faEye} /><span> 8.3k views</span></p>
                            <p><FontAwesomeIcon icon={faThumbsUp} /><span> 38+</span></p>
                        </div>
                        <div className='d-flex'>
                            <p className={classes.movie_imdb}><FontAwesomeIcon icon={faStar} /> {movie.rating}</p>
                            <button><FontAwesomeIcon icon={faHeart} className={classes.playlist_hear} /><span> +Playlist</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.recommended_container}>
                <div className='container-fluid'>
                    <h5 className={classes.recommend_title}>You Also May Like</h5>
                    <div className={classes.recommended}>

                        {options.map((movie, index) => index < 8 && <div className={classes.card} key={movie.id}>
                            <Card {...movie} link_to='/movies/movie/' titleColor="white" />
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Movie