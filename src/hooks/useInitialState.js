/**
 * Hook de Estado Inicial del Proyecto 
 */
import { useState } from 'react'

const initialState = {
    cart: [],
    total: 0,
    cantidadProducto: 0,
    currentDate: new Date().toLocaleDateString("es-ES")
} 
const useInitialState = () => {
    const [state, setState] = useState(initialState);

    /**
     * Funcion que agrega(setea) un elemento-Producto al carro actual
     * @param {product} payload Producto que se agregaral acarro
     */
    const addToCart = ( payload ) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
            total: state.total + payload.price,
            cantidadProducto: state.cantidadProducto + 1,
        })
    }

    /**
     * Función que elimina un elemento del carro
     * @param {product} payload Proucto que se desea eliminar del carro actual
     */
    const removeFromCart = ( payload ) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id),
            cantidadProducto: state.cart.length,

        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}
export default useInitialState;