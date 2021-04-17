import React from 'react';
import './style.scss'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button';


const Login = () => {
    return (
        <>
            <div className="__h-screen __flex">
                <div className="left-bar">
                    <span className="material-icons icon__back">west</span>
                    <p className="title">Bem vindo ao <strong><span>FIT</span>DELIVERY!</strong></p>
                    <p className="subtitle">Comida feita com sabor e inteligência.</p>

                    <div style={{marginTop: '5em'}}>
                        <div>
                            <Input placeholder="E-mail" type="email"/>
                        </div>
                        <div className="__mt-1">
                            <Input placeholder="Password" type="password" />
                        </div>
                    </div>

                 

                    <div style={{ marginTop: '5em', display: 'flex', justifyContent: 'flex-end'}}>
                       <Button content="Entrar" width="40%" height="40px" bgColor="#000"/>
                    </div>
                </div>
                <div className="bg-login">
                </div>
            </div>
        </>
    )
}

export default Login;