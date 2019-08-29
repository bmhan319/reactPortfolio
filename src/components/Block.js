import React from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Block = () => {
  return(
    <div className="block-page-container">
      <div className="temp-container">
        <NavLink to="/#work">Home</NavLink>
        <a href="https://bmhan319.github.io/BlockRenovations/">Go</a>
        <NavLink to="/bonappetit">
          <button type="button">BonAppetit</button>
        </NavLink>
        <NavLink to="/conquer">
          <button type="button">Conquer</button>
        </NavLink>
      </div>
      <h1>Block Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere ipsa ipsam quis autem quisquam natus totam excepturi quibusdam dolore cumque, neque veritatis reprehenderit ab laboriosam assumenda ea aperiam! Quae!</h1>
    </div>
  )
}

export default Block