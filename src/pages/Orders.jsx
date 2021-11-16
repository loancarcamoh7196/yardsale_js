import React from 'react';
import OrderList from '@containers/OrderList';
import OrderDetail from '@components/OrderDetail';

const Orders = () => {
    return (
        <OrderList>
            <h1 class="order__title"> Mis Ordenes de Compra</h1>
            <div className='my-order-content'>
                <OrderDetail flecha>  </OrderDetail>
                <OrderDetail flecha>  </OrderDetail>
                <OrderDetail flecha>  </OrderDetail>
                <OrderDetail flecha>  </OrderDetail>
                <OrderDetail flecha>  </OrderDetail>

            </div>
            
            
        </OrderList>
    );
};

export default Orders;