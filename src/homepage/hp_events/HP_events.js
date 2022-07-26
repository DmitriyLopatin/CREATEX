
import './HP_events.scss'
import {Button}  from '../../UI/button/Button';
import { EventCardHorizontal, eventData } from '../../teamInfo/TeamInfo.js';



export default function Events(){
    let numEvent = [0,1,2]

    return(
        <section className="events">
            <div className='container'>
                <div className='events_header'>
                    <h6>OUR EVENTS</h6>
                    <p>Lectures & workshops</p>
                </div>
                <div className='events_content'>
                    {numEvent.map(item=><EventCardHorizontal data={eventData} num = {item}/>)}
                </div>
                <div className='events_footer'>
                    <h3>Do you want more?</h3>
                    <Button width={215} link={"/events"}>Explore all events</Button>
                </div>
            </div>
        </section>
    )
}