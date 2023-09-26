import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import '../asset/css/style.css'
import CookPage from '../components/pages/home/CookPage'

function RoutePath() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}/>
                     <Route path='/' index element={<CookPage/>}/>   
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RoutePath