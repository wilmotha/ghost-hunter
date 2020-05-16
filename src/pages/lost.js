/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

const style = css`
  padding: 0 40px 0 40px;
`;

export default function Lost(props) {

  return (
    <div css={style}>
      <h1> 404 </h1>
      <p>
        The page your looking for is a ghost...     
      </p>
    </div>
  );
}