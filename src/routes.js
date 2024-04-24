import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AboutMe from './Contairner/AboutMe'
import Contact from './Contairner/Contact'
import Home from './Contairner/Home'
import Projects from './Contairner/Projects'

    function AppRoutes() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={< Home />} />
                    <Route path='/sobremim' element={< AboutMe />} />
                    <Route path='/contato' element={< Contact />} />
                    <Route path='/projetos' element={< Projects />} />
                </Routes>
            </Router>
        )
    }

export default AppRoutes