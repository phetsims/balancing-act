/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Africa" width="138" height="203.8" viewBox="0 0 138 203.8"><defs><style>.cls-2,.cls-3{fill:none;stroke-linecap:round;stroke:#010101}.cls-2{stroke-linejoin:round}.cls-3{stroke-miterlimit:10}.cls-10,.cls-11,.cls-14,.cls-9{stroke-width:0}.cls-9{fill:#1f170f}.cls-10{fill:#242c63}.cls-11{fill:#cda581}.cls-14{fill:#010101}</style></defs><path d="M133.8 135.3c0 9.9.1 36 0 46.8-4.2-.4-8-1.3-11.6-3.8v-.4c-5.8-5.2-29.1-36.5-38.2-47.1v-1.7c13.7 6.1 36.4 5.9 49.8 3.3v3Z" style="stroke-width:0;fill:#2a4b85"/><path d="M133.8 132.3c-13.5 2.7-36.1 2.8-49.8-3.3 0-.8-.1-1.4-.2-2.6 7.7-2.6 12.4-3.9 20-6.5 5.1 1 25.3.5 29.8-2 .2 5.4.2 10.5.3 14.3Z" style="stroke-width:0;fill:#f4f4f4"/><path d="M74.6 38.3c.1 2.5.2 3.4.2 4.3-.7 0-1.3-.1-2.1.2-2.4-1.8-2.8-13.3.1-17.6 1.3-1.9 2.2-8.3 3-10.5 2.5-6.2 6.8-4.7 10.1-7.8 4.6-5.5 12.5 0 17.3-2.5 9.3-4.7 9.9 5.1 17.1 5 2.7.1 5.5 3.1 6.3 8.2.5 3.4 4.8 4.3 3.8 8.5-.7 3.6 2.4 10.3-.7 14.8-1.2-.3-2.6.4-3.2 1.8-3.6 6.6-5.9-9.9-9-13.6-4.9-8.3-12.1-13.1-20.8-11.6-12.2-.3-19.3 7.9-22.3 20.6Z" class="cls-9"/><path d="M56.2 188.5c-9.1-.3-16.8-3.7-24.9-9.3.2 0 .3-.1.4-.2 2.3-9 6.1-19.1 8.7-31.8 5.8.5 4.7-4.1-.4-3.3 4 .6 7.1-3.6 1.9-3.6.7 0 1.4-.2 1.7-.7 2.2-3-.5-3.2-3-3.3 3.2-.5 5.6-2.2 1.1-2.6v-.5c17.9 2 22.3 0 39.3-5.8 10.6 10.9 34.2 44.1 41.5 50.5v.4c2.3 1.6 4.7 2.6 7.3 3.2-4.5 21.6-14.4 23.6-34.9 21.3-13.3-2.4-21.5-25.9-26.6-36.8-1.8-3.7-3.7-7.4-5.5-11.6-.7 1.3-4.7 33.8-4.7 34-.3.1-1 .2-1.9.2Z" class="cls-10"/><path d="M114.8 37.1c.3.6-2.5 2.2-3.1 2.2-1.5-.1-8.6.1-9.5 0s-.6-3.3-.3-3.4c2.7-1.7 12.3 0 12.9 1.3Z" class="cls-9"/><path d="M114.7 80.6c-1.9 7.5-9 9.8-15.8 13.5-8.5 1.2-12.4-5.9-6.9-12.9.4-.3.7-.4.9-.5 0 1.9-1.1 7.5 3 8.1 8.5.7 17-4.2 16.8-8.9.7 0 1.4.4 2 .7" style="stroke-width:0;fill:#292b4c"/><path d="M107.3 43.5c2.6 0 2.6 7.5 0 7.4-2.6.1-2.6-7.5 0-7.4" class="cls-14"/><path d="M108.4 64.9c.8 2.4-14.4 10.7-18.8 3.5 5.1.9 13.9-1.5 18.8-3.5" style="stroke-width:0;fill:#fff"/><path d="M114.7 80.6c-1.9 7.5-9 9.8-15.8 13.5-8.5 1.2-12.4-5.9-6.9-12.9-3.3 1.1-10.3 2.5-12.1 4.2-3.7 3.7-19.6 18-25.1 24.2 9-3.5 11.8-.9 12.8 0-1.5.6-3 1.1-4.4 1.6-7.2 1-14.9 3.5-20.6 5.1-7.4.5-8 10.8-6.2 15.5 23.9 7.4 44.4-5.5 67.5-11.8 5.1 1 25.3.5 29.8-2-.6-20.6-1.8-31.2-18.9-37.4ZM86 100.8c-5.5 2.9-10.9 5.6-15.8 7.7 4.3-2 10-4.8 15.8-7.7" style="fill:#51b248;stroke-width:0"/><path d="M89.7 36c1.5 1.7-1.7 3.9-3.5 3.5-1.8-.5-8.9 1.6-7.3-1.9 1.8-2.3 8.6-2.5 10.8-1.6" class="cls-9"/><path d="M84.3 43.7c2.1 0 2.1 6.5 0 6.4-2.1 0-2.1-6.5 0-6.4" class="cls-14"/><path d="M67.6 109.6c-6.2 2.6-12.4 2.7-17.7 4.5 1.9-6.8 17.2-7.3 17.7-4.5" class="cls-10"/><path d="M56.1 197.9s.9 5.8.2 5.6c-16.6.2-42.4 1-53.5-.9-.9-1.4-1.2-2.2-.9-3.5 15.2 4.1 40.8-1.8 54.1-1.2Z" style="stroke-width:0;fill:#202128"/><path d="M126.7 42.9c-3.7 6.6-5.9-9.9-9-13.6-4.9-8.3-12.1-13.1-20.8-11.6-12.2-.3-19.3 7.9-22.3 20.6 0 1.5-.1 2.9-.2 4.3-6.5-.7-4.7 17.5.6 15.8-.8-2.5-.8-6.3-.6-9.8.2 14.3 3.3 23.3 18.5 32.1-3.1 15.4 17.9 5.4 19.6 1.4.2-3.2.5-2.7.5-6.7 6.5-4.8 12-11.5 12.9-17.8 5 .5 6.8-6.8 7-10.9.3-3.8-3.8-8.4-6.2-3.8m-44 4.1c0-4.2 3.3-4.2 3.3 0s-3.3 4.2-3.3 0m6.3-8.1c-2.8 1-7.4 1.1-10.2.3-2-4.3 15.9-5.5 10.2-.3m.6 29.5c5.1.9 13.9-1.5 18.8-3.5.8 2.4-14.4 10.7-18.8 3.5m15.7-21.3c0-4.8 4-4.8 4 0s-4 4.8-4 0m-8.5 34.8c2.9.1 6.6-1 10.3-2.9-4.2 2.5-7.4 3.3-10.3 2.9m14.9-42.7c-1.5-.1-8.6.1-9.5 0s-.6-3.3-.3-3.4c3.5-1.9 19.1.4 9.8 3.4M41.9 140.4h-.4c.7 0 1.4-.3 2.1-.7 2.2-3-.5-3.2-3-3.3-5.8.7-3.6 3.5-.4 4-2.3-.1-4.7-.4-3.7 2.3.4 1 1.5 1.3 2.8 1.3-4.9 0-3.4 3.3 1.2 3.4 5.1.4 4.9-3 1.4-3.4 3-.6 4.5-3.5.1-3.6Zm-2 3.6" class="cls-11"/><path d="M41.6 133.7c-1.5 0-5.7-.7-4.3 2 1.5 2 11.3-1.2 4.3-2" class="cls-11"/><path d="M56.2 188.5c-8.6-.4-13.4-2.4-21.7-7.1-1.4-.8-2.6-1.6-3.2-2.1-5 2.4-7.9 3.5-14.8 4.5-11.3 2.2-13.6 8.7-13.7 14.1h-.4c-.2.4-.3.8-.4 1.2 5.6.9 10.8 1.7 14.9 1.7 8-.1 33.5-3.5 39.2-2.8.7-1.7.6-6 0-9.3Z" style="stroke-width:0;fill:#404250"/><path d="M113.2 80c18.1 6.3 19.9 16.4 20.4 38 .5 19.4.3 44.1.3 64.1-4.2-.4-8-1.3-11.6-3.8m-39.5-76.2c.3-2.2 1.4-6.2 1.7-7.7m-16.9 15.2c-8.4 2.9-17.9 4-25 6.6-7.3.5-8 10.9-6.2 15.5" class="cls-3"/><path d="M112.7 86.9c-12.8 6.5-34 18-45.1 22.7" class="cls-2"/><path d="M123.9 113.1c-13.4 4.5-28.9 9.8-43 14.3-17.2 5.8-27 9.2-44.6 4.3M91.9 81c-3.3 1.2-10.3 2.6-12.1 4.4-3.7 3.7-19.6 18-25.1 24.2" class="cls-3"/><path d="M92.9 80.7c-.3.1-.6.2-.9.4" class="cls-2"/><path d="M122.4 177.9c-7.4-6.4-30.9-39.6-41.5-50.5m-13.3-17.8c-.6-2.8-15.8-2.3-17.7 4.5m-18.7 65.1c8.5 5.8 17.1 9.9 26.8 9.2 0-.2 4-32.7 4.7-34" class="cls-3"/><path d="M40.4 147.3c-2.6 12.7-6.3 22.7-8.7 31.8m26.8-37.2c1.4 8.2 6.6 17.4 10.1 25" class="cls-3"/><path d="M83 194c-4.8-6.3-12.1-20.6-14.8-28m-12 22.5c.6 3.3.6 7.6 0 9.3" class="cls-3"/><path d="M56.2 188.5s0 0 0 0m-.1 9.4c-12.9-.7-38.2 5.3-53 1.3m31.4-17.8c-2.6 1.5-9.8 4.3-17.6 5.7" class="cls-2"/><path d="M2.8 198.5c0-5.9 2.1-12.3 13.7-14.7.3 3.9.8 12.1.4 16.4m14.8-21.1c-5.2 2.4-8.2 3.6-15.2 4.6M2.9 202.6c11.1 1.9 36.9 1.1 53.5.9.6.2-.2-5.6-.2-5.6m-53.8 0c-.8 1.7-.8 3 .5 4.7" class="cls-2"/><path d="M40 144c-1.6 0-3.1-.1-3.6-1.4-1.2-3.3 2.9-2 5.5-2.2.7 0 1.4-.2 1.7-.7 2.2-3-.5-3.2-3-3.3-3.5.5-5.2-2.6-1.4-2.7" class="cls-3"/><path d="M39.2 133.7c1.8-.2 8.1.5 3.1 2.3-2.1.7-8.2 1-4 4 1.3.9 9.4-.4 5.2 3.5-1.1 1.3-9.5-.6-6.9 2.8.9 1.2 8.1 2.1 7.7-.6-.2-1.7-2.4-1.6-4.4-1.6m53-63.4c-3.1 15.4 17.9 5.4 19.6 1.4" class="cls-3"/><path d="M112.5 82.1c.2-3.3.5-2.6.5-7.1" class="cls-2"/><path d="M74.6 38.3c-.9 20.6-.2 31.7 18.2 42.3 7.5 6 31-9.5 33-23M79.9 36.8c1.9-1.5 13.7-2.8 9.1 2-1.6 1-14.7 2-9.1-2m22-1c2.7-1.7 12.3 0 12.9 1.3-1.4 3.5-10.2 1.8-12.6 2.2-.9-.1-.6-3.3-.3-3.4Z" class="cls-2"/><path d="M86 47c0 4.2-3.3 4.2-3.3 0s3.3-4.2 3.3 0m23.3.1c0 4.8-4 4.8-4 0s4-4.8 4 0M90.6 58c-1.4 3.5 1.8 4.3 6.6 4m-8.1 6.1c5.3 1.4 14.2-1.2 19.3-3.3.8 2.4-14.4 10.7-18.8 3.5M72.8 42.9c-2.4-1.8-2.8-13.3.1-17.6 1.3-1.9 2.2-8.3 3-10.5C78.4 8.6 82.7 10.1 86 7c4.6-5.5 12.5 0 17.3-2.5 9.3-4.7 9.9 5.1 17.1 5 2.7.1 5.5 3.1 6.3 8.2.5 3.4 4.8 4.3 3.8 8.5-.8 3.5 2.4 10.2-.6 14.8" class="cls-2"/><path d="M126.6 43.2c2.1-4.9 6.7-.5 6.3 3.5 0 4.1-3.3 14.1-8.4 9.9M74.4 42.7c-6.4-.9-4.6 17.5.6 15.7m51.7-15.5c-3.6 6.6-5.9-9.9-9-13.6-4.8-8.3-12.1-13.1-20.8-11.6-12.6-.5-20.1 8.9-22.5 21.8m33.7 49.8c2.3-2.1 6.2-5.1 6.5-8.4m-22.6.3c-5.5 7-1.5 14.1 6.9 12.9m4.9 25.8c5.1 1 25.3.4 29.8-2m.2 14.4c-13.4 2.7-36.1 2.8-49.8-3.3m-.2-2.6c0 2 .2 2.5.2 4.3" class="cls-2"/><path d="M129.8 181.5c-2.8 10.2-5.7 20.4-16.8 21.5-9.2.6-24.5 2.2-29.9-9" style="stroke:#231f20;stroke-linejoin:round;fill:none;stroke-linecap:round"/></svg>')}`;
export default image;