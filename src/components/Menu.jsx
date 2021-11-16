import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return (
        <>
            <div className="menu__desktop">
                <ul>
                    <li><a href="#"> Mis compras</a></li>
                    <li><a href="#">Mi cuenta</a></li>
                    <li><a href="#">Cerrar Sesión</a></li>
                </ul>
            </div>
        </>
    );
};

export default Menu;