

import React from 'react'


function ProductCard(props) {
    const {title,description,image,types} = props
  return (
    <section className=' flex flex-col justify-center'  >
        <img className='w-67 h-60' src={image} alt='imagen del producto' />
        <div className='flex flex-col items-center mt-5' >
            <h1 className='text-black' >{title}</h1>
            <p>{description}</p>
            {types.map((i)=>{
                return <p key={i} >{i}</p>
            })}
        </div>
        <div className='mt-10 flex justify-center' >
         <button className='bg-my-red text-white w-64 border rounded-lg' >Detalles</button>
        </div>
    </section>
  )
}

export default ProductCard