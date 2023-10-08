import React, { Suspense, memo, useEffect , useState } from "react"
import Categories from "./partials/Categories/Categories"
import { getRequest } from "../../../functions/request"
const MovieList = React.lazy(() => import("./partials/MovieList/MovieList"))
const checkTypesOfMovies = (items1, items2) => {
    for (let item1 of items1) {
        for (let item2 of items2) {
            if (item1 === item2) return true
        }
    }
    return false
}

function Movies(params) {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [isFiltering, setIsFiltering] = useState(false)
    useEffect(() => {
        getRequest('/getmovies')
            .then(data => setMovies(data))
    }, [])
    const getFilters = (filters) => {
        const {types, years, ratings} = filters
        let tempMovies = [...movies]
        if (years.length) tempMovies = tempMovies.filter(movie => years.includes(movie.year))
        if (types.length) tempMovies = tempMovies.filter(movie => checkTypesOfMovies(movie.type, types))
        if (ratings.length) tempMovies = tempMovies.filter(movie => ratings.includes(movie.rating))
        setIsFiltering(true)
        setFilteredMovies(tempMovies)
    }
    return (
        <div className="container-fluid pt-4 pb-4">
            <div className="d-flex">
                <Categories
                    movies={movies}
                    getMoviesFilters={getFilters}
                />
                <Suspense fallback={<div>Loading...</div>}>
                    <MovieList movies={isFiltering ? filteredMovies : movies} isFiltering={isFiltering} />
                </Suspense>
            </div>
        </div>
    )
}
export default memo(Movies)