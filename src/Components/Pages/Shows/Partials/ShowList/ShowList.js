import { useEffect, useState } from 'react'
import Card from '../../../../Cards/Card'
import classes from './ShowList.module.css'
function ShowList(params) {
    const [shows, setShows] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState([])
    useEffect(() => {
        let pageNumbers = parseInt(params.shows.length / 30)
        if (params.shows.length % 30 !== 0) pageNumbers++
        setPages([...Array(pageNumbers)].map((_, index) => index + 1))
    }, [params.shows])

    useEffect(() => {
        setShows(params.shows.slice((page - 1) * 30, page * 30))
        return () => { }
    }, [page, params.shows])

    const nextPageHandler = () => {
        if (page === pages.length) return
        setPage(prev => prev + 1)
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}><p>Shows</p></div>
            <div className={classes.header}>

            </div>
            <div className={classes.shows}>
                    {shows.map(show => (
                        <div
                            className={classes.card}
                            key={show.id}
                        >
                            <Card {...show} titleColor='white' />
                        </div>
                    )
                    )}
                    {shows.length === 0 && params.isFiltering && <h3 className='text-light'>There is no show for this filter.</h3>}
            </div>
            <div className={classes.footer}>
                <div className={classes.footer_title}><p>Showing 1-30 of {params.shows.length} results</p></div>
                <div className={classes.footer_buttons}>
                    {pages.map(item => <button className={page === item ? classes.active : undefined} key={item} onClick={() => setPage(item)}>{item}</button>)}
                    <button onClick={nextPageHandler}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default ShowList