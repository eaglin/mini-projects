
import { CartContext } from '../context/context'
import { useContext } from 'react'
import './Cart.css'
import { useId } from 'react'
import { CartIcon } from './Icons'

const Cart = () => {
    const cartButtonId = useId();
    const { cart, addTocart, removeFromCart } = useContext(CartContext)
    return (
        <>
            <label className='cart-button' htmlFor={cartButtonId}>
                <CartIcon />
            </label>
            <input id={cartButtonId} type='checkbox' />
            <aside className='cart'>
                <ul>
                    {cart.map((item, index) => {
                        const { product, count } = item
                        return <li key={`${product.id}-${index}`}>
                            <img src={product.thumbnail}></img>
                            <strong>{product.title}-{product.price}</strong>
                            <span>x{count}</span>
                        </li>
                    })}
                </ul>
            </aside>
        </>
    )
}

export default Cart
