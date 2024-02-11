import React from 'react'
import Food from './Assets/restauranfood.jpg'

function Header(){
  return (
    <header className='hero-section'>
      <img src={Food} alt='Restaurant Food'/>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <button><a>Reserve a Table</a></button>
    </header>
  )
}

export default Header
