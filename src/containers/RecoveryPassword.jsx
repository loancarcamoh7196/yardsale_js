import React from 'react';
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
    return (
        <div className='login'>
        <div className='form-container'>
            <img src='./logos/logo_yard_sale.svg' alt='' className='logo' />
            <h1 className='className'> ¡Email enviado! </h1>
            <p className='subtitle'> Por favor, compruebe su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña </p>

                
            <div className='email-image'>
                <img src='./icons/email.svg' alt='' srcset='' />
            </div>

            <input type='submit' value='Ingresar' className='primary-button login-button' />
            <p className='resend'>
                <span>No has recibido el email?</span>
                <a href='#'> Reenviar </a>
            </p>

        </div>
    </div>
    );
};

export default RecoveryPassword;