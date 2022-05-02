import './Courses.scss'
import Marvin from './Marvin_McKinney.jpg';
import Li from './Alex_Li.jpg';
import Bell from './Jerome_Bell.jpg';
import Watson from './Kristine_Watson.jpg';
import Russell from './Dianne_Russell.jpg';
import Guy from './Guy_Hawkins.jpg';
import Card from './Card.js';
import { Button } from '../../button/Button.js'



const courses = [
    { 
        ava: Bell, position: 'Marketing', course: 'The Ultimate Google Ads Training Course', cost: '$100', author: 'by Jerome Bell', color: '#03CEA4' },
    { 
        ava: Marvin, position: 'Management', course: 'Prduct Management Fundamentals', cost: '$480', author: 'by Marvin McKinney', color: '#5A87FC' },
    { 
        ava: Li, position: 'HR & Recruting', course: 'HR\u00a0 Management and Analytics', cost: '$200', author: 'by Leslie Alexander Li', color: '#F89828' },
    { 
        ava: Watson, position: 'Marketing', course: 'Brand Management & PR Communications', cost: '$530', author: 'by Kristin Watson', color: '#03CEA4' },
    { 
        ava: Russell, position: 'Management', course: 'Business Development Management', cost: '$400', author: 'by Dianne Russell', color: '#5A87FC' },
    { 
       ava: Guy, position: 'Design', course: 'Graphic Design Basic', cost: '$500', author: 'by Guy Hawkins', color: '#F52F6E' }
]

export default function Courses() {
    return (
        <section className="courses">
            
                <p className='courses_ready'>READY TO LEARN?</p>
                <div className='courses-subheader'>
                    <p className='courses_feature'>Featured Courses</p>
                    <Button link={"/courses"}>View all courses</Button>
                </div>
                <div className='courses_details'>
                    {courses.map(item=><Card path={item.ava} position={item.position} cor={item.course} cost={item.cost} aut={item.author} col={item.color}></Card>)}
                </div>
        
        </section>
    )
}