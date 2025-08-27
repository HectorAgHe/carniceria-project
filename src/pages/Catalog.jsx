import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import NavBar from '../components/NavBar'

function Catalog() {
  return (
    <main>
        <NavBar/>
        <section className='flex justify-center gap-10 mt-20' >
        {products.map((product)=>(
            <ProductCard
             key={product.id}
             title={product.title}
             description={product.description}
             image={product.image}
             types={product.types}
            />
        ))}
    </section>
    </main>
  )
}

export default Catalog