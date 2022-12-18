import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styleFirst from './Contact.json'
import styleSecond from './ContactDark.json'

export default function Contact() {

    const [style, setStyle] = useState(styleFirst)

    const storeData = useSelector(function (state) {
        return state;
    })

    useEffect(() => {
        if(storeData.themeReverse === 0) {
            setStyle(styleFirst)
        } else {
            setStyle(styleSecond)
        }
    })

    return (
        <>
            <div style={style[0].contactHeading}><p style={style[0].contactText}><Link to='Contact'>Contact</Link></p></div>
            <div style={style[0].contactSection}>

            </div>
        </>
    )
}