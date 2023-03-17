
import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ViewAllButton.module.css'

function ViewAllButton(params) {
    return (
        <Link className={classes.button}
            to={params.to}
            onClick={params.onClick} >{params.children}</Link>
    )
}


export default ViewAllButton