/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="33.79" height="18.75" viewBox="0 0 33.79 18.75"><defs><linearGradient id="a" x1="10.05" x2="22.71" y1=".23" y2="22.14" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bbbdbf"/><stop offset=".16" stop-color="#a8a9ab"/><stop offset=".49" stop-color="#787879"/><stop offset=".94" stop-color="#2c292a"/><stop offset="1" stop-color="#231f20"/></linearGradient></defs><path d="M8.16 18.16C4.55 17.18.58 17.48.37 10.2.18 3.44 8.47 1.35 13.72.6c5.66-.81 10.8.54 15.42 4.42 2.8 2.35 8.38 11.33-.72 13.25 0 0-15.92.3-20.26-.11Z" style="fill:url(#a);stroke:#000;stroke-width:.75px"/></svg>')}`;
export default image;