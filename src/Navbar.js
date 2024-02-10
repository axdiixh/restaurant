import React from 'react'
import Logo from '../src/Assets/Logo .svg'
import { Helmet } from 'react-helmet'

function Nav() {
  return (
    <div className='navbar'>
    <Helmet>
      <meta name="og:title" content='Little Lemon'/>
      <meta name="og:description" content="Welcome to Little Lemon, where culinary excellence meets warm hospitality. Indulge in our diverse menu featuring fresh, locally sourced ingredients, expertly crafted cocktails, and decadent desserts. Whether you're craving a gourmet burger, seafood delight, or vegetarian delight, our menu has something for everyone. Join us for an unforgettable dining experience in the heart of [Your Location], where every dish tells a story of passion and creativity. Book your table now and taste the difference." />
      <meta name="og:image" content="https://lh3.googleusercontent.com/p/AF1QipOGJ9vtpjoC9pGaRRprJ2xEceXyfwbHRm0aXy8Y=s680-w680-h510" />
    </Helmet>

      <img src={Logo} alt='Little Lemon'/>
      <ul>
        <li><a href=''>home</a></li>
        <li><a href=''>about</a></li>
        <li><a href=''>menu</a></li>
        <li><a href=''>reservations</a></li>
        <li><a href=''>order online</a></li>
        <li><a href=''>login</a></li>
      </ul>
    </div>
  )
}

export default Nav
