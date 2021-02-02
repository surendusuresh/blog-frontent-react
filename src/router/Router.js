import React, { Fragment } from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Footer from '../components/Footer'

const PublicRouter = () => (
    <Fragment>
        <BrowserRouter>
            <Header />
            <Switch>                
                <Route path='/' exact component={Dashboard} />   
                <Route path='/signup' exact component={Signup} />  
                <Route path='/signin' exact component={Signin} />       
            </Switch>      
            <Footer />      
        </BrowserRouter>
    </Fragment>
)

export default PublicRouter