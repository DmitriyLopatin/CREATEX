import './About.scss'
import Testimonials from '../tertimonials/Testimonials'
import Blog from '../blogs/Blogs'
import Subscribe from '../subscribe/Subscribe'
import { Button } from '../button/Button'
import VideoFrame from './about&images/about_video-image.svg'
import Calendar from './about&images/about_value-ic-calendar.svg'
import Chat from './about&images/about_value-ic-chat.svg'
import Target from './about&images/about_value-ic-target.svg'
import Structure from './about&images/about_value-structure1.svg'
import AboutMarceting from './about&images/about_directions-marceting.svg'
import AboutManagement from '../about/about&images/about_directions-management.svg'
import AboutHR from '../about/about&images/about_directions-hr.svg'
import AboutDesign from '../about/about&images/about_directions-design.svg'
import AboutDevelopment from '../about/about&images/about_directions-dev.svg'
import { TeamCard, teamdata } from '../teamCard/Team-Card'


let aboutDirectionsContent = [
    [
        AboutMarceting, 'Marketing', 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.', '#03CEA4'
    ],
    [
        AboutManagement, 'Management', 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.', '#5A87FC'
    ],
    [
        AboutHR, 'HR & Recruting', 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.', '#F89828'
    ],
    [
        AboutDesign, 'Design', 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.', '#F52F6E'
    ],
    [
        AboutDevelopment, 'Development', 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.', '#7772F1'
    ],
    [
        'New studying program coming soon...'
    ]
];
let aboutStudyingProcessSteps = [
    [
        'Watching online video lectures', 'Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.'
    ],
    [
        'Passing test', 'Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. '
    ],
    [
        'Curator’s feedback', 'Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. '
    ],
    [
        'Corrections if needed', 'Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.'
    ]

]



export default function About() {

    return (
        <section className='about'>
            <main className='about__main'>
                <div className='about__main-section'>
                    <p className='notification'>ABOUT US</p>
                    <p className='heading40'>Createx Online School</p>
                    <p className='about__main-title'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
                    <p className='about__main-text'>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
                </div>
                <div className='about__main-buttons'>
                    <Button width={193}>Explore events</Button>
                    <Button link={"/courses"} width={199}>Browse courses</Button>
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
                <p className='notificationCenter'>WE ALWAYS STAND FOR</p>
                <p className='headingCenter60'>Our core values</p>
                <div className='about__values-content'>
                    <div className='about__values-details about__values-border'>
                        <img src={Structure} alt="Structure" />
                        <p className='about__values-header'>Structured Approach</p>
                        <p className='about__values-text'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
                    </div>
                    <div className='about__values-details about__values-border'>
                        <img src={Chat} alt="chat" />
                        <p className='about__values-header'>Professional Feedbacks</p>
                        <p className='about__values-text'>Culpa nostrud commodo ea consequat reprehenderit aliquip.  </p>
                    </div>
                    <div className='about__values-details about__values-border'>
                        <img src={Target} alt="Target" />
                        <p className='about__values-header'>Efficiency</p>
                        <p className='about__values-text'>Viverra scelerisque consequat net. Adipisicing esse consequat.  </p>
                    </div>
                    <div className='about__values-details'>
                        <img src={Calendar} alt="Calendar" />
                        <p className='about__values-header'>Flexible Shedule</p>
                        <p className='about__values-text'>Aute eiusmod dolore dolore deserunt veniam ad deserunt.  </p>
                    </div>
                </div>
            </article>
            <article className='about__directions'>
                <p className='notificationCenter'>OUR MAIN DIRECTIONS</p>
                <p className='headingCenter60'>What do we teach</p>
                <div className='about__directions-content'>
                    {aboutDirectionsContent.map(item => {
                        if (item.length > 2) {
                            return <div className='about__directions-box'>
                                <img src={item[0]} alt="" />
                                <div className='about__directions-mainBlock'>
                                    <p className='about__directions-area' style={{ backgroundColor: item[3] }}>{item[1]}</p>
                                    <p className='about__directions-text'>{item[2]}</p>
                                    <p className='about__directions-link'>Check courses</p>
                                </div>
                            </div>
                        } else {
                            return <div className='about__directions-box1'>
                                <p className='about__directions-box1-text'>{item[0]}</p>
                            </div>
                        }
                    }
                    )}
                </div>
            </article>
            <article className='about__studyingProcess'>
                <p className='notification'>STUDYING PROCESS</p>
                <p className='heading60'>That's how we do it</p>
                {aboutStudyingProcessSteps.map((item, index) =>
                    <ul className='about__studyingProcess-box'>
                        <li>
                            <span className='about__studyingProcess-step'>{`STEP ${index + 1}`}</span>
                            <div className='about__studyingProcess-stepContent'>
                                <p className='about__studyingProcess-stepTitle'>{item[0]}</p>
                                <p className='about__studyingProcess-stepText'>{item[1]}</p>
                            </div>
                        </li>
                    </ul>)}
            </article>
            <article className='about__team'>
                <p className='notificationCenter'>BEST TUTORS ARE ALL HERE</p>
                <p className='headingCenter60'>Meet our team</p>
                <div className='about__team-content'>
                    {teamdata.map((item, index) => <TeamCard number={index} />)}
                </div>
            </article>
            <article className='about__mix'>
                <Testimonials></Testimonials>
                <div className='about__mix-studentsWork'>
                    <p className='notificationCenter'>BEST JOBS FOR YOU</p>
                    <p className='headingCenter60'>Our students work here</p>
                </div>
            </article>
            <Blog></Blog>
            <Subscribe></Subscribe>
        </section>
    )
}