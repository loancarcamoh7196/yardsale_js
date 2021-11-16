import React from 'react';
import Form from '../containers/Form';

const RecoveryPassword = () => {
    return (
        <Form>
            <img src='./logos/logo_yard_sale.svg' alt='' className='form__logo' />
            <h1 className='form__title'> ¡Email enviado! </h1>
            <p className='form__subtitle'> 
                Por favor, compruebe su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña 
            </p>

                
            <div className='form__email--image'>
                <img src='./icons/email.svg' alt='' srcset='' />
            </div>

            <input type='submit' value='Ingresar' className='primaryButton form__button' />
            <p className='resend__text'>
                <span>No has recibido el email?</span>
                <a href='#'> Reenviar </a>
            </p>

        </Form>

    );
};

export default RecoveryPassword;