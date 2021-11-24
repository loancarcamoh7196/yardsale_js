import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import MyOrder from '../pages/MyOrder';
import '@styles/Header.scss';
import Menu from '@components/Menu';

// Importacion de Imagenes
import iconMenu from '@icons/icon_menu.svg';
import logoHeader from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [ toggle, setToggle ] = useState(false);
    const [ toggleOrders, setToggleOrders ] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);// Cambia el estado a la inversa
    };//Despligue de menu

    return (
        <>
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
                        <li className='navbar__shopping-cart' onClick={() => setToggleOrders(!toggleOrders)} >
                            <img src={ iconShoppingCart } alt='icono carrito' />
                            { state.cart.length > 0 ? <div> {state.cart.length} </div> : null }
                        </li>
                    </ul>
                </div>
                { toggle && <Menu /> }
                
            </nav>
            { toggleOrders && <MyOrder /> }
        </>
    );
};

export default Header;