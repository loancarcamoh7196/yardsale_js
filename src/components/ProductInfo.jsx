import React from 'react';
import '@styles/ProductInfo';

const ProductInfo = () => {
    return (
        <>
            <img src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='bike' srcset='' />
            <div className='product__points'>
                <li className='product__point--active'></li>
                <li></li>
                <li></li>
            </div>

            <div className='product__info'>
                <p>$85.00</p>
                <p>Bike</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde magnam laboriosam deserunt aliquid mollitia ad. Corrupti, repudiandae, provident omnis perspiciatis atque iure recusandae totam labore ex molestiae a repellat?
                </p>
                <button className='primaryButton add-to-cart__button'>
                    <img src='./icons/bt_add_to_cart.svg' alt='agregado al carro' srcset='' />
                    Agregar al carrito
                </button>
            </div>
        </>
    );
};

export default ProductInfo;