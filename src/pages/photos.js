/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import images from '../images/images.json';

const imageHolder = css`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px;

  h3 {
    margin: 0;
    margin-bottom: 5px;
  }

  div {
    padding: 10px;
    margin: 5px;
    width: 300px;
    background-color: ghostwhite;
    border-radius: 10px;
  }

  img {
    width: 300px;
  }

`;

export default function Photos(props) {
  return (
    <div css={imageHolder}>
      {images.map((image, i) => (
        <div key={i}>
          <h3>{image.title}</h3>
          <img src={require(`../images/${image.path}`)}/>
          <p>{image.comment}</p>
        </div>
      ))}
    </div>
  );
}