import React, { useState } from 'react'
import './Auth.css'
import download from '../../assets/download.png'
import AboutAuth from './AboutAuth'


const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }
    
    return (
        <section class='auth-section'>
            {isSignup && <AboutAuth/>}

            <div class='auth-container-2'>
                { ! isSignup && <img src={download} alt='stack overflow' width='150' className='login-logo'/>}
                <form >
                    {
                        isSignup && (
                        <label htmlFor= 'name'>
                            <h5>Display Name</h5>
                            <input type='text' id='name' name='name'></input>
                        </label>
                        )
                    }
                    <label htmlFor="email">
                        <h5>Email</h5>
                        <input type='email' name='email' id='email' />
                    </label>
                    <label htmlFor='password'>
                        <div style={{display: 'flex', justifyContent:'space-between'}}>
                            <h5>Password</h5>
                            { !isSignup && <p style={{color:'#007ac6', fontSize: '10px'}}>Forgot password?</p>}
                        </div>
                        <input type='password' name='password' id='password' />
                        { isSignup && <p style={{ color : '#666767', fontSize:'12px'}}>Note: Password must contain <br/>  atleast 8 characters. including <br/>1 letter and 1 number</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type='checkbox' id='check'/> 
                                <p style={{ color : '#666767', fontSize:'10px'}}>opt in to receive occasional product <br/> updates , user research invitations,<br/> company announcements and digests. </p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up' : 'Log In'}</button>
                    {
                        isSignup && (
                            <p style={{color: '#666767' , fontSize:'10px' }}>
                                By clicking "sign up", you agree to our <br/>
                                <span style={{color:'#007ac6'}}>terms & conditions of sevice</span>, <br/>
                                <span style={{color:'#007ac6'}}>privacy policy</span> and 
                                <span style={{color:'#007ac6'}}>cookie policy.</span> 
                            </p> 
                        )
                    }
                </form>
                <p>
                    { isSignup ? 'Already have an account ?' : 'Don\'t have an account ?' }
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? 'Login' : 'Sign Up' }</button>
                </p>
            </div>
        </section>
    )
}

export default Auth
