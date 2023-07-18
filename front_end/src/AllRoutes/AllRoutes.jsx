import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Books from '../pages/Books'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Signup/>}/>
                <Route path='/' element={<Books/>}/>

            </Routes>

        </div>
    )
}

export default AllRoutes