import React from 'react'
import Lists from './Lists'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
const movieCategories = [
    { id: '1', title: 'Action', to: '' },
    { id: '2', title: 'Adventure', to: '' },
    { id: '3', title: 'Animation', to: '' },
    { id: '4', title: 'Comedy', to: '' },
    { id: '5', title: 'Crime', to: '' },
    { id: '6', title: 'Drama', to: '' },
    { id: '7', title: 'Fantacy', to: '' },
    { id: '8', title: 'Horror', to: '' },
    { id: '9', title: 'Mystery', to: '' },
    { id: '10', title: 'Romance', to: '' }
]

const showCategories = [
    { id: '1', title: 'Action', to: '' },
    { id: '2', title: 'Adventure', to: '' },
    { id: '3', title: 'Animation', to: '' },
    { id: '4', title: 'Comedy', to: '' },
    { id: '5', title: 'Crime', to: '' },
    { id: '6', title: 'Drama', to: '' },
    { id: '7', title: 'Fantacy', to: '' },
    { id: '8', title: 'Horror', to: '' },
    { id: '9', title: 'Mystery', to: '' },
    { id: '10', title: 'Romance', to: '' }
]

const supportCategories = [
    {id: '1', title: 'My Account', to: ''},
    {id: '2', title: 'FAQ', to: ''},
    {id: '3', title: 'Watch on TV', to: ''},
    {id: '4', title: 'Help Center', to: ''},
    {id: '5', title: 'Contact', to: ''}
]


function Footer(params) {
    return (
        <div className={classes.footer}>
            <div className='container-fluid'>
            <div className={classes.footer_header}>
                <div className={classes.logo}>vodi</div>
                <div className={classes.social_links}>
                    <Link to='' >Facebook</Link>
                    <Link to='' >Twitter</Link>
                    <Link to='' >Google+</Link>
                    <Link to='' >Vimeo</Link>
                    <Link to='' >RSS</Link>
                </div>
            </div>
            <div className={classes.lists}>
                <Lists lists={movieCategories} title="Movie Categories" />
                <Lists lists={showCategories} title="Tv Series" />
                <div className={classes.support}>
                    <Lists lists={supportCategories} title="Support" />
                </div>
            </div>
                
            <div className={classes.creator}>
                <p>Copyright 2020. All rights reserver. Created by Vusal Dadashov</p>
                <p>Privacy Policy</p>
            </div>
            </div>
        </div>
    )
}


export default Footer