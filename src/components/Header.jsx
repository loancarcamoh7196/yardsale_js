import React from 'react';
import '../styles/Header.scss';
const Header = () => {
    return (
        <nav>
        <img src='./icons/icon_menu.svg' alt='menu' className='menu' />
        <div className='navbar-left'>
            <img src='./logos/logo_yard_sale.svg' alt='' />
        
            <ul>
                <li><a href='#'>Todo</a></li>
                <li><a href='#'>Electronica</a></li>
                <li><a href='#'>Muebles</a></li>
                <li><a href='#'>Jugetes</a></li>
                <li><a href='#'>Otros</a></li>
            </ul>
        </div>
        <div className='navbar-right'>
            <ul>
                <li className='navbar-email'>
                    <a href='#'>lolovely@something.com</a>
                </li>
                <li className='navbar-shopping-cart'>
                    <img src='./icons/icon_shopping_cart.svg' alt='icon_shopping_cart' />
                    <div>2</div>
                </li>
            </ul>
        </div>
        
    </nav>
    );
};

export default Header;