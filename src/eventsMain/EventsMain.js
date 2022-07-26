import './EventsMain.scss'
import Subscribe from '../subscribe/Subscribe'
import {Input} from '../UI/input/Input'
import { EventCardHorizontal, EventCardVertical, eventData } from '../teamInfo/TeamInfo'
import { useEffect, useState } from 'react'


export default function EventsMain() {
    let [eventsView,setEventsView] = useState(0)               // set type of EventCard ( vertical or horizontal )
    let [reversChosen, setReversChosen] = useState('newest')   
    let [redClass, setRedClass] = useState(0)
    let [redClass2, setRedClass2] = useState(0)
    let [eventChosenTopic, setEventChosenTopic] = useState('all')  //set filter by topic
    let eventChosenTopicArr1 = eventData.filter(item => eventChosenTopic == 'all'? item : item.eventType == eventChosenTopic)
    let eventChosenTopicArr = (reversChosen === 'newest' ? eventChosenTopicArr1 : eventChosenTopicArr1.reverse())
    let [eventNumber, setEventNumber] = useState(6)                 // set chosen amount of events on page
    let [eventNumberOnPage, setEventNumberOnPage] = useState(6)     // set amount of events on page
    let eventNumberArr = []
    let pageNumberArr = []
    

    for (let i = eventNumberOnPage-eventNumber; i < eventNumberOnPage; i++) {
        // console.log(eventNumberOnPage)
        if (i < eventChosenTopicArr.length) {
            eventNumberArr.push(i)
        } 
    }
    if (eventNumber > 0 && eventNumber <= eventChosenTopicArr.length) {
        for (let i = 0; i < (eventChosenTopicArr.length / eventNumber); i++) {
            pageNumberArr.push(i+1)
        }

    }

    console.log(eventChosenTopicArr)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className='eventsMain'>
                <p className='notificationCenter'>OUR EVENTS</p>
                <p className='headingCenter60'> Lectures, workshops & master-classes</p>
                <div className='eventsMain__menuIndicateItem eventsMain__menuIndicateItem-marginBottom'>
                    <div className='eventsMain__menuIndicateItem' >
                        <p>Event category</p>
                        <select className='eventsMain__menuIndicateItem-cat' onChange={event => {setEventChosenTopic(event.target.value);setEventNumberOnPage(eventNumber); setRedClass(0)}}>
                            <option value="all">all themes</option>
                            <option value="Online master-class">Online master-class</option>
                            <option value="Online lecture">Online lecture</option>
                            <option value="Online workshop">Online workshop</option>
                        </select>
                    </div>
                    <div className='eventsMain__menuIndicateItem'>
                        <p>Sort by</p>
                        <select className='eventsMain__menuIndicateItem-date' onChange={(event)=>{setReversChosen(event.target.value);setEventNumberOnPage(eventNumber); setRedClass(0)}}>
                            <option value="newest">newest</option>
                            <option value="oldest">oldest</option>
                        </select>
                    </div>
                    <div className='eventsMain__menuIndicateItem'>
                        <p>Show</p>
                        <input className='eventsMain__menuIndicateItem-form' type="number" value={eventNumber} onChange={(event) => {setEventNumber(event.target.value); setEventNumberOnPage(event.target.value); setRedClass(0)}} />
                        <p className='eventsMain__menuIndicateItem-pageNum'>events per page</p>
                    </div>
                    <Input placeholder={'Search event...'} width={282} height={44}/>
                    <div className='eventsMain__menuIndicateItem'>
                        <p className='eventsMain__menuIndicateItem-view' style={eventsView == 0? {color:'red'}:{color:'#1e212c'}} data={'\ue900'} onClick={()=>setEventsView(0)}></p>
                        <p className='eventsMain__menuIndicateItem-view eventsMain__menuIndicateItem-view1' style={eventsView == 1 ? {color:'red'}: {color:'#1e212c'}} data={'\ue901'} onClick={()=>setEventsView(1)}></p> 
                    </div>
                </div>
                <div className={eventsView == 0 ?'eventsMain__content-list' : 'eventsMain__content-grid'}>
                    {eventsView == 0 ? eventNumberArr.map((item, index) => <EventCardHorizontal data = {eventChosenTopicArr} num={item} />) : eventNumberArr.map((item, index) => <EventCardVertical data = {eventChosenTopicArr} num={item} />)}
                </div>
                <div className='eventsMain__pageId'>
                    {pageNumberArr.map((item, index) => 
                        <p style={redClass===index  ? {color: 'red'}: {color:'#424551'}}onClick={()=> {setRedClass(index); setEventNumberOnPage(item*eventNumber);window.scrollTo(0, 300)}}>{item}</p>
                    )}
                    <p className={eventNumber > 1 && eventNumber < eventChosenTopicArr.length ? 'eventsMain__pageId-rightArrow' : 'inactive'} onClick={()=> {
                        window.scrollTo(0, 300)
                        if(eventNumberOnPage < eventChosenTopicArr.length) {
                            setRedClass(redClass =  redClass + 1); 
                            setEventNumberOnPage(eventNumber*(redClass+1))
                        }
                    }}></p>
                </div>
            </section>
            <Subscribe />
        </>

    )
}