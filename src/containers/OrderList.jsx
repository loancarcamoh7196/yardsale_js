import React from 'react';
import '../styles/Order.scss';

const OrderList = ({ children }) => {
    return (
        <div className='order-main'>
            <div className='order-container'>
            
                    { children }
            </div>
        </div>
    );
};

export default OrderList;