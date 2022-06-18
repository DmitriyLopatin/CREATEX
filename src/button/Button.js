import  classess from './Button.module.css'
import {Link} from 'react-router-dom'


export  function Button({children, ...props}){
    let style = {
        width : props.width + 'px',
    }
    return(
        <Link to={`${props.link}`} className={classess.btn} style={style}>{children}</Link>
    )
}
export  function Button14({children, ...props}){
    let style = {
        width : props.width + 'px',
    }
    return(
        <Link to={`${props.link}`} className={classess.btn14} style={style}>{children}</Link>
    )
}
