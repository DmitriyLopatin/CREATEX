import './HP_about.scss'
import {Button14}  from '../../button/Button.js';

export default function About(){
    return(
        <section className="hp_about">
                <div className="wrapper_about">
                    <div className="about_cratex">
                        <p className='about_cratex-wwa'>WHO WE ARE</p>
                        <h1 className='about_cratex-wc'>Why Createx?</h1>
                        <ul>
                            <li className='togo'>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li>Tincidunt sagittis neque sem ac eget.</li>
                            <li>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                        </ul>
                        <div className='about_btn'><Button14 width = {161}>More about us</Button14> </div>
                    </div>
                </div>
            </section>
    )
}