import './Subscribe.scss'
import {Button}  from '../button/Button.js';


export default function Subscribe() {
    return (
        <section className="subscribe">
            <div className="subscribe_content">
                <p>DON'T MISS ANYTHING</p>
                <p className='subscribe_main'>Subscribe to the Createx School announcements</p>
                <div className='subscribe_input'>
                    <input type="text" placeholder='Your working email'/>
                    <Button text='Subscribe'>Subscribe</Button>
                </div>
            </div>
        </section>
    )
}