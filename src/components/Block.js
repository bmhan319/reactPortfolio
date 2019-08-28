import React from 'react';
import {NavLink} from 'react-router-dom'

const Block = () => {
  return(
    <div className="block-page-container">
      <NavLink to="/">Home</NavLink>
      <a href="https://bmhan319.github.io/BlockRenovations/">Go</a>
      <h1>Block Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere ipsa ipsam quis autem quisquam natus totam excepturi quibusdam dolore cumque, neque veritatis reprehenderit ab laboriosam assumenda ea aperiam! Quae!</h1>
    </div>
  )
}

export default Block