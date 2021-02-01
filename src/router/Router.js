import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Signup from '../components/Signup'

const PublicRouter = () => (
    <Fragment>
        <BrowserRouter>
            <Header />
            <Switch>                
                <Route path='/' exact component={Dashboard} />   
                <Route path='/signup' exact component={Signup} />       
            </Switch>            
        </BrowserRouter>
    </Fragment>
)

export default PublicRouter