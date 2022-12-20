import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styleFirst from './About.json'
import styleSecond from './AboutDark.json'
import './About.css'

export default function About() {

    const [style, setStyle] = useState(styleFirst)

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
        <>
            <div style={style[0].aboutHeading}><p style={style[0].aboutText}><Link to='About' style={{ textDecoration: 'none' }}>About</Link></p></div>
            <div style={style[0].aboutSection}>
                <p style={style[0].paraggg} className="paragOnAbout"> <Link to='About' style={style[0].linkStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hendrerit metus facilisis at. Donec posuere, justo molestie rutrum rhoncus, lacus eros aliquet nisl, a dapibus nibh massa pretium lacus....</Link></p>
            </div>
        </>
    )
}