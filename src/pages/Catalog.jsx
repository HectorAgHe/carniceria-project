import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

function Catalog() {
  return (
    <section>
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
  )
}

export default Catalog