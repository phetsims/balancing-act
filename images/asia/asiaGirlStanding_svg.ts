/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Asia" width="125.4" height="302" viewBox="0 0 125.4 302"><defs><style>.cls-1,.cls-2{fill:none;stroke:#010101}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3{fill:#362e2c}.cls-10,.cls-3,.cls-7,.cls-9{stroke-width:0}.cls-7{fill:#cf845b}.cls-9{fill:#e8e7e7}.cls-10{fill:#010101}</style></defs><path d="M47.7 163.7c1-20.2 1.6-28.3 7.3-40.2 4.3 6 8.3 34.3 9 38.7 3.2 2.4 14.1 1.7 21.7-1.2 2.4 38.3 10 123.6 10.6 125.1-22.3 13.1-51.1 12.7-72.6-.4 1.8-30.2 4.8-90.1 10.4-123.2 4.1.3 12.2 1.3 13.5 1.1Zm54.2-54c-5.5-4.8-9.5-8.6-18.6-18.2-2.4-2.4-1.9-16.3 1.9-19 10 .9 25 23.3 30.7 31.4 4.4 13.3-13 27.7-18.7 39.1-4.6-3-7.5-6.5-8.2-11.6 7.6-8 8-15.2 12.8-21.6Z" class="cls-9"/><path d="M92.5 296.7c.9 9.4-17.2.5-21.3-1.8 5.3-.8 10.7-2.3 16.3-4.6 1.6 1.9 4.3 4 5 6.4" class="cls-7"/><path d="M75.8 4.7c2 2.5 3 8.1 2.8 10.9-13.7-7.8-29.4-6.7-43.3.6-.7-4.1 2.3-8.2 3.8-12.3 1.7-3 32.8-4.3 36.7.8" style="stroke-width:0;fill:#ab4835"/><path d="M35.3 16.2c13.9-7.3 29.6-8.3 43.3-.6 1.5 4.6 3.8 11.3 2.2 18.3h-.2c0-2.9-3.5-2.5-4.8-1-2.8-15.1-23-19.4-23-19.4s-15 7.7-16.8 19c-.5 0-1 .2-1.3.5-.9-7.7-.9-11.8.6-16.9Zm38.2 53.4c2.3 29.5-1.5 25.7.9 50 .3 2.7-2.1 9.3-3.6 7-3.3-28.8-2-40.7-3.5-68.3 2.9-2.7 6.7-5.3 8.1-9.6-.8 4.8-1.9 13.3-1.9 21Z" class="cls-3"/><path d="M63.4 31.8c2 0 2 6 0 5.9-2 0-2-6 0-5.9" class="cls-10"/><path d="M64.1 48.4c-2 6-14.6 8.5-17.3 1.3 5.4 2.4 16.2-.2 17.3-1.3" style="stroke-width:0;fill:#fff"/><path d="M44.2 68.1c1.2-3.7.6-5.7-1.7-12.7 2.2 2.7 5.1 5.3 8.5 6.6-.8 7.2-6.8 16.4-7.1 24.2-1.9 17.8-2.2 4.5-1.5 24.8.3 10.7-3.8 17.6-4.1 10.8-.8-22.3-.9-41 5.9-53.7" class="cls-3"/><path d="M90.7 150.7c-2.7 1.6-6.4 2.9-6.3-.4-1.1 0-3.6-1.4-2.3-3.2-1.6-.2-2.9-2.3-2.1-4-4.6-1.1-2.7-3.9-.7-6-1-4.9 4-4.8 7.8-5.4-.2-2.7-1.9-36.2-2.1-37.9l.2-.2c-5-2.2-4.5-17.7-.2-21.2-3.6-1-8.8-2.2-11.7-2.8 2.3 29.5-1.5 25.7.9 50 .3 2.7-2.1 9.3-3.6 7-3.2-26.7-1.7-31.4-3.1-56.5-3.8 4.5-11.9 6.1-11.9 6.1-1.6-.5-6.1-4.1-6.5-5-.2-.5.2-2.1.5-3.2-2.9 5.8-5.2 11.7-5.9 18.1-1.9 17.8-2.2 4.5-1.5 24.8.3 10.7-3.8 17.6-4.1 10.8-.8-22.3-.9-41 5.9-53.7-8.8.9-8.8 18.7-9.1 29.1-.9 24-2 43.8-3.1 65.3 4 0 14 1.4 15.7 1.2 1-20.2 1.6-28.3 7.3-40.2 4.4 6.1 8.3 34.4 9.1 38.8 4.2 3.1 20.7 1.1 27.1-4.2 0-1.9-.4-5.5-.5-7.3Z" style="stroke-width:0;fill:#c4de8f"/><path d="M45.2 32.2c1.6 0 1.6 5.2 0 5.2s-1.6-5.2 0-5.2" class="cls-10"/><path d="M22.5 114.8c3.2 6.7 6.2 13.3 10.9 19.4 0 1.6-.2 3.4-.3 5.3-2.6 3.3-3.2 2.1-6.6 5.3-.4.4-14.5-20.7-17.8-27.6-.8-8 1.6-8.9 6.7-18.7 6.5-9.9 13.2-26.5 25.2-28.9-4.1 1.3-5.8 19.7-5.6 27.6-5.6 6.9-9 13-12.6 17.6Z" class="cls-9"/><path d="M89.1 131.3c-3.8 1.2-10.8.1-9.6 5.8-2 2.1-3.9 4.8.7 6-.8 1.7.5 3.8 2.1 4-1.3 1.8 1.1 3.2 2.3 3.2.7 6.3 13.3-3.7 12.8-7.4-4.6-3-7.5-6.5-8.2-11.6Zm-8.3-94.5c.3-3.6-1.6-6.8-5-3.7-2.8-15.1-23-19.4-23-19.4s-15 7.7-16.8 19c-6.2 2.2-2.4 12.4 2.3 14.6 3.4 8.3 5.8 11.2 12.8 14.6-.2.5-.3 1.7-1 5-.2 1.1-1 3.7-.7 4.3.4 1 4.9 4.5 6.5 5 0 0 8.1-1.5 11.9-6.1-.3-4.1 0-7.7-.4-11.9 4.6-3.7 9.1-7.9 9-14.9 2.8.2 4.7-3.6 4.6-6.7Zm-35.6.6c-1.6 0-1.6-5.2 0-5.2s1.6 5.2 0 5.2m7.7 16.7c-3.2 0-4.7-1.8-6.1-4.4 5.4 2.4 16.2-.2 17.3-1.3-1.4 4.2-6.4 5.7-11.2 5.7m10.5-16.3c-2 0-2-6 0-5.9 2 0 2 6 0 5.9m-36.8 107c.6 2.9 3 7.1 6 6.1.2-3.7.4-7.8.6-11.4-2.6 3.3-3.2 2.1-6.6 5.3" style="stroke-width:0;fill:#d18d75"/><path d="M32.2 289.9c5.7 2.4 12.3 4.4 19.5 5.3-9.3 8.6-45.1 11.1-19.5-5.3" class="cls-7"/><path d="M46.5 34.8c0 3.3-2.6 3.3-2.5 0 0-3.3 2.5-3.3 2.5 0Zm18.4 0c0 3.9-3.1 3.9-3.1 0 0-3.8 3.1-3.8 3.1 0Zm-16.3 9.3c-.2 1.6 4.8 3.1 7.2 2.3m-9 3.3c5.4 2.4 16.2-.2 17.3-1.3-2 6-14.6 8.5-17.3 1.3Zm38.4 44.1c.1 1.7 1.8 35.1 2.1 37.9m-60.7 13.1c.6 2.9 3 7.1 6 6.1m-17-52.4c-5.1 9.8-7.6 10.7-6.7 18.7m13.6-2.4c3.2 6.7 6.2 13.3 10.9 19.4m-16.5-26.1c2.7 1.8 4.3 4.1 5.7 6.7m85.1-22.3c5.2 6.5 7.3 9.6 8.3 11.3 4.4 13.3-13 27.7-18.7 39.1" class="cls-2"/><path d="M89.1 131.3c8.9-10.2 8.5-17.4 16-26m-23.4 29.5c-1.8 2.2-8 6.8-1.6 8.4-.8 1.7.5 3.8 2.1 4-1.3 1.8 1.1 3.2 2.3 3.2.7 6.3 13.3-3.7 12.8-7.4" class="cls-2"/><path d="M89.1 131.3c-3.8 1.2-10.8.2-9.6 5.9m9.6-5.9c.7 5.1 3.6 8.7 8.2 11.6m-63.7-3.8c-2.6 3.5-3.4 2.6-6.9 5.7-.4.4-14.5-20.7-17.8-27.6m87.6 168.9c-22.3 13.1-51.1 12.7-72.6-.4m62-124.5c2.3 38.4 10 123.5 10.6 124.9m-72.6-.4c1.8-30.4 4.8-90.3 10.4-123.5" class="cls-2"/><path d="M35.8 33.5c-.4 22.4 18.6 41 36.7 19.9m3.8-11.7c-.2 4.5-.8 8.9-3.8 11.7M35.8 33.5c.9-11.2 17-19.9 16.9-19.8 0 0 20.2 4.3 23 19.4" class="cls-1"/><path d="M49.8 68c.5-2 1.2-6.2 1.1-5.8m16.4-3.9c.3 4.1.1 7.7.4 11.9-3.8 4.5-11.9 6.1-11.9 6.1-1.6-.5-6.1-4.1-6.5-5-.2-.5.2-2.1.5-3.2m22.7 1.3c20.7 3.3 23.4 8.2 37.7 26.2M44.7 67.8c-16.9 5-20 16.3-29.1 30.7m39.4 25c4.4 6.1 8.3 34.4 9.1 38.8 4.2 3.1 20.7 1.1 27.1-4.2 0-1.9-.5-5.5-.5-7.3m-57-21.4c.6-9.8 1.3-29.5 1.9-42.4M55 123.5c-5.8 11.9-6.4 20-7.3 40.2-1.7.2-11.7-1.2-15.7-1.2.3-7.6 1.3-24.4 1.7-33.1m68.3-19.6c-5.6-4.9-9.5-8.7-18.7-18.3" class="cls-2"/><path d="M35.3 97c-5.6 6.9-9.1 13.1-12.8 17.8" class="cls-2"/><path d="M75.8 33.1c7.2-5.8 6.2 11.1.5 10.4M36.1 32.7c-6.3 2-2.5 12.4 2.2 14.6m-3-31.1c-1.6 5.1-1.6 9.2-.6 16.9" class="cls-1"/><path d="M80.8 34c1.6-7-.7-13.8-2.2-18.3m-3.2 33c-1 5.5-2.3 16.7-1.7 24.6 2.1 30.6-1.8 20.8.8 46.3.3 2.7-2.1 9.3-3.6 7-3.2-26.7-1.7-31.4-3.1-56.5" class="cls-1"/><path d="M49.8 68c-2.9 5.7-5.2 11.8-5.9 18.2-1.9 17.8-2.2 4.5-1.5 24.8.3 10.7-3.8 17.6-4.1 10.8-.8-17.1-.4-39.3 2.9-46.6 3.8-8.7 5.1-9 1.3-19.8m36-39.7c-13.7-7.8-29.4-6.7-43.3.6-.7-4.1 2.3-8.2 3.8-12.3.3-.9 7.8-2.8 17.8-2.8 13.4.3 22.6.8 21.7 14.5ZM55.8 76.2c-2.3 14.8-.2 47.1-.8 47.2m30.2-50.9c-3.8 2.8-4.4 16.6-1.9 19" class="cls-2"/><path d="M41.1 69.4c-2.5 1.4-5.1 7.1-5.5 17.5m25.3-58.2c2.2-1.2 4.9-1.3 7.2-.5m-20.6 1.1c-1.7-.8-3.8-1-5.6-.5m45.6 261.6c15.7 15.6-8.6 10.2-16.3 4.6m-19.5.2c-9.3 8.6-45.1 11.1-19.5-5.3" class="cls-2"/></svg>')}`;
export default image;