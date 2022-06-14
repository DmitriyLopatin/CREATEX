import './Homepage.scss';
import Main from './main/Main.js'
import HP_about from './hp_about/HP_about.js';
import Courses from './hp_courses/HP_courses.js';
import Benefits from './benefits/Benefits.js';
import HP_events from './hp_events/HP_events'
import Subscribe from '../subscribe/Subscribe.js'
import  Certificate from './certificate/Certificate'
import  Team from './team/Team.js'
import  Blog from '../blogs/Blogs.js'
import {useEffect} from 'react'


let Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Main/>
            <HP_about/>
            <Courses/>
            <Benefits/>
            <HP_events/>
            <Certificate/>
            <Team/>
            <Blog/>
            <Subscribe/>
        </>
    )
}
export default Homepage 