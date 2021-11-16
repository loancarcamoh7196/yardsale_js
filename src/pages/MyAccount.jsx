import React from 'react';
import Form from '../containers/Form';

import '@styles/CreateAccount.scss';

const MyAccount = () => {
    return (
        <Form>
            <h1 className='form__title form__title--justify'> Mi cuenta </h1>

            <form action='/' className='form'>
                <div>
                    <label for='name' className='form__label'>Nombre</label>
                    <p className='form__value--text'>Lo Lovely</p>

                    <label for='email' className='form__label'> Email </label>
                    <p className='form__value--text'>lolovely@something.com</p>

                    <label for='password' className='form__label'> Contraseña </label>
                    <p className='form__value--text'>**********</p>
                </div>

                <div>
                    <input type='submit' value='Editar' className='secundary-button form__button' />
                </div>
            </form>
        </Form>
    );
};

export default MyAccount;