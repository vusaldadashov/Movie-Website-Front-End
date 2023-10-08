import { useState, useEffect } from 'react'
import Poster from './Partials/Poster/Poster'
import PopularMovies from './Partials/PopularMovies/PopularMovies'
import SpecialMovies from './Partials/SpecialMovies/SpecialMovies'
import ShowPoster from './Partials/ShowPoster/ShowPoster'
import PopularShows from './Partials/PopularShows/PopularShows'
import NewestMovies from './Partials/NewestMovies/NewestMovies'
import { getRequest } from '../../../functions/request'

function Home(params) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getRequest('/getmovies')
    .then(data => setMovies(data))
  }, [])
    return (
        <div>
          <Poster imageUrl='/poster1.jpg'/>
          <PopularMovies movies={movies}  />
          <SpecialMovies backColor='white' controlPos='end' movies={movies} />
          <Poster imageUrl='/poster2.jpg' />
          <SpecialMovies backColor={'transparent'} controlPos='end' movies={movies} />
          <SpecialMovies backColor={'black'} controlPos='start' movies={movies}/>
          <ShowPoster imageUrl='/poster3.jpg' />
          <PopularShows />
          <NewestMovies />
        </div>
    )
}


export default Home