import './CoursesMain.scss'
import { useState, useEffect } from 'react'


export default function CoursesMain() {
    const arr = [
        'All',
        'Marketing',
        'Management',
        'Design',
        'HR & Recruting',
        'Development'
    ]
    const [newClass, setNewClass] = useState(0)
    return (
        <>
            <section className='coursesMain'>
                <p className='notification'>ENJOY YOUR STUDYING!</p>
                <p className='heading'> Our online courses</p>
                <div className='coursesMain_menu'>
                    <div className='coursesMain_menu-searchItem' >
                        {arr.map((item, index) => <p className={newClass === index ? 'coursesMain_Red' : 'inactiv'} onClick={()=>setNewClass(index)}>{item} </p>)}
                    </div>
                    <input type="text" className='coursesMain_menu-input' placeholder='Search course...' />
                </div>
            </section>
        </>
    )

}

