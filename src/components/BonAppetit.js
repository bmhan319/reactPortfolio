import React from 'react';
import {NavLink} from 'react-router-dom'

const BonAppetit = () => {
  return(
    <div className="bonappetit-page-container">
      <NavLink to="/">Home</NavLink>
      <a href="https://bmhan319.github.io/bon-appetit/">Go</a>
      <h1>BonAppetit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere ipsa ipsam quis autem quisquam natus totam excepturi quibusdam dolore cumque, neque veritatis reprehenderit ab laboriosam assumenda ea aperiam! Quae!</h1>
    </div>
  )
}

export default BonAppetit