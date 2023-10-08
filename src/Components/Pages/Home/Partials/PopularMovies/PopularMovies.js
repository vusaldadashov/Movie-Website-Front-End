import { NavLink } from "react-router-dom"
import Card from "../../../../Cards/Card"
import ViewAllButton from "../../../../UI/ViewButton/ViewAllButton"
import classes from './PopularMovies.module.css'

function PopularMovies(params) {
    return (
        <div className={`container-fluid pt-4 pb-4 ${classes.main_container}`}>
            <div className={classes.movies}>
                <div className={classes.show_movies}>
                    <h2>Popular Movies to Watch Now</h2>
                    <p>Most watched movies by days</p>
                    <ViewAllButton to={'movies'} >{'VIEW ALL >'}</ViewAllButton>
                </div>
                {params.movies.map((movie, index) => index < 5 && <div className={classes.card} key={movie.id}>
                    <Card {...movie}
                        link_to='/movies/movie/'
                        titleColor="white"
                    />
                </div>)}
            </div>
            <div className={classes.movies}>
                {params.movies.map((movie, index) => (index > 4 && index < 12) && <div className={classes.card} key={movie.id}>
                    <Card {...movie}
                        link_to='/movies/movie/'
                        titleColor="white"
                    />
                </div>)}
            </div>
            <div className={classes.button}>
                <div className={classes.line}></div>
                <NavLink to={'movies'} className={`btn btn-outline-light btn-lg text-white ${classes.special_button}`}>+View more</NavLink>
            </div>
        </div>
    )
}


export default PopularMovies