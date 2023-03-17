import React, { useState } from 'react'
import Card from '../../../../Cards/Card'
import classes from './Slider.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
function Slider(params) {
    const [slides, setSlides] = useState(params.shows.map((show, index) => index * 100))
    const prevControl = () => {
        if (slides[0] === 0) return
        setSlides(slides.map(slide => slide + 100))
    }
    const nextControl = () => {
        if (slides[slides.length - 1] === 0) return
        setSlides(slides.map(slide => slide - 100))
    }
    return (
        <div className={classes.carousel}>
            <div className={classes.slides} style={{height: params.cardHeight}} >
                {slides.map((left, index) =>
                    <div className={classes.slide} style={{ left: left + '%', height: params.cardHeight }} key={index}>
                        <div className={classes.control1} onClick={prevControl}></div>
                        <div className={classes.control2} onClick={nextControl}></div>
                        <Card {...params.shows[index]} titleColor={params.titleColor} />
                    </div>)}
            </div>
            <div className={classes.buttons}>
                <button style={{ color: params.titleColor }} onClick={prevControl} ><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
                <button style={{ color: params.titleColor }} onClick={nextControl} ><FontAwesomeIcon icon={faCircleArrowRight} /></button>
            </div>
        </div>
    )
}


export default Slider