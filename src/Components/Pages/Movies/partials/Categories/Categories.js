import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopMovies from '../../../Partials/Top Movies/TopMovies'
import classes from './Categories.module.css'
import { useEffect, useState } from 'react'
const movieCategories = [
    { id: '1', title: 'Action', active: false },
    { id: '2', title: 'Adventure', active: false },
    { id: '3', title: 'Animation', active: false },
    { id: '4', title: 'Comedy', active: false },
    { id: '5', title: 'Crime', active: false },
    { id: '6', title: 'Drama', active: false },
    { id: '7', title: 'Fantacy', active: false },
    { id: '8', title: 'Horror', active: false },
    { id: '9', title: 'Mystery', active: false },
    { id: '10', title: 'Romance', active: false },
    { id: '11', title: 'Romance', active: false },
    { id: '12', title: 'Romance', active: false },
    { id: '13', title: 'Romance', active: false },
    { id: '14', title: 'Romance', active: false }
]

const dummyYears = [
    { id: '1', title: '2023', active: false },
    { id: '2', title: '2022', active: false },
    { id: '3', title: '2021', active: false },
    { id: '4', title: '2020', active: false },
    { id: '5', title: '2019', active: false },
    { id: '6', title: '2018', active: false },
    { id: '7', title: '2017', active: false },
    { id: '8', title: '2016', active: false },
    { id: '9', title: '2015', active: false },
    { id: '10', title: '2014', active: false },
    { id: '11', title: '2013', active: false },
    { id: '12', title: '2012', active: false },
    { id: '13', title: '2011', active: false },
    { id: '14', title: '2010', active: false },
    { id: '15', title: '2009', active: false },
    { id: '16', title: '2008', active: false }
]


const initialRatings = [
    { id: '1', title: '10', movieNumber: '5', active: false },
    { id: '2', title: '9', movieNumber: '8', active: false },
    { id: '3', title: '8', movieNumber: '14', active: false },
    { id: '4', title: '7', movieNumber: '26', active: false },
    { id: '6', title: '6', movieNumber: '37', active: false },
    { id: '7', title: '5', movieNumber: '140', active: false },
    { id: '8', title: '4', movieNumber: '65', active: false },
    { id: '9', title: '3', movieNumber: '0', active: false }
]

const getActiveFilters = (items) => {
    return items.filter(x => x.active).map(x => x.title)
}


function Categories(params) {
    const [filters, setFilters] = useState({
        types: [...movieCategories],
        years: [...dummyYears],
        ratings: [...initialRatings]
    })
    const [numberOfMoviesByRating, setNumberOfMoviesByRating] = useState([])

    const { types, years, ratings } = filters
    useEffect(() => {
        let rateNumbers = []
        initialRatings.forEach(rate => {
            rateNumbers.push(params.movies.filter(x => x.rating === rate.title).length)
        })
        setTimeout(() => {
            setNumberOfMoviesByRating([...rateNumbers])
        }, 50);
    }, [params.movies])


    const filterHandler = (identifier, idx) => {
        setFilters(prev => {
            prev[identifier][idx].active = !prev[identifier][idx].active
            return prev
        })
        setTimeout(() => {
            params.getMoviesFilters({
                types: getActiveFilters(types),
                years: getActiveFilters(years),
                ratings: getActiveFilters(ratings)
            })
        }, 50);
    }
    return (
        <div className={classes.main_container}>
            <div className={classes.container} >
                <div className={classes.title}><p>Categories</p></div>
                <div className={classes.categories}>
                    <ul>
                        {types.map((item, index) => (
                            <li key={item.id}>
                                <input type="checkbox" onChange={() => filterHandler('types', index)} />
                                <span>{item.title}</span>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className={classes.title}><p>Movies by Year</p></div>
                <div className={classes.years}>
                    <ul>
                        {years.map((year, index) => (
                            <li className={year.active ? 'bg-danger' : undefined}
                                key={year.id}
                                onClick={() => filterHandler('years', index)}>
                                {year.title}
                            </li>
                        ))}

                    </ul>
                </div>
                <div className={classes.title}><p>Filter by Rating</p></div>
                <div className={classes.rating}>
                    <ul>
                        {ratings.map((rating, idx) => (
                            <li
                                key={rating.id}
                                onClick={() => filterHandler('ratings', idx)}
                                className={rating.active ? 'text-danger' : undefined}
                            >
                                <div>{
                                    [...Array(10)].map((_, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={rating.title > i ? faStar : faStarEmpty}
                                        />
                                    )
                                    )
                                }</div>
                                <p>({numberOfMoviesByRating[idx]})</p>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            <div className={classes.top5_movies}>
                <TopMovies movies={params.movies.slice(0, 5)} title='Top 5 This Week' />
            </div>
        </div>
    )
}

export default Categories