/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import testimonials from '../data/testimonials.json';

const testimonialHolder = css`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px;

  #testimonial {
    padding: 10px;
    margin: 5px;
    width: 400px;
    background-color: ghostwhite;
    border-radius: 10px;
  }

  #stars {
    color: gold;
  }
`;

function displayStars(starCount) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < starCount) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }
  return stars;
}

export default function Testimonials(props) {

  return (
    <div css={testimonialHolder}>
      {testimonials.map((testimonial, i) => (
          <div key={i} id='testimonial'>
            <div id='title'>
                <h3>{testimonial.name}</h3>
                <div id="stars">{displayStars(parseInt(testimonial.stars))}</div>
            </div>
            <p>{testimonial.body}</p>
          </div>
      ))}
    </div>
  );
}