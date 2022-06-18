import './CoursesMain.scss'
import React  from 'react'
import Testimonials from '../tertimonials/Testimonials'
import Certificate from '../homepage/certificate/Certificate'
import Subscribe from '../subscribe/Subscribe'
import { useEffect, useState } from 'react'
import { courseData, TeamCardVertical } from '../teamInfo/TeamInfo'
import loader from './Convert.svg'
import Input from '../UI/input/Input'


let newArr = ['All','Marketing', 'Management', 'HR & Recruting', 'Design', 'Development']
let filtered = newArr.map((item,index)=> index === 0 ? courseData : courseData.filter(cour=>cour.courseArea == item))
    
// console.log(filtered)

export default function CoursesMain() {
    let [arrNew, setArrNew] = useState(courseData)
    let [numberCourse, setNumberCourse] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
    let [redClass,setRedClass] = useState()
    let courseLoader = React.createRef()
   

    function addCourseNumber() {
        if (numberCourse.length <= 17) {
            if ( courseData.length - numberCourse.length > 2) {
                numberCourse.push(1, 1, 1)
                setNumberCourse(arr => [...numberCourse])
            } else {
                numberCourse.push(1, 1)
                setNumberCourse(arr => [...numberCourse])
                courseLoader.current.style.display = 'none'
            }
        } 
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    console.log(numberCourse)
    return (
        <>
            <section className='coursesMain'>
                <p className='notificationCenter'>ENJOY YOUR STUDYING!</p>
                <p className='headingCenter60'> Our online courses</p>
                <div className='coursesMain_menu'>
                    <div className='coursesMain_menu-searchItem'>
                        {filtered.map((item,index)=><p className={redClass === index ? 'coursesMain_Red' : 'inactiv'} onClick={()=> {setRedClass(index); setArrNew(item); setNumberCourse(item); courseLoader.current.style.display = 'none'}
                            }>{newArr[index]}<span>{item.length}</span></p>)}
                   
                    </div>
                    <Input placeholder={'Search course...'} width={315}/>
                </div>
                <div className='coursesMain_content'>
                    {numberCourse.map((item, index) => <TeamCardVertical num={index} arr={arrNew}/>)}
                </div>
                <div onClick={addCourseNumber} className='coursesMain_loader' ref={courseLoader}>
                    <img src={loader} alt="" />
                    <p >Load more</p>
                </div>
            </section>
            <Testimonials></Testimonials>
            <Certificate></Certificate>
            <Subscribe></Subscribe>
        </>
    )
    
}