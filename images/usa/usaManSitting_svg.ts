/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="USA" width="176.1" height="269" viewBox="0 0 176.1 269"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-10,.cls-11,.cls-3,.cls-4,.cls-5,.cls-7{stroke-width:0}.cls-4{fill:#282c2d}.cls-5{fill:#9b7a6b}.cls-7{fill:#444545}.cls-10{fill:#847b63}.cls-11{fill:#fff}</style></defs><path d="M93.8 43.2c0 4 .6 8.8 1.3 12.9-.5 0-1.1.1-1.7.2-5-22.9-5.8-32-1.2-38.1C101.6 2 119.6.4 133.3 1c16.5.7 25.2 15.9 28 18.9 6.6 10.5 7.3 29.2 3.4 44-.1.6.1-4.2 0-3.7h-2.1c1.2-1.7.8-5.4-.6-6.6-4.3.3-7.4 4.1-11.5 2.5.3-37.1-.9-31.2-30.2-26-15-3.3-22.4-11.8-26.5 13.1" class="cls-4"/><path d="M162.6 60.1h2.1c-1.7 7.4-3.3 15.9-7.4 21-.4.5-.5-1.4-.9-.9-.8.9-1.3 1.5-2.1 2.1 0-3 0-5.7.1-8.7 4.3 3.3 6.8-9.1 7.4-12.9.3-.1.5-.3.7-.6Z" class="cls-4"/><path d="M96.7 150.4c-18.4 3.1-37 5.5-55.6 1.9-1.6-1.6-6.1-1.5-9.2-.8-3.8-2.9-4.2-12.9-1.7-16.4 2.6-3.7 8.9-4.7 13.2-5 11.6-.8 22-3.1 32.4-6 27-7.5 44.3-17.3 71.2-15.6 3.7-3.2 7.6-6.7 10.4-10.3.1-1.8.2-3.5 0-5.2 12.9 20.4 4 48.3 4.2 71.5-2.1 25.1 0 48-.7 73.7-8.3.6-22.9-1.1-27.4-7.2-8.7-16.4-27.9-50.7-37.6-71.8h.2c0-4 .5-4.8.3-8.7Z" style="stroke-width:0;fill:#152b50"/><path d="m161.6 53.8.5-.2c1.5 1.3 2 5.9-.2 7.2.3-5.8-8.3-5.3-7.8.9 0 1.2-2.3.8-3.9.5.2-2 .3-4 .4-6.1 4.1 1.8 6.8-2.3 11.1-2.3Z" class="cls-7"/><path d="M31 246.6c-.7-23.5-.6-48.9 1.4-72.5 7 1.7 13.3-.5 4.3-4.9 3.7-.2 7-.9 3.8-5.5-.5-.7-1.5-1-2.7-1.1 7.9 0 4.1-6.5-2.3-5.9 3.5.3 7.9-1 5.7-4.3 17.1 3.5 34.2 1.4 51.2-1.1 5.9 12.7 12.4 25.8 18.9 37.2 6.2 10.9 19.7 38.4 22.7 42.6 4.1 5.7 17.8 7.5 25.7 7.3-2 13.7-13.7 30.3-29.3 30.2-10.3.7-19.6 1.4-28.8-2-20.3-5.4-27.8-41.6-34.1-59H67c.8 12.7 1.8 27.2 1.1 39.7-12.1 1-24.9.4-37.1-.6Z" class="cls-10"/><path d="M154.5 91.3c1.4-.9 2.4-1.8 2.9-2.4.3 3.4.4 6 .1 9.3-2.7 3.6-6.7 7-10.4 10.3-12.4 0-25.6 0-36.7 4.9-.9-2.1-1.1-3.1-2.5-5.4 16.3-2.5 30.6-5.5 46.6-16.6Z" style="stroke-width:0;fill:#bdbec1"/><path d="M124.9 57.2c-.2-1.5-.3-3.2-.5-4.8l.5-.6 25 .9v.3c-.2 2.7-1.1 12.1-1.6 12.9h-22.1c-.6-3.3-.9-5.8-1.2-8.8Zm22.9-2.4q0-.1 0 0c-2.9 0-17.4-.3-21.2-.6.4 4.1.7 6.6 1.4 10 5.2.2 12.9.3 18.3.1.5 0 1.3-8.6 1.4-9.6Z" class="cls-7"/><path d="M147.8 54.8c-1.1 11.7.3 9.6-11 9.7v-2.4c1.8 0 1.8-6 0-5.9v-1.5c4.9.1 9.7.2 10.9.2Z" class="cls-11"/><path d="M143.7 50.4c-.4 1.4-6.6-.5-11.9.8-.7-.2-.4-1.1-.7-2.2 1.9-1.1 5.9-2.2 8-1.1.9.5 4.4 1 4.6 2.4Z" class="cls-4"/><path d="M136.8 56.1c1.8 0 1.8 6 0 5.9-1.8 0-1.8-6 0-5.9" class="cls-3"/><path d="M136.9 54.6v1.5c-1.9 0-1.9 6 0 5.9v2.4c-3.3 0-6.4 0-8.8-.2-.7-3.5-1-6-1.4-10 2.1.1 6.2.2 10.3.4Z" class="cls-11"/><path d="M124.7 54.4c0 1 .2 2 .3 2.9-2.2-.1-4.4.2-6.7.2.1-.9.2-1.9.3-2.9 2.1.1 4.1 0 6.1-.1Z" class="cls-7"/><path d="M96.4 54.4c.1 1 .9 9.2 1.4 9.2 5.3.1 12.4 0 17.6-.1.7-3.3 1-5.7 1.4-9.6-3.9.3-17.9.6-20.3.6Zm-1.3 1.7c-.2-1.1-.4-2.3-.5-3.4l24.2-.7c-.3 4.6-.8 8.6-1.6 13.3-5.6.2-14.4.4-21.1.2-.7-2.2.4-4 0-4.5-.3-1.4-.6-3-.9-4.7Z" class="cls-7"/><path d="M116.7 53.9c-.4 3.9-.7 6.3-1.4 9.6-2 0-4.5.1-7.1.2v-1.6c1.6 0 1.6-5.9 0-5.8v-2.1c3.4-.1 6.7-.2 8.5-.3" class="cls-11"/><path d="M107 47.5c3 0 6.3.2 5.1 3.9-2.6-.7-9.3-.5-12.4.5.6-1.8 4.2-4.3 7.4-4.4Z" class="cls-4"/><path d="M108.3 56.3c1.7 0 1.7 5.9 0 5.8-1.7 0-1.7-5.9 0-5.8" class="cls-3"/><path d="M108.3 62.1v1.6c-11.1-.5-10.9 3.3-11.9-9.3 1.3 0 6.7 0 11.8-.2v2.1c-1.6 0-1.6 5.9 0 5.8Z" class="cls-11"/><path d="M94.6 56.2c.1 1.5.3 3.3.5 4.9-3.7.8-2.7-1.9-3.5-4.4.7-.1 2.2-.4 3-.5" class="cls-7"/><path d="M78 123.3v.2c-11.2 3.3-22.2 5.8-34.6 6.7 5.6-14 25.5-14.4 34.6-6.9" class="cls-10"/><path d="M68 247.3c3.2 4.2 3 13.7 2.6 18.8-10 3.1-22 1.8-32.5 2.1-11.1 1-21.7.6-32.5-.8-1.5-12.5 14.7-20.5 25.2-20.1 0-.2.1-.4.1-.6 12.2 1 25 1.7 37 .6Z" style="stroke-width:0;fill:#3a3a3a"/><path d="M160 57.1c-3.1-1.3-5.9.5-5.9 4.6s-2.3.8-3.9.5c1.2-10.7.1-32.9-2.5-34.4-5.9-5.1-18.1 2.3-27.4 2.3-15-3.3-22.4-11.8-26.5 13.1 0 2.9.3 6.3.8 9.5l24.2-.7c0 .9-.1 1.8-.2 2.6 2.1.1 4.1 0 6.1-.1 0-.6-.1-1.2-.2-1.9l.5-.6 25 .9v.3c-.2 2.7-1.1 12.1-1.6 12.9h-22.1c-.6-3.3-.9-5.8-1.2-8.8-2.2-.1-4.4.2-6.7.2-.3 2.6-.6 4.9-1.1 7.7-5.4-.2-15.5 1.2-21.4-.3-1.3 13.3 8.4 30.1 20.1 35.3-.3 2.4 0 4.1-.2 6.3 14.1-2.2 24.5-5.8 38.8-15.2-.5-5.7-.2-11.9 0-17.7 1.5 1 3.2 1.1 4.5-2.8.8-3 5.6-11.1 1-13.8Zm-47.9-5.7c-2.6-.7-9.3-.5-12.4.5.6-3.7 14.3-7.6 12.4-.5m19.7-.3c-.7-.2-.4-1.1-.7-2.2 1.9-1.1 5.9-2.2 8-1.1.9.5 4.4 1 4.6 2.4-.4 1.4-6.6-.5-11.9.8ZM41.7 154c0-4.5-10-3.2-12.8-1.1-2.7 3.5 1.6 3.6 5.8 3.7 2.9 0 6.7.2 7-2.6" class="cls-5"/><path d="M40.4 157.6c-2.3-1.3-10.6-1.9-11.7 1.3-1.4 4.1 2 4 5.6 3.8v.2c-5.4.8-6.5 4.7-.9 5.4 0 .4-.1.7-.2 1.1-4.2-.2-4.6 4.4-.6 4.3v.4c7 1.7 13.3-.5 4.3-4.9 3.7-.2 7-.9 3.8-5.5-.5-.7-1.5-1-2.7-1.1 3.6-.3 6.7-1.1 2.5-5Z" class="cls-5"/><path d="M96 60.8c-2.7 14.3 6.6 33.6 19.9 39.4 8.8 3.2 19.6-1.4 36-14.3" class="cls-1"/><path d="M95.1 56.1c.3 1.7.6 3.3.9 4.7M94 39c-.7 5.4.2 11.5 1.1 17.1m4.5-4.2c3.2-1 9.8-1.1 12.4-.5m19.8-.2c5.3-1.3 11.4.6 11.9-.8m-25.3 16.7c-1.4 1.7-3.9 1.6-5.1 4.3 0 3.5 1.5 4.4 3.7 5.2" class="cls-1"/><path d="M93.8 43.2c4.1-24.9 11.4-16.4 26.5-13.1 9.3 0 21.5-7.4 27.4-2.3 2.6 1.5 3.6 23.7 2.5 34.4 1.6.3 3.9.7 3.9-.5-.5-6.3 8.1-6.7 7.8-.9-.6 3.8-3 16.1-7.4 12.9m6.8-53.8c-2.8-3-11.4-18.2-28-18.9" class="cls-1"/><path d="M93.3 55.9c-6.1-30.3-7-32.3 5.7-45.8M153.5 83c1.1-.9 1.8-1.6 2.9-2.8.4-.4.5 1.4.9.9 4.1-5 5.7-13.6 7.4-20.9.1-.6-.1 4.3 0 3.7 3.9-14.8 3.2-33.5-3.4-44M99 10.1c7.1-9 27.8-9.5 34.3-9.1" class="cls-1"/><path d="M154.3 70.9c.1 5 .2 12.8-3.5 16m-51.2-35c.6-3.7 14.3-7.6 12.4-.5m19.8-.2c-.7-.2-.4-1.1-.7-2.2 1.9-1.1 5.9-2.2 8-1.1.9.5 4.4 1 4.6 2.4m-32 36.5c6.8 2.4 16.7 1.2 23.5-3.1m22-22.2c0 2-.6 3.8-1.4 5.6m-47.5-10.8c1.7 0 1.7 5.9 0 5.8-1.7 0-1.7-5.9 0-5.8m28.5-.2c1.8 0 1.8 6 0 5.9-1.8 0-1.8-6 0-5.9" class="cls-1"/><path d="M96.4 54.4c.1 1.1.8 9.3 1.4 9.3 5.3.1 12.4 0 17.6-.1.7-3.3 1-5.7 1.4-9.6-4 .3-17.9.6-20.3.6m-.1-.1q0 0 0 0" class="cls-1"/><path d="M94.4 53c.3 1.4.6 10.2 1.6 12.4 6.7.2 15.6 0 21.1-.2.8-4.6 1.2-8.4 1.6-12.9m29.1 2.5c0 .6-.9 9.7-1.4 9.6-5.4.1-13.1 0-18.3-.1-.7-3.5-1-6-1.4-10 3.8.2 18.3.6 21.2.6m-21.7 11c-.9-4.7-1.3-8.8-1.7-13.4m25.4.8v-.1c-.3 2.8-.9 12.2-1.7 13" class="cls-1"/><path d="M149.7 55.7c4.3 2.7 7.5-1.9 11.9-1.9m-66.3 2.3h-.2c-1 0-2.6.4-3.5.6.6 3.3.6 5.7 4.8 4m22.5-6.1c2 0 3.9 0 5.8-.2m-6.4 3c2.3 0 4.6-.3 6.9-.2m-30.8-4.5c.4 0 24.2-.7 24.6-.8m5.9 0c.4 0 24.9.9 25.3.9m-24 13.1c.4 0 22.2.1 22.6.1m13.3-12.4c1.5 1.4 2.1 6.1-.3 7.2m-27.2 41.1c-6.2 2.5-21.3 4.9-26.7 5.9 1.5 2.2 1.5 3.2 2.4 5.1" class="cls-1"/><path d="M32 151.6c-3.8-2.9-4.2-12.9-1.7-16.4 2.6-3.7 8.9-4.7 13.2-5 11.6-.8 22-3.1 32.4-6 27.2-7.6 44.6-17.3 71.7-15.6m11.1 27.2c-5.3 9.3-28.1 8.9-37.1 10.4-26.8 4.1-53.3 11.3-80.4 6.1m93.4-50.4c2.4-.9 17.8-8.2 22.8-13 .4 4.3.3 8-.1 12.3" class="cls-1"/><path d="M96.8 150.8c0 3.9-.3 4.4-.3 8.3m14.7 29.2c-.5-.9-1-1.7-1.3-2.3" class="cls-1"/><path d="M157.7 93c12.9 20.4 4 48.3 4.2 71.5-2.1 25.1 0 48-.7 73.7-8.3.6-22.9-1.1-27.4-7.2-3-4.2-16.5-31.7-22.7-42.6" class="cls-1"/><path d="M92.4 151.3c7.7 17.2 17.7 34.2 25.3 50.4m-85.2-28c-2.1 23.7-2.2 49.4-1.5 73 12.3 1 25.1 1.7 37.2.6.7-12.5-.3-27.1-1.1-39.7-1.2-7.9-3.5-21.3-1.5-28.1m-32.3-11.2c0 .4-.1.7-.2 1.1m1.1-6.8v.2m125.5 75.1c-2 13.8-13.6 30.6-29.3 30.5-10.3.7-19.6 1.4-28.8-2-20.3-5.4-27.8-41.6-34.1-59m-24-77.3c5.6-14 25.5-14.4 34.6-6.9m76-44.7c.4 4.1-.3 8.9.3 12.9" class="cls-1"/><path d="M31 245.3c.1.7 0 1.3 0 1.9-10.5-.3-26.7 7.6-25.2 20.1 10.8 1.3 21.4 1.7 32.5.8 10.4-.3 22.5 1.1 32.5-2.1.4-5.4.8-15.3-3.1-19.4m48-145.8c.3 2.4 0 3.6 0 5.7" class="cls-1"/><path d="M30.8 173.7c11.4 3.2 15-2.3 2.5-5.4-8.7-1.9-.5-6.3 4.5-5.7 7.9 0 4.1-6.5-2.3-5.9-3.8-.1-9.5.1-6.5-3.7.4-.5 1.6-1 3-1.4 9-2.9 15.1 4.9 3.5 5.1-2.7 0-6.1 0-6.9 2.3-2.1 5.8 5.9 3.2 9.2 3.7 1.2 0 2.2.4 2.7 1.1 3.2 4.5 0 5.2-3.8 5.5-1.9.2-5.4-.2-6.5 1.2-1.7 2.7 1 3.3 3 3.4m113.9-65.5c3.9-3.4 7.9-6.9 10.8-10.8" style="fill:none;stroke:#000;stroke-miterlimit:10"/></svg>')}`;
export default image;