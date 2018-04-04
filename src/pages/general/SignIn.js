import React, {Component} from 'react';
import '../css/landing/SignIn.css';
import {Link } from 'react-router-dom';

class SignIn extends Component {
    render () {
        return (
            <body className='signInBody'>
                <div className='signIn'>
                    <form action="#" className='signInForm'>
                        <div className="form-group2">
                            <label htmlFor="exampleInputUsername1" className="bmd-label-floating">Username</label>
                            <input type="text" className="form-control" id="exampleInputUsername1"/>
                        </div>
                        <div className="form-group2">
                            <label htmlFor="exampleInputPassword1" className="bmd-label-floating">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className='btnCont'>
                        <button type="submit" className="btn btn-raised btn-lg btn2">Sign In</button>
                        </div>
                    </form>
                    <br/>
                    <p>
                        Need to create an account? <Link to='/SignUp'>We got you.</Link>
                    </p>
                </div>
            </body>
        )
}
}

export default SignIn