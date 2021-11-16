import React from 'react';
import Form from '@containers/Form';

import formIcon from '@logos/logo_yard_sale.svg';

const Login = () => {
    return (
        <Form>
            <img src={ formIcon } alt='logo tienda' className='form__logo' />

            <form action="/" className="form">

                <label for="email" className="form__label"> Email </label>
                <input type="email" name="" id="email" placeholder="lolovely@something.com" className="form__input form__input--email" />

                <label for="password" className="form__label"> Contraseña </label>
                <input type="password" name="" id="password" placeholder="**********" className="form__input " />

                <input type="submit" value="Inicia Sesión" className="primary-button form__button" />

                <a href="#">Olvide mi contraseña</a>
            </form>

            <button className="secundary-button signup__button">
                Registrarse
            </button>
        </Form>  
    );
};

export default Login;