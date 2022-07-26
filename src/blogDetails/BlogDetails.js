import { Link, useLocation } from 'react-router-dom'
import './BlogDetails.scss'
import { soc } from '../footer/Footer'
import { useState } from 'react'
import { cardNum } from '../courseDetails/CourseDetails'
import { BlogCardVertical, blogData } from '../teamInfo/TeamInfo'
import { Button } from '../UI/button/Button'
import { useEffect } from 'react'
import { Input } from '../UI/input/Input'
import { BlogSubscribe } from '../blogsMain/BlogsMain'



export default function BlogDetails() {

    let blogArrData = useLocation().state
    let [blogShift, setBlogShift] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                    <Input width={342} height={44} placeholder={'Search blog...'}></Input>
                    <p className='blogDetails__aside-header'>AUTHOR</p>
                    <div className='blogDetails__aside'>
                        <img className='blogDetails__aside-photo' src={blogArrData.blogAuthor.photo} alt="" />
                        <div className='blogDetails__aside-right'>
                            <p className='blogDetails__aside-name'>{blogArrData.blogAuthor.name}</p>
                            <p className='blogDetails__aside-position'>{blogArrData.blogAuthor.position}</p>
                            <div className='blogDetails__aside-socials'>
                                <a className='blogDetails__socials-icon' href={soc[4][1]} data={soc[4][0]}></a>
                                <a className='blogDetails__socials-icon' href={soc[1][1]} data={soc[1][0]}></a>
                                <a className='blogDetails__socials-icon' href={soc[5][1]} data={soc[5][0]}></a>
                            </div>
                        </div>
                    </div>
                    <p className='blogDetails__aside-header'>TRENDING ARTICLES</p>

                    {cardNum.map((item, index) => {
                        if (index < 3) return (
                            <div className='blogDetails__aside blogDetails__aside-bottom'>
                                <img className='blogDetails__aside-photo' src={blogData[index].blogBackground} />
                                <div className='blogDetails__aside-right'>
                                    <p className='blogDetails__aside-position blogDetails__date'>{blogData[index].blogDate}</p>
                                    <Link to={{ pathname: `/blogs/${blogData[index].blogHeading}` }} state={blogData[index]}><p className='blogDetails__aside-blogHeading'>{blogData[index].blogHeading}</p></Link>
                                </div>
                            </div>
                        )
                    })}
                    <p className='blogDetails__aside-tags'>TAGS</p>
                    <p className='blogDetails__tags-singleTag blogDetails__aside-singleTag '>#marketing</p>
                    <p className='blogDetails__tags-singleTag blogDetails__aside-singleTag'>#recruiting</p>
                    <p className='blogDetails__tags-singleTag blogDetails__aside-singleTag'>#coding</p>
                    <p className='blogDetails__tags-singleTag blogDetails__aside-singleTag'>#learning</p>
                    <p className='blogDetails__tags-singleTag blogDetails__aside-singleTag'>#HR</p>
                    <p className='blogDetails__tags-singleTag blogDetails__aside-singleTag'>#self-development</p>
                </aside>
            </main>
            <BlogSubscribe/>
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