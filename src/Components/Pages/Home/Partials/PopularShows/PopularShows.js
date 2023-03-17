import Card from '../../../../Cards/Card'
import classes from './PopularShows.module.css'

const popShows = [
    { id: '1', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show1.jpg'},
    { id: '2', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show2.jpg'},
    { id: '3', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show3.jpg'},
    { id: '4', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show4.jpg'},
    { id: '5', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show5.jpg'},
    { id: '6', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show6.jpg'},
    { id: '7', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show7.jpg'},
    { id: '8', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show8.jpg'},
    { id: '9', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'] , imageUrl: '/show9.jpg'},
    { id: '10', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/show10.jpg' }
]


function PopularShows(params) {
    return (<div>
        <div className={classes.main_container}>
            <div className='container-fluid'>
                <div className={classes.movies}>
                    <div className={classes.show_movies}>
                        <h2>Popular Tv Series Right Now</h2>
                    </div>
                    {popShows.map((show, index) => <div className={classes.card} key={show.id}>
                        <Card {...show} titleColor='black'/>
                    </div>)}
                </div>
               
            </div>

        </div>
    </div>)
}


export default PopularShows