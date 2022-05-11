import './Card_Event.scss'
import {Button14}  from '../../button/Button';
export default function CardEvent(props){
    return(
        <div className='eventInfo'>
            <div className='eventInfo_date'>
                <p className='eventInfo_day'>{props.day}</p>
                <div className='eventInfo_M-T'> 
                    <p className='eventInfo_month'>{props.month}</p>
                    <p className='eventInfo_time'>{props.time}</p>
                </div>
            </div>
            <div className='eventInfo_header'>
                <p className='eventInfo_name'>{props.events}</p>
                <p className='eventInfo_type'>{props.type}</p>
            </div>
            <Button14 width = {136}>View more</Button14>
        </div>
    )
}