import React from 'react';
import '@styles/OrderDetail.scss';

import iconFlechita from '@icons/flechita.svg';

const OrderDetail = ({ total, cantidad, fecha }) => {
    
    
    return (
        
            <div className='order__detail'>
                <p>
                    <span>{ fecha }</span>
                    <span>
                    {cantidad} {cantidad == 1 ? 'artículo' : 'artículos'}
                    </span>
                </p>
                <p>$ {total}</p>
                
            </div>
        
    );
};

export default OrderDetail;