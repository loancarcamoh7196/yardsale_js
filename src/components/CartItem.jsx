import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartItem.scss';

const CartItem = () => {
    return (
        <div className='cart__item'>
            <figure>
            <Link to=''>
                <img src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='bike' srcset='' />
            </Link>
            </figure>
            <p>Bike</p>
            <p>$80.00</p>
        </div>
    );
};

export default CartItem;