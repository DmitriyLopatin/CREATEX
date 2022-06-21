import { useLocation } from "react-router-dom"
import React, { useState } from "react"
import "../eventDetails/EventDetails.scss"


export default function EventDetails(props) {

    let eventArr = useLocation().state
    let [desc, setDesc] = useState()

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
                <div className="eventDetails__about-info">
                            <div>
                                <p className="eventDetails__about-time">TIME</p>
                                <p className="eventDetails__about-date">{eventArr.month}{eventArr.day}, {eventArr.time}</p>
                                <p className="eventDetails__about-heading">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                            </div>
                            <div >
                                <p>PRICE</p>
                                <p>Free</p>
                                <p>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                            </div>
                            <a href="">EVENT ON FACEBOOK</a>
                            
                </div>
            </div>
        </section>

    )
}