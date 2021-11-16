import React from 'react';

import OrderList from '../containers/OrderList';
import OrderDetail from '../components/OrderDetail';
import CartItem from '../components/CartItem';


const MyOrder = () => {
    return (
        <OrderList>
            <h1 className='order__title'> Mi Orden de Compra</h1>
                <div className='my-order-content'>
                    <OrderDetail />
                </div>
                
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

        </OrderList>   
    );
};

export default MyOrder;