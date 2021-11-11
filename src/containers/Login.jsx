import React from 'react';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className='login'>
            <div className='form-container'>
                <img src='./logos/logo_yard_sale.svg' alt='' className='logo' />
                <h1 className='className'> Crear una nueva contraseña </h1>
                <p className='subtitle'> Ingresa una nueva contraseña para tu cuenta </p>

                <form action='/' className='form'>
                    <label for='password' className='label'> Contraseña </label>
                    <input type='password' name='' id='password' placeholder='**********' className='input input-password'/>

                    <label for='password' className='label'> Contraseña </label>
                    <input type='password' name='' id='new-password' placeholder='**********' className='input input-password' />

                    <input type='submit' value='Confirmar' className='primary-button login-button' />
                </form>
            </div>
        </div>
    );
};

export default Login;