import './Header.scss'
import React from 'react';
import logo from './logo.svg';
import { Button } from '../UI/button/Button';
import { NavLink } from 'react-router-dom';
import { SignIn, SignUp } from '../popups/PopupModuls';
import { useState } from 'react';


export default function Header() {

    let [displayModeSignIn, setDisplayModeSignIn] = useState('none') // state to set  display mode for SignIn form
    let [displayModeSignUp, setDisplayModeSignUp] = useState('none') // state to set  display mode for SignUp form

    return (
        <>
            <header className='header'>
                <div className='navbar'>
                    <div className='left'>
                        <NavLink to="/#"><img src={logo} alt="createX" /></NavLink>
                        <ul className='nav_links'>
                            <li><NavLink to='/about'>About Us</NavLink></li>
                            <li><NavLink to="/courses">Courses</NavLink></li>
                            <li><NavLink to="/events">Events</NavLink></li>
                            <li><NavLink to="/blogs">Blog</NavLink></li>
                            <li><NavLink to="/contacts">Contacts</NavLink></li>
                        </ul>
                    </div>
                    <div className='right'>
                        <Button width={206}>Get consultation</Button>
                        <div className='login'>
                            <span onClick={() => setDisplayModeSignIn('flex')}>Log in /</span>
                            <span onClick={() => setDisplayModeSignUp('flex')}> Register</span>
                        </div>
                    </div>
                </div>
            </header>
            <SignIn
                open={displayModeSignIn} // props to set initial display mode 
                close={() => setDisplayModeSignIn('none')} // props to set display mode "none" to close form
                openSignUp={() => setDisplayModeSignUp('flex')}>
            </SignIn>
            <SignUp
                open={displayModeSignUp} // props to set initial display mode 
                close={() => setDisplayModeSignUp('none')} // props to set display mode "none" to close form
                openSignIn={() => setDisplayModeSignIn('flex')}>
            </SignUp>
        </>
    )
}