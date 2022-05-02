import './CoursesMain.scss'
import React, { useRef } from 'react'
import Testimonials from '../tertimonials/Testimonials'
import Certificate from '../homepage/certificate/Certificate'
import Subscribe from '../subscribe/Subscribe'
import { useEffect, useState } from 'react'
import { courseData, TeamCardVertical } from '../teamInfo/TeamInfo'
import loader from './Convert.svg'


export default function CoursesMain() {
    let [arrNew, setArrNew] = useState(courseData)
    let [numberCourse, setNumberCourse] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
    let courseLoader = React.createRef()
    let allDelete = useRef()
    let marketing = courseData.filter(item => item.courseArea == 'Marketing')
    let management = courseData.filter(item => item.courseArea == 'Management')
    let hr_recruiting = courseData.filter(item => item.courseArea == 'HR & Recruting')
    let design = courseData.filter(item => item.courseArea == 'Design')
    let development = courseData.filter(item => item.courseArea == 'Development')

    function marketingActiv(event){
        setArrNew(marketing)
        setNumberCourse(marketing)
        courseLoader.current.style.display = 'none'
        allDelete.current.classList.remove('coursesMain_Red')
        event.target.classList.add('coursesMain_Red')
        
    }
    function managementActiv(event){
        setArrNew(management)
        setNumberCourse(management)
        courseLoader.current.style.display = 'none'
        allDelete.current.classList.remove('coursesMain_Red')
        event.target.classList.add('coursesMain_Red')
        
    }
    function hrActiv(event){
        setArrNew(hr_recruiting)
        setNumberCourse(hr_recruiting)
        courseLoader.current.style.display = 'none'
        allDelete.current.classList.remove('coursesMain_Red')
        event.target.classList.add('coursesMain_Red')
        
    }
    function designActiv(event){
        setNumberCourse(design)
        setArrNew(design)
        courseLoader.current.style.display = 'none'
        allDelete.current.classList.remove('coursesMain_Red')
        event.target.classList.add('coursesMain_Red')
    }
    function devActiv(event){
        setArrNew(development)
        setNumberCourse(development)
        courseLoader.current.style.display = 'none'
        allDelete.current.classList.remove('coursesMain_Red')
        event.target.classList.add('coursesMain_Red')
    }
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
    
    console.log(allDelete)
    return (
        <>
            <section className='coursesMain'>
                <p className='notification'>ENJOY YOUR STUDYING!</p>
                <p className='heading'> Our online courses</p>
                <div className='coursesMain_menu'>
                    <div className='coursesMain_menu-searchItem' ref={allDelete}>
                        <p  className='coursesMain_Red' >All <span>{courseData.length}</span></p>
                        <p  onClick={marketingActiv}>Marketing <span>{marketing.length}</span></p>
                        <p  onClick={managementActiv}>Management <span>{management.length}</span></p>
                        <p  onClick={hrActiv}>HR & Recruiting <span>{hr_recruiting.length}</span></p>
                        <p  onClick={designActiv}>Design <span>{design.length}</span></p>
                        <p  onClick={devActiv}>Development <span>{development.length}</span></p>
                    </div>
                    <input type="text" className='coursesMain_menu-input' placeholder='Search course...' />
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