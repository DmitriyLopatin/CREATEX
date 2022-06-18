import { useLocation } from "react-router-dom"
import React from "react"
import  "../eventDetails/EventDetails.scss"


export default function EventDetails(props){
    let eventArr = useLocation().state
    return(
        <section className="eventDetails">
            <div className="eventDetails__header">
                <p className="notificationCenter">{eventArr.eventType}</p>
                <p className="headingCenter60">{eventArr.topic}</p>
            </div>
        
        </section>

    )
}