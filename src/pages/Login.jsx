import React, { useRef } from 'react';
import Form from '@containers/Form';

import formIcon from '@logos/logo_yard_sale.svg';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const formData = new FormData( form.current );
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    };
    
    return (
        <Form>
            <img src={ formIcon } alt='logo tienda' className='form__logo' />

            <form action='/' className='form' ref={ form } >

                <label htmlFor='email' className='form__label'> Email </label>
                <input type='email' name='email' placeholder='lolovely@something.com' className='form__input form__input--email' />

                <label htmlFor='password' className='form__label'> Contraseña </label>
                <input type='password' name='password' placeholder='**********' className='form__input ' />

                <button type='submit' value='' className='primary-button form__button' onClick={ handleSubmit } > Inicia Sesión </button>

                <a href='#'>Olvide mi contraseña</a>
            </form>

            <button className='secundary-button signup__button' >
                Registrarse
            </button>
        </Form>  
    );
};

export default Login;