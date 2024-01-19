/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="33.79" height="18.75" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.79 18.75"><defs><style>.cls-1{fill:url(#linear-gradient);stroke:#000;stroke-width:.75px;}</style><linearGradient id="linear-gradient" x1="10.05" y1=".23" x2="22.71" y2="22.14" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bbbdbf"/><stop offset=".16" stop-color="#a8a9ab"/><stop offset=".49" stop-color="#787879"/><stop offset=".94" stop-color="#2c292a"/><stop offset="1" stop-color="#231f20"/></linearGradient></defs><path class="cls-1" d="M8.16,18.16c-3.61-.98-7.58-.68-7.79-7.96C.18,3.44,8.47,1.35,13.72.6c5.66-.81,10.8.54,15.42,4.42,2.8,2.35,8.38,11.33-.72,13.25,0,0-15.92.3-20.26-.11Z"/></svg>')}`;
export default image;