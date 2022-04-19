import './Team.scss'
import TeamCard from '../../teamCard/Team-Card.js'
import { useState } from 'react'


export default function Team() { 
 

    let [st10, setST10] = useState([0, 1, 2, 3])
    function next() {
        if (st10[st10.length - 1] < 7) {
            st10.shift()
            st10.push(st10[st10.length - 1] + 1)
            setST10(arr => [...st10])
        } else {
            setST10(arr => [...st10])
        }
    }
    function previous() {
        if (st10[0] !== 0) {
            st10.unshift(st10[0] - 1)
            st10.pop(st10[st10.length - 1] - 1)
            setST10(arr => [...st10])
        } else {
            setST10(arr => [...st10])
        }
    }
    return (
        <section className='team'>
            <div className='team_container'>
                <p className='team_header'>BEST TUTORS ARE ALL HERE</p>
                <div className='team_nav'>
                    <p className='team_title'>Meet our team</p>
                    <div className='team_arrows'>
                        <span onClick={previous}>{String.fromCharCode(8592)}</span>
                        <span onClick={next}>{String.fromCharCode(8594)}</span>
                    </div>
                </div>

                <div className='team_members'>
                    {st10.map(item => <TeamCard number={item} />)}
                </div>

            </div>
        </section>
    )
}