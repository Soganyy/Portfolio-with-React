import React from 'react'
import './Works.css'
import Converter from './PhotosOfWorks/Converter.png'
import Portfolio from './PhotosOfWorks/Portfolio.png'
import ToDo from './PhotosOfWorks/To-Do.png'
import ASOIUDesign from './PhotosOfWorks/Asoiu--test.png'
import Projectbootcamp from './PhotosOfWorks/Project-bootcamp.png'
import Design2 from './PhotosOfWorks/Desgin.png'
import { Link } from 'react-router-dom'


export default function Works() {
    return (
        <>
            <div className="worksHeading"><p className="worksText"><Link to='Works'>Works</Link></p></div>
            <div className="worksSection">
                <div className='alignElements'>
                    <span className="wrapElementBackground">
                        <img className='images' src={Converter} alt='Online Currency Converter' />
                        <div className='rectOnHover'><p className='centeringText'><a href='https://github.com/Soganyy/TaskAPI.git'>Online Currency Converter</a></p></div>
                    </span>
                    <span className="wrapElementBackground">
                        <img className='images' src={Portfolio} alt='Portfolio' />
                        <div className='rectOnHover'><p className='centeringText'><a href='https://github.com/Soganyy/PortfolioTask.git'>Portfolio</a></p></div>
                    </span>
                    <span className="wrapElementBackground">
                        <img className='images' src={ToDo} alt='Task organizer' />
                        <div className='rectOnHover'><p className='centeringText'><a href='https://github.com/Soganyy/TaskList.git'>Task Organizer</a></p></div>
                    </span>
                    <span className="wrapElementBackground">
                        <img className='images' src={ASOIUDesign} alt='Design for contest' />
                        <div className='rectOnHover'><p className='centeringText'><a href='https://www.figma.com/file/IyPaNGV9jE6DPZZFnDFxwT/ASOIU?t=HamWqPfKU6pq2r91-6'>Design from <br/>contest</a></p></div>
                    </span>
                    <span className="wrapElementBackground">
                        <img className='images' src={Projectbootcamp} alt='Project done on bootcamp' />
                        <div className='rectOnHover'><p className='centeringText'><a href='https://github.com/Soganyy/FirstProject.git'>Project from <br/>bootcamp</a></p></div>
                    </span>
                    <span className="wrapElementBackground">
                        <img className='images' src={Design2} alt='Design' />
                        <div className='rectOnHover'><p className='centeringText'><a href='https://www.figma.com/file/EddicR6AknpX2kotgii0PK/Barety?t=HamWqPfKU6pq2r91-6'>Design for <br/>interest</a></p></div>
                    </span>
                </div>
            </div>
        </>
    )
}