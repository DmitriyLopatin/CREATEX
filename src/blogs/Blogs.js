import './Blogs.scss'
import {Button} from '../button/Button.js'
import BlogCard from '../blogCard/BlogCard.js'

let blogsNum = [0,1,2]

export default function Blog(){
    return(
        <section className="blogs">
            <p className='blogs_heading'>OUR BLOG</p>
            <div className='blogs_notification'>
                <p>Latest posts</p>
                <Button>Go to blog</Button>
            </div>
            <div className='blogs_content'>
               {blogsNum.map(item=><BlogCard num={item}></BlogCard>)}
            </div>
        </section>
    )
}