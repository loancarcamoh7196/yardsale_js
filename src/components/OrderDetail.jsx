import React from 'react';
import '@styles/OrderDetail.scss';

import iconFlechita from '@icons/flechita.svg';

const OrderDetail = ({ flecha }) => {
    const img_flecha = flecha ? iconFlechita : null;
    
    return (
        
            <div className='order__detail'>
                <p>
                    <span>10.11.2021</span>
                    <span>10 articulos</span>
                </p>
                <p>$800.00</p>
                {img_flecha}
            </div>
        
    );
};

export default OrderDetail;