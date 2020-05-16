/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export default function Home(props) {

    const styles = css`
        img {
            width: 500px;
        }
    `;

    return (
        <div css={styles}>
            <img src={require('../photos/ghostfinder.jpg')}/>
            <h3> Welcome to the home of the Ghost Finder</h3>
        </div>
    );
}