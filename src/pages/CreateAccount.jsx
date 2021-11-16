import React from 'react';
import Form from '@containers/Form';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <Form>
            <h1 className='form__title form__title--justify'> Crea tu cuenta </h1>

            <form action='/' className='form'>
                <div>
                    <label htmlFor='name' className='form__label'>Nombre</label>
                    <input type='text' name='' id='name' placeholder='Lo Lovely' className='form__input form__input--name' />

                    <label htmlFor='email' className='form__label'> Email </label>
                    <input type='email' name='' id='email' placeholder='lolovely@something.com' className='form__input form__input--email' />

                    <label htmlFor='password' className='form__label'> Contraseña </label>
                    <input type='password' name='' id='password' placeholder='**********' className='form__input form__input--password' />
                </div>

                <div>
                    <input type='submit' value='Registrarse' className='primary-button form__button' />
                    <span className='resend__text'>Estoy registrado <a href='#'>Inicia sesion</a></span>
                </div>
            </form>
        </Form>
    );
};

export default CreateAccount;