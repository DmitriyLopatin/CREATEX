import './Testimonials.scss'
import Image1 from './testimonials_image1.svg'
import TestimonialsCard from './TestimonialsCard.js'
import React, { useState } from 'react'

let users = [
    [Image1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.', 'Eleanor Pena', 'Position, Course'],
    [Image1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. ', 'Eleanor Pena', 'Position, Course'],
    [Image1, 'Lorem ipsum .', 'Eleanor Pena', 'Position, Course'],
    [Image1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.', 'Eleanor Pena', 'Position, Course'],
    [Image1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.', 'Eleanor Pena', 'Position, Course'],

]


export default function Testimonials() {
    let [colorGray, setColorGray] = useState(0)
    let [z, setZ] = useState(0)
    let nextRight = ()=>{
        if (z < users.length-1){
            setZ(z + 1)
            setColorGray(colorGray -= 915)
        } 
    }
    let previousLeft = ()=>{
        if (z > 0){
            setZ(z-1)
            setColorGray(colorGray += 915)  
        }
    }
    return (
        <section className='testimonials'>
            <div className='testimonials_wrapper'>
                <p className='notificationCenter'>TESTIMONIALS</p>
                <p className='headingCenter60'>What our students say</p>
                <div className='testimonials_content'>
                    <span onClick={previousLeft}>{String.fromCharCode(8592)}</span>
                    <div className='testimonials_main'>
                        {users.map(item => <TestimonialsCard shift={colorGray} img={item[0]} text={item[1]} name={item[2]} position={item[3]}></TestimonialsCard>)}
                    </div>
                    <span onClick={nextRight}>{String.fromCharCode(8594)}</span>
    
                </div>
                <div className='testimonials_indicator'>
                    {users.map((item, index) => {
                        if (index == z){
                             return <span className='testimonials_gray'> &#8212;</span>
                        } else {
                            return <span> &#8212;</span>
                        }
                    })}
                </div>
            </div>
        </section>
    )
}