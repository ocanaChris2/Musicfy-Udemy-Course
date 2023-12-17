import React from 'react';
import { Button } from 'semantic-ui-react'
import "./AuthOptions.scss"

export function AuthOptions(props) {
    const { openLogin, openRegister } = props;


    return (
        <div className="auth-options">
            <h1>Millones de  canciones, gratis en Musicfy</h1>

            <Button className='register' primary onClick={openRegister}>
                Registro
            </Button>
            <Button className='login 'secondary onClick={openLogin}>
                 Login 
            </Button>
        </div>
    );
}