/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const navlinks = css`
  display: flex;
  margin: 0;
  padding: 0 10px 0 30px;
  background-color: gainsboro;
  justify-content: left;
  
  a {
    padding: 10px;
    padding-bottom: 8px;
    text-decoration: none;
    color: black;
  }

  .active { 
    color: ghostwhite;
    background-color: #7fa22c;
    border-bottom: solid olivedrab 5px;
  }

  a:hover {
    color: olivedrab;
    background-color: lightgray;
  }
  a:hover.active {
    color: ghostwhite;
    background-color: #7fa22c;
    border-bottom: solid olivedrab 5px;
  }
`;

const titlebar = css`
  display: flex;
  justify-content: space-between;
  background-color: olivedrab;

  h1 {
    margin: 0;
    padding: 5px 0 10px 10px;
    ${'' /* padding: 0 20px 0 10px; */}
  }
  h1 a {
    text-decoration: none;
    color: black;
  }

  #buy-now {
    padding-top: 20px;
    padding-right: 10px;
  }
  #buy-now a {
    padding: 10px;
    text-decoration: none;
    color: ghostwhite;
    background-color: crimson;
    border-radius: 10px;
  }
`;

export default function Navbar(props) {
  return (
    <div>
      <div css={titlebar}>
        <h1>
          <Link to='/'>ghost4real.com</Link>
        </h1>
        <div id="buy-now">
            <NavLink to='/buy-now'> BUY NOW!!! </NavLink>
        </div>
      </div>
      
      <ul css={navlinks}>
        {/* <NavLink to='/home'> Home </NavLink> */}
        <NavLink to='/photos'> Photos </NavLink>
        <NavLink to='/testimonials'> Testimonials </NavLink>
        <NavLink to='/aliens'> Aliens? </NavLink>
        <NavLink to='/about-me'> About Me </NavLink>
      </ul>  
    </div>
  );
}