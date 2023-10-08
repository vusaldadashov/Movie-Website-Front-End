import { Link } from 'react-router-dom'
import Card from '../../../../Cards/Card'
import ViewAllButton from '../../../../UI/ViewButton/ViewAllButton'
import Slider from '../NewestMovies/Slider'
import classes from './SpecialMovies.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

// const movies = [
//     { id: '1', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img1.jpg' },
//     { id: '2', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img2.jpg' },
//     { id: '3', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img3.jpg' },
//     { id: '4', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img4.jpg' },
//     { id: '5', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img5.jpg' },
//     { id: '6', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img6.jpg' },
//     { id: '7', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img7.jpg' },
//     { id: '8', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img8.jpg' },
//     { id: '9', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img9.jpg' },
//     { id: '10', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img10.jpg' }
// ]


function SpecialMovies(params) {
    const titleColor = params.backColor === 'white' ? 'black' : 'white'
    const controlDiv = <div className={classes.show_movies}>
        <h2 style={{ color: params.backColor !== 'white' ? 'white' : 'black' }}>Romantic for Valentines Day</h2>
        <div className={classes.buttons}>
            <button ><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
            <button ><FontAwesomeIcon icon={faCircleArrowRight} /></button>
        </div>
        <ViewAllButton to={'/'} >{'VIEW ALL >'}</ViewAllButton>
    </div>
    return (
        <div className={classes.main_container} style={{ backgroundColor: params.backColor }}>
            <div className='container-fluid'>
                <div className={classes.links}>
                    <Link>Today</Link>
                    <span>/</span>
                    <Link>This week</Link>
                    <span>/</span>
                    <Link>Last 30 days</Link>
                </div>
                <div className={classes.movies}>
                    {params.controlPos === 'start' && controlDiv}
                    {params.movies.map((movie, index) => index < 6 && <div className={classes.card} key={movie.id}>
                        <Card {...movie}
                            link_to='/movies/movie/'
                            titleColor={titleColor}
                        />
                    </div>)}
                    <div className={classes.slider_container}><Slider shows={params.movies} titleColor={titleColor} cardHeight="35rem" /></div>
                    {params.controlPos === 'end' && controlDiv}
                </div>
            </div>
        </div>
    )
}

export default SpecialMovies