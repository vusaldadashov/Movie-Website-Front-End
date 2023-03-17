import { NavLink } from 'react-router-dom'
import Card from '../../../../Cards/Card'
import classes from './ShowPoster.module.css'

const episodes = [
    { id: '1', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E01', imageUrl: '/s1e1.jpg' },
    { id: '2', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E02', imageUrl: '/s1e2.jpg' },
    { id: '3', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E03', imageUrl: '/s1e3.jpg' },
    { id: '4', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E04', imageUrl: '/s1e4.jpg' },
    { id: '5', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], episode: 'S01E05', imageUrl: '/s1e5.jpg' }
]



function ShowPoster(params) {
    return (
        <div className={`vw-100 bg-danger text-secondary ${classes.poster}`} style={{backgroundImage: `url(${params.imageUrl})`}}>
            <div className={`container-fluid ${classes.poster_details}`}>
                <h1>American Made</h1>
                <p className={classes.show_details}>New Season 5 Just flow in <br /> Watch and Debate</p>
                <div className={classes.seasons}>
                    <NavLink>Season 1</NavLink>
                    <NavLink>Season 2</NavLink>
                    <NavLink>Season 3</NavLink>
                    <NavLink>Season 4</NavLink>
                    <NavLink>Season 5</NavLink>
                </div>
                <div className={classes.episodes}>
                    {episodes.map(episode => <div className={classes.episode} key={episode.id}>
                        <Card {...episode} titleColor='white' />
                    </div>)}

                </div>
            </div>

        </div >
    )
}

export default ShowPoster