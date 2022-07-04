import './HP_blogs.scss'
import {Button} from '../../UI/button/Button'
import BlogCard from '../../blogCard/BlogCard.js'

let blogsNum = [0,1,2]

export default function Blog(){
    return(
        <section className="blogs">
            <p className='notification'>OUR BLOG</p>
            <div className='blogs_notification'>
                <p>Latest posts</p>
                <Button width={158}>Go to blog</Button>
            </div>
            <div className='blogs_content'>
               {blogsNum.map(item=><BlogCard num={item}></BlogCard>)}
            </div>
        </section>
    )
}