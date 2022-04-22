import './Homepage.scss';
import Main from './main/Main.js'
import About from './about/About.js';
import Courses from './courses/Courses.js';
import Benefits from './benefits/Benefits.js';
import Events from './events/Events'
import Subscribe from '../subscribe/Subscribe.js'
import  Certificate from './certificate/Certificate'
import  Team from './team/Team.js'
import  Blog from '../blogs/Blogs.js'


let Homepage = () => {
    return (
        <>
            <Main/>
            <About/>
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