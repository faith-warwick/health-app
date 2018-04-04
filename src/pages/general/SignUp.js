import React, {Component} from 'react';
import '../css/landing/SignUp.css';
import {Link } from 'react-router-dom';
import shitcat from '../../images/shittycat.jpg';



class SignUp extends Component {
    render () {
        return (
            <body className='signUpBody'>
                <img src={shitcat} alt="small cat"/>
                <div className='signUpForm'>
                    <div className='title'>Get started with a free account!</div>
                    <p1> Create a free account to start building healthy habits today. Already have an account? <Link to='/SignIn'>Sign in here.</Link></p1> <br/> <br/>
                    <div className='forms'>
                        <form className='newUser'>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="bmd-label-floating">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                        <span className="bmd-help">We'll never share your email with anyone else.</span>
                                 </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1" className="bmd-label-floating">Username</label>
                                <input type="text" className="form-control" id="exampleInputUsername1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="bmd-label-floating">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                                <span className="bmd-help">Please use both upper-case and lower-case letters & at least 1 special character.</span>
                            </div>
                            <button type="submit" className="btn btn-raised btn-lg">Get Started</button>
                        </form>
                        <div>
                            <div>google</div><div>facebook</div></div>

                    </div>
                </div>
            </body>
        )
    }
}

export default SignUp;