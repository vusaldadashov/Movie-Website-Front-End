import { useEffect, useState } from "react"
import { getRequest } from "../../../functions/request"
import ShowList from "./Partials/ShowList/ShowList"
import ShowCategories from "./Partials/Categories/ShowCategories"

const checkLettersOfShows = (title, letters) => {
    title = title.toLowerCase()
    for (let letter of letters) {
        if(title.includes(letter.toLowerCase())) return true
    }
    return false
}


function Shows(params) {
    const [shows, setShows] = useState([])
    const [filteredShows, setFilteredShows] = useState([...shows])
    const [isFiltering, setIsFiltering] = useState(false)
    useEffect(() => {
        getRequest('/getshows')
            .then(data => setShows(data))
    }, [])

    const getFilters = (filters) => {
        const {letters, ratings} = filters
        let tempShows = [...shows]
        if (letters.length) tempShows = tempShows.filter(show => checkLettersOfShows(show.title, letters))
        if (ratings.length) tempShows = tempShows.filter(show => ratings.includes(show.rating))
        setFilteredShows(tempShows)
        setIsFiltering(true)
    }
    return (
        <div className="container-fluid pt-4 pb-4">
            <div className="d-flex">
                <ShowCategories
                    shows={shows}
                    getShowsFilters={getFilters}
                />
                <ShowList shows={isFiltering ? filteredShows : shows} isFiltering={isFiltering} />
            </div>
        </div>
    )
}
export default Shows