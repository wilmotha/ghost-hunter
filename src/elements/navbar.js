/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export default function Navbar(props) {
    const styles = css`
        h1 a {
            text-decoration: none;
            color: black;
        }
        ul {
            padding: 10px;
            padding-left: 30px;
            display: flex;
            background-color: gainsboro;
        }
        
        a {
            padding: 0 10px 0 10px;
            justify-content: space-evenly;
        }
        background-color: olivedrab;
    `;
    return (
        <div css={styles}>
            <h1>
                <Link to='/'>ghost4real.com</Link>
            </h1>
            <ul>
                <NavLink to='/photos'> Photos </NavLink>
                <NavLink to='/testimonials'> Testimonials </NavLink>
                <NavLink to='/about-me'> About Me </NavLink>
                <NavLink to='/buy-now'> BUY NOW </NavLink>
            </ul>
        </div>
    );
}