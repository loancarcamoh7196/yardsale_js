import React from 'react';
import '../styles/ProductCard.scss';

const ProductCard = () => {
    return (
        <div className='card__product'>
            <img src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='bike' />
            <div className='card__info'>
                <div>
                    <p>$120.00</p>
                <p>Bike</p>
                </div>
                <figure>
                    <img src='./icons/bt_add_to_cart.svg' alt='Add to cart' />
                </figure>
            </div>
        </div>
    );
};

export default ProductCard;