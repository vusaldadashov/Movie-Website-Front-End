import { useEffect, useState } from 'react'
import Card from '../../../../Cards/Card'
import classes from './MovieList.module.css'

function MovieList(params) {
    const [movies, setMovies] = useState([]) 
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState([])
    useEffect(() => {
        let pageNumbers = parseInt(params.movies.length/30)
        if(params.movies.length % 30 !== 0) pageNumbers++ 
        setPages([...Array(pageNumbers)].map((_, index) => index+1))
    }, [params.movies])

    useEffect(() => {
        setMovies(params.movies.slice((page-1)*30, page*30))
        return () => {}
    }, [page, params.movies])
    
    const nextPageHandler = () => {
        if(page === pages.length) return
        setPage(prev => prev+1)
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}><p>Movies</p></div>
            <div className={classes.header}>

            </div>
            <div className={classes.movies}>
                {movies.map(movie  => <div className={classes.card} key={movie.id}>
                    <Card {...movie} titleColor='white' />
                </div>)}
            </div>
            <div className={classes.footer}>
                <div className={classes.footer_title}><p>Showing 1-30 of {params.movies.length} results</p></div>
                <div className={classes.footer_buttons}>
                    {pages.map(item => <button className={page===item ? classes.active: undefined} key={item} onClick={() => setPage(item)}>{item}</button> )}
                    <button onClick={nextPageHandler}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default MovieList