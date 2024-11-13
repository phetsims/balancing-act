/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Africa" width="154" height="394" viewBox="0 0 154 394"><defs><style>.cls-1,.cls-2{fill:none;stroke:#010101}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3{fill:#f8c041}.cls-10,.cls-3,.cls-4,.cls-7,.cls-9{stroke-width:0}.cls-4{fill:#34312d}.cls-7{fill:#73533f}.cls-9{fill:#fcb316}.cls-10{fill:#010101}</style></defs><path d="M128.7 184c-3.4-6.2-6-11.8-8.8-17.1.9.3 3.3-6.5 5.6-12.8 5.5 3.9 14.6 13.5 20.1 17.4-3 10.5-6.9 20.4-8.8 23.7-2.3-1.6-5.3-6.1-8.1-11.2" class="cls-3"/><path d="M44.7 41.2c0 3.3.1 5.1 1 9.4 0 0-2 6.6.5 13.3 9.1 19 17.6 37.2 43.1 13.4C102 64 100 35.5 89.3 26.2c-14.2-7.6-45.1-8.1-44.6 15m90.6 78.2c3.5 4.9-4 5.9-7.3 4.3-8.6-3.2-15.1-1.5-22.1-.8-19.1 3.6-22.7-11.8-36-16.6-2.9.2-7.1 1.8-9.3 3.6-7.7 6.2-11.4 5.7-17 9.2-4.8 3-22.3 11.9-28.2 10.5-2.9-14.4 12.8-27 23.9-33.7 1.7-.9 5.1-3.9 6.3-5.4 4.5-9.2-13-20.8-9.5-42.1-.3-35.5 32.8-59.6 58.5-40.5 15.4 12.9 22.6 35.2 15.9 54.4-1.8 8.1-16.7 22.5-12.3 26.5 7.9 9.9 31.5 19.4 36.8 30.8Z" class="cls-4"/><path d="M101.6 183.5c-1.3-7 11.3-6.3 15.9-7.8h.1c1.5-1.6 2.8-3.4 4-5.3 1.8 3.7 4.4 8.9 7 13.7-1.8 3.1 0 0-2.4 2.7 3.2 5.8-16.5 20.1-17.8 12-1.6 0-4.9-1.6-3.1-3.7-1.9-.3-4-2.1-2.8-4.7-6.2-1.3-3.7-4.4-.9-6.9" class="cls-7"/><path d="M112.7 317.7c0 11.8 10.7 66.8 9.9 67.5-14.4 11.8-74.9 12.2-96.5 0 1.4-9.8 9.8-55.6 10-64.4.7-24.9-10.1-64.5-5.4-102.1 6.6 2.4 15.9 3.8 27.1 4.3 11.6-39.7 8.6-32.6 14.7.5 16.4-.1 32.2-2.2 43.8-6 5.9 27.6-3.4 79.7-3.5 100.2Z" style="stroke-width:0;fill:#b7884a"/><path d="M30.9 198.9c4.7-10.3 12.9-29.8 14.8-35.2 20.2 5.6 35.2 4.4 55.5-1.6 0 0 4.2 10.4 8 15-4.6.9-8.7 2.4-7.7 6.4-2.8 2.5-5.3 5.6.9 6.9-1.2 2.6.9 4.4 2.8 4.7-1.8 2 1.6 3.7 3.1 3.7-.2 3.6 4.1 2.5 7.7.8q3.3 6.4 7 15.3c-14.9 6.4-30.9 8.2-50.7 8.6-6.1-33.4-3.2-39.9-14.7-.5-14.7-1.1-24.5-1.6-34.2-8.1 2.7-5.7 5.2-11 7.4-15.9Z" class="cls-9"/><path d="M121.1 139.7c-3.9 2.6-6.9 7.6-12.3 7.3-1.4 0-3.1 0-4.1.8 1.8-5.8 3.8-12.7 5-20.1 3.4 3.6 7.8 8 11.5 12Z" class="cls-4"/><path d="M149 142.3c-2-3.1-4.9-11.5-13.7-22.9 3.5 4.9-4 5.9-7.3 4.3-8.6-3.2-15.1-1.5-22.1-.8-19.1 3.6-22.7-11.8-36-16.6-2.9.2-7.1 1.8-9.3 3.6-7.7 6.2-11.4 5.7-17 9.2-4.8 3-22.3 11.9-28.2 10.5-16.2 27.9-11.2 24.9-5.8 46.7 5.7-3.4 11.6-10.6 15.9-15.7-.6-1.6-1.3-3.4-2.3-5.5 2.5-3.7 11.1-16.3 13.8-18.9-.4 7.3 3.2 14.5 6.3 21.3h.2c18.1 4.8 41.1 3.8 58.6-1.4 2.4-9.2 5.7-17.7 7.4-28.3 5 5.4 14.8 14.6 18.3 20.2-.8 1.8-1.6 4-2.4 6.2 5.5 3.9 14.6 13.5 20.1 17.4 3.6-12.3 6.1-25.4 3.4-29.2Z" class="cls-9"/><path d="M101.3 156h1c-.6 2.4-1 4.5-1 6.1-20.3 6-35.4 7.2-55.5 1.6-.8-2.5-1.6-4.6-2.3-6.3h.2c17.7 4.4 40.6 4.4 57.6-1.4" style="stroke-width:0;fill:#454139"/><path d="M97.2 40.6c.8 10.2 3.3 24.3-7.8 36.7C69.3 96.1 61.8 87.7 54.6 79c-4.4-4-12.4-21.8-8.8-28.5-2.4-10-1-19.2 6.6-25.4 5.6-5.2 31.3-4 37 1 3.7 3.2 6.8 9.5 7.9 14.4Zm-8.4 1.8c-5.6-7.3-15.4-.6-11.7.3 1.8-1 8.7-1.6 11.7-.3m-4.3 7c0-5.5-4.5-5.4-4.5 0 0 5.5 4.5 5.5 4.5 0M77 73.5c2.1-1.7 2-.7 4.4-5.1-1.2 1.5-13.4 5.3-19.8 2.7 2.8 6.1 10.3 6.4 15.3 2.4ZM61.1 42.3c1.2.1.5-1.6-1.6-2.9-3-2-7.9 1.4-8.7 3.1 2.6-.3 7.6-2 10.3-.3Zm-3.3 7.1c0-4.7-3.7-4.8-3.7 0s3.7 4.7 3.7 0" class="cls-7"/><path d="M84.3 39.4c1.9.5 4.7 2.8 4.5 3.1-3-1.3-10-.7-11.7.3-1.5.2-.9-1.6 1.4-3 1.7-1 4.4-.7 5.8-.3Zm-2 5.9c2.9-.1 2.9 8.5 0 8.4-2.9.1-2.9-8.5 0-8.4" class="cls-10"/><path d="M81.4 68.5c-4.1 8.3-15.5 11.1-19.8 2.7 6.4 2.6 18.6-1.2 19.8-2.7" style="stroke-width:0;fill:#fff"/><path d="M59.5 39.6c2.1 1.3 2.9 3 1.6 2.9-1.1 0-2.2-1.4-5.5-.7-1.8.4-4.7 1.1-4.8.9.8-1.7 5.7-5.2 8.7-3.1M56 45.8c2.4-.1 2.4 7.4 0 7.3-2.4.1-2.4-7.4 0-7.3" class="cls-10"/><path d="M38 144.1c.7 3.3 1.8 5.4 3.2 8.4-4.6 0-9.2-1.9-12.7-5 3.1-4.5 6.8-9.5 8.6-11.4 0 2.4.2 4.8.9 7.9Z" class="cls-4"/><path d="M40.2 177.7c-2.3 5.6-5.4 12.8-9.2 21.2-2.4-1.7-6-6.4-7-10.5 3.1-6 5.9-12.5 7.7-15.9 1.7 3.5 5.2 3.7 8.6 5.1Z" class="cls-7"/><path d="M25.6 160.6c1.7 4.5 2.6 7.8 5.9 12-3.2 5.9-9.7 23.2-16 27.5-2.4-4.7-3.5-15.1-5.8-23.8 5.7-3.4 11.6-10.6 15.9-15.7" class="cls-3"/><path d="M116.2 175.9v.1m-78.5-49.1c-2.7 13.9 3.2 24.1 8.1 36.8-4.2 11.3-15.2 36.6-22.2 51.1m86-87.1c-1.7 12.7-7.1 22.8-8.3 34.4 0 0 4.2 10.4 8 15m-93.8-47.5C4.2 149.5 9 141.1 7.8 143.8c-1.9 4.4-4 11.7-3.5 14.6" class="cls-2"/><path d="M37.1 136.1c-2.6 2.6-11.3 15.2-13.8 18.9" class="cls-2"/><path d="M20.4 149.5c5.2 7.9 5.4 15.5 11.2 23.1m74.4-48.8q1.5 1.65 3.6 3.9c5 5.5 14.9 14.6 18.3 20.4m7.4-28.7c8.8 11.5 11.7 19.8 13.7 22.9m-44.3 38.4c-2.5 2.6-10.9 7.9-2.2 9.7-1.2 2.6.9 4.4 2.8 4.7-1.8 2 1.6 3.7 3.1 3.7 1.3 8.2 21.7-6.6 17.7-12.4" class="cls-2"/><path d="M117.5 175.7c-4.7 1.5-17.3.8-15.9 7.8m21.5 31.4q-3.6-8.9-7-15.3M30.5 219c-4.2 37.7 6.1 76.8 5.5 101.7-.2 8.9-8.5 54.7-10 64.4 21.6 12.2 82.1 11.8 96.5 0 .9-.7-10-55.7-9.9-67.5.2-20.5 9.4-72.6 3.5-100.2m20.7-22.1c4.3-7.2 17.2-45.8 12.2-52.9m-19 1.7c-3.3 3.9-7.8 22.3-10.1 22.9m-116-9.7c6.2 14.7 7.4 31.4 11.6 42.8m28.1-42.7c17.7 4.5 40.6 4.5 57.6-1.3" class="cls-2"/><path d="M72.4 223.5c19.8-.4 35.8-2.2 50.7-8.6m-99.6 0c9.7 6.5 19.5 7 34.2 8.1m-33.8-34.6c1.4 4.6 4.8 9.5 8.2 11.1m1.9-24.1c1.7 1.1 4.8 1.5 6.7 2.6m60.6-15.9c-20.3 6-35.4 7.2-55.5 1.6m74.1 3.3c4.1 7.5 10.5 23 16.8 28.3" class="cls-2"/><path d="M31.5 172.6c-3.2 5.9-9.7 23.2-16 27.5m110-45.9c5.5 3.9 14.6 13.5 20.1 17.4m-120-11c-4.3 5.1-10.2 12.3-15.9 15.7" class="cls-2"/><path d="M44.7 41.2c0 3.3.1 5.1 1 9.4 0 0-2 6.6.5 13.3 9.1 19 17.6 37.2 43.1 13.4M44.8 39.7v1.6" class="cls-1"/><path d="M97.8 50.6c.1 3.8.4 19.1-8.9 27.2m8.9-27.2c.7-8.7-2-18.3-8.5-24.4-14.2-7.7-45.2-8.1-44.6 15" class="cls-1"/><path d="M128.7 184c-1.7 3.1 0 0-2.4 2.7m-4.5-16.5c-1.3 2.2-2.8 4.2-4.5 6.1m-83.3-.9c-1.9-1.1-1-1.2-2.5-2.8M44.7 18.9c38.2-50.3 87.3 15.7 61.4 52.6-6 8.9-10.2 13.8-7.6 17.1 7.9 9.9 31.5 19.4 36.8 30.8 3.5 5-4 5.9-7.3 4.3-8.6-3.2-15.1-1.5-22.1-.8-19.1 3.6-22.7-11.7-36-16.6-2.9.2-7.1 1.8-9.3 3.6-7.7 6.2-11.4 5.7-17 9.2-4.8 3-22.3 11.9-28.2 10.5-2.9-14.4 12.8-27 23.9-33.7 12.8-6.7 5.4-15 0-25.2-6.4-16.3-3.7-36.9 5.2-51.8m27.9 204.6c-6.1-33.4-3.2-39.9-14.7-.5m64-83.5c-4.5 2.1-7.2 7.9-13 7.5-1.6 0-3.4 0-4.4 1.1m-62.8 4.4c-4.8 0-9.6-2-13.2-5.2" class="cls-2"/><path d="M57.8 49.5c0 4.7-3.7 4.8-3.7 0s3.7-4.7 3.7 0m26.7 0c0 5.5-4.5 5.5-4.5 0 0-5.4 4.5-5.5 4.5 0M62.4 57c-4.6 9.9 8.9 8.5 10.9 7.2m-11.6 7c6.4 2.6 18.6-1.2 19.8-2.7-4.1 8.3-15.5 11.1-19.8 2.7m-6.9-31.8c-1.4.5-4.2 3.1-4 3.3 2.6-.3 7.6-2 10.3-.3 1.2.1.5-1.6-1.6-2.9-1.5-.9-3.6-.5-4.7-.1m29.5 0c1.9.5 4.7 2.8 4.5 3.1-3-1.3-10-.7-11.7.3-1.5.2-.9-1.6 1.4-3 1.7-1 4.4-.7 5.8-.3Z" class="cls-1"/></svg>')}`;
export default image;