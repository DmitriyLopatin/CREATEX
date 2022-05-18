import './About.scss'
import Testimonials from '../tertimonials/Testimonials'
import Blog from '../blogs/Blogs'
import Subscribe from '../subscribe/Subscribe'
import { Button } from '../button/Button'
import VideoFrame from './about&images/about_video-image.svg'


export default function About() {
    return (
        <section className='about'>
            <main className='about__main'>
                <div className='about__main-section'>
                    <p className='notification'>ABOUT US</p>
                    <p className='heading'>Createx Online School</p>
                    <p className='about__main-title'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
                    <p className='about__main-text'>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
                </div>
                <div className='about__main-buttons'>
                    <Button width={193}>Explore events</Button>
                    <Button width={199}>Browse courses</Button>
                </div>
            </main>
            <article className='about__watch'>
               <p className='about__watch-video'>Watch Video</p>
               <div className='about__watch-content'>
                   <img src={VideoFrame} alt="play" />
                   <div className='about__watch-statistics'>
                       <p className='about__watch-data'><span>1200</span>students graduated</p>
                       <p className='about__watch-data'><span>84</span>completed courses</p>
                       <p className='about__watch-data'><span>16</span>qualified tutors</p>
                       <p className='about__watch-data'><span>5</span>years of experience</p>
                   </div>
               </div>
            </article>
            <article className='about__values'>
                <p className='notification about__values-notification'>WE ALWAYS STAND FOR</p>
                <p className='heading about__values-heading'>Our core values</p>
                <div className='about__values-content'>
                    <div className='about__values-details'>
                        <img src="" alt="" />
                        <p>Structured Approach</p>
                        <p>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
                    </div>
                    <div className='about__values-details'>
                        <img src="" alt="" />
                        <p>Professional Feedbacks</p>
                        <p>Culpa nostrud commodo ea consequat reprehenderit aliquip.  </p>
                    </div>
                    <div className='about__values-details'>
                        <img src="" alt="" />
                        <p>Efficiency</p>
                        <p>Viverra scelerisque consequat net. Adipisicing esse consequat.  </p>
                    </div>
                    <div className='about__values-details'>
                        <img src="" alt="" />
                        <p>Flexible Shedule</p>
                        <p>Aute eiusmod dolore dolore deserunt veniam ad deserunt.  </p>
                    </div>
                </div>
            </article>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Subscribe></Subscribe>
        </section>
    )
}