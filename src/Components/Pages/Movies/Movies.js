import Categories from "./partials/Categories/Categories"
import MovieList from "./partials/MovieList/MovieList"

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
    { id: '12', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img12.jpg' },
    { id: '13', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img1.jpg' },
    { id: '14', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img2.jpg' },
    { id: '15', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img3.jpg' },
    { id: '16', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img4.jpg' },
    { id: '17', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img5.jpg' },
    { id: '18', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img6.jpg' },
    { id: '19', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img7.jpg' },
    { id: '20', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img8.jpg' },
    { id: '21', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img9.jpg' },
    { id: '22', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img10.jpg' },
    { id: '23', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img11.jpg' },
    { id: '24', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img12.jpg' },
    { id: '25', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img1.jpg' },
    { id: '26', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img2.jpg' },
    { id: '27', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img3.jpg' },
    { id: '28', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img4.jpg' },
    { id: '29', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img5.jpg' },
    { id: '30', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img6.jpg' },
    { id: '31', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img7.jpg' },
    { id: '32', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img8.jpg' },
    { id: '33', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img9.jpg' },
    { id: '34', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img10.jpg' },
    { id: '35', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img11.jpg' },
    { id: '36', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img12.jpg' },
    { id: '37', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img1.jpg' },
    { id: '38', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img2.jpg' },
    { id: '39', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img3.jpg' },
    { id: '40', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img4.jpg' },
    { id: '41', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img5.jpg' },
    { id: '42', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img6.jpg' },
    { id: '43', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img7.jpg' },
    { id: '44', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img8.jpg' },
    { id: '45', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img9.jpg' },
    { id: '46', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img10.jpg' },
    { id: '47', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img11.jpg' },
    { id: '48', title: 'Delta Bravo', year: '2020', type: ['Action', 'Comedy', 'Mystery'], imageUrl: '/img12.jpg' }
  ]
  


function Movies(params) {
    return (
        <div className="container-fluid pt-4">
            <div className="d-flex">
                <Categories movies={movies.slice(0,5)} />
                <MovieList movies={movies} />
            </div>

        </div>
    )
}
export default Movies