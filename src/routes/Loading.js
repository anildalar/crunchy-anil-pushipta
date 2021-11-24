import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Nopage from '../pages/Nopage'
import Home from '../pages/Home'
function Loading() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home/>} />
                <Route  path="*" element={ <Nopage/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Loading
