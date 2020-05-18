/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import aliens from '../data/aliens.json';

const style = css`
  padding: 0 40px 0 40px;
  img {
    width: 100%;
  }

  #holder {
    margin-top: 15px;
  }
`;

export default function Aliens(props) {

  return (
    <div css={style}>
      <h2>{aliens.tagline}</h2>
      <img src={require('../images/sky.jpg')}/>
      {aliens.body.map(body => (
        <div id="holder">
          {body}
        </div>
      ))}
    </div>
  );
}