import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '@styles/CartItem.scss';

import iconClose from '@icons/icon_close.png';

const CartItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = ( item ) => {
        removeFromCart( item );
    }
    return (
        <div className='cart__item'>
            <figure>
                <img src={product.images[0]} alt={product.title} srcSet='' />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>

            <img src={iconClose} alt='Cerrar' onClick={()=>handleRemove(product)} />
        </div>
    );
};

export default CartItem;