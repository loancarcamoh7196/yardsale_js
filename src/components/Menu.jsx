import React from 'react';
import '../styles/Menu';

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

            <div class="menu__mobile">
                <ul>
                    <li><a href="#">CATEGORIAS</a></li>
                    <li><a href="#">Todos</a></li>
                    <li><a href="#">Ropa</a></li>
                    <li><a href="#">Electronica</a></li>
                    <li><a href="#">Muebles</a></li>
                    <li><a href="#">Jugetes</a></li>
                    <li><a href="#">Otros</a></li>
                </ul>
                <ul>
                    <li><a href="#">Mis Compras</a></li>
                    <li><a href="#">Mi Cuenta</a></li>
                </ul>
                <ul>
                    <li class="menu__mobile--email"><a href="#">lolovely@somethig.com</a></li>
                    <li class="menu__mobile--sign-out"><a href="#">Cerrar Sesión</a></li>
                </ul>
            </div>
        </>
    );
};

export default Menu;