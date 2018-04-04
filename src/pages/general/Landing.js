import React, {Component} from 'react';
import {
    BrowserRouter,
    Link
} from 'react-router-dom';
import '../css/landing/landing.css';
import shittycat from '../../images/shittycat2.png';
import AboutUs from "./About";


class LandingPage extends Component {
    render () {
        return (
    <body>
        <div className='landingBody'>
            <div className='topright'>
                <Link to='/SignUp'> Sign Up </Link> &emsp; | &emsp; <Link to='/SignIn'>Sign In </Link>
            </div>
            <div className='main'>
                <svg viewBox="0 0 500 500">
                    <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text width="500">
                        <textPath xlinkHref="#curve">
                            Business Name goes here!
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
        <AboutUs/>
    </body>
        )
    }
}

export default LandingPage;