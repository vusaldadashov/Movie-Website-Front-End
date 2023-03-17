import { NavLink } from 'react-router-dom'
import classes from './Poster.module.css'

function Poster(params) {
    return (
        <div className={`vw-100 bg-danger text-secondary ${classes.poster}`} style={{ backgroundImage: `url(${params.imageUrl})` }}>
            <div className={`container-fluid ${classes.poster_details}`} >
                <h1>American Made</h1>
                <div className={classes.movie_details}>
                    <span>2020</span>
                    <span>Comedy</span>
                    <span>1hr 55 mins</span>
                </div>
                <div className={classes.buttons}>
                    <NavLink className='btn btn-primary btn-lg h6'>WATCH NOW</NavLink>
                    <NavLink className='btn btn-outline-light bg-transparent btn-lg h6'>+ PLAYLIST</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Poster