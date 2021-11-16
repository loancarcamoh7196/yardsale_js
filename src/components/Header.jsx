import React, { useState } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';

// Importacion de Imagenes
import iconMenu from '@icons/icon_menu.svg';
import logoHeader from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);// Cambia el estado a la inversa
    };//Despligue de menu

    return (
        <nav>
        <img src={ iconMenu } alt='menu' className='header__menu' />
        <div className='header__navbar header__navbar--left'>
            <img src={ logoHeader } alt='' />
        
            <ul>
                <li><a href='#'>Todo</a></li>
                <li><a href='#'>Electronica</a></li>
                <li><a href='#'>Muebles</a></li>
                <li><a href='#'>Jugetes</a></li>
                <li><a href='#'>Otros</a></li>
            </ul>
        </div>
        <div className='header__navbar header__navbar--right'>
            <ul>
                <li className='navbar__email' onClick={ handleToggle }>
                    lolovely@something.com
                </li>
                <li className='navbar__shopping-cart'>
                    <img src={ iconShoppingCart } alt='icono carrito' />
                    <div>2</div>
                </li>
            </ul>
        </div>
        {toggle && <Menu />}
        
    </nav>
    );
};

export default Header;