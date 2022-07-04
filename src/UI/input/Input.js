import './Input.scss'

export  function Input (props) {
    let style = {
        
        width: props.width + 'px',
        height: props.height + 'px'
    }
    return (
        <input type="text" className='createx__menu-input createx__inputCommon' style={style} placeholder={props.placeholder} defaultValue={props.placeholder}/>
    )
}

export  function Input2 (props) {
    let style = {
        width: props.width + 'px',
        height: props.height + 'px',
    }
    return (
        <div className='createx__form'>
            <p className='createx__form-text'>{props.formText}</p>
                {props.typeInput ==='input' ?
                    <input type="text" className='createx__form-input createx__inputCommon' style={style} placeholder={props.placeholder} defaultValue={props.placeholder}/>:
                    <textarea  className='createx__form-input createx__inputCommon' style={style}  defaultValue={props.placeholder}/>}
        </div>
        
    )
}