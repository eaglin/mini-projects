import { createContext } from "react";
import { useState } from "react";

export const FilterContext = createContext()

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (<FilterContext.Provider value={
        { filters, setFilters }
    }>
        {children}
    </FilterContext.Provider >)
}
export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {



        const newCart = [...cart]
        const index = cart.findIndex(p => {
            return p.product.id === item.id
        });
        if (index >= 0) {
            newCart[index].count = newCart[index].count + 1
            setCart(newCart)
        } else {
            newCart.push({ product: item, count: 1 })
            console.log(newCart)
            setCart(newCart)
        }

    }
    const removeFromCart = (product) => {
        const updatedCart = cart.toSpliced(cart.findIndex(item => item === product), 1)
        setCart(updatedCart)
    }
    return (<CartContext.Provider value={
        { cart, addToCart, removeFromCart }
    }>
        {children}
    </CartContext.Provider >)
}