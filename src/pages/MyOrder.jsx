import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import OrderList from '@containers/OrderList';
import OrderDetail from '@components/OrderDetail';
import CartItem from '@components/CartItem';
import '../styles/MyOrder.scss';


const MyOrder = () => {
    const {state} = useContext(AppContext);
    console.log(state)
    return (
        <aside className='my-order'>
            <OrderList>
                <h1 className='order__title my-order__title'>Carrito de Compra</h1>
                    <div className='total-order__content'>
                        {state.cart.length > 0 ? 
                            <OrderDetail />
                        :
                            'Hey, agrega algun producto '
                        }
                    </div>
                    
                    
                    {state.cart.map(product => (
                        <CartItem product={product} key={`orderItem-${product.id}`} />
                    ))}
                    

                    <button className="primary-button my-order__button">
                        Confirmar pedido
                    </button>
            </OrderList>
        </aside>
        
    );
};

export default MyOrder;