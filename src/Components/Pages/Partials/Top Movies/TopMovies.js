import { Link } from 'react-router-dom'
import classes from './TopMovies.module.css'

function TopMovies(params) {
    return (
        <div className={classes.top_movies}>
                        <div className={classes.movies_title}>
                            <h2>{params.title}</h2>
                            {params.movies.length > 5 && <div className={classes.movies_buttons}>
                                <Link>Movies</Link>
                                <Link>Tv Series</Link>
                            </div>}
                        </div>
                        {params.movies.map(movie => <div className={classes.top_movie} key={movie.id}>
                            <div className={classes.top_movie_id}><h2>{movie.id}</h2></div>
                            <div className={classes.top_movie_details}>
                                <p>{movie.year}</p>
                                <p>{movie.title}</p>
                                <p>{movie.type}</p>
                            </div>
                        </div>)}
                    </div>
    )
}


export default TopMovies