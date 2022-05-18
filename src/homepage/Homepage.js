import './Homepage.scss';
import Main from './main/Main.js'
import HP_about from './about/HP_about.js';
import Courses from './courses/Courses.js';
import Benefits from './benefits/Benefits.js';
import Events from './events/Events'
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
            <Events/>
            <Certificate/>
            <Team/>
            <Blog/>
            <Subscribe/>
        </>
    )
}
export default Homepage 