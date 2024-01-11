/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" width="49" height="50.8" viewBox="0 0 49 50.8"><defs><style>.b{fill:#ec1c24;}.b,.c,.d{stroke:#000;stroke-width:.8px;}.c{fill:#c9da2a;}.d{fill:#c0272d;}</style></defs><rect class="c" x="1.7" y="23.4" width="45.7" height="26.6"/><rect class="c" x=".4" y="14.4" width="48.3" height="9.1"/><rect class="b" x="21.4" y="14.2" width="6.8" height="36.2"/><rect class="b" x="1.3" y="29" width="46.8" height="6"/><path class="d" d="m38.6,11.2c1-1.5,1.8-4.1,1.5-5.9-.1-.8-.6-1.5-1.2-2-.7-.6-1.5-.4-2.3-.7,1.1-.2,2-.9,3.1-1.3,1.3-.4,2.5-.6,3.8-.1,2.2.8,2.9,3.4,2.8,5.6,0,2.1-1.8,5.5-4.1,7-2.3,1.4-13.5,1.3-13.7,0,0,0,8.6,0,10.2-2.6Z"/><path class="b" d="m30,11.8c2.1.2,4.3-2.6,5.4-4,2.1-2.6,4.1-4.8,7.3-5.9,1.7-.6,2.3.5,2.4.3,0-.2-1.7-1.2-2.1-1.3-.8,0-5-.8-6.1-.6-1.9.4-2,3.4-2.5,4.9-.4,1.3-1.1,2.6-1.9,3.6-.3.4-.7.9-1,1.2-.4.4-1.5,1.7-1.5,1.7Z"/><polygon class="b" points="28.2 14.3 21.5 14.1 24 10.2 30.5 10.5 28.2 14.3"/><path class="d" d="m23.2,10.2c.1-2-1.2-4.3-2.5-5.9-.5-.6-1.1-1.4-1.7-1.8-.9-.5-1.7.2-2.3.8-.7.6-1.3,1.2-1.9,2-.4.5-1.5,1.9-1.4,2.6,0,.6,1.9,1.4,2.4,1.7,1,.5,1.9.7,2.8,1.1,1.4.5,2.3,1.4,3.4,2.1l1.1-2.6Z"/><path class="b" d="m18.1,2.1c-1.4-1.3-7.4-1.1-9.2-.2-2.7,1.3-4.3,4.4-4.1,7.3.3,3.7,1.2,4.4,4.5,4.4,2.9,0,5.7.4,8.7.4,1.1,0,2.2,0,3.3-.2,0-.1,0-.2,0-.3-1-.6-2-.6-3.1-.7-1.3-.2-2.5-.5-3.8-.6-4-.4-3-3-1.2-4.8,2.4-2.5,1.9-2,4.9-5.2Z"/></svg>')}`;
export default image;