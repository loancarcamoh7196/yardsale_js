import React from 'react';
import Form from '@containers/Form';
import '@styles/SendEmail.scss';

import formLogo from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';

const SendEmail = () => {
    return (
        <Form>
            <img src={ formLogo } alt='' className='form__logo' />
            <h1 className='form__title'> ¡Email enviado! </h1>
            <p className='form__subtitle'> 
                Por favor, compruebe su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña 
            </p>

                
            <div className='form__email-image'>
                <img src={ iconEmail } alt='' srcset='' />
            </div>

            <input type='submit' value='Ingresar' className='primary-button form__button' />
            <p className='resend__text'>
                <span>No has recibido el email?</span>
                <a href='#'> Reenviar </a>
            </p>

        </Form>
    );
};

export default SendEmail;