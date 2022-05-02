import  classess from './Button.module.css'
import {Link} from 'react-router-dom'


export  function Button({children, ...props}){
    // let url = useLocation()
    return(
        <Link to={`${props.link}`} className={classess.btn}>{children}</Link>
    )
}
export  function Button14({children, ...props}){
    return(
        <a href='#' className={classess.btn14}>{children}</a>
    )
}
