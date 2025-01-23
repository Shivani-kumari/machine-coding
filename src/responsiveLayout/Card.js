import React from 'react'
import './card.css'

export default function Card() {
  let imageArray = [
    "https://media.istockphoto.com/id/173578075/photo/bud-red-rose-isolated-against-a-black-background.jpg?s=612x612&w=0&k=20&c=5V_FJkSbd02qQZhx0ene9kSm0nsh2ULbSwlrJq5TyKU=",
    "https://images.alphacoders.com/680/680330.jpg",
    "https://b2929621.smushcdn.com/2929621/wp-content/uploads/2022/12/pink_lush_3_.jpg?lossy=1&strip=1&webp=1",
    "https://www.mayflower.in/cdn/shop/products/191.jpg?v=1628604341"
  ]
  return (
    <div className='imageStyle'> 
        {imageArray.map((image,index)=> <div className='img' key={index}><img src={image} height='300px' width="300px"/><p>My Love Rose</p></div>)}
    </div>
  )
}
