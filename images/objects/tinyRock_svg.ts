/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" width="33.8" height="18.7" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.8 18.7"><defs><style>.c{fill:url(#b);stroke:#000;stroke-width:.8px;}</style><linearGradient id="b" x1="10.1" y1=".2" x2="22.7" y2="22.1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bbbdbf"/><stop offset=".2" stop-color="#a8a9ab"/><stop offset=".5" stop-color="#787879"/><stop offset=".9" stop-color="#2c292a"/><stop offset="1" stop-color="#231f20"/></linearGradient></defs><path class="c" d="m8.2,18.2c-3.6-1-7.6-.7-7.8-8C.2,3.4,8.5,1.4,13.7.6c5.7-.8,10.8.5,15.4,4.4,2.8,2.4,8.4,11.3-.7,13.2,0,0-15.9.3-20.3-.1Z"/></svg>')}`;
export default image;