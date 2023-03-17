import React from 'react'
import {useParams} from 'react-router-dom'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faEye, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../Cards/Card'
import classes from './Movie.module.css'

const options = [
    { id: '1', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img1.jpg' },
    { id: '2', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img2.jpg' },
    { id: '3', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img3.jpg' },
    { id: '4', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img4.jpg' },
    { id: '5', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img5.jpg' },
    { id: '6', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img6.jpg' },
    { id: '7', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img7.jpg' },
    { id: '8', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img8.jpg' },
    { id: '9', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img9.jpg' },
    { id: '10', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img10.jpg' },
    { id: '11', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img11.jpg' },
    { id: '12', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img12.jpg' }
]


function Movie(params) {
    const props = useParams()
    console.log(props);
    return (
        <div>
            <div className='container-fluid'>
                <div className={classes.container}>
                    <div className={classes.movie_video}>
                        <video width='100%' height='100%' controls>
                            <source src='' type='video/mp4' />
                        </video>
                    </div>
                    <div className={classes.movie_details}>
                        <h4>Movie Title</h4>
                        <p>2020 | 1hr 46mins | PG-</p>
                        <div className={classes.view_and_like}>
                            <p><FontAwesomeIcon icon={faEye} /><span> 8.3k views</span></p>
                            <p><FontAwesomeIcon icon={faThumbsUp} /><span> 38+</span></p>
                        </div>
                        <div className='d-flex'>
                            <p className={classes.movie_imdb}><FontAwesomeIcon icon={faStar} /> 8.0</p>
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
                        <Card {...movie} titleColor="white" />
                    </div>)}
                </div>
                </div>
            </div>
        </div>
    )
}


export default Movie