import './Homepage.scss';
import HP_main from './hp_main/HP_main.js'
import HP_about from './hp_about/HP_about.js';
import HP_courses from './hp_courses/HP_courses.js';
import HP_benefits from './hp_benefits/HP_benefits.js';
import HP_events from './hp_events/HP_events'
import Subscribe from '../subscribe/Subscribe.js'
import HP_certificate from './hp_certificate/HP_certificate'
import HP_team from './hp_team/HP_team.js'
import HP_blogs from './hp_blogs/HP_blogs.js'
import { useEffect } from 'react'


let Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <HP_main />
            <HP_about />
            <HP_courses />
            <HP_benefits />
            <HP_events />
            <HP_certificate />
            <HP_team />
            <HP_blogs />
            <Subscribe />
        </>
    )
}
export default Homepage 