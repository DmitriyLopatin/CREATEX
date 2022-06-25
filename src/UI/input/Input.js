import './Input.scss'

export default function Input (props) {
    let style = {
        backgroundColor: 'white',
        width: props.width + 'px',
        height: props.height + 'px'
    }
    return (
        <input type="text" className='createx__menu-input' style={style} placeholder={props.placeholder} defaultValue={props.placeholder}/>
    )
}