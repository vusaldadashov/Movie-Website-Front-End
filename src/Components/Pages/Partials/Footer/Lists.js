import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Lists.module.css'


function Lists(params) {
    return (
        <div className={classes.lists_container}>
            <h5 className={classes.title}>{params.title}</h5>
            <div className={classes.container}>
                <ul className={classes.lists}>
                    {params.lists.map((listItem, index) => index < 5 && <li key={listItem.id}>
                        <Link to={listItem.to}>{listItem.title}</Link>
                    </li>
                    )}

                </ul>
                {params.lists.length > 5 && <ul className={classes.lists}>
                    {params.lists.map((listItem, index) => index > 4 && <li key={listItem.id}>
                        <Link to={listItem.to}>{listItem.title}</Link>
                    </li>
                    )}

                </ul>}
            </div>

        </div>
    )
}

export default Lists