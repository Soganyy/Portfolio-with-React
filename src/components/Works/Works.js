import React, { useState, useEffect } from 'react'
import Converter from './PhotosOfWorks/Converter.png'
import Portfolio from './PhotosOfWorks/Portfolio.png'
import ToDo from './PhotosOfWorks/To-Do.png'
import ASOIUDesign from './PhotosOfWorks/Asoiu--test.png'
import Projectbootcamp from './PhotosOfWorks/Project-bootcamp.png'
import Design2 from './PhotosOfWorks/Desgin.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styleFirst from './Works.json'
import styleSecond from './WorksDark.json'
import './HoverEffect.css'


export default function Works() {

    const [style, setStyle] = useState(styleFirst);

    const storeData = useSelector(function (state) {
        return state;
    })

    useEffect(() => {
        if (storeData.themeReverse === 0) {
            setStyle(styleSecond)
        } else {
            setStyle(styleFirst)
        }
    })

    return (
        <div className="main">
            <div style={style[0].worksHeading}><p style={style[0].worksText}><Link to='Works' style={{ textDecoration: 'none' }}>Works</Link></p></div>
            <div style={style[0].worksSection}>
                <div style={style[0].alignElements}>
                    <span style={style[0].wrapElementBackground}>
                        <a href='https://github.com/Soganyy/TaskAPI' target="_blank"><img style={style[0].images} className="images" src={Converter} alt='Online Currency Converter' /></a>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <a href='https://github.com/Soganyy/PortfolioTask.git' target="_blank"><img style={style[0].images} className="images" src={Portfolio} alt='Portfolio' /></a>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <a href='https://github.com/Soganyy/TaskList.git' target="_blank"><img style={style[0].images} className="images" src={ToDo} alt='Task organizer' /></a>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <a href='https://www.figma.com/file/IyPaNGV9jE6DPZZFnDFxwT/ASOIU?t=HamWqPfKU6pq2r91-6' target="_blank"><img style={style[0].images} className="images" src={ASOIUDesign} alt='Design for contest' /></a>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <a href='https://github.com/Soganyy/FirstProject.git' target="_blank"><img style={style[0].images} className="images" src={Projectbootcamp} alt='Project done on bootcamp' /></a>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <a href='https://www.figma.com/file/EddicR6AknpX2kotgii0PK/Barety?t=HamWqPfKU6pq2r91-6' target="_blank"><img style={style[0].images} className="images" src={Design2} alt='Design' /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}