import './Header.scss'
import React from 'react';
import logo from './logo.svg';
import { Button } from '../button/Button.js';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Link} from 'react-router-dom';




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
                    <Link to="/#"><img src={logo} alt="createX" /></Link>
                    <ul className='nav_links'>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contacts</a></li>
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