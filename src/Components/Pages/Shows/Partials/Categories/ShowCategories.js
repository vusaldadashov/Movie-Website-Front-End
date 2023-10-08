import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopMovies from '../../../Partials/Top Movies/TopMovies'
import classes from './ShowCategories.module.css'
import { useEffect, useState } from 'react'

const dummyLetters = [
    { id: '1', title: 'A', active: false },
    { id: '2', title: 'B', active: false },
    { id: '3', title: 'C', active: false },
    { id: '4', title: 'D', active: false },
    { id: '5', title: 'E', active: false },
    { id: '6', title: 'F', active: false },
    { id: '7', title: 'G', active: false },
    { id: '8', title: 'H', active: false },
    { id: '9', title: 'I', active: false },
    { id: '10', title: 'L', active: false },
    { id: '11', title: 'M', active: false },
    { id: '12', title: 'N', active: false },
    { id: '13', title: 'O', active: false },
    { id: '14', title: 'P', active: false },
    { id: '15', title: 'Q', active: false },
    { id: '16', title: 'S', active: false }
]

const initialRatings = [
    { id: '1', title: '10', active: false },
    { id: '2', title: '9', active: false },
    { id: '3', title: '8', active: false },
    { id: '4', title: '7', active: false },
    { id: '6', title: '6', active: false },
    { id: '7', title: '5', active: false },
    { id: '8', title: '4', active: false },
    { id: '9', title: '3', active: false }
]


const getActiveFilters = (items) => {
    return items.filter(x => x.active).map(x => x.title)
}

function ShowCategories(params) {
    const [filters, setFilters] = useState({
        letters: [...dummyLetters],
        ratings: [...initialRatings]
    })
    //Counting number of movies by rating
    const [numberOfMoviesByRating, setNumberOfMoviesByRating] = useState([])

    useEffect(() => {
        let rateNumbers = new Array(8).fill(0)
        params.shows.forEach(movie => {
            rateNumbers[10 - movie.rating]++
        })
        setNumberOfMoviesByRating([...rateNumbers])
    }, [params.shows])
    const { letters, ratings } = filters

    const filterHandler = (identifier, idx) => {
        setFilters(prev => {
            prev[identifier][idx].active = !prev[identifier][idx].active
            return prev
        })
        setTimeout(() => {
            params.getShowsFilters({
                letters: getActiveFilters(letters),
                ratings: getActiveFilters(ratings)
            })
        }, 50)
    }
    return (
        <div className={classes.main_container}>
            <div className={classes.container} >
                <div className={classes.title}><p>Filter shows by letter</p></div>
                <div className={classes.letters}>
                    <ul>
                        {letters.map((letter, index) => (
                            <li className={letter.active ? 'bg-danger' : undefined}
                                key={letter.id}
                                onClick={() => filterHandler('letters', index)}>
                                {letter.title}
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
                                    ))
                                }
                                </div>
                                <p className=
                                    {
                                        rating.active ? 'text-danger' : undefined
                                    }
                                >({numberOfMoviesByRating[idx]})</p>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            <div className={classes.top5_shows}><TopMovies movies={params.shows.slice(0, 5)} title='Popular Shows' /></div>
        </div>
    )
}

export default ShowCategories