/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" width="80.8" height="40.7" viewBox="0 0 80.8 40.7"><defs><style>.b{fill:none;stroke:#000;stroke-width:.8px;}.c{fill:#cfd0d1;}.c,.d,.e{stroke-width:0px;}.d{fill:#bbbdbf;}.e{fill:#a4a4a5;}</style></defs><path class="c" d="m76.8,2c-15.2-.7-63.4,0-73.8.4C2.4,3.7,1,6.5.4,7.9V.4h76.6c0,.5,0,1-.2,1.6Z"/><path class="d" d="m68.6,8.8l-3-2c-6.6,0-17.4,0-24,0v24c.8.4,2.1.9,2.9,1.3l.2-.4h23.8V9h0ZM3.1,2.3c10.4-.4,58.6-1,73.8-.4-.5,1.8-1.9,3.7-3.2,4.9-.7.6.1,22.7,0,23-1.2,3.6,2.2,5.3,2.3,8.4-25.1.8-50.3.8-75.5.2v-6.6h3.3V9H.4v-1.1c.7-1.4,2.1-4.2,2.7-5.5Zm9.1,29.7v-.2h23.9V9l.2-.3-2.7-1.8c-6.6,0-17.4,0-24,0v24c.7.4,1.8.8,2.6,1.2Z"/><path class="e" d="m44.7,31.8V9h23.9c0-.1-3-2.1-3-2.1-6.6,0-17.4,0-24,0v24c.8.4,2,.9,2.9,1.3l.2-.4Z"/><path class="e" d="m77,.4c0,.5,0,1-.2,1.6-.5,1.8-2,3.7-3.2,4.9-.7.6.1,22.7,0,23-1.2,3.6,2.2,5.3,2.3,8.4-25.1.8-50.3.8-75.5.2v2h80v-8.6h-3.3V9h3.3V.4h-3.4Z"/><path class="e" d="m12.3,31.8V9h23.8l.2-.3-2.7-1.8c-6.6,0-17.4,0-24,0v24c.7.4,1.8.8,2.6,1.2v-.2Z"/><polygon class="b" points=".4 38.4 .4 31.8 3.7 31.8 3.7 9.7 3.7 9 .4 9 .4 7.9 .4 .4 77 .4 80.4 .4 80.4 2.2 80.4 9 77.1 9 77.1 16.1 77.1 21.1 77.1 31.8 80.4 31.8 80.4 38.1 80.4 40.4 75.6 40.4 35.8 40.4 .4 40.4 .4 38.4"/><polygon class="b" points="12.3 31.8 30.8 31.8 36.1 31.8 36.1 9 12.3 9 12.3 10.9 12.3 31.8"/><polygon class="b" points="44.7 31.8 68.5 31.8 68.5 21.8 68.5 18 68.5 9 44.7 9 44.7 31.8"/></svg>')}`;
export default image;