/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" width="62.2" height="50.8" viewBox="0 0 62.2 50.8"><defs><style>.b{fill:none;stroke:#000;stroke-width:.8px;}.c{fill:#604c45;}.c,.d,.e{stroke-width:0px;}.d{fill:#9b8c86;}.e{fill:#816e65;}</style></defs><path class="e" d="m54.3,35.5c-4.3,8.1-8.1,9.9-18,11-9,1-26,1-35-5h-.2c-.3-.8-.5-1.8-.6-2.8C3.6,28.3,13.4,14.5,22.3,8.5c8.3-5.6,13.2-6.3,22.2-5.3,2.8,1.1,5.7,2.5,8.2,4.5,3.1,8.6,5.7,19.9,1.5,27.8Z"/><path class="c" d="m36.3,46.5c9.9-1.1,13.7-2.9,18-11,4.1-7.9,1.6-19.2-1.5-27.8,5.2,4.1,9.2,10.3,9.1,20-.4,20.2-7.8,19.4-14.5,22.1-8.1,1.1-37.7.3-37.7.3-4.8-1.5-7.5-4.6-8.6-8.5h.2c9,5.9,26,5.9,35,4.9Z"/><path class="d" d="m.5,38.8c-1.1-9.3,4.4-21.2,7.8-25.5C16.9,2.5,26.5-1.2,37,1c2.3.5,4.9,1.2,7.5,2.2-9-.9-14-.3-22.2,5.3C13.4,14.5,3.6,28.3.5,38.8Z"/><path class="b" d="m1.1,41.6c1.1,3.8,3.7,7,8.6,8.5,0,0,29.6.8,37.7-.3,6.7-2.7,14.1-1.9,14.5-22.1.2-9.7-3.8-15.9-9.1-20-2.5-2-5.4-3.4-8.2-4.5-2.6-1-5.2-1.7-7.5-2.2-10.5-2.2-20.1,1.5-28.7,12.3C5,17.5-.6,29.4.5,38.8c.1,1,.3,1.9.6,2.8Z"/></svg>')}`;
export default image;