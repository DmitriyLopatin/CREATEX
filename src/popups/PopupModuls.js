import './PopupModuls.scss'
import { useState } from 'react'
import { Input2 } from '../UI/input/Input'
import { Button } from '../UI/button/Button'
import { soc } from '../footer/Footer'
import { useEffect } from 'react'


export const SignIn = ({ open, close, openSignUp }) => {

    let [inputType, setInputType] = useState('password')
    // let [displayMode, setDisplayMode] = useState(props.open)


    console.log(close)
    return (
        <section className='signForm' style={{ display: open }}>
            <div className='signForm__content'>
                <div className='signForm__main'>
                    <span className='signForm__close' onClick={() => close()}></span>
                    <p className='signForm__id'>Sign in</p>
                    <p className='signForm__notification'>Sign in to your account using email and password provided during registration.</p>
                    <Input2 formText={'Email'} placeholder={'Your working email'} typeInput={'input'} width={390} height={44} marginBottom={10}></Input2>
                    <Input2 formText={'Password'} typeInput={'input'} type={inputType} width={390} height={44} marginBottom={10}></Input2>
                    <div className='signForm__meta'>
                        <label className="agreementCheck">
                            <input className="checkboxFalse" type="checkbox" />
                            <span className="checkboxTrue"></span>
                            <span className='signForm__keepForm'>Keep me signed in</span>
                        </label>
                        <span className='signForm__passwordHelp'>Forgot passwor?</span>
                    </div>
                    <Button width={390}>Sign in</Button>
                    <p className='signForm__keepForm signForm__margins'>Don't have an account? <span className='signForm__passwordHelp' onClick={()=>{openSignUp();close()}}>Sign up</span></p>
                </div>
                <hr></hr>
                <p className='signForm__notification'>Or sign in with</p>
                <div className='signForm__soc'>
                    {soc.map((item, index) => index == 0 || index == 1 || index == 5 ? <a href={item[1]} className='blogDetails__socials-icon' data={item[0]}></a> : null)}
                </div>
            </div>
        </section>
    )
}

export const SignUp = ({open, close, openSignIn}) => {
    let [inputType, setInputType] = useState('password')
    return (
        <>
            <section className='signForm' style={{ display: open }}>
                <div className='signForm__content'>
                    <div className='signForm__main'>
                        <span className='signForm__close' onClick={() => close()}></span>
                        <p className='signForm__id'>Sign up</p>
                        <p className='signForm__notification'>Registration takes less than a minute but gives you full control over your studying.</p>
                        <Input2 formText={'Email'} placeholder={'Your working email'} typeInput={'input'} width={390} height={44} marginBottom={10}></Input2>
                        <Input2 formText={'Password'} typeInput={'input'} type={inputType} width={390} height={44} marginBottom={10}></Input2>
                        <Input2 formText={'Confirm password'} typeInput={'input'} type={inputType} width={390} height={44} marginBottom={10}></Input2>
                        <div className='signForm__meta'>
                            <label className="agreementCheck">
                                <input className="checkboxFalse" type="checkbox" />
                                <span className="checkboxTrue"></span>
                                <span className='signForm__keepForm'>Remember me</span>
                            </label>
                            <span className='signForm__passwordHelp'>Forgot passwor?</span>
                        </div>
                        <Button width={390}>Sign up</Button>
                        <p className='signForm__keepForm signForm__margins'>Already have an account? <span className='signForm__passwordHelp' onClick={()=>{openSignIn();close()}}>Sign in</span></p>
                    </div>
                    <hr></hr>
                    <p className='signForm__notification'>Or sign in with</p>
                    <div className='signForm__soc'>
                        {soc.map((item, index) => index == 0 || index == 1 || index == 5 ? <a href={item[1]} className='blogDetails__socials-icon' data={item[0]}></a> : null)}
                    </div>
                </div>
            </section>
        </>
    )
}