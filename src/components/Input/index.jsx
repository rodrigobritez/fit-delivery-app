import React, { useState } from 'react';
import './style.scss'


export const Input = ({placeholder, type}) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
        <>
        {type === "password" && 
        <>
        <div className="input-password-container">
            <input className="input" placeholder={placeholder} type={!showPassword ? 'text': 'password'}/>
            <span onClick={() => setShowPassword(!showPassword)} className="material-icons">{showPassword ? 'visibility':'visibility_off'}</span>
        </div>
        </>
        }

        {(type === "email" || type === "text") && <input className="input" placeholder={placeholder} type={type}/>}
        </>
    )
}