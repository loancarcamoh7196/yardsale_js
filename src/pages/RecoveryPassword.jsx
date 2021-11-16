import React from 'react';
import Form from '@containers/Form';

import formLogo from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {
    return (
        <Form>
            <img src={ formLogo } alt='logo tienda' className='form__logo' />
            <h1 className='form__title'> Crear una nueva contraseña </h1>
            <p className='form__subtitle'> Ingresa una nueva contraseña para tu cuenta </p>

            <form action='/' className='form'>
                <label htmlFor='password' className='form_label'> Contraseña </label>
                <input type='password' name='' id='password' placeholder='**********' className='form__input form__input--password' />

                <label htmlFor='password' className='form_label'>Re ingresa Contraseña </label>
                <input type='password' name='' id='new-password' placeholder='**********' className='form__input form__input--password'/>

                <input type='submit' value='Confirmar' className='primary-button form__button' />
            </form>
        </Form>
    );
};

export default RecoveryPassword;