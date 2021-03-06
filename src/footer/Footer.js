import './Footer.scss'
import logo from './logo.svg'
import {NavLink,Link} from 'react-router-dom'

export let soc = [
    ["\uf900", 'https://www.facebook.com/'],
    ['\uf901', 'https://twitter.com/'],
    ['\uf902', 'https://youtube.com'],
    ['\uf903', 'https://telegram.org'],
    ['\uf904', 'https://instagram.com'],
    ['\uf905', 'https://linkedin.com']
]


export default function Footer() {
    
    return (
        <footer className='footer'>
            <div className="footer_top">
                <div className='footer_top_content'>
                    <div className='footer_about'>
                        <Link to="/"><img src={logo} alt="createX" /></Link>
                        <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
                        <div className='footer_socials'>
                            {soc.map(item => <a  data={item[0]} href={item[1]}></a>)}
                        </div>

                    </div>
                    <div className='footer_item'>
                        <p>SITE MAP</p>
                      <ul>
                      <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                        <li><NavLink to="/events">Events</NavLink></li>
                        <li><NavLink to="/blogs">Blog</NavLink></li>
                        <li><NavLink to="/contacts">Contacts</NavLink></li>
                      </ul>
                    </div>
                    <div className='footer_item'>
                        <p>COURSES</p>
                       <ul>
                            <li><a href="">Marketing</a></li>
                            <li><a href="">Management</a></li>
                            <li><a href="">HR & Recruting</a></li>
                            <li><a href="">Design</a></li>
                            <li><a href="">Development</a></li>
                       </ul>
                    </div>
                    <div className='footer_item'>
                        <p>CONTACT US</p>
                        <ul>
                            <li className='createx-number'> (405) 555-0128</li>
                            <li className='createx-email'> hello@createx.com</li>
                        </ul>
                    </div>
                    <div className='footer_item footer_signUp'>
                        <p>SIGN UP TO OUR NEWSLETTER</p>
                       <input type="email" placeholder='Email address' defaultValue='Email address'/>
                        <p className='footer_item-notice'>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className='footer_bottom_content'>
                    <p>	&copy; All rights reserved. Made with <span> &#9825; </span> by Createx Studio</p>
                    <p><a href="#">GO TO TOP</a></p>
                </div>
            </div>
        </footer>
    )
}