
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopMovies from '../../../Partials/Top Movies/TopMovies'
import classes from './Categories.module.css'
const movieCategories = [
    { id: '1', title: 'Action', to: '' },
    { id: '2', title: 'Adventure', to: '' },
    { id: '3', title: 'Animation', to: '' },
    { id: '4', title: 'Comedy', to: '' },
    { id: '5', title: 'Crime', to: '' },
    { id: '6', title: 'Drama', to: '' },
    { id: '7', title: 'Fantacy', to: '' },
    { id: '8', title: 'Horror', to: '' },
    { id: '9', title: 'Mystery', to: '' },
    { id: '10', title: 'Romance', to: '' },
    { id: '11', title: 'Romance', to: '' },
    { id: '12', title: 'Romance', to: '' },
    { id: '13', title: 'Romance', to: '' },
    { id: '14', title: 'Romance', to: '' }
]

const years = [
    { id: '2023' },
    { id: '2022' },
    { id: '2021' },
    { id: '2020' },
    { id: '2019' },
    { id: '2018' },
    { id: '2017' },
    { id: '2016' },
    { id: '2015' },
    { id: '2014' },
    { id: '2013' },
    { id: '2012' },
    { id: '2011' },
    { id: '2010' },
    { id: '2009' },
    { id: '2008' }
]


const ratings = [
    { id: '1', rate: '10', movieNumber: '5' },
    { id: '2', rate: '9', movieNumber: '8' },
    { id: '3', rate: '8', movieNumber: '14' },
    { id: '4', rate: '7', movieNumber: '26' },
    { id: '6', rate: '6', movieNumber: '37' },
    { id: '7', rate: '5', movieNumber: '140' },
    { id: '8', rate: '4', movieNumber: '65' },
    { id: '9', rate: '3', movieNumber: '0' }
]
function Categories(params) {
    return (
        <div className={classes.main_container}>
        <div className={classes.container} >
            <div className={classes.title}><p>Categories</p></div>
            <div className={classes.categories}>
                <ul>
                    {movieCategories.map(item => (
                        <li key={item.id}>
                            <input type="checkbox" />
                            <span>{item.title}</span>
                        </li>
                    ))}

                </ul>
            </div>
            <div className={classes.title}><p>Movies by Year</p></div>
            <div className={classes.years}>
                <ul>
                    {years.map(year => (
                        <li key={year.id}>{year.id}</li>
                    ))}

                </ul>
            </div>
            <div className={classes.title}><p>Filter by Rating</p></div>
            <div className={classes.rating}>
                <ul>
                    {ratings.map(rating => (
                        <li key={rating.id}>
                            <div>
                                {[...Array(10)].map((_, i) => rating.rate > i ? <FontAwesomeIcon key={i} icon={faStar} /> : <FontAwesomeIcon key={i} icon={faStarEmpty} />)}
                            </div>
                            <p>({rating.movieNumber})</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
        <div className={classes.top5_movies}><TopMovies movies={params.movies} title='Top 5 This Week' /></div>
        </div>
    )
}

export default Categories