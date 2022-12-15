import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import WorksPage from './Pages/WorksPage'

export default function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='' element={<HomePage />}> </Route>
                <Route path='/Works' element={<WorksPage />}> </Route>
            </Routes>
        </div>
    )
}