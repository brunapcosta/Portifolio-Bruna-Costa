import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AboutMe from './Contairner/AboutMe'
import Contact from './Contairner/Contact'
import Home from './Contairner/Home'
import Projects from './Contairner/Projects'

    function Routes() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/sobremim' component={AboutMe} />
                    <Route exact path='/contato' component={Contact} />
                    <Route exact path='/projetos' component={Projects} />
                </Switch>
            </Router>
        )
    }

export default Routes