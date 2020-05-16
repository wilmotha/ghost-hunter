/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import data from '../data/home.json';

export default function Home(props) {

  const styles = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 500px;
      }
    `;

  return (
    <div css={styles}>
      <h3>{data.tagline}</h3>
      <img src={require(`../${data.photo}`)} />
    </div>
  );
}