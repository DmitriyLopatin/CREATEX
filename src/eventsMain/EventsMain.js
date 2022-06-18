import './EventsMain.scss'
import Subscribe from '../subscribe/Subscribe'
import Input from '../UI/input/Input'
import { EventCardHorizontal, eventData } from '../teamInfo/TeamInfo'
import { useEffect, useState } from 'react'


export default function EventsMain() {

    let [eventNumber, setEventNumber] = useState(3)
    let [eventNumberOnPage, setEventNumberOnPage] = useState(3)
    let eventNumberArr = []
    let pageNumberArr = []
    let [redClass, setRedClass] = useState(0)
    for (let i = eventNumberOnPage-eventNumber; i < eventNumberOnPage; i++) {
        console.log(eventNumberOnPage)
        if (i < eventData.length) {
            eventNumberArr.push(i)
        } 
    }
    if (eventNumber > 0 && eventNumber <= eventData.length) {
        for (let i = 0; i < (eventData.length / eventNumber); i++) {
            pageNumberArr.push(i+1)
        }

    }

    console.log(eventNumberArr)

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
                        <select className='eventsMain__menuIndicateItem-cat'>
                            <option value="">all themes</option>
                            <option value="">Online master-class</option>
                            <option value="">Online lecture</option>
                            <option value="">Online workshop</option>
                        </select>
                    </div>
                    <div className='eventsMain__menuIndicateItem'>
                        <p>Sort by</p>
                        <select className='eventsMain__menuIndicateItem-date'>
                            <option value="">newest</option>
                            <option value="">oldest</option>
                        </select>
                    </div>
                    <div className='eventsMain__menuIndicateItem'>
                        <p>Show</p>
                        <input className='eventsMain__menuIndicateItem-form' type="number" value={eventNumber} onChange={(event) => {setEventNumber(event.target.value); setEventNumberOnPage(event.target.value); setRedClass(0)}} />
                        <p className='eventsMain__menuIndicateItem-pageNum'>events per page</p>
                    </div>
                    <Input placeholder={'Search event...'} width={282} />
                    <div className='eventsMain__menuIndicateItem'>
                        <p className='eventsMain__menuIndicateItem-view' data={'\ue900'} ></p>
                        <p className='eventsMain__menuIndicateItem-view eventsMain__menuIndicateItem-view1' data={'\ue901'}></p>
                    </div>
                </div>
                <div className='eventsMain__content'>
                    {eventNumberArr.map((item, index) => <EventCardHorizontal num={item} />)}
                </div>
                <div className='eventsMain__pageId'>
                    {pageNumberArr.map((item, index) => <p style={redClass===index  ? {color: 'red'}: {color:'#424551'}}onClick={()=> {setRedClass(index); setEventNumberOnPage(item*eventNumber);window.scrollTo(0, 300)}}>{item}</p>
                    )}
                    <p className={eventNumber > 1 && eventNumber < eventData.length ? 'eventsMain__pageId-rightArrow' : 'inactive'} onClick={()=> {
                        if(eventNumberOnPage < eventData.length) {
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