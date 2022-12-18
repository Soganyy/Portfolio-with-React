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

    const theme = storeData.themeReverse

    useEffect(() => {
        if (storeData.themeReverse === 0) {
            setStyle(styleFirst)
        } else {
            setStyle(styleSecond)
        }
    }, [theme])

    return (
        <>
            <div style={style[0].worksHeading}><p style={style[0].worksText}><Link to='Works'>Works</Link></p></div>
            <div style={style[0].worksSection}>
                <div style={style[0].alignElements}>
                    <span style={style[0].wrapElementBackground}>
                        <img style={style[0].images} className="images" src={Converter} alt='Online Currency Converter' />
                        <div style={style[0].rectOnHover} className="rectOnHover"><p style={style[0].centeringText}><a href='https://github.com/Soganyy/TaskAPI.git'>Online Currency Converter</a></p></div>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <img style={style[0].images} className="images" src={Portfolio} alt='Portfolio' />
                        <div style={style[0].rectOnHover} className="rectOnHover"><p style={style[0].centeringText}><a href='https://github.com/Soganyy/PortfolioTask.git'>Portfolio</a></p></div>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <img style={style[0].images} className="images" src={ToDo} alt='Task organizer' />
                        <div style={style[0].rectOnHover} className="rectOnHover"><p style={style[0].centeringText}><a href='https://github.com/Soganyy/TaskList.git'>Task Organizer</a></p></div>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <img style={style[0].images} className="images" src={ASOIUDesign} alt='Design for contest' />
                        <div style={style[0].rectOnHover} className="rectOnHover"><p style={style[0].centeringText}><a href='https://www.figma.com/file/IyPaNGV9jE6DPZZFnDFxwT/ASOIU?t=HamWqPfKU6pq2r91-6'>Design from <br />contest</a></p></div>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <img style={style[0].images} className="images" src={Projectbootcamp} alt='Project done on bootcamp' />
                        <div style={style[0].rectOnHover} className="rectOnHover"><p style={style[0].centeringText}><a href='https://github.com/Soganyy/FirstProject.git'>Project from <br />bootcamp</a></p></div>
                    </span>
                    <span style={style[0].wrapElementBackground}>
                        <img style={style[0].images} className="images" src={Design2} alt='Design' />
                        <div style={style[0].rectOnHover} className="rectOnHover"><p style={style[0].centeringText}><a href='https://www.figma.com/file/EddicR6AknpX2kotgii0PK/Barety?t=HamWqPfKU6pq2r91-6'>Design for <br />interest</a></p></div>
                    </span>
                </div>
            </div>
        </>
    )
}