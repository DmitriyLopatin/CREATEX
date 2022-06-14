import CardEvent from './Card_Event.js'
import './HP_events.scss'
import {Button}  from '../../button/Button';

const eventsData = [
    {
        day: '05', 
        month: 'August',
        time: '11:00 - 14:00',
        events:'Formation of the organizational structure of the company in the face of uncertainty.', 
        type:'Online master-class'}, 
    {
        day: '24', 
        month: 'July',
        time: '11:00 - 12:30',
        events:'Building a customer service department. Best Practices.', 
        type:'Online lecture'}, 
    {
        day: '16', 
        month: 'July',
        time: '10:00 - 13:00',
        events:'How to apply methods of speculative design in practice. Worldbuilding prototyping.', 
        type:'Online workshop'} 
]

export default function Events(){
    return(
        <section className="events">
            <div className='container'>
                <div className='events_header'>
                    <h6>OUR EVENTS</h6>
                    <p>Lectures & workshops</p>
                </div>
                <div className='events_content'>
                    {eventsData.map(item=><CardEvent day={item.day} month={item.month} time={item.time} events={item.events} type={item.type}/>)}
                </div>
                <div className='events_footer'>
                    <h3>Do you want more?</h3>
                    <Button width={215}>Explore all events</Button>
                </div>
            </div>
        </section>
    )
}