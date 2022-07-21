import { useLocation } from 'react-router-dom'
import './BlogDetails.scss'
import { soc } from '../footer/Footer'
import { useState } from 'react'
import { cardNum } from '../courseDetails/CourseDetails'
import { BlogCardVertical, blogData } from '../teamInfo/TeamInfo'
import { Button } from '../UI/button/Button'


export default function BlogDetails() {

    let blogArrData = useLocation().state
    let [blogShift, setBlogShift] = useState(0)

    return (
        <section className='blogDetails'>
            <main>
                <article>
                    <div className='blogDetails__title'>
                        <span className='blogDetails__blogType' data={blogArrData.blogType[1]}>{blogArrData.blogType[0]}</span>
                        <span className='blogDetails__blogTheme'>{blogArrData.blogTheme}</span>
                    </div>
                    <p className='heading60 blogDetails__blogHeading'>{blogArrData.blogHeading}</p>
                    <div className='blogDetails__substring'>
                        <div className='blogDetails__meta'>
                            <p className='blogDetails__date'>{blogArrData.blogDate}</p>
                            <p className='blogDetails__lasting'>{blogArrData.blogLasting} <span>{blogArrData.blogAct}</span></p>
                        </div>
                        <div className='blogDetails__socials'>
                            <span>Share:</span>
                            {soc.map((item, index) => index == 0 || index == 1 || index == 5 ? <a href={item[1]} className='blogDetails__socials-icon' data={item[0]}></a> : null)}
                        </div>
                    </div>
                    <img className='blogDetails__img' src={blogArrData.blogBackground}></img>
                    <p className='blogDetails__mainText'>{blogArrData.blogContent.blogContentMain}</p>
                    <p className='blogDetails__text1'>{blogArrData.blogContent.blogContentText1}</p>
                    <p className='blogDetails__text1 blogDetails__text2'>{blogArrData.blogContent.blogContentText2}</p>
                    <div className='blogDetails__testimonials'>
                        <p className='blogDetails__testimonials-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.</p>
                    </div>
                    <p className='blogDetails__text1'>{blogArrData.blogContent.blogContentText3}</p>
                    <ul>
                        {blogArrData.blogContent.blogContentPoints.map(item => <li className='blogDetails__contentPoints'>{item}</li>)}
                    </ul>
                    <p className='blogDetails__text1'>{blogArrData.blogContent.blogContentText4}</p>
                    <div className='blogDetails__substring2 blogDetails__substring'>
                        <div className='blogDetails__tags'>
                            <p>Tags:</p>
                            <p className='blogDetails__tags-singleTag'>#learning</p>
                            <p className='blogDetails__tags-singleTag'>#HR</p>
                            <p className='blogDetails__tags-singleTag'>#self-development</p>
                        </div>
                        <div className='blogDetails__socials'>
                            <span>Share:</span>
                            {soc.map((item, index) => index == 0 || index == 1 || index == 5 ? <a href={item[1]} className='blogDetails__socials-icon' data={item[0]}></a> : null)}
                        </div>
                    </div>
                </article>
                <aside>

                </aside>
            </main>
            <div className='blogSubscribe'>
            </div>
            <div className='blogDetails__blogCarusel'>
                <p className='notification' >OUR BLOG</p>
                <div className='blogDetails__blogCarusel-nav'>
                    <p className='heading60'>You may also like</p>
                    <div className="blogDetails__blogArrows">
                        <span onClick={() => setBlogShift(blogShift < 0 ? blogShift += 418 : 0)}>
                            {String.fromCharCode(8592)}
                        </span>
                        <span onClick={() => setBlogShift(Math.abs(blogShift) < 418 * (cardNum.length - 1) ? blogShift -= 418 : 0)}>
                            {String.fromCharCode(8594)}
                        </span>
                    </div>
                </div>
                <div className='blogDetails__blogCarusel-content' onClick={() => window.scrollTo(0, 0)}>
                    {cardNum.map((item, index) => <BlogCardVertical num={index} marginRight={30} arr={blogData} blogShift={blogShift} />)}
                </div>
                <div className='blogDetails__blogCarusel-finish'>
                    <p >Do you want more articles, podcasts and videos?</p>
                    <Button width={158} link={"/blogs"}>Go to blog</Button>
                </div>
            </div>
        </section>
    )
}