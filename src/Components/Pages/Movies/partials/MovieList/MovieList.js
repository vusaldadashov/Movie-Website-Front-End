import { useEffect, useState } from 'react'
import Card from '../../../../Cards/Card'
import classes from './MovieList.module.css'
function MovieList(params) {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState([])
    const [transition, setTransition] = useState(false)
    useEffect(() => {
        let pageNumbers = parseInt(params.movies.length / 30)
        if (params.movies.length % 30 !== 0) pageNumbers++
        setPages([...Array(pageNumbers)].map((_, index) => index + 1))
        setTransition(prev => prev = false)
    }, [params.movies])

    useEffect(() => {
         setTimeout(() => {
            setMovies(prev => prev = params.movies.slice((page - 1) * 30, page * 30))
        }, 500)
        setTimeout(() => {
            setTransition(true)
        }, 500);
        return () => {}
    }, [page, params.movies])

    const nextPageHandler = () => {
        if (page === pages.length) return
        setPage(prev => prev + 1)
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}><p>Movies</p></div>
            <div className={classes.header}>

            </div>
            <div className={`${transition && classes.smooth_movies} ${classes.movies}`}>
                {movies.length && movies.map(movie => (
                    <div
                        className={classes.card}
                        key={movie.id}
                    >
                        <Card {...movie} link_to='/movies/movie/' titleColor='white' />
                    </div>
                )
                )}
                {movies.length === 0 && params.isFiltering && <h3 className='text-light'>There is no movie for this filter.</h3>}
            </div>
            <div className={classes.footer}>
                <div className={classes.footer_title}><p>Showing 1-30 of {params.movies.length} results</p></div>
                <div className={classes.footer_buttons}>
                    {pages.map(item => <button className={page === item ? classes.active : undefined} key={item} onClick={() => setPage(item)}>{item}</button>)}
                    <button onClick={nextPageHandler}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default MovieList