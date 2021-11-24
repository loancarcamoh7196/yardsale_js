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
     * funcion que agrega un elemento-Producto al carro actual
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



    return {
        state,
        addToCart
    }
}
export default useInitialState;