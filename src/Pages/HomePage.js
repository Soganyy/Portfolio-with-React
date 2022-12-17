import React from 'react'
import FirstInfo from '../components/FirstInfo/FirstInfo'
import Works from '../components/Works/Works'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

export default function HomePage() {
    return (
        <>
            <FirstInfo />
            <Works />
            <About />
            <Contact />
        </>
    )
}