import './HP_main.scss'
import main_redPoint from './main_redPoint.svg'
import showreel from './main_hover.svg'
import {Button}  from '../../UI/button/Button';

export default function Main(){
    return(
        <section className='main'>
                <div className='container'>
                       <div className='main-content'>
                            <div className='play_showreel'>
                                <a href="#"><img src={showreel} alt="" /></a>
                                <p className='play_showreel-text'> Play showreel</p>
                            </div>
                            <h1 className='header-text'>Enjoy studying with Createx Online Courses</h1>
                            <div className='btns'>
                                <Button width={148} link={"/about"}>About us</Button> 
                                <Button width={200} link={"/courses"}>Explore courses</Button> 
                            </div>
                       </div>
                        <div className="statistics">
                         <div className='wrapper'>
                                <div className="statistics_common">
                                    <p className='statistics_number'>1200</p>
                                    <p className='statistics_item'>Students graduated</p>
                                </div>
                                <img className='statistics_ellipse' src={main_redPoint} alt="red_elipse" />
                                <div className="statistics_common">
                                    <p className='statistics_number'>84</p>
                                    <p className='statistics_item'>Completed courses</p>
                                </div>
                                <img className='statistics_ellipse' src={main_redPoint} alt="red_elipse" />
                                <div className="statistics_common">
                                    <p className='statistics_number'>16</p>
                                    <p className='statistics_item'>Qualified tutors</p>
                                </div>
                                <img className='statistics_ellipse' src={main_redPoint} alt="red_elipse" />
                                <div className="statistics_common">
                                    <p className='statistics_number'>5</p>
                                    <p className='statistics_item'>Years of experience</p>
                                </div>
                         </div>
                        </div>
                </div>
            </section>
    )
}