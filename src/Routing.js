import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import './App.css';


import LandingPage from './pages/general/Landing';
import SignUp from './pages/general/SignUp';
import SignIn from './pages/general/SignIn';
import AboutUs from './pages/general/About';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/About" component={AboutUs}/>
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Router>

)

export default Routes;
