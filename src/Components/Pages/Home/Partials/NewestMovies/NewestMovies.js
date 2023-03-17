import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Card from '../../../../Cards/Card'
import TopMovies from '../../../Partials/Top Movies/TopMovies'
import classes from './NewestMovies.module.css'
import Slider from './Slider'

const premierShows = [
    { id: '1', title: 'Delta Bravo1', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E01', imageUrl: '/s1e1.jpg' },
    { id: '2', title: 'Delta Bravo2', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E02', imageUrl: '/s1e2.jpg' },
    { id: '3', title: 'Delta Bravo3', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E03', imageUrl: '/s1e3.jpg' },
    { id: '4', title: 'Delta Bravo4', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E04', imageUrl: '/s1e4.jpg' }
]

const top9_movies = [
    { id: '1', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img1.jpg' },
    { id: '2', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img2.jpg' },
    { id: '3', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img3.jpg' },
    { id: '4', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img4.jpg' },
    { id: '5', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img5.jpg' },
    { id: '6', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img6.jpg' },
    { id: '7', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img7.jpg' },
    { id: '8', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img8.jpg' },
    { id: '9', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img9.jpg' }
]

function NewestMovies(params) {
    return (
        <div className={classes.main_container}>
            <div className='container-fluid'>
                <div className={classes.special_shows}>
                    {premierShows.map(show => <div className={classes.card} key={show.id}>
                        <Card {...show} titleColor='white' />
                    </div>)}
                    <div className={classes.control}>
                        <h2>Featured Tv Episode Premiers</h2>
                        <div className={classes.slider_container}><Slider shows={premierShows} titleColor="white" cardHeight="55vw" /></div>
                        <div className={classes.buttons}>
                            <button ><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
                            <button ><FontAwesomeIcon icon={faCircleArrowRight} /></button>
                        </div>
                    </div>
                </div>
                <div className={classes.second_container}>
                    <div className={classes.top9_movies}><TopMovies movies={top9_movies} title='Top 9 This Week' /></div>
                    <div className={classes.newest_movies}>
                        <div className={classes.movies_title}>
                            <h2>Newest Movies</h2>
                            <div className={classes.movies_buttons}>
                                <Link>Movies</Link>
                                <Link>Tv Series</Link>
                                <Link>Tv Series</Link>
                            </div>
                        </div>
                        <div className={classes.newest_movie}>
                            <div className={classes.newest_movie_image}>
                                <img src="/newestmovie.jpg" alt="" />
                            </div>
                            <div className={classes.newest_movie_details}>
                                <p>2020</p>
                                <p>The Last Witness</p>
                                <p>in 1982, a legendary army captain reluctantly agrees to escort a Cheyenne chief and his family
                                    through dangerous teritory.
                                </p>
                                <div className={classes.newest_movie_buttons}>
                                    <Link className='btn btn-primary btn-lg h6'>WATCH NOW</Link>
                                    <Link className='btn bg-transparent btn-lg '>+ PLAYLIST</Link>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-row pb-4' >
                            <div className={classes.small_cards}>
                                {top9_movies.map((movie, index) => index < 4 && <div className={classes.small_card} key={movie.id} >
                                    <div className={classes.small_card_image}>
                                        <img src={movie.imageUrl} alt="" />
                                    </div>
                                    <div className={classes.small_card_details}>
                                        <p>2017</p>
                                        <p>Delta Bravo</p>
                                        <p>Action, Comedy</p>
                                    </div>
                                </div>)}

                            </div>
                            <div className={classes.small_cards}>
                                {top9_movies.map((movie, index) => index > 3 && index < 8 && <div className={classes.small_card} key={movie.id} >
                                    <div className={classes.small_card_image}>
                                        <img src={movie.imageUrl} alt="" />
                                    </div>
                                    <div className={classes.small_card_details}>
                                        <p>2017</p>
                                        <p>Delta Bravo</p>
                                        <p>Action, Comedy</p>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewestMovies