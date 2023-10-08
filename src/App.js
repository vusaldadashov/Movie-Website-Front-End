import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu/Menu';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Movie from './Components/Pages/Movie/Movie';
import Movies from './Components/Pages/Movies/Movies';
import Footer from './Components/Pages/Partials/Footer/Footer';
import Shows from './Components/Pages/Shows/Shows';
import TvShow from './Components/Pages/TvShow/TvShow';


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/shows' element={<Shows />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/movies/movie/:id' element={<Movie />} />
        <Route path='/tvshow/:id' element={<TvShow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
