import React from 'react';
import '../styles/Order.scss';

const Order = () => {
    return (
        <div class="my-order-content">
            <div class="order">
                <p>
                    <span>10.11.2021</span>
                    <span>10 articulos</span>
                </p>
                <p>$800.00</p>
            </div>
        </div>
    );
};

export default Order;