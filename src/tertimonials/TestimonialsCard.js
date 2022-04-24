import './TestimonialsCard.scss'

export default function TestimonialsCard(props) {
    return (
        <div className='testimonials_info'  style={{transform: `translateX(${props.shift}px)`}}>
            <p className='testimonials_info-text'>{props.text}
            </p>
            <div className='testimonials_person'>
                <img src={props.img} alt="" />
                <div className='testimonials_person-data'>
                    <p className='testimonials_person-name'>{props.name}</p>
                    <p className='testimonials_person-position'>{props.position}</p>
                </div>
            </div>
        </div>
    )
}