/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="USA" width="138" height="203.8" viewBox="0 0 138 203.8"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-11{stroke-width:0}.cls-10{fill:#fff}.cls-11{fill:#010101}</style></defs><path d="M126.4 72.3c11.9-13.5 12.4-30.3 9.4-45.7.3 0 .7.2 1.1.3-2-8.8-12.9-20.7-21-21.7-1.2-.1 3.3-1.2 1.7-2.4-2.7-2-12.2-3.4-15.9 0C97.5.1 85.5.6 80.4 1.8c1.6 1.5 3.3 2.1 4.1 2.9-11.5 1.5-21 7.9-22.3 21.8.9-.8 1.7-1.4 2.7-1.4-1.9 5-1.1 12.9 0 17.9 1.7-4.1 3.8-10.1 8.1-12.2 1.1 2 2.3 3.9 3.2 6 2.7-4.2 6-7.2 10.1-10.3-.3 5 1.5 7.3 2.3 12.1 2.4-6.3 4.4-9.4 10.2-13.8.3 2.7 2 4.9 2.4 7.6 8.2-9.5 7-5.4 10.5 3.7 1.8-3.2 1.9-3.4 3.6-6.4 5 5 2.8 18.7 3 25.4 2.8-5.2 2.6-7.7 5.4-12.5-1 13.9-2 14.9-6.1 26.7 2.2-1.6 3.6-6.4 5.8-8-1.3 4.1-2.7 6.8-4.7 10.6 4.3-3.9 7.1-7.4 9-11 .4 3.1-.1 8.4-1.3 11.1Z" style="stroke-width:0;fill:#604231"/><path d="M83.9 195.1c-2.9-3.8-11.4-15.1-17.6-32 .1.3.3.6.4.9 9.7-7.1 18.7-15.3 27.2-20.8 10.8 13.6 23.4 29.8 27.4 33.2 4.1.8 3.7 1.3 7.3 2.3-.9 10.2-4.7 23.5-15.4 24.6-8 .6-24.9 1.9-29.4-8.3Z" style="stroke-width:0;fill:#b59d68"/><path d="M131.4 127.5c-.2-5.1-.5-11.9-1.1-18.7-3.1 2.9-5.3 2.4-11.3 3.1-5.7 2.7-11 4.2-15.1 5.4-5.9.6-15.3 10.6-17.3 4.9h.7c0-.7 0-1.3-.1-1.9-3.7.9-7 2.3-9.8 3.2 1.9 1.6 7.4 8.5 10.2 11.9 13.7 4.1 34.6 2.3 43.9-3.8v-3.9Z" style="stroke-width:0;fill:#262262"/><path d="M105.5 43.1c2.6 0 2.6 7.8 0 7.7-2.6.1-2.7-7.8 0-7.7" class="cls-11"/><path d="M105.6 65.2c-5 8.9-18.3 11.3-23.2 2.5 6.9 2.3 21.8-1.2 23.1-2.5Z" class="cls-10"/><path d="M131.5 131.4c-9.3 6.2-30.2 7.9-43.9 3.8 9.9 12.3 29.2 37.3 33.8 41.2 4.2.8 4.2 1.6 8 2.5 1.5.4 1.8-8.7 1.8-12.6 0-11.3.3-24.6.2-35Zm-43.2-7.2c5.1-1.3 9-5.2 15.7-7 4.1-1.1 9.4-2.6 15.1-5.4 6-.7 8.3-.1 11.3-3.1-1-10.5-2.6-20.9-5.2-24.2-3.2-4.1-8.6-5-8.7-6.7l-2.1 1.5c-.8-1.1-2.4-2.6-2.8-3.3-.5.4-.9.8-1.4 1.2-.7 7.7-10.9 12.6-16.1 15V92c-2.9.3-5.8-2-4.5-10-.3-.1-.6-.3-1-.4-.5 1-.9 2-1.8 2.7-1.3-1.4-2.8-2.8-4.2-4.2C75 84.9 61.7 99 53.3 107.2c7.3-3.7 10.6-.9 14.7.9l.3.6c5.1-2.3 10.6-5.3 14.2-7 2.9 6.1 4.9 13.9 5.3 20.3h-.7c.6 1 1.3 2.3 1.6 2.2Z" style="stroke-width:0;fill:#2b3990"/><path d="M77.7 43.3c2.2 0 2.2 6.8 0 6.7-2.2 0-2.2-6.8 0-6.7" class="cls-11"/><path d="M127.7 61.2c-1.9 3.6-4.6 7.1-9 11 2-3.8 3.4-6.5 4.7-10.6-3.5 4.7-7.5 11-12.1 14.4.5.8 2 2.2 2.8 3.3 4.9-3.1 12.8-11.4 12.5-12.4h1c.2-1.9.3-4.1 0-5.8Zm-49 13.5c-7.1-4-9.6-22-9-26.1-1.1-4.9-1.6-7-1.9-11.5l-.3-.2c-1.1 2.1-2 4.4-2.7 6.3-.6-2.6-1-5.9-1.1-9.2h-.6c-2.4 10.2.2 23.8 3.7 32.7.2-2.5.8-5.3 2.1-7.5C71 66.7 73.4 74 78.6 80c-.1-1.5.9-2.3 1.1-3.4 1.7 2.9 4.6 5 6.8 7.5.9-.7 1.3-1.7 1.8-2.7-3.2-1.5-6.6-4.2-9.6-6.8Z" style="fill:#4c2f21;stroke-width:0"/><path d="M39.3 180.8h-.7c1.1-3.8 1.3-6.2.6-7.4 1-3.8 1-7.1.6-10.7 6 2.6 10.9 3.8 17.7 3.7-1.3 5.9-3.3 13.5-3 14.5-2.6 1.1-7.8 3.9-15.4.1v-.3Z" class="cls-10"/><path d="M118.3 55.4c-.2-6.7 2-20.4-3-25.4-1.7 3-1.8 3.2-3.6 6.4-3.5-9.2-2.3-13.2-10.5-3.7-.5-2.7-2.1-4.9-2.4-7.6-5.8 4.4-7.7 7.5-10.2 13.8-.8-4.7-2.7-7.1-2.3-12.1-4.1 3.2-7.4 6.1-10.1 10.3-.8-2.1-2.1-4.1-3.2-6-2.3 1.1-4 3.4-5.3 5.9l.3.2c3 18.4-.3 34.7 21.4 44.8-1.3 8 1.7 10.3 4.4 10v.2c5.4-2.3 15.5-7.3 16.2-15 11.6-9.3 12.1-19.1 13.8-34.3-2.8 4.8-2.6 7.4-5.4 12.5Zm-40.6-5.5c-2.2 0-2.2-6.8 0-6.7 2.2 0 2.2 6.8 0 6.7m27.8-6.8c2.6 0 2.6 7.8 0 7.7-2.6.1-2.7-7.8 0-7.7M82.4 67.7c6.9 2.3 21.8-1.2 23.1-2.5-5 8.9-18.3 11.3-23.2 2.5Zm1.1 62.4c-2.8-3.5-5-6-6-6.8 2.8-.9 6.1-2.3 9.8-3.2-.6-5.7-2.5-13.1-5.2-18.5-3.6 1.7-9.1 4.7-14.2 7l-.3-.6c-4.1-1.8-7.3-4.6-14.7-.9-5.1 2.5-4.1 3.1-5.7 6.6-5.5.8-8.7 2.1-11.6 6.7-1.4 1.8-.8 7-.3 8.4 1.1.9 3.5 1.4 6.2 1.6-1.5 0-3.4.2-4.6.6h.5c-.9.3-1.6.8-.8 2 .4.6 2.2.6 3.9.7-2.4.8-6.6 1-2.9 3.5.5.3 2.1.4 3.6.5-2.5.2-6.6-1.1-5.5 2.2.4 1.2 1.9 1.3 3.5 1.4-5-.5-4.9 2.7-.5 3.2-.6 7.5.5 13.1 1 18.3 6 2.6 10.9 3.8 17.7 3.7 2-8.3 3.3-12.9 1.6-23.5h.2c1.9 7.3 4.7 15.2 7.4 21.1 9.7-7.1 18.7-15.3 27.2-20.8-3.6-4.6-7.1-8.9-10.5-13.1Z" style="stroke-width:0;fill:#c6926e"/><path d="M57.7 198.1c1.6-3.4.5-13.5-1.3-16.7-.6-2.8-8.4 5.1-17.3-.3v-.3h-.6c1.1-5.1 2.3-8.4-2.2-8.6-1.7-.7-.7 5.5-3.5 6.7C19.4 184-1 179.3.6 200c11.5 5 39.7 3.1 57 3.1.5.3.1-4.1 0-5Z" style="stroke-width:0;fill:#724e2b"/><path d="M67.9 37.1c.2 4.6.8 6.6 1.9 11.5-.4-.4.7 13.3 2.6 17 2.4 7.2 10.4 13.1 16.9 16.3 8.4 5 21.5-3.6 28.4-12.3M75 39.3c1.3-2.8 3.7-2.5 4.9-1m23.9.3c2.3-2.3 5.5-1.2 5.9.7" class="cls-2"/><path d="M79.4 46.6c0 4.3-3.4 4.3-3.3 0 0-4.3 3.4-4.3 3.3 0Zm28.2.4c0 5-4.1 5-4.1 0s4.1-5 4.1 0Zm-18.7 7.1c0 1.5-3.2 2.7-3.4 3.4 0 1.2 1.1 3.8 2.9 4.5m-6.5 5.4c6.8 2.8 22.3-.9 23.7-2.2-5 8.9-18.3 11.3-23.2 2.5" class="cls-2"/><path d="M67.9 18.5c-3.9 6.4-5.4 16.3-3 24.7 1.7-4.1 3.8-10.1 8.1-12.2 1.1 2 2.3 3.9 3.2 6 2.7-4.2 6-7.2 10.1-10.3-.3 5 1.5 7.3 2.3 12.1C91 32.5 93 29.4 98.8 25c.3 2.7 2 4.9 2.4 7.6 8.2-9.5 7-5.4 10.5 3.7 1.8-3.2 1.9-3.4 3.6-6.4 5 5 2.8 18.7 3 25.4 2.8-5.2 2.6-7.7 5.4-12.5-1 13.9-2 14.9-6.1 26.7 2.2-1.6 3.6-6.4 5.8-8-1.3 4.1-2.7 6.8-4.7 10.6 10.8-9.6 11.9-17.1 14.2-31.7.8 1.8 1.1 4.3.9 6.6 4-14.8-1.1-19.9-7.4-30.4" class="cls-2"/><path d="M84.5 5c-11.5 1.4-21 7.8-22.3 21.7.8-.8 1.5-1.2 2.3-1.4" class="cls-2"/><path d="M101.7 3C97.5.3 85.5.8 80.4 2c2.1 2.2 4.4 1.9 4.7 4.4M101.7 3c3.7-3.4 13.2-2 15.9 0 1.6 1.2-2.9 2.2-1.7 2.4 8.1 1 19 12.9 21 21.7-1.9-.9-4.2 0-5.1-2M90.2 8.4c-5.6 2.4-11.1 8.7-13.8 14.2 3.6-2.2 8.3-3.3 11.8-5M63.1 34.1c-2.4 10.2.2 23.8 3.7 32.7.2-2.5.8-5.3 2.1-7.5 2.1 7.5 4.5 14.8 9.7 20.8-.1-1.5.9-2.3 1.1-3.4" class="cls-2"/><path d="M88.2 81.8c-.4 1-.9 1.8-1.7 2.4-2.4-2.6-5.5-4.9-7.1-8.2m31.8-.3c.4 1.1 2.1 2.4 3 3.6 4.9-3.2 12.8-11.3 12.4-12.4m.9-7.1c.9 3.6.2 9.2-1 12.5 11.1-13.1 13.2-29.8 9.1-44.7M67.7 108l.2.6" class="cls-2"/><path d="M116.3 77.9c.2 1.8 5.5 2.6 8.7 6.7 5.3 8.6 6.2 35.8 6.4 48 0 9.8-.2 22.9-.2 33.8 0 3.9-.4 13-1.8 12.6-3.8-1-3.9-1.7-8-2.5m-40.3-78c.3-2.2 1.1-5 1.4-6.6m0 9.6c-3.8 1.8-9.3 4.8-14.6 7.2-11.9 6.8-37.4 1-32.3 20.5" class="cls-2"/><path d="M109.2 84.6c-9.1 4.7-20.4 10-29.7 14.6m7.2 21c-15.2 4.2-36 14.6-51.3 8.5m84.4-17.2c-5.6 2.8-11.7 4.6-15.8 5.7-6.7 1.8-10.5 5.7-15.7 7-.5.2-1.6-2.7-2.3-2.9m-3.6-41.4c-7.7 4.8-21 18.9-29.5 27.2" class="cls-2"/><path d="M121.4 176.5c-7.7-6.8-32.2-40.9-44.1-53.3M93.7 92c-2.8.3-5.7-2.1-4.4-10.1m20.7-4.6c.6 3.9-7.2 10.3-8.9 11.5M80 99c5.2 6 6.6 15.6 7.4 23m-19.7-14c-4.1-1.8-7.3-4.6-14.7-.9-5.1 2.5-4.1 3.1-5.7 6.6m11.9 29.2c2.9 13-3.4 28.1-4.7 37.8m28.9 13.8h-.1m45.4-16.7c-.8 10.4-4.4 24.4-15.5 25.5-8 .6-24.9 1.9-29.4-8.3m-45-51c-1.4 12 2.9 18.9.4 29.4" class="cls-2"/><path d="M58 137c1.6 8.9 5.3 19.6 8.7 27 9.8-7.2 18.8-15.3 27.4-20.9" class="cls-2"/><path d="M83.9 195.2c-3-3.8-11.4-15.1-17.6-32" class="cls-2"/><path d="M56.4 181.4c1.8 3.2 2.9 13.4 1.3 16.7m-18.7-17c9 5.4 16.7-2.5 17.4.3m1.4 18c-14.1-.5-40.9 2-56.6-2.7" class="cls-1"/><path d="M40.7 181.1c-6.9-.8-19.1 3.9-24.9 4.7M1 196c.5-6.2 3.1-12 14.7-13.5 0 3.9-.2 12.1-.9 16.2M35.3 181c1.7-1.6 3.8-7.4 1-8.7-1.7-.7-.7 5.5-3.5 6.7-2.5 1.1-11.9 3.3-17.2 3.5M.7 200.1c11.5 5 39.7 3.1 57 3.1.5.3.1-4.1 0-5" class="cls-1"/><path d="M1.2 194.4c-1.1 2-.7 3.3-.5 5.6m37.8-18.9c1.3-5.2 2.4-9-2.6-8.8" class="cls-1"/><path d="M39.3 141.3c-1.6 0-3.1-.1-3.5-1.4-1.2-3.3 2.9-2 5.5-2.2.7 0 1.3-.2 1.7-.7 1.9-2.7 0-3.1-2.3-3.3-3.8.5-6.4-2.3-2.1-2.7" class="cls-2"/><path d="M37 131c1.7-.6 9.7-1.5 4.6 2.3-2 1.3-8.1 1-3.9 3.9 1.3.9 9.3-.4 5.1 3.5-1.1 1.3-9.4-.6-6.8 2.8 1.2 1.3 8.1 1.9 7.7-.6-.2-1.7-2.3-1.6-4.3-1.6m0 21.3c6.1 2.5 10.9 4.1 17.8 3.8m73.2-57.7c-3.1 3-5.4 2.5-11.5 3.2m-31.3 23.3c14 4.1 34.9 2.4 44.4-4.2" class="cls-2"/></svg>')}`;
export default image;