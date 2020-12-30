import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Goals from './Goals';
import Passport from './Paspport';
import NotFound from './NotFound';
import App from '../App';



const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/tester" component={App}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/goals" component={Goals}/>
         {/* <Route path="/goals/:goalId" component={} /> */}
        <Route exact path="/passport" component={Passport}/>
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>

)

export default Router;