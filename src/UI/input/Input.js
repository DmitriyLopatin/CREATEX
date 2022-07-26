import './Input.scss'

export  function Input (props) {
    let style = {
        
        width: props.width + 'px',
        height: props.height + 'px'
    }
    return (
        <input type="text" className='createx__menu-input createx__inputCommon' style={style} placeholder={props.placeholder} />
    )
}

export  function Input2 (props) {
    let style = {
        marginBottom: props.marginBottom + 'px',
        width: props.width + 'px',
        height: props.height + 'px',
    }
    return (
        <div className='createx__form' style={{marginBottom:props.marginBottom + 'px'}}>
            <p className='createx__form-text'>{props.formText}</p>
                {props.typeInput ==='input' ?
                    <input type={props.type == null?'text':props.type} className='createx__form-input createx__inputCommon' style={style} placeholder={props.placeholder} />:
                    <textarea  className='createx__form-input createx__inputCommon' style={style}  />}
        </div>
        
    )
}