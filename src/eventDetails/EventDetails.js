import { Link, useLocation } from "react-router-dom"
import React, { useState, useEffect } from "react"
import "../eventDetails/EventDetails.scss"
import { Button14, Button } from "../UI/button/Button"
import { soc } from '../footer/Footer'
import {Input2} from "../UI/input/Input"
import { cardNum } from "../courseDetails/CourseDetails"
import { EventCardVertical, eventData } from "../teamInfo/TeamInfo"



export default function EventDetails() {

    let eventArr = useLocation().state
    let [desc, setDesc] = useState()
    let [eventShift, setEventShift] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="eventDetails">
            <div className="eventDetails__header">
                <p className="notificationCenter eventDetails__header-type" >{eventArr.eventType.toUpperCase()}</p>
                <p className="headingCenter60 eventDetails__header-heading" >{eventArr.topic}</p>
            </div>
            <div className="eventDetails__about">
                <div className="eventDetails__about-main">
                    <p className="eventDetails__about-title">We will talk about:</p>
                    <div className='eventDetails__about-programm'>
                        {eventArr.topicPoints.map((item, index) =>
                            <>
                                <p className='eventDetails__about-topic'>
                                    <span onClick={() => setDesc(desc === index ? '' : index)}>
                                        <span className='eventDetails__about-pointer'>
                                            {desc === index ? `\u2014` : `\u002b`}
                                        </span>
                                        Theme {index + 1}.
                                    </span>
                                    {item[0]}
                                </p>
                                <p className={desc === index ? 'eventDetails__about-active' : 'eventDetails__about-nonactive'}>
                                    {eventArr.topicPoints[1]}
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <div className="eventDetails__about-data">
                    <div>
                        <p className="eventDetails__about-info1">TIME</p>
                        <p className="eventDetails__about-info2">{eventArr.month} {eventArr.day}, {eventArr.time}</p>
                        <p className="eventDetails__about-info3">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                    </div>
                    <div >
                        <p className="eventDetails__about-info1">PRICE</p>
                        <p className="eventDetails__about-info2">Free</p>
                        <p className="eventDetails__about-info3">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                    </div>
                    <a className="eventDetails__about-link1" href="https://www.facebook.com/">EVENT ON FACEBOOK</a>
                    <Button14 width={431}>Join the event</Button14>


                </div>
            </div>
            <div className='eventDetails__author'>
                <div className='eventDetails__author-photo'>
                    <img src={eventArr.eventSpeaker.photo} alt={eventArr.courseAuthor} />
                </div>
                <div className='eventDetails__author-infa'>
                    <p className='eventDetails__author-title'>SPEAKER</p>
                    <p className='eventDetails__author-name'>{eventArr.eventSpeaker.name}</p>
                    <p className='eventDetails__author-position'>{eventArr.eventSpeaker.position}</p>
                    <p className='eventDetails__author-description'>{eventArr.eventSpeaker.description} </p>
                    <div className="eventDetails__author-awards">
                        <Link to='*' className="eventDetails__author-award1"></Link>
                        <Link to='*' className="eventDetails__author-award2"></Link>
                        <Link to='*' className="eventDetails__author-award3"></Link>
                    </div>
                    <div className='eventDetails__author-soc'>
                        <a data={soc[0][0]} href="'https://www.facebook.com/'"></a>
                        <a data={soc[4][0]} href="#"></a>
                        <a data={soc[1][0]} href="#"></a>
                        <a data={soc[5][0]} href="#"></a>
                    </div>
                </div>
            </div>
            <div className="eventDetails__benefits">
                <div className="eventDetails__benefits-title">
                    <p className="notification">FOR WHOM?</p>
                    <p className="heading60">Who will benefit from the event:</p>
                </div>
                <ul className="eventDetails__benefits-points">
                    <li>Specialists with more than 1 year of active work experience</li>
                    <li>Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</li>
                    <li>Professional designers who want to feel more confident in UX</li>
                </ul>
            </div>
            <div className="eventDetails__subscribe">
                <div className="eventDetails__subscribe-content">
                    <p className="eventDetails__subscribe-heading">Don’t want to miss the best events? Subscribe to our newsletter!</p>
                    <div className="eventDetails__subscribe-interface">
                        <Input2 placeholder={'Your working email'} typeInput={'input'} width={422} height={52}></Input2>
                        <Button width={154}>Subscribe</Button>
                    </div>
                    <label className="agreementCheck">
                        <input className="checkboxFalse" type="checkbox" />
                        <span className="checkboxTrue"></span>
                        I agree to receive communications from Createx Online School
                    </label>

                </div>
            </div>
            <div className="eventDetails__requestForm">
                <p className="notification">DON'T MISS THE EVENT</p>
                <p className="heading40">Leave a request</p>
                <div className='eventDetails__requestForm-details'>
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
                        <input className='eventDetails__requestForm-details-button' type="number" placeholder='Your phone number' />
                    </div>
                    <Button width={495}>Join the event</Button>
                    <p className="eventDetails__requestForm-noticeText">* You will receive a link to the online lecture in an email after registration.</p>
                </div>


            </div>
            <div className="eventDetails__eventCarusel">
                <p className="notification">CHECK OTHER ONLINE EVENTS</p>
                <div className="eventDetails__eventCarusel-nav">
                    <p className="heading60">You may be interested in</p>
                    <div className="eventDetails__teamArrows">
                        <span onClick={() => setEventShift(eventShift < 0 ? eventShift += 418 : 0)}>
                            {String.fromCharCode(8592)}
                        </span>
                        <span onClick={() => setEventShift(Math.abs(eventShift) < 418 * (cardNum.length - 1) ? eventShift -= 418 : 0)}>
                            {String.fromCharCode(8594)}
                        </span>
                    </div>
                </div>
                <div className='eventDetails__eventCarusel-content' onClick={() => window.scrollTo(0, 0)}>
                    {cardNum.map((item, index) => <EventCardVertical data={eventData} num={index} eventShift={eventShift} />)}
                </div>
                <div className='eventDetails__eventCarusel-finish'>
                    <p >Do you want more? </p>
                    <Button width={215} link={"/courses"}>Explore all events</Button>
                </div>
            </div>
        </section>

    )
}