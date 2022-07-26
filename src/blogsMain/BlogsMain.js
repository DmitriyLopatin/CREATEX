import './BlogsMain.scss'
import { blogData, BlogCardVertical } from '../teamInfo/TeamInfo'
import { useEffect, useState } from 'react'
import { Input } from '../UI/input/Input'
import { Button } from '../UI/button/Button'


let menuArr = [
    ['All', ''],
    ['Article', '\ub900'],
    ['Video', '\ub903'],
    ['Podcast', '\ub904']]

export default function BlogsMain() {
    let numberBlogsOnPage = []                                 //amount of blogs on page
    let pageNumber = []                                        //amount of pages
    let [redClass, setRedClass] = useState(0)                  //set red class of filters ( Podcasts, Videos...)
    let [redClassOfPage, setRedClassOfPage] = useState(0)      //set red class of page number and arrow ( 1, 2...->)
    let [arrType, setArrType] = useState('All')                // filtered by type of blog ( Podcast, Article...)
    let [arrTheme, setArrTheme] = useState('All')              // filtered by theme of blog ( Design, Management...)

    let arrTypeTheme = blogData.filter(item =>                 // final output filtered array of blogs
        (item.blogTheme == arrTheme || arrTheme == 'All') && (item.blogType[0] == arrType || arrType == 'All'))

    for (let i = 0; i < arrTypeTheme.length / 8; i++) {
        pageNumber.push(i + 1)
    }
    // console.log(pageNumber.length)
    console.log(arrTypeTheme)

    for (let i = redClassOfPage * 8; i < (redClassOfPage + 1) * 8; i++) {
        if (i < arrTypeTheme.length) {
            numberBlogsOnPage.push(i)
        }
    }


    // console.log(redClassOfPage*8)
    // console.log(arrTypeTheme.length-(pageNumber.length-1-redClassOfPage)*8)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className='blogsMain'>
                <p className='notificationCenter'>OUR BLOG</p>
                <p className='headingCenter60'>Createx School Journal</p>
                <div className='blogsMain__menu'>
                    <div className='blogsMain__tabs'>
                        {menuArr.map((item, index) =>
                            <span className={redClass === index ? 'blogsMain__tabs-item blogsMain__tabs-red' : 'blogsMain__tabs-item'} onClick={() => { setRedClass(index); setRedClassOfPage(0); setArrType(item[0]) }} key={menuArr[index][1]} data={menuArr[index][1]}>{menuArr[index][0]}{index == 0 ? '' : 's'}</span>)}
                    </div>
                    <div className='blogsMain__tabs2'>
                        <p>Blog category</p>
                        <select name="blogsMain__select" id="blogsMain__select" onChange={event => (setArrTheme(event.target.value), setRedClassOfPage(0))}>
                            <option value="All">all themes</option>
                            <option value="Development">development</option>
                            <option value="Design">design</option>
                            <option value="HR & Recruiting">hr & recruting</option>
                            <option value="Marketing">marketing</option>
                            <option value="Management">management</option>
                        </select>
                        <Input width={285} height={44} placeholder={'Search blog'}></Input>
                    </div>
                </div>
                <div className='blogsMain__content'>
                    {numberBlogsOnPage.map((item, index) => <BlogCardVertical key={arrTypeTheme[index].blogDate} num={item} arr={arrTypeTheme}></BlogCardVertical>)}
                </div>
                <div className='blogsMain__pageId'>
                    {pageNumber.map((item, index) => <p style={redClassOfPage === index ? { color: 'red' } : { color: '#424551' }} onClick={() => (setRedClassOfPage(index), window.scrollTo(0, 300))}>{item}</p>)}
                    <p className={arrTypeTheme.length > 8 ? 'blogsMain__pageId-rightArrow' : 'inactiv'} onClick={() => {
                        if (pageNumber.length - 1 > redClassOfPage) {
                            setRedClassOfPage(redClassOfPage = redClassOfPage + 1)
                        }
                    }}></p>
                </div>
            </section>
            <BlogSubscribe />
        </>
    )
}

export const BlogSubscribe = () => {
    return (
        <div className='blogSubscribe'>
            <div className='blogSubscribe__wrapper'>
                <div className="blogSubscribe__content">
                    <p className="blogSubscribe__heading">Want to get the best articles weekly?
                        Subscribe to our newsletter!</p>
                    <div className="blogSubscribe__interface">
                        <Input placeholder={'Your working email'} typeInput={'input'} width={422} height={52}></Input>
                        <Button width={154}>Subscribe</Button>
                    </div>
                    <label className="agreementCheck">
                        <input className="checkboxFalse" type="checkbox" />
                        <span className="checkboxTrue"></span>
                        I agree to receive communications from Createx Online School
                    </label>
                </div>
            </div>
        </div>
    )
}