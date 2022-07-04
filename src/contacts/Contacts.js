import './Contacts.scss'
import { soc } from '../footer/Footer'
import {Input2} from '../UI/input/Input'
import { Button } from '../UI/button/Button'

let inputData = [
    ['First Name*','Your first name',52,340,'input'],
    ['Last Name*','Your last name',52,340,'input'],
    ['Email*','Your working email',52,340,'input'],
    ['Phone','Your phone number',52,340,'input'],
    ['Message*','Your message',128,705]
]

export default function Contacts() {
    return (
        <section className='contacts'>
            <div className='contacts__info'>
                <div className='contacts__info-mainData'>
                    <p className='notification'>CONTACT INFO</p>
                    <p className='heading40'>Get in touch</p>
                    <p className='contacts__info-title contacts__info-email'>Talk to us:</p>
                    <p className='contacts__info-text'>hello@createx.com</p>
                    <p className='contacts__info-title contacts__info-phone'>Call us:</p>
                    <p className='contacts__info-text'>(405) 555-0128</p>
                    <p className='contacts__info-title contacts__info-address'>Address:</p>
                    <p className='contacts__info-text'>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
                    <p className='contacts__info-socialsTitle'>FOLLOW US:</p>
                    <div className='contacts__info-socials'>
                        {soc.map(item => <a key={item[1]} data={item[0]} href={item[1]}></a>)}
                    </div>
                </div>
                <div className='contacts__info-map'>
                       <iframe width="100%" height="412" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=412&amp;hl=en&amp;q=CREATEX%20Canal%20de%20Tezontle%2071,%20Paseos%20de%20Churubusco,%20Iztapalapa,%2009819%20Ciudad%20de%20M%C3%A9xico,%20CDMX,%20Mexico&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </div>
            <div className='contacts__feedback'>
                 <div className='contacts__feedback-wrapper'>
                     <p className='notification'>ANY QUESTIONS?</p>
                     <p className='heading40'>Drop us a line</p>
                     <div className='contacts__feedback-datablocks'>
                        {inputData.map(item=> <Input2 key={item[0]} typeInput={item[4]} formText={item[0]} placeholder={item[1]} height={item[2]} width={item[3]}></Input2>)}
                     </div>
                     <div className='contacts__feedback-agreement'>
                         <label className="agreementCheck">
                            <input className="checkboxFalse" type="checkbox" />
                            <span className="checkboxTrue checkboxTrue__contacts"></span>
                            I agree to receive communications from Createx Online School
                        </label>
                        <Button width={340}>Send message</Button>
                     </div>
                 </div>
                 
            </div>
        </section>
    )
}