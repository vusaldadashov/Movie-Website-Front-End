import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
function Menu(params) {
    const [showSign, setShowSign] = useState({
        signIn: false,
        signUp: false
    })
    const signHandlerClose =() => {
        setShowSign({signIn: false, signUp: false})
        document.getElementById('body').style.overflow = 'auto'
    }
    const signInHandler = () => {
        setShowSign({signIn: true, signUp: false})
        document.getElementById('body').style.overflow = 'hidden'
    }
    const signUpHandler = () => {
        setShowSign({signIn: false, signUp: true})
    }
    return (
        <>
        {(showSign.signIn || showSign.signUp) && <div className={classes.backward}></div>}
        <div>
            {showSign.signIn && <div className={classes.sign}>
                <button className='btn bg-white p-0 shadow-outline-none' onClick={signHandlerClose}><FontAwesomeIcon icon={faXmark} /></button>
                <h6 className='text-center'>Sign In</h6>
                <form >
                    <div className='form-group'>
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control' name='email' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Password</label>
                        <input type="password" className='form-control' name='password' />
                    </div>
                    <button className='btn btn-outline-primary' type='submit'>Sign In</button>
                    <button className='btn' onClick={signUpHandler}>Sign Up</button>
                </form>
            </div>}
            {showSign.signUp && <div className={classes.sign}>
            <button className='btn bg-white p-0 shadow-outline-none' onClick={signHandlerClose}><FontAwesomeIcon icon={faXmark} /></button>
            <h6 className='text-center'>Sign Up</h6>
                <form  >
                <div className='form-group'>
                        <label className='form-label'>Full Name</label>
                        <input type="text" className='form-control' name='fullname' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Number</label>
                        <input type="text" className='form-control' name='number' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Email</label>
                        <input type="text" className='form-control' name='email' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Password</label>
                        <input type="password" className='form-control' name='password' />
                    </div>
                    <button className='btn btn-outline-primary' type='submit'>Sign Up</button>
                    <button className='btn bg-white' onClick={signInHandler} >Sign In</button>
                </form>
            </div>}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand mr-4" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto pl-4">
                        <li className="nav-item mr-4">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item mr-4">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shows">Tv Shows</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div className='nav-item'>
                        <NavLink className="nav-link" >Upload</NavLink>
                    </div>
                    <div className='nav-item'>
                        <button className="btn bg-white" onClick={signInHandler} >Profile</button>
                    </div>

                </div>
            </nav>
        </div>
        </>
    )
}

export default Menu