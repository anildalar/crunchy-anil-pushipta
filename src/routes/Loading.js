import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nopage from '../pages/Nopage'
import Home from '../pages/Home'
import Login from '../pages/Login'
function Loading() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Loading
