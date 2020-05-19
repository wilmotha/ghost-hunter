/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const buttonStyle = css`
  padding-top: 20px;
  padding-right: 10px;

  a {
    padding: 10px;
    text-decoration: none;
    color: ghostwhite;
    background-color: crimson;
    border-radius: 10px;
  }
`;

export default function BuyButton(props) {

  return (
    <div css={buttonStyle}>
      <NavLink to={props.path}> {props.text} </NavLink>
    </div>
  );
}