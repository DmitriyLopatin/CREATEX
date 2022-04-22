import './Team-Card.scss'
import Brooklyn from './Brooklyn.svg'
import Cody from './Cody.svg'
import Jerome from './Jerome.svg'
import Kathryn from './Kathryn.svg'
import Kristin from './Kristin.svg'
import Li from './Li.svg'
import Marvin from './Marvin.svg'
import Dianne from './Dianne.svg'
import f from './Facebook.svg'
import i from './Instagram.svg'
import li from './Linked-In.svg'
import React from 'react'


const teamdata = [
    [Dianne, 'Founder and CEO', 'Dianne Russell','https://www.facebook.com/dianne.russell.7965'],
    [Jerome, 'Founder and Program Director', 'Jerome Bell','https://www.facebook.com/profile.php?id=100011012733715'],
    [Kristin, 'Marketer, Curator of Marketing Course', 'Kristin Watson','https://www.facebook.com/kristin.watson.585'],
    [Marvin, 'PM, Curator of Management Course', 'Marvin McKinney','https://www.facebook.com/marvin.mckiney'],
    [Li, 'Curator of HR & Recruting Course', 'Leslie Alexander Li','https://www.facebook.com/leslie.alexander.9216'],
    [Kathryn, 'Analyst and Marketing specialist', 'Kathryn Murphy','https://www.facebook.com/profile.php?id=100078710676692'],
    [Brooklyn, 'Curator of Development Course', 'Brooklyn Simmons','https://www.facebook.com/brooklyn.simmons3'],
    [Cody, 'UX Designer, Curator of Design Course', 'Cody Fisher','https://www.facebook.com/cody.fisher.14811']
]

export default function TeamCard(props) {
    let social = React.createRef()
    let style = {
        background: "url(" + teamdata[props.number][0] + ")",
    }
    function hover(event){
        style = event.target.style.background = `linear-gradient(180deg, rgba(30, 33, 44, 0) 43.9%, rgba(30, 33, 44, 0.03) 55.21%, rgba(30, 33, 44, 0.33) 68.73%, rgba(30, 33, 44, 0.56) 76.17%, rgba(30, 33, 44, 0.768225) 83.75%, rgba(30, 33, 44, 0.92) 91.49%, #1E212C 100%), url(${teamdata[props.number][0]} )`;
        social.current.style.display = 'flex'
    }
    function hoverOff(event){
        style = event.target.style.background = `url(${teamdata[props.number][0]}`
        social.current.style.display = 'none'
    }
    return (
        <div className="teamcard">
            <div className='teamcard__shadow' style={style} onMouseEnter={hover} onMouseLeave={hoverOff}>
                <div className='teamcard__socials' ref={social}>
                    <a href={teamdata[props.number][3]} target='_blank'><img src={f} alt="facebook" /></a>
                    <a href=""><img src={i} alt="instagram" /></a>
                    <a href=""><img src={li} alt="linked-in" /></a>
                </div>
            </div>
            <div className='teamcard__descriprion'>
                <p className='teamcard__name'>{teamdata[props.number][2]}</p>
                <p className='teamcard__position'>{teamdata[props.number][1]}</p>
            </div>
        </div>
    )
}