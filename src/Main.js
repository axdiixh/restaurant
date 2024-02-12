import React from 'react'
import greekSalad from './Assets/greek salad.jpg'
import bruschetta from './Assets/bruchetta.svg'
import lemonDessert from './Assets/lemon dessert.jpg'

function Main(){
  return (
    <main className='main-section'>
      <button><a>Online Menu</a></button>
      <p>This week Specials!</p>
      <div className='food-container'>
        <div className='food'>
          <img src={greekSalad} alt='Greek Salad' />
          <div className='food-details'>
            <p>Greek Salad</p>
            <p className='priceTag'>$12.99</p>
          </div>
          <p className='food-description'>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <p className='order'>Order a delivery</p>
        </div>
        <div className='food'>
          <img src={bruschetta} alt='Bruschetta' />
          <div className='food-details'>
            <p>Bruschetta</p>
            <p className='priceTag'>$5.99</p>
          </div>
          <p className='food-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <p className='order'>Order a delivery</p>
        </div>
        <div className='food'>
          <img src={lemonDessert} alt='Lemon Dessert' />
          <div className='food-details'>
            <p clas>Lemon Dessert</p>
            <p className='priceTag'>$5.00</p>
          </div>
          <p className='food-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined.</p>
          <p className='order'>Order a delivery</p>
        </div>
      </div>
      <div className='testimonials'>
        <h1>Testimonials</h1>
        <div className='rating'>
          <div className='single-rating'>
            <p>Rating</p>
          </div>
          <div className='single-rating'>
          <p>Rating</p>
          </div>
          <div className='single-rating'>
          <p>Rating</p>
          </div>
          <div className='single-rating'>
          <p>Rating</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
