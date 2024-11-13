/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Latin_America" width="176.1" height="269" viewBox="0 0 176.1 269"><defs><style>.cls-1,.cls-2{fill:none;stroke:#010101}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-12,.cls-15,.cls-5,.cls-8{stroke-width:0}.cls-5{fill:#847059}.cls-8{fill:#23272c}.cls-10{fill:#858dc6}.cls-12{fill:#e65343}.cls-15{fill:#010101}</style></defs><path d="M168.4 47.6c0 .6-.2 1.2-.3 1.7-5.1 4.5-3-20.4-12.6-25.8-8.8-6.2-28.7-4.9-35.1-4.5-15.8.9-18.7 18.2-19.1 23.5h-.2c-7.5-56.9 77.5-50.8 67.3 5.1" class="cls-8"/><path d="M162 211.8h.2c-.2 1.8-.5 4.5-.8 7.5-11.8.1-23.6-.8-35.1-2.9-1.2-2.5-2.5-5.3-3.9-8 13 2.7 26.3 3.9 39.6 3.5Z" class="cls-12"/><path d="M126.3 216.3c11.6 2.1 23.4 3.1 35.1 2.9-.3 2.6-.7 5.5-1 8.1-10.3.5-20.7-1-30.5-4.4l-.3.2c-1-2-2.1-4.3-3.3-6.8" class="cls-10"/><path d="M157.8 236.1c-11.4 0-24.4-1.4-28.2-13l.3-.2c9.7 3.4 20.2 4.9 30.5 4.4-.5 4.3-1 7.9-1 8.7h-1.6Z" class="cls-12"/><path d="M122.4 208.2c9.4 19.8 10.3 28.3 35.4 27.8-5.2 31.7-28.8 36.2-56.3 29.4-19.3-5.7-26.6-42.5-33-59.1h-.4c.6 12.4 1.7 26.3 1 38.5-11.7 1-24.1.4-36-.6-.7-23.7-.5-49.6 1.5-73.4 7.2 1.7 13.9-1.9 3.2-4.3 3.9-.2 8-.6 4.6-5.3-.5-.7-1.4-1-2.6-1.1 3.5-.3 6.5-1.1 2.5-4.8 14 1.7 21.9-1.1 37.3-1.5-.2 2.2-.7 4.3-1.4 6.3 5.9-.4 12.9-1.4 19-2.4 8.7 16.7 15 30 25.2 50.6Zm35.5-165.1c-.8 2.6-11.7-.9-21.1 1.5-1.3-.4-.6-2.2-1.3-4.1 6-3.4 18.1-3.9 22.3 2.6Z" class="cls-8"/><path d="M153.2 120.7c9.5 23.4-35.8 31.8-51.5 34.1.2-1.6.4-3.7.4-6.1 64.5-8 52.9-44.3-4.9-26.4-.7-1.4-1.4-2.7-2.3-3.9 17.2-5.1 45.5-11.9 58.3 2.2Z" style="stroke-width:0;fill:#f7934f"/><path d="M149.7 81.3c4.5 15.6-15.8 30.5-28.3 18.4-5.3-2.1-6.6-14.7-7.7-18.4 10.8 13.2 24.1 12 36 0" class="cls-8"/><path d="M147.5 51.1c2.6 0 2.6 7.2 0 7.1-2.6 0-2.6-7.2 0-7.1" class="cls-15"/><path d="M136 118.6c31.6 12.4-17.7 29.8-34 30.1 0-7.8-1.2-18.8-4.9-26.4 12.2-3.2 26.3-6.9 38.9-3.7" style="stroke-width:0;fill:#dfd3a9"/><path d="M145.2 78.1c-10 12.5-20.9 11.2-26.5 1.4 2.3.7 17.2.9 26.5-1.4" style="stroke-width:0;fill:#eeedee"/><path d="M118.7 39.2c5.5 0 8.9-.2 6.6 4.7-4.7-.9-12.9-.3-18.7 1.1 1.1-2.4 6.4-5.7 12-5.8Z" class="cls-8"/><path d="M116.8 52.2c2.3-.1 2.3 7.5 0 7.4-2.3.1-2.3-7.5 0-7.4" class="cls-15"/><path d="M162.6 112c-2.2-3.5-4.2-6.5-7-9.3-18.9.8-42.8 8.9-61.6 14.8.3.3.6.7.8 1 75.1-23.2 82 27.7 6.8 36.3 0 .9-.4 1.5-.2 2.2-1.4.2-2.8.4-4.2.7 8.7 16.7 15 30 25.2 50.6 13.1 2.8 26.5 3.9 39.9 3.5 0-27.4 2.2-49.3 3.7-76.8.6-7.6 0-17.5-3.4-22.9Z" style="stroke-width:0;fill:#b7c648"/><path d="M101.7 154.8c0 .9-.4 1.5-.2 2.2-2.3.4-4.8.8-7.1 1.1.7-6.9.3-32.2-7.8-38.3q4.05-1.2 7.5-2.4c7.7 10 8.6 25.7 7.6 37.3Z" class="cls-12"/><path d="M94.3 157.8v.4c-2.6.4-5.3.8-7.8 1.1 1.8-12.9.6-26-5.2-37.8 1.8-.5 3.6-1.1 5.3-1.6 7.9 5.8 8.7 31.2 7.8 37.9Z" class="cls-10"/><path d="M79.6 153.7c1-9.9-2.6-20.9-5.9-30.1l7.5-2.1c5.8 11.7 7 24.8 5.2 37.8-3 .4-5.8.7-8.2.8.7-2 1.2-4.1 1.4-6.3Z" class="cls-12"/><path d="M73.7 123.6c-9.1 2.5-18.3 4.3-28.4 5 5.4-13.5 24.7-13.9 33.5-6.6v.2c-1.6.5-3.4 1-5.1 1.4" class="cls-8"/><path d="M41.2 154.7c.5.1.8.3 1.1.5-.2 0-.6-.2-1.1-.5" style="stroke-width:0;fill:#9572a4"/><path d="M40.4 154.1c.3.2.6.4.8.5-.9-.3-2.3-.3-3.6-.4 1 0 2 0 2.8-.1" style="stroke-width:0;fill:#453b59"/><path d="M36.3 160.1c1.2 0 2.5-.1 3.5 0-1.2.1-2.5.2-3.6.3v-.2Z" style="fill:#636668;stroke-width:0"/><path d="M168.4 47.6c0 .6-.2 1.2-.3 1.7-5.1 4.5-3-20.4-12.6-25.8-8.8-6.2-28.7-4.9-35.1-4.5-15.8.9-18.7 18.2-19.1 23.5h-.2c.1 1.7.3 3.3.5 4.7-10.3-1.5-.9 27.4 3.5 25.9 2.3 14.4 4.5 16.2 12.9 23.7-1.5-2.4-3.9-13.9-4.3-15.5 10.8 13.2 24.1 12 36 0 4.5 15.6-15.8 30.5-28.3 18.4-.8 4.5-.7 7.2-2.8 9.9v.2c9.7-2 28.9-8 37.5-7-1.9-3.4-2.4-7.6-1.1-11.3 5.8-5.4 6.8-9.6 9.3-20.3 10.5-.2 16.5-26.9 4.2-23.6ZM106.6 45c.3-4.5 23.4-10.4 18.7-1.1-4.7-.9-12.9-.3-18.7 1.1m10.2 14.6c-2.3.1-2.3-7.5 0-7.4 2.3-.1 2.3 7.5 0 7.4m1.8 19.9c2.3.7 17.2.9 26.5-1.4-10 12.5-20.9 11.2-26.5 1.4m28.9-21.2c-2.6 0-2.6-7.2 0-7.1 2.6 0 2.6 7.2 0 7.1m-10.7-13.6c-1.3-.4-.6-2.2-1.3-4.1 6-3.4 18.1-3.9 22.3 2.6-.8 2.6-11.7-.9-21.1 1.5Zm-91.5 83.9c-4.1.3-10.2 1.3-12.8 4.9-2.4 3.4-2 13.1 1.6 15.9-1.4.3-2.5.8-2.9 1.3-3.6 4.5 6 3.5 9.1 3.4.3.2.6.4.8.5-2.8-.4-9.1-1.3-10.3 1.8-1.4 4 1.9 3.9 5.4 3.6 3.4-.2 11.6.4 6-4.9-.2 0-.6-.2-1.1-.5.5.1.8.3 1.1.5 14 1.7 21.9-1.1 37.3-1.5 1-9.9-2.6-20.9-5.9-30.1-9.1 2.5-18.3 4.3-28.4 5Z" class="cls-5"/><path d="M34 160.8c-4.4 3-1.9 4.3 1.3 5.1 0 .2 0 .5-.1.7-4.8 0-4.1 4.6 0 4.2 7.5 1.7 12.3-2.3 2.5-4.3 3.9-.2 8-.6 4.6-5.3-1.7-1.9-6.3-.9-8.4-.3Z" class="cls-5"/><path d="M70.8 261.1c.8-2-1-12.5-1.6-16.3-11.2 1-23.1.4-34.6-.5-12.4 3.4-31.4 3.2-30.7 19h-.5c-.9 2-.9 3.3.5 5.3 13.6.7 48.1.3 66.8 0 .7.2 0-7.5 0-7.5Z" style="stroke-width:0;fill:#181819"/><path d="M121.4 99.7c-.8 4.5-.7 7.2-2.8 9.9m-32.1 10.3c13.5-4.1 25.2-8.6 38.8-11.6m-91.1 41.1c-3.6-2.8-4-12.5-1.6-15.9 2.5-3.6 8.6-4.6 12.8-4.9 14.7-1 27.6-4.5 41.2-8.8m-45.4 34.9c-.2-.2-.5-.3-.8-.5" class="cls-1"/><path d="M79.8 153.7c-15.6 0-24.6 4-38.6 1m104-8.1c-25.6 8.9-42.3 10.5-66.9 13.5" class="cls-1"/><path d="M155.6 102.7c8.7 8.2 11.8 19.6 10.4 32.2-.8 10.1-1.3 25.2-2.1 35.2-2.3 23.7-.5 42.2-4.5 65.9-8 .6-22.1-1.1-26.5-7-6.9-11.8-17.8-37.3-23.4-46.3" class="cls-1"/><path d="M97.2 157.5c3.2 5.2 8.9 18 12.4 25.2m-74.9-11.9c-2 23.8-2.1 49.8-1.5 73.4 11.9 1 24.3 1.6 36 .6.7-12.2-.4-26.1-1-38.5-.9-9.2-3.6-22.1-1.5-30m-31.3-10.4c0 .2 0 .5-.1.7m1-6.5v.2m1.3-6s0 0 0 0m120.3 81.5c-5.1 31.9-28.6 36.6-56.3 29.7-19.3-5.7-26.6-42.5-33-59.1m-23.3-77.8c5.4-13.5 24.7-13.9 33.5-6.6" class="cls-1"/><path d="M41.2 154.7c-2.8-1.1-13.7 1-9.9-4 2.3-2.1 12.5-3.3 12.4 1-1.3 5.1-11 .1-12.7 4.7-1.4 4 1.9 3.9 5.4 3.6 2 0 4.8-.6 6.1 1 5.2 7.6-7.1 3.8-10 6.4-1.7 2.6 1 3.2 2.9 3.3" class="cls-2"/><path d="M35.4 170.8c4.3 1.2 12.9-.6 5-3.7-2.9-1.2-13.3-1.5-6.3-6.3.4-.3 1.2-.4 2.3-.5 4.2 0 12.4-.9 4.9-5.6" class="cls-2"/><path d="M19.8 265.9v.4m-.2-15h.2M3.5 264.8h.7m65-20c.7 3.8 2.4 14.3 1.6 16.3m0 0c-16.5-.3-47.7 7.9-66.6 3.7m38.4-20c-3.2 1.8-14.1 4.8-22.8 6.4" class="cls-1"/><path d="M3.9 264c0-6.6 2.3-13.9 15.4-16.6.3 4.4.9 13.6.4 18.4m14.9-21.5c-3.7 1.2-9.3 2.3-15.3 3.1M4 268.6c13.6.7 48.1.3 66.8 0 .7.2 0-7.5 0-7.5m-67.3 2.2c-.9 2-.9 3.3.5 5.3m126.9-164.4c10.5-.6 20.9-8.3 28-17.1m-55.5-23.4c1.5 7.7 3.5 22.5 6.9 25.7 5.4 5 13 14.3 20.6 14.8M106.6 45c5.8-1.4 14-2 18.7-1.1m11.5.7c9.4-2.4 20.3 1.1 21.1-1.5m-35.5 29.2c1.8 4.7 14.2 1.2 17 0m28.8-24.6c12.8-3.8 6.6 23.8-4.3 23.5" class="cls-1"/><path d="M166 63.7c-1.7 7-4.2 20.1-7.2 23.5M106.6 45c.3-4.5 23.4-10.4 18.7-1.1m11.5.7c-1.3-.4-.6-2.2-1.3-4.1 6-3.4 18.1-3.9 22.3 2.6m-39.1 36.3c5.6 9.9 16.5 11.1 26.5-1.4-9.3 2.3-24.1 2-26.5 1.4m-.1-23.5c0 4.8-3.6 4.8-3.6 0s3.6-4.8 3.6 0" class="cls-1"/><path d="M102.8 53.8c-19.4-65.4 75.5-69.9 65.3-4.5" class="cls-1"/><path d="M101.3 47.3c-9.7-1.1-.5 27.4 3.8 25.8m40.5-18.4c0 4.6 4 4.6 4 0s-4-4.6-4 0m22.5-5.4c-5.1 4.5-3-20.4-12.6-25.8-8.8-6.2-28.7-4.9-35.1-4.5-15.8.9-18.7 18.2-19.1 23.5M118 96.8c-1.5-2.4-3.9-13.9-4.3-15.5 10.8 13.2 24.1 12 36 0 2.2 6.2-1.5 13.4-5 18.4" class="cls-1"/><path d="M154.9 91.5c-1.2 3.7-.8 7.9 1.1 11.3-5.6-1.2-23.5 3.8-30.7 5.4m-51.6 15.4c3.9 11.2 8.5 24.7 4.5 36.5m2.9-38.9c5.8 11.8 7.2 24.9 5.3 37.9m.1-39.2c7.9 5.8 8.7 31.2 7.8 37.9m-.3-40.3c7.9 10.5 8.9 26.8 7.3 38.9" class="cls-1"/><path d="M97.2 122.3c57.9-17.9 69.3 18.5 4.9 26.4" class="cls-1"/><path d="M94.8 118.5c75.1-23.2 82 27.7 6.8 36.3m59.2 72.5c-10.4.6-21-.9-30.8-4.4m31.7-3.7c-12 .1-24-.8-35.8-3m36.1-4.4c-13.5.4-27-.8-40.2-3.7" class="cls-1"/></svg>')}`;
export default image;