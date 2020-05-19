/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import buyNow from '../data/buyNow.json';
import BuyButton from '../components/buyButton';

const style = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    max-width: 400px;
  }
`;

export default function BuyNow(props) {

  return (
    <div css={style}>
      <img src={require(`../${buyNow.photo}`)}/>
      <div>
        <h2>{buyNow.title}</h2>
        <div>{buyNow.description}</div>
      </div>
      <div id="buy-box">
        <h3>${buyNow.price}</h3>
        <BuyButton path='/cart' text='Buy Now'/>
      </div>
    </div>
  );
}