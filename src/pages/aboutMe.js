/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import aboutMe from '../data/aboutMe.json';

const style = css`
  padding: 0 40px 0 40px;

  #body {
    padding-top: 30px;
  }
`;

export default function AboutMe(props) {

  return (
    <div css={style}>
      <h2>{aboutMe.name}</h2>
      {aboutMe.body.map((body, i) => (
        <div key={i} id='body'>
          {body}
        </div>
      ))}
    </div>
  );
}