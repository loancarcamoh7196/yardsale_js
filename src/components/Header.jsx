import React from 'react';
import '@styles/Header.scss';

// Importacion de Imagenes
import iconMenu from '@icons/icon_menu.svg';
import logoHeader from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
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
                <li className='navbar__email'>
                    <a href='#'>lolovely@something.com</a>
                </li>
                <li className='navbar__shopping-cart'>
                    <img src={ iconShoppingCart } alt='icono carrito' />
                    <div>2</div>
                </li>
            </ul>
        </div>
        
    </nav>
    );
};

export default Header;