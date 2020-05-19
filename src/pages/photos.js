/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import images from '../data/images.json';

const imageHolder = css`
  display: flex;
  ${'' /* justify-content: space-evenly; */}
  flex-wrap: wrap;
  margin: 10px;

  h3 {
    margin: 0;
    margin-bottom: 5px;
  }

  div {
    padding: 10px;
    margin: 15px 25px;
    width: 300px;
    background-color: ghostwhite;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .2)
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
          <img src={require(`../${image.path}`)}/>
          <p>{image.comment}</p>
        </div>
      ))}
    </div>
  );
}