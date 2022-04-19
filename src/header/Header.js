import './Header.scss'
import React from 'react';
import logo from './logo.svg';
import profile from './profile.svg';
import {Button}  from '../button/Button.js';
import {  useState } from 'react';


   
export default function Header() {
   let [qwer, setQwer] = useState('navbar')
    window.addEventListener('scroll',()=>{
        // console.log(window.scrollY)
        if(window.scrollY > 50){
            setQwer('navbar scroll')
        }else if(window.scrollY == 0){
            setQwer('navbar')
        }
    }) 
    return (
        <header className='header'>
                <div  className={qwer}>
                    <div className='left'>
                        <a href="#"><img src={logo} alt="createX" /></a>
                        <ul className='nav_links'>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <div className='right'>
                        <Button  text={'Get consultation'} />
                        <div className='login'>
                            <a href="#">Log in /</a>
                            <a href="#"> Register</a>
                        </div>
                    </div>
                </div>
            
        </header>
    )
}