import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'



const SignUp = () => {
    return (
              <div className='form-container'>
            <div className="">
                <form action="">
                <h3 className='form-title'>Sign Up</h3>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='enter your email'  required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password"  name="password " id="" placeholder='Password' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="conform-password" >Conform Password</label>
                    <input type="password"  name="password " id="" placeholder='conform-Password' required/>
                </div>
                    <input className='form-submit' type="submit" value="Sign Up"/>
                </form>
                <p> Already have an account ? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;