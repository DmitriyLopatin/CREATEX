import './BlogCard.scss'
import BlogScreen0 from './blog_scrn0.svg'
import BlogScreen1 from './blog_scrn1.svg'
import BlogScreen2 from './blog_scrn2.svg'
import BlogScreen3 from './blog_scrn3.svg'
import BlogScreen4 from './blog_scrn4.svg'
import BlogScreen5 from './blog_scrn5.svg'
import BlogScreen6 from './blog_scrn6.svg'
import BlogScreen7 from './blog_scrn7.svg'
import BlogTypePodcast from './blog_Podcast.svg'
import BlogTypeArticle from './blog_article.svg'
import BlogTypeVide0 from './blog_play.svg'

let blogContent = [
    [BlogScreen0, BlogTypePodcast, 'Podcast', 'Listen', 'Marketing', 'September 4, 2020', 'What is traffic arbitrage and does it really make money?', 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...', '36 min'],
    [BlogScreen1, BlogTypeArticle, 'Article', 'Read', 'Development', 'September 1, 2020', 'How to choose the first programming language for a beginner', 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',''],
    [BlogScreen2, BlogTypeVide0, 'Video', 'Watch', 'Design', 'August 8, 2020', 'Should you choose a creative profession if you are attracted to creativity?', 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...', '40 min'],
    [BlogScreen3, BlogTypeArticle, 'Article', 'Read', 'HR & Recruiting', 'August 3, 2020', 'HR statistics: job search,  interviews, hiring and recruiting', 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',''],
    [BlogScreen4, BlogTypeVide0, 'Video', 'Watch', 'Management', 'August 2, 2020', 'What to do and who to talk to if you want to get feedback on the product', 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...', '36 min'],
    [BlogScreen5, BlogTypePodcast, 'Podcast', 'Liste', 'Design', 'July 28, 2020', 'What are color profiles and how they work in graphic design', 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...', '36 min'],
    [BlogScreen6, BlogTypeVide0, 'Video', 'Watch', 'Management', 'July 15, 2020', 'Startup: how to build a team that will live longer than a year', 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...', '45 min'],
    [BlogScreen7, BlogTypeArticle, 'Article', 'Read', 'Marketing', 'July 9, 2020', 'How to get customers to love your business from the start', 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...','']
]

export default function BlogCard(props) {

    return (
        <div className='blogCard'>
            <p className='blogCard_item'><img src={blogContent[props.num][1]} alt={blogContent[props.num][2]} /> &nbsp;{blogContent[props.num][2]}</p>
            <img src={blogContent[props.num][0]} alt="photo" />
            <p className='blogCard_info'>
                {blogContent[props.num][4]}
                <span className='blogCard_date'>{blogContent[props.num][5]}</span>
                <span className='blogCard_watch'>{blogContent[props.num][blogContent[props.num].length - 1]}</span>
            </p>
            <p className='blogCard_heading'>{blogContent[props.num][6]}</p>
            <p className='blogCard_text'>{blogContent[props.num][7]}</p>
            <p className='blogCard_type'><a href='#'>{blogContent[props.num][3]}</a></p>

        </div>
    )
}