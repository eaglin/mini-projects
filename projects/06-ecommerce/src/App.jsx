
import './App.css'
import { Products } from './components/Products'
import { useState } from 'react'
import { products as initialProducts } from './mocks/produtos.json'
import { Header } from './components/Header'
import { useContext } from 'react'
import { FilterContext, CartProvider } from './context/context'
import Cart from './components/Cart'

function useFilters(products) {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 130
  // });

  const { filters, setFilters } = useContext(FilterContext)
  const filterProducts = () => {
    return products.filter(product => {

      return product.price >= filters.minPrice &&
        (product.category === filters.category ||
          filters.category === 'all')
    })
  }
  return { filteredProducts: filterProducts(), setFilters };
}

function App() {






  const [products] = useState(initialProducts);

  const { filteredProducts } = useFilters(products)




  return (
    <>


      <Header />
      <CartProvider>
        <Cart></Cart>
        <Products className='products' products={filteredProducts} />
      </CartProvider>



    </>
  )
}

export default App
