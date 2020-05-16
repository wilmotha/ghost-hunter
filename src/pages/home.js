/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

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
      <h3> Welcome to the home of the Ghost Finder</h3>
      <img src={require('../images/ghostfinder.jpg')} />
    </div>
  );
}