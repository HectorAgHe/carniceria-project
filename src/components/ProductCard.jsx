

import React from 'react'

function ProductCard(props) {
    const {title,description,image,types} = props
  return (
    <section>
        <img src={image} alt='imagen del producto' />
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {types.map((i)=>{
                return <p key={i} >{i}</p>
            })}
        </div>
    </section>
  )
}

export default ProductCard