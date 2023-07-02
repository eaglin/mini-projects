
import './Products.css'
import { RemoveFromCartIcon, AddToCartIcon, } from './Icons'

import { useContext } from 'react'
import { CartContext } from '../context/context'

export const Products = ({ products }) => {
    Products.propTypes = {
        products
    }

    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    const handleAddCart = (product) => {
        addToCart(product)
    }
    const handleRemoveCart = (product) => {

        removeFromCart(product)
    }



    return (

        <main className='products'>
            <ul>
                {products.map(product => {

                    return <li key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.thumbnail} alt={product.title}></img>
                        <span>{product.title}</span> ${product.price}
                        <p>{product.description}</p>


                        <div>
                            <button onClick={() => handleAddCart(product)}>
                                <AddToCartIcon />
                            </button>
                            <button onClick={() => handleRemoveCart(product)}>
                                <RemoveFromCartIcon />
                            </button>

                        </div>
                    </li>

                })}
            </ul>
        </main>
    )
}

export default Products
