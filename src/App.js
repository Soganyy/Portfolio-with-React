import React from 'react'
import './App.css'
import FirstInfo from './components/FirstInfo/FirstInfo'
import Works from './components/Works/Works'

export default function App() {
    return (
        <div className='app'>
            <FirstInfo />
            <Works />
        </div>
    )
}