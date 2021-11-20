import React from 'react'
import { Route } from 'react-router'
import Nopage from '../pages/Nopage';
const NoPage=()=>{
    return (
        <>
            <Route path="*" component={Nopage}></Route>
        </>
    )
}

export default NoPage
