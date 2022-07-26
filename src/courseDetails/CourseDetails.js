import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './CourseDetails.scss'
import { Button, Button14 } from '../UI/button/Button';
import { soc } from '../footer/Footer'
import React from 'react'
import Testimonials from '../tertimonials/Testimonials'
import { TeamCardHorizontal } from '../teamInfo/TeamInfo'

let steps = [
    ['01', 'Watching online video lectures', 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'],
    ['02', 'Passing test', 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.'],
    ['03', 'Curator’s feedback', 'Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.'],
    ['04', 'Corrections if needed', 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.']
]

let data = [12, 12, 18, 6];

export let cardNum = [0, 1, 2, 3, 4];



export default function CourseDetails() {
    let [sec, setSec] = useState(data[0])
    let [min, setMin] = useState(data[1])
    let [hour, setHour] = useState(data[2])
    let [day, setDay] = useState(data[3])
    let [desc, setDesc] = useState()
    let [courseShift, setCourseShift] = useState(0)

    let newArr = useLocation().state

    useEffect(() => {
        window.scrollTo(0, 0)
        setInterval(() => {
            sec--
            if (sec < 0) {
                min--
                sec = 59
                if (min < 0) {
                    hour--
                    min = 59
                } else if (min < 10) {
                    min = '0' + min
                }
            } else if (sec < 10) {
                sec = '0' + sec
            }
            setSec(sec)
            setMin(min)
            setHour(hour)
        }, 1000)
    }, [])

    return (
        <div className="courseDetails">
            <section className="courseDetails_header">
                <p className='courseDetails_header-title'>COURSE</p>
                <h1 className='courseDetails_header-heading'>{newArr.courseName}</h1>
                <p className='courseDetails_header-heading'>{newArr.courseArea}</p>
            </section>
            <section className="courseDetails_about">
                <div className='courseDetails_about-main'>
                    <p className="courseDetails_about-title">About the course</p>
                    <p className="courseDetails_about-text">{newArr.courseAbout}</p>
                    <p className="courseDetails_about-points">You will learn:</p>
                    <ul>
                        {newArr.coursePoints.map(item => <li><span>{item}</span></li>)}
                    </ul>
                </div>
                <div className='courseDetails_about-data'>
                    <div className='courseDetails_about-dataBlock'>
                        <p className='courseDetails_about-item'>DATES</p>
                        <p className='courseDetails_about-info'>{newArr.courseDate}</p>
                        <p className='courseDetails_about-description'>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                    </div>
                    <div className='courseDetails_about-dataBlock'>
                        <p className='courseDetails_about-item'>DURATION</p>
                        <p className='courseDetails_about-info'>{newArr.courseDuration}</p>
                        <p className='courseDetails_about-description'>Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
                    </div>
                    <div className='courseDetails_about-dataBlock'>
                        <p className='courseDetails_about-item'>PRICE</p>
                        <p className='courseDetails_about-info'>{newArr.coursePrice} per month</p>
                        <p className='courseDetails_about-description'>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                    </div>
                    <Button14>Join the course</Button14>
                </div>
            </section>
            <section className='courseDetails_author'>
                <div className='courseDetails_author-photo'>
                    <img src={newArr.courseAuthorInfa.photo} alt={newArr.courseAuthor} />
                </div>
                <div className='courseDetails_author-infa'>
                    <p className='courseDetails_author-title'>COURSE CURATOR</p>
                    <p className='courseDetails_author-name'>{newArr.courseAuthorInfa.name}</p>
                    <p className='courseDetails_author-position'>{newArr.courseAuthorInfa.position}</p>
                    <p className='courseDetails_author-raiting'>{newArr.courseAuthorInfa.raiting} rate </p>
                    <p className='courseDetails_author-courseNum'>{newArr.courseAuthorInfa.numberOfCourses} courses</p>
                    <p className='courseDetails_author-studNum'>{newArr.courseAuthorInfa.numberOfStudents} students</p>
                    <p className='courseDetails_author-description'>{newArr.courseAuthorInfa.description} </p>
                    <div className='courseDetails_author-soc'>
                        <a data={soc[0][0]} href="'https://www.facebook.com/'"></a>
                        <a data={soc[4][0]} href="#"></a>
                        <a data={soc[1][0]} href="#"></a>
                        <a data={soc[5][0]} href="#"></a>
                    </div>
                </div>
            </section>
            <section className='courseDetails_steps'>
                <p className='notificationCenter'>MAIN STEPS</p>
                <p className='headingCenter60'>Online learning process</p>
                <div className='courseDetails_steps-main'>
                    {steps.map(item => <div className='courseDetails_steps-step'>
                        <div className='courseDetails_steps-stepNum' >
                            <p >{item[0]}</p>
                            <span >- - - - - - - - - - - - - - - - - - - - - - - -</span>
                        </div>
                        <p className='courseDetails_steps-stepTitle'>{item[1]}</p>
                        <p className='courseDetails_steps-stepDesc'>{item[2]}</p>
                    </div>)}
                </div>
            </section>
            <section className='courseDetails_discount'>
                <div className='courseDetails_discount-wrapper'>
                    <div className='courseDetails_discount-header'>
                        <p className='courseDetails_discount-title'>20% discount for early birds!</p>
                        <div className='courseDetails_discount-period'>
                            <p>0{day} <span>Days</span></p>
                            <p>{hour}<span>Hours</span></p>
                            <p> {min}<span>Mins</span></p>
                            <p>{sec} <span>Sec</span></p>
                        </div>
                    </div>
                    <div className='courseDetails_discount-details'>
                        <div >
                            <p>Full name</p>
                            <input type="text" placeholder='Your full name' />
                        </div>
                        <div >
                            <p>Email</p>
                            <input type="text" placeholder='Your working email' />
                        </div>
                        <div >
                            <p>Phone</p>
                            <input type="number" placeholder='Your phone number' />
                        </div>
                        <Button14 width={166}>Join the course</Button14>
                    </div>
                </div>
            </section>
            <section className='courseDetails_benefits'>
                <div className='courseDetails_benefits-title'>
                    <p className='notification'>FOR WHOM?</p>
                    <p className='heading60'>Who will benefit from the course:</p>
                </div>
                <div className='courseDetails_benefits-points'>
                    <ul >
                        <li>Specialists with more than 1 year of active work experience</li>
                        <li>Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</li>
                        <li>Professional designers who want to feel more confident in UX</li>
                        <li>Specialists who would like to structure their knowledge, fill in the gaps</li>
                    </ul>
                </div>
            </section>
            <section className='courseDetails_program'>
                <div className='courseDetails_program-wrapper'>
                    <p className='courseDetails-notification'> COURSE PROGRAM</p>
                    <p className='courseDetails-heading'>What will you learn</p>
                    <div className='courseDetails_program-main'>
                        {newArr.courseLessons.map((item, index) =>
                            <>
                                <p className='courseDetails_program-lesson'>
                                    <span onClick={() => setDesc(desc === index ? '' : index)}>
                                        <span className='courseDetails_program-pointer'>
                                            {desc === index ? `\u2014` : `\u002b`}
                                        </span>
                                        Lesson {index + 1}.
                                    </span> {item[0]}
                                </p>
                                <p className={desc === index ? 'courseDetails_program-active' : 'courseDetails_program-nonactive'}>
                                    {newArr.courseLessons[0][1]}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <section className='courseDetails__register'>
                <Testimonials></Testimonials>
                <div className='courseDetails__register-content'>
                    <div className='courseDetails__register-form'>
                        <div>
                            <p className='courseDetails-notification'>LEAVE A REQUEST NOW AND GET 20% OFF!</p>
                            <p className='courseDetails-heading'>Register for the course</p>
                        </div>
                        <div className='courseDetails__register-details'>
                            <div >
                                <p>Full Name</p>
                                <input type="text" placeholder='Your full name' />
                            </div>
                            <div >
                                <p>Email</p>
                                <input type="text" placeholder='Your working email' />
                            </div>
                            <div >
                                <p>Phone</p>
                                <input type="number" placeholder='Your phone number' />
                            </div>
                        </div>
                        <Button width={495}>Join the course</Button>
                    </div>
                </div>
            </section>
            <section className='courseDetails__courseCarousel'>
                <p className='courseDetails-notification'>CHECK OTHER COURSES</p>
                <div className='courseDetails__courseCarousel-nav'>
                    <p className='courseDetails-heading'>You may also like</p>
                    <div className='courseDetails__teamArrows'>
                        <span onClick={() => setCourseShift(courseShift < 0 ? courseShift += 630 : 0)}>{String.fromCharCode(8592)}</span>
                        <span onClick={() => setCourseShift(Math.abs(courseShift) < 630 * (cardNum.length - 1) ? courseShift -= 630 : 0)}>{String.fromCharCode(8594)}</span>
                    </div>
                </div>
                <div className='courseDetails__courseCarousel-content' onClick={() => window.scrollTo(0, 0)}>
                    {cardNum.map((item, index) => <TeamCardHorizontal num={index} courseShift={courseShift} />)}
                </div>
                <div className='courseDetails__courseCarousel-finish'>
                    <p >Do you want more courses? </p>
                    <Button width={203} link={"/courses"}>View all courses</Button>
                </div>
            </section>
        </div>
    )
}