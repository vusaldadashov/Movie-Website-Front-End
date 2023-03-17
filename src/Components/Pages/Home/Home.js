import React from 'react'

import Poster from './Partials/Poster/Poster'
import PopularMovies from './Partials/PopularMovies/PopularMovies'
import SpecialMovies from './Partials/SpecialMovies/SpecialMovies'
import ShowPoster from './Partials/ShowPoster/ShowPoster'
import PopularShows from './Partials/PopularShows/PopularShows'
import NewestMovies from './Partials/NewestMovies/NewestMovies'

const movies = [
  { id: '1', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img1.jpg' },
  { id: '2', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img2.jpg' },
  { id: '3', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img3.jpg' },
  { id: '4', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img4.jpg' },
  { id: '5', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img5.jpg' },
  { id: '6', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img6.jpg' },
  { id: '7', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img7.jpg' },
  { id: '8', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img8.jpg' },
  { id: '9', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img9.jpg' },
  { id: '10', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img10.jpg' },
  { id: '11', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img11.jpg' },
  { id: '12', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img12.jpg' }
]



function Home(params) {
    return (
        <div>
          <Poster imageUrl='/poster1.jpg'/>
          <PopularMovies movies={movies} />
          <SpecialMovies backColor='white' controlPos='end' cardLength='6' movies={movies} />
          <Poster imageUrl='/poster2.jpg' />
          <SpecialMovies backColor={'transparent'} controlPos='end' cardLength='6' movies={movies} />
          <SpecialMovies backColor={'black'} controlPos='start' cardLength='6' movies={movies} />
          <ShowPoster imageUrl='/poster3.jpg' />
          <PopularShows />
          <NewestMovies />
        </div>
    )
}


export default Home