import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../Pages/HomePage'
import WorksPage from '../Pages/WorksPage/WorksPage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import BlogMain from '../Pages/Blog/BlogMain/BlogMain'
import BlogFirst from '../Pages/Blog/BlogFirstText'
import BlogSecond from '../Pages/Blog/BlogSecondText'

export default function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='' element={<HomePage />}> </Route>
                <Route path='/Works' element={<WorksPage />}> </Route>
                <Route path='/Blogs' element={<BlogMain />}> </Route>
                <Route path='/About' element={<AboutPage />}> </Route>
                <Route path='/Contact' element={<ContactPage />}> </Route>

                <Route path='Blogs/BlogFirst' element={<BlogFirst />}> </Route>
                <Route path='Blogs/BlogSecond' element={<BlogSecond />}> </Route>
            </Routes>
        </div>
    )
}