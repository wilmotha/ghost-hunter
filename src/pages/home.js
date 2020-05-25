/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import home from '../data/home.json';
import BuyButton from '../components/buyButton';

const style = css`
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;


  #body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }

  h2 {
    position: absolute;
    top: 8px;
    left: 16px;;
    ${'' /* transform: translate(-50%, -50%); */}
    color: ghostwhite;
  }

  #text-holder {
    position: absolute;
    bottom: 8px;
    right: 16px;
    color: ghostwhite;
  }

  img {
    width: 100%;
    ${'' /* max-width: 1000px; */}
  }

  #text {
    margin-top: 15px;
    ${'' /* max-width: 600px; */}
  }
`;

export default function Home(props) {

  return (
    <div css={style}>
      <h2>{home ? home.tagline : null}</h2>
      <img src={require(`../${home ? home.photo : null}`)}/>

      <div id="text-holder">
        {home ? home.body.map(body => (
          <div id="text"> 
            {body}
          </div>
        )) : null}
      </div>
    </div>
  );
}
