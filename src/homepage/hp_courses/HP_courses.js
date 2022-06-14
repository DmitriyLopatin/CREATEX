import './HP_courses.scss'
import { Button } from '../../button/Button.js'
import { TeamCardHorizontal } from '../../teamInfo/TeamInfo'
import {useState} from 'react'

let cardNum = [0, 1, 2, 3, 4, 5];


export default function Courses() {
    let [courseShift, setCourseShift] = useState(0)
    return (
        <section className="courses">

            <p className='courses_ready'>READY TO LEARN?</p>
            <div className='courses-subheader'>
                <p className='courses_feature'>Featured Courses</p>
                <Button link={"/courses"} width={203}>View all courses</Button>
            </div>
            <div className='courses_details'>
                {cardNum.map((item, index) => <TeamCardHorizontal num={index} courseShift={courseShift} />)}
            </div>

        </section>
    )
}