import './Subscribe.scss'
import {Button}  from '../UI/button/Button';


export default function Subscribe() {
    return (
        <section className="subscribe">
            <div className="subscribe_content">
                <p>DON'T MISS ANYTHING</p>
                <p className='subscribe_main'>Subscribe to the Createx School announcements</p>
                <div className='subscribe_input'>
                    <input type="text" placeholder='Your working email' defaultValue={'Your working email'}/>
                    <Button width={154}>Subscribe</Button>
                </div>
            </div>
        </section>
    )
}