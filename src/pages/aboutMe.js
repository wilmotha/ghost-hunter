/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import aboutMe from '../data/aboutMe.json';

const style = css`
  padding: 0 40px 0 40px;
`;

export default function AboutMe(props) {

  return (
    <div css={style}>
      <h2>{aboutMe.name}</h2>
      <p>
        {aboutMe.body}
      </p>
    </div>
  );
}