import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CookPage from '../cook-WebPage/components/pages/home/CookPage'




function RoutePath() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/react-webPage'  element={<CookPage/>}/>   
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RoutePath




