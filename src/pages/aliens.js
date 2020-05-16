/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import aliens from '../data/aliens.json';

const style = css`
  padding: 0 40px 0 40px;
`;

export default function Aliens(props) {

  return (
    <div css={style}>
      <h2>{aliens.tagline}</h2>
      <p>
        {aliens.body}
      </p>
    </div>
  );
}