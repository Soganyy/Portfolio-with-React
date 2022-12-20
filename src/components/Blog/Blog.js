import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styleFirst from './Blog.json'
import styleSecond from './BlogDark.json'

import "./Blog.css"

export default function Blog() {

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
            <div style={style[0].blogHeading}><p style={style[0].blogText}><Link to='Blogs' style={{ textDecoration: 'none' }}>Blog</Link></p></div>
            <div style={style[0].blogSection}>
                <div style={style[0].textFlex} >
                    <div style={style[0].firstTextSection}>
                        <h2 style={style[0].header}>Cras a nulla enim </h2> 
                        <div style={style[0].paragDiv} className="paragHoverEffect"><p style={style[0].parag}> <Link to='Blogs/BlogFirst' style={style[0].linkStyle}> consectetur adipiscing elit. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hendNam ut ligula odio....</Link></p></div>
                    </div>
                    <span style={style[0].span}> </span>
                    <div style={style[0].secondTextSection}>
                        <h2 style={style[0].header}>Lorem ipsum dolor </h2> 
                        <div style={style[0].paragDiv} className="paragHoverEffect"><p style={style[0].parag}> <Link to='Blogs/BlogSecond' style={style[0].linkStyle}> Pellentesque et mauris volutpat. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hend...</Link></p></div>
                    </div>
                </div>
            </div>
        </>
    )
}