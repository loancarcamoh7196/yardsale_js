/**
 * Componente Product 
 */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '@styles/ProductCard.scss';

import iconAddToCart from '@icons/bt_add_to_cart.svg';

const ProductCard = ( { product } ) => {
    const { addToCart } = useContext(AppContext);

	const handleClick = ( item ) => {
		addToCart(item);
	}

    return (
        <div className='card__product'>
            <img src={ product.images[0] } alt={ product.title } />
            <div className='card__info'>
                <div>
                    <p>${ product.price }</p>
                    <p>{ product.title }</p>
                </div>
                <figure onClick={()=>handleClick(product)}>
                    <img src={ iconAddToCart } alt='Add to cart' />
                </figure>
            </div>
        </div>
    );
};

export default ProductCard;