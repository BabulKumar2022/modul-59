import React, { useState } from 'react';

import{getAuth} from "firebase/auth"
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
// import app from '../../firebase.init';
import './SignUp.css'

// const auth = getAuth(app)
const auth = getAuth(app)

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailBlur = (event) =>{
            setEmail(event.target.value)
    };

    const handlePasswordBlur =(event) =>{
        setPassword(event.target.value);
    };
    const handleConformPasswordBlur =(event) =>{
        setConformPassword(event.target.value);
    }
    const handleCreateUser= (event)=>{
        event.preventDefault();
       if(password !== conformPassword){
           setError("Your tow password dit not match");
           return;
       }
        
       
    }
    return (
              <div className='form-container'>
            <div className="">
            <h3 className='form-title'>Sign Up</h3>
                <form onSubmit={handleCreateUser}>
                
                    <div className="input-group">
                        <label onBlur={handleEmailBlur} htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='enter your email'  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input onBlur={handlePasswordBlur} type="password"  name="password " id="" placeholder='Password' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="conform-password" >Conform Password</label>
                        <input onBlur={handleConformPasswordBlur} type="password"  name="password " id="" placeholder='conform-Password' required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up"/>
                </form>
                <p> Already have an account ? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;