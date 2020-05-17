/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import aliens from '../data/aliens.json';

const style = css`
  padding: 0 40px 0 40px;
  img {
    width: 100%;
  }
`;

export default function Aliens(props) {

  return (
    <div css={style}>
      <h2>{aliens.tagline}</h2>
      <img src={require('../images/sky.jpg')}/>
      <p>
        {aliens.body}
      </p>
    </div>
  );
}