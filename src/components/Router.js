import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Goals from './Goals';
import Passport from './Paspport';
import NotFound from './NotFound';



const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/goals" component={Goals}/>
        <Route exact path="/passport" component={Passport}/>
        {/* <Route path="/store/:storeId" component={} /> */}
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>

)

export default Router;