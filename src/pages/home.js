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
      <img src='https://www.indiewire.com/wp-content/uploads/2017/03/screen-shot-2017-03-28-at-8-24-02-am.png?w=780'/>
      {/* <img src={require(data.alt)}/> */}
      {/* <img src={require(`../${data.photo}`)}/> */}
      {/* {console.log("data: ", data)} */}
      <p>The Ghost Finder is the first and only offically Licecend and pantned device for finding and hunting real ghosts. For only $19.99 you can join in on the ghostly crazy that is taking the world by storm.</p>
    </div>
  );
}