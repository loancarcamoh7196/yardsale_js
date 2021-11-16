import React from 'react';
import Form from '../containers/Form';

const RecoveryPassword = () => {
    return (
        <Form>
            <img src='./logos/logo_yard_sale.svg' alt='' className='form__logo' />
            <h1 className='form__title'> Crear una nueva contraseña </h1>
            <p className='form__subtitle'> Ingresa una nueva contraseña para tu cuenta </p>

            <form action='/' className='form'>
                <label for='password' className='form_label'> Contraseña </label>
                <input type='password' name='' id='password' placeholder='**********' className='form__input form__input--password' />

                <label for='password' className='form_label'>Reingresa Contraseña </label>
                <input type='password' name='' id='new-password' placeholder='**********' className='form__input form__input--password'/>

                <input type='submit' value='Confirmar' className='primaryButton form__button' />
            </form>
        </Form>
    );
};

export default RecoveryPassword;