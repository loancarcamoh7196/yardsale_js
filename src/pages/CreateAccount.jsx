import React from 'react';
import Form from '../containers/Form';

const CreateAccount = () => {
    return (
        <Form>
            <h1 className='title'> Crea tu cuenta </h1>

            <form action='/' className='form'>
                <div>
                    <label for='name' className='form__label'>Nombre</label>
                    <input type='text' name='' id='name' placeholder='Lo Lovely' className='form__input form__input--name' />

                    <label for='email' className='form__label'> Email </label>
                    <input type='email' name='' id='email' placeholder='lolovely@something.com' className='form__input form__input--email' />

                    <label for='password' className='form__label'> Contraseña </label>
                    <input type='password' name='' id='password' placeholder='**********' className='form__input form__input--password' />
                </div>

                <div>
                    <input type='submit' value='Registrarse' className='secundaryButton form__button' />
                    <span className='resend__text'>Estoy registrado <a href='#'>Inicia sesion</a></span>
                </div>
            </form>
        </Form>
    );
};

export default CreateAccount;