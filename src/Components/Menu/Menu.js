import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getRequest, postRequest } from '../../functions/request'
function Menu(params) {
    const [showSign, setShowSign] = useState({ signIn: false, signUp: false })
    const [searchs, setSearchs] = useState([])
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    useEffect(() => {
        const url = "/getSessions"
        const params = {}
        getRequest(url, params)
            .then(res => dispatch(
                { type: 'save_session', session: res }
            ))
    }, [dispatch])

    const signHandlerClose = () => {
        setShowSign({ signIn: false, signUp: false })
        document.body.style.overflowY = 'unset'
        document.body.style.paddingRight = '0px';
    }
    const signInHandler = () => {
        setShowSign({ signIn: true, signUp: false })
        document.body.style.overflowY = 'hidden'
        document.body.style.paddingRight = '17px';
    }
    const signUpHandler = () => {
        setShowSign({ signIn: false, signUp: true })
    }
    const searchInputHandler = (e) => {
        if (e.key === 'Enter') {
            fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=f388d4e6`)
                .then(res => { console.log(res); return res.json() })
                .then(data => {
                    setSearchs(data.Search)
                })
        }

    }
    const loginFormHandler = (e) => {
        e.preventDefault()
        if (isLoggedIn) {
            return
        }
        const data = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        postRequest("/login", data)
            .then(response => {
                console.log(response);
                if (response.isLoggedIn) {
                    dispatch({
                        type: "save_session",
                        session: {
                            isLoggedIn: response.isLoggedIn,
                            user: response.user
                        }
                    })
                }
                signHandlerClose()
            })
    }
    const signupFormHandler = (e) => {
        e.preventDefault()
        const url = '/signup'
        const data = {
            fullname: e.target[0].value,
            email: e.target[1].value,
            number: e.target[2].value,
            password: e.target[3].value
        }
        postRequest(url, data).then(response => {
            console.log(response)
            signHandlerClose()
        })
    }
    const logoutHandler = () => {
        postRequest('/logout', {}).then(res => {
            if (res.status === 'ok') {
                dispatch({ type: "reset_login" })
            }
            console.log(res);
        })
    }
    return (
        <>
            {(showSign.signIn || showSign.signUp) && <div className={classes.backward}></div>}
            <div onClick={() => { setSearchs([]); }}>
                {showSign.signIn && <div className={classes.sign}>
                    <button className='btn bg-white p-0 shadow-outline-none' onClick={signHandlerClose}><FontAwesomeIcon icon={faXmark} /></button>
                    <h6 className='text-center'>Sign In</h6>
                    <form onSubmit={loginFormHandler}>
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
                    <form onSubmit={signupFormHandler} >
                        <div className='form-group'>
                            <label className='form-label'>Full Name</label>
                            <input type="text" className='form-control' name='fullname' />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Email</label>
                            <input type="text" className='form-control' name='email' />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Number</label>
                            <input type="text" className='form-control' name='number' />
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
                        <form className={`form-inline my-2 my-lg-0 ${classes.form}`} onSubmit={(e) => e.preventDefault()}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onKeyDown={searchInputHandler} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            {searchs.length > 0 && <div className={classes.searchs}>
                                {searchs.map((search, index) => index < 5 && <div key={search.imdbID}>
                                    <div className={classes.image}><img src={search.Poster} alt="" /></div>
                                </div>)}
                            </div>}
                        </form>
                        <div className='nav-item'>
                            <NavLink className="nav-link" >Upload</NavLink>
                        </div>
                        <div className='nav-item'>
                            {!isLoggedIn && <button className="btn bg-white" onClick={signInHandler} >Profile</button>}
                            {isLoggedIn && <button className="btn bg-white" >{user.email}</button>}
                            {isLoggedIn && <button className='btn bg-white text-danger' onClick={logoutHandler}>Log out</button>}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Menu