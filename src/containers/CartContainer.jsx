import React from 'react';

const CartContainer = ({ children }) => {
    return (
        <div className='cart__main'>
            <div className='cart__container'>
                
                {children}
            </div>
        </div>
    );
};

export default CartContainer;