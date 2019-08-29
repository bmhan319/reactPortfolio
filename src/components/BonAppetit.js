import React from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';

const BonAppetit = () => {
  return(
    <div className="bonappetit-page-container">
      <div className="temp-container">
        <NavLink to="/#work">Home</NavLink>
        <a href="https://bmhan319.github.io/bon-appetit/">Go</a>
        <NavLink to="/stumptown">
          <button type="button">Stumptown</button>
        </NavLink>
        <NavLink to="/block">
          <button type="button">Block</button>
        </NavLink>
      </div>
      <h1>BonAppetit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere ipsa ipsam quis autem quisquam natus totam excepturi quibusdam dolore cumque, neque veritatis reprehenderit ab laboriosam assumenda ea aperiam! Quae!</h1>
    </div>
  )
}

export default BonAppetit