import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import WorksPage from './Pages/WorksPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'

export default function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='' element={<HomePage />}> </Route>
                <Route path='/Works' element={<WorksPage />}> </Route>
                <Route path='/About' element={<AboutPage />}> </Route>
                <Route path='/Contact' element={<ContactPage />}> </Route>
            </Routes>
        </div>
    )
}