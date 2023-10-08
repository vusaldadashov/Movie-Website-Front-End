import React from "react"
import { NavLink } from "react-router-dom";
import classes from './Card.module.css'
function Card(params) {
    const details = params.episode === undefined ? params.type.toString(' '): params.episode;
    return (
            <NavLink className={classes.link} to={`${params.link_to}${params.id}`}>
            <div className={classes.image}>
                <img src={params.imageUrl} alt="alt" />
            </div>
            <div className={classes.details_container}>
                <p className={classes.details} style={{ color: params.titleColor }}>{details}</p>
                <p className={classes.title} style={{ color: params.titleColor }}>{params.title}</p>
            </div>
            </NavLink>
    )
}

export default Card