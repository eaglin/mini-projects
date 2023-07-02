
import { useState } from 'react'
import { useContext } from 'react';
import { FilterContext } from '../context/context';
export const Filter = () => {
    const { filters, setFilters } = useContext(FilterContext)

    const handleChageMinPrice = (event) => {



        setFilters(prev => (

            { ...prev, minPrice: event.target.value }))
    }
    const handleChageCategory = (event) => {

        setFilters((prev) => ({ ...prev, category: event.target.value }))
    }
    return (
        <div className='filters'>

            <div style={{ flex: 1, flexDirection: 'column', margin: 20 }}>
                <label htmlFor='price-filter'>
                    Precio
                </label>

                <input id={'price-filter'} type='range' max={1000} min={0} onChange={handleChageMinPrice}
                    style={{
                        border: '1px solid transparent',
                    }} name='price' placeholder='40$,30$...'
                />
                <span>{filters.minPrice}</span>

            </div>


            <label>
                Categoria

                <select type='text'
                    style={{
                        border: '1px solid transparent',
                    }} onChange={handleChageCategory} name='category' placeholder='home-decoration,laptops...'

                >
                    <option value={'all'}>Todo</option>
                    <option value={'smartphones'}>Móviles</option>
                    <option value={'laptops'}>Portatiles</option>
                    <option value={'home-decoration'}>Decoracion</option>
                </select>
            </label>


            <button type='submit'>Filtrar</button>
        </div>
    )
}

export default Filter
