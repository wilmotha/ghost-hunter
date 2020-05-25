/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import aliens from '../data/aliens.json';

const style = css`
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 1000px;
  }

  #holder {
    margin-top: 15px;
    max-width: 1000px;
  }
`;

export default function Aliens(props) {

  return (
    <div css={style}>
      <h2>{aliens ? aliens.tagline : null}</h2>
      <img src={require(`../${aliens.photo}`)}/>
      {aliens ? aliens.body.map(body => (
        <div id="holder">
          {body}
        </div>
      )) : null}
    </div>
  );
}