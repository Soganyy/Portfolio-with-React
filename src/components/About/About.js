import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styleFirst from './About.json'
import styleSecond from './AboutDark.json'

export default function About() {

    const [style, setStyle] = useState(styleFirst)

    const storeData = useSelector(function (state) {
        return state;
    })

    useEffect(() => {
        if(storeData.themeReverse === 0) {
            setStyle(styleSecond)
        } else {
            setStyle(styleFirst)
        }
    })

    return (
        <>
            <div style={style[0].aboutHeading}><p style={style[0].aboutText}><Link to='About'>About</Link></p></div>
            <div style={style[0].aboutSection}>

            </div>
        </>
    )
}