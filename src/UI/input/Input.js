import './Input.scss'

export default function Input (props) {
    let style = {
        width: props.width + 'px',
    }
    return (
        <input type="text" className='createx__menu-input' style={style} placeholder={props.placeholder} defaultValue={props.placeholder}/>
    )
}