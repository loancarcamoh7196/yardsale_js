import React from 'react';
import AppContext from '../context/AppContext';
import '@styles/CartItem.scss';

const CartItem = ( {product} ) => {
    return (
        <div className='cart__item'>
            <figure>
                <img src={product.images[0]} alt={product.title} srcSet='' />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default CartItem;