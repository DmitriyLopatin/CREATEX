import './Header.scss'
import React from 'react';
import logo from './logo.svg';
import { Button } from '../UI/button/Button';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { NavLink} from 'react-router-dom';




export default function Header() {
    let [qwer, setQwer] = useState('navbar')
    // window.addEventListener('scroll', () => {
    //     // console.log(window.scrollY)
    //     if (window.scrollY > 50) {
    //         setQwer('navbar scroll')
    //     } else if (window.scrollY == 0) {
    //         setQwer('navbar')
    //     }
    // })
    return (
        <header className='header'>
            <div className={qwer}>
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
                    <Button width = {206}>Get consultation</Button>
                    <div className='login'>
                        <a href="#">Log in /</a>
                        <a href="#"> Register</a>
                    </div>
                </div>
            </div>

        </header>
    )
}