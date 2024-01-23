/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Africa_Modest" width="176.1" height="269" viewBox="0 0 176.1 269"><defs><style>.cls-1{fill:none;stroke:#010101;stroke-linecap:round;stroke-linejoin:round}.cls-3{fill:#f3aa93}.cls-3,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-5{fill:#2b2c2b}.cls-6{fill:#d23e3b}.cls-7{fill:#fff}.cls-8{fill:#e4b694}.cls-9{fill:#010101}</style></defs><path d="M157.3 71.1h-.3c.3-3.5 2.5-11.7 1.9-14.8 0-4.3 2.9-6.2 5.9-4.8 5.2 2.3-1.8 21.2-7.6 19.7Z" class="cls-8"/><path d="M98.2 35.2c-.2-5.3 1.3-8.6.6-14.5-.3-2.2 1.7-2.3 3.5-2.9 9-4.8 6.6-5.1 16.3-1.1 5.3.7 9.2-6.2 14.6-5.9 4.2.2 6.9 4.7 10.9 5.9 4.7 1.4 9.8-2 14.6-1 4.6 1 3.1 2.2 3 6.9.4 8.9 4 19.3 1.5 28.4-2.4-.3-4.4 1.6-4.4 5.2.6 3.2-1.6 11.3-1.9 14.8h.3c.5 5.3-2.8 13.3-6.8 19.3-7.9 12.8-20.2 9.5-32.5 8.5-10.2-4.1-14.6-19.2-16-28.7.3 0 .5-.2.7-.3-.4-2.1-.6-4.1-.9-6 1.9 5 4.1 13.4 7 17 7.4 9.2 7.7 4.5 19.2 3.7 4.6-.3 11.3 5.2 16.3-1 5.2-6.4 10.6-13.6 10.4-22.9 1.2-14.9.9-18.1-.3-25.5 0-5.1-2.1-4.4-6.6-6.9-11.7-6.8-34.1-4.1-43.4 3.1-2.5 11.6-4.9 19.9-2.8 32.6-3.4-8.8-4.1-21.2-3.8-28.7h.2Z" class="cls-5"/><path d="M151.5 3.1c4.7 2.2 8.3 7.5 6.9 12.6-4.7-.8-9.7 2.4-14.3 1-4-1.2-6.7-5.7-10.9-5.9-5.4-.3-9.3 6.6-14.6 5.9-9.2-3.8-7.6-3.9-16.1 1 0-9.6 6.8-17.4 16.8-16.2 10.6.4 22.2-2.3 32.3 1.7Z" class="cls-6"/><path d="M126.2 71.5c-4.4-.4-10.2 1.2-12.5 5.2 7.8 1.6 17.6 1 25.2-1.3-2.8-3.1-8.6-4.5-12.7-4Zm28.5-11c.2 9.4-5.3 16.5-10.4 22.9-5 6.2-11.7.7-16.3 1-11.5.8-11.8 5.5-19.2-3.7-10-15.7-8.8-32.7-4.2-49.6 9.3-7.2 31.6-9.9 43.4-3.1 4.4 2.5 6.5 1.8 6.6 6.9 1.2 7.4 1.5 10.6.3 25.5Zm-6.1-15.7c1.8-6.1-11.7-3.7-13.9-2 .5 1.9.2 2.9 1.5 2.2 4.1-1 10.2-.8 12.3-.2Zm-6.6 8.3c0-6.1-4.5-6.1-4.4 0 0 6.1 4.5 6.1 4.4 0m-22.2-7.7c2.6-4.6-14.1-6.4-13.8-1h.1c4.8-1.2 9.7.1 13.6 1Zm-6.1 7.6c0-5.3-3.7-5.3-3.6 0 0 5.3 3.7 5.3 3.6 0" class="cls-8"/><path d="M151 95.7c1.4 1.5 2.6 3 3.7 4.6-4.7 3.5-11.8 4.3-17.5 5.5v.3c-10.9.9-14 1-22.6 3.6-.3-1.7 2-5.4 2.9-8.4 3.8 2.3 4.2 3.5 8.7 2.9 7.7-.7 18.9-2.8 24.7-6.3 0-.5 0-1.2-.1-2.1h.3Z" class="cls-3"/><path d="M150.8 95.7c0 .9.1 1.6.1 2.1-5.8 3.5-17 5.7-24.7 6.4-4.5.6-4.9-.6-8.7-2.9.3-1 .5-1.9.4-2.5 12.3 1 24.6 4.3 32.5-8.5 0 1.1.2 3.5.3 5.4Z" class="cls-8"/><path d="M136.3 45c-1.4.7-1-.3-1.5-2.2 2.1-1.7 15.6-4.1 13.9 2-2.1-.7-8.2-.9-12.3.2Z" class="cls-5"/><path d="M139.8 48.5c2.9-.1 2.9 9.5 0 9.4-2.9.1-2.9-9.5 0-9.4" class="cls-9"/><path d="M126.2 71.5c4.1-.5 9.9.9 12.7 4-7.6 2.3-17.4 2.8-25.2 1.3 2.3-4 8.1-5.6 12.5-5.2ZM112 41.2c4.6 0 9.3 1.7 7.8 4.3-3.9-.8-8.8-2.1-13.6-.8h-.1c.9-2.5 1.2-3.4 5.9-3.5" class="cls-5"/><path d="M111.9 49c2.3-.1 2.3 8.3 0 8.2-2.3.1-2.3-8.3 0-8.2" class="cls-9"/><path d="M115.3 144.5c-1.9 13.3-3.9 27.8-4.7 42.7-2-4.1-3.9-7.9-5.5-11h.2c.4-5.1 1.4-12 3.5-30.6 2.1-.4 4.3-.7 6.5-1.1" class="cls-3"/><path d="M101.9 70.1c-5.5-1.2-4.5-12.3-4.6-16.9.6 0 1.1 0 1.7-.1 1.1 5.3 2.4 11 2.9 17" class="cls-8"/><path d="M72.2 215.7c.9 2.4 2 5.2 3.2 8.2-17-1.2-35-6.7-47.4-18.7.1-1.6 4.3-26.1 5.1-34.8 1.2 0 2.4.5 3.7.5-1.2 8.6-2.3 19.9-3.5 27.3 13.4 10.5 22 14.1 38.7 17.6h.2Z" class="cls-3"/><path d="M69.8 255.5c2 8.2-.7 14.3-9.9 13.2-19.3-.4-40.8 2.9-58.3-6.8-.1-1.1-1-6.3 0-6.7 12.9-1 30.2-3.1 40.3-12.2 8.7 4.9 12.6 10.9 22.3 4.2v-.8h.2c2.5 2.5 4.6 5.6 5.3 9Z" class="cls-6"/><path d="M154.7 100.4c-4.7 3.5-11.8 4.3-17.5 5.5v.3c-24.3 1.4-34.9 8.7-59.6 15.3v-.2c-8.9-7.3-28.3-6.9-33.7 6.7-4.2.3-10.3 1.3-12.9 4.9-2.4 3.5-2 13.2 1.7 16 8.7-2.8 14.8 4.8 3.4 4.9 6.2-.5 10 5.9 2.3 5.8 1.1 0 2.1.4 2.6 1.1 3.3 4.6-.4 5.1-4.1 5.3 5.7 1.4 6.4 5.2 0 4.8-1.2 8.6-2.3 19.9-3.5 27.3 13.4 10.5 22 14.1 38.7 17.6h.2c9.3 20.8 13.1 44.4 32.7 50.7 18.2 3.6 49.4 6.9 51.3-24.7.4-21-1.2-55.8 2.6-75.3 2.2-23.8 10.5-40.6-4.2-66.2Zm-53.2 69.4c-2.7-4.4-6.9-16-10-21.2 4.4-.8 9.1-1.6 13.1-2.3 0 3.8-2.1 21.1-2.1 25.1-.4-.6-.7-1.2-1-1.6m9.1 17.5c-2-4.1-3.9-7.9-5.5-11h.2c.4-5.1 1.4-12 3.5-30.6 2.1-.4 4.3-.7 6.5-1.1-1.9 13.3-3.9 27.8-4.7 42.7" class="cls-7"/><path d="M37.9 212.9c2 15.3 3.2 17.6 4.1 30.1 8.7 4.9 12.6 10.9 22.3 4.2.6-6.8 1.1-14.4 2.7-24.3-10.1-1.6-20.3-4.9-29-10.2Z" class="cls-7"/><path d="M34.8 159.7c1.2 0 2.5-.2 3.6 0-1.2.1-2.5.2-3.6.3v-.2Z" style="stroke-width:0;fill:#636668"/><path d="M42.2 151.3c0-4.4-9.8-3.1-12.4-1-2.6 3.5 1.6 3.5 5.6 3.6 2.9 0 6.5.2 6.8-2.6" class="cls-8"/><path d="M40.8 154.8c-2.2-1.3-10.3-1.9-11.4 1.3-1.4 4 1.9 3.9 5.4 3.7 3.4-.2 11.7.4 6-4.9Z" class="cls-8"/><path d="M32.5 160.4c-4.4 3-1.8 4.1 1.4 5 0 .3-.1.6-.1.9-4.1-.2-4.5 4.3-.6 4.2 5.5 1.7 13.5-1 3.7-4.3 3.8-.2 7.4-.8 4.1-5.3-1.8-1.9-6.4-.9-8.5-.3Z" class="cls-8"/><path d="M32.7 148.9c-3.7-2.8-4.1-12.5-1.7-16 2.6-3.6 8.7-4.6 12.9-4.9 11.3-.8 21.4-3 31.6-5.9 26.7-6.5 43.2-18.3 69.9-15.2m10.8 26.6c-9.5 11.7-34.3 8-47.4 12-22 3.7-44.8 8.5-67.2 4" class="cls-1"/><path d="M104.7 146.3c0 3.8-2.1 21.2-2.1 25.2M151 95.7c19.3 23.8 10.4 46.6 7.9 70.8-3.8 19.4-2.1 54.3-2.6 75.3" class="cls-1"/><path d="M91.5 148.6c10.8 22 32.6 66.2 39.7 82.5M70 209.7c0-5.5-6.5-30.5-4.6-33.6m-27.5 36.8c2 15.3 3.2 17.6 4.1 30.1 8.7 4.9 12.6 10.9 22.3 4.2.6-6.8 1.1-14.3 2.7-24.2m-33.9-52.6c-.8 8.7-5 33.2-5.1 34.8m5.9-39.8c0 .3-.1.6-.1.9m1-6.6v.2m121.5 81.9c-2 31.6-33.2 28.3-51.3 24.7-20.7-6.4-25.6-36-35-56.8M43.9 128c5.4-13.6 24.9-14 33.7-6.7m72.8-30.9c0 1.6.4 5.5.4 7.5m-32.9.9c0 3.1-3.4 8.7-3.4 10.7" class="cls-1"/><path d="M33.9 170.5c10.4 2 9.5-3.7 0-5.1-8.5-1.9-.5-6.4 4.5-5.7 3.5-.3 6.4-1.1 2.4-4.9-2.1-2.2-15.2 1-11.1-4.5 2.5-2.1 9.9-2.5 11.9-.6 2.1 3.3-2.2 4.5-5.6 4.2-2.6 0-6 0-6.7 2.2-2 5.6 5.8 3.2 9 3.6 1.1 0 2.1.4 2.6 1.1 3.3 4.6-.4 5.1-4.1 5.3-1.8.2-5-.1-5.9 1.1-1.7 2.7 1 3.2 3 3.3M28 205.2c12.4 12.1 30.4 17.6 47.4 18.7M42 243c-10.1 9.1-27.5 11.2-40.3 12.2-1 .4-.1 5.6 0 6.7 17.5 9.8 38.9 6.4 58.3 6.8 14.2 2.2 12.2-15.7 4.6-22.3" style="fill:none;stroke:#010101;stroke-linecap:round;stroke-miterlimit:10"/><path d="M104.5 31.3C101 45 99.6 57.6 103 72.2m3.2-27.6c4.8-1.3 9.7 0 13.6.8m16.5-.4c4.1-1 10.2-.8 12.3-.2m-12.9.4c.2 0 .4-.1.6-.2m-22.6 8.1c0 5.3-3.7 5.3-3.6 0 0-5.3 3.7-5.3 3.6 0m28.3.1c0 6.1-4.5 6.1-4.4 0 0-6.1 4.5-6.1 4.4 0m-19.5 1.6c-2.7 10.7-6.9 15.8 3.7 16.8m32.7-15.4c0-4.3 2.9-6.2 5.9-4.8 5.3 2.3-2.1 22.5-8.2 19.5m-2.1-35.8c1.2 7.4 1.5 10.6.3 25.5m-53.7 1.7c-2.7-8.7-3.5-20.1-3.2-27.1" class="cls-1"/><path d="M163.2 51.4c.8-4.3 1.1-7.4.8-12m-58 5.1c-.3-5.5 16.4-3.6 13.8 1m16.5-.5c-1.4.7-1-.3-1.6-2.2 2.1-1.7 15.6-4.1 13.9 2m-47.5 17.5c2.3 5.4 4.4 14.5 7.6 18.5 7.4 9.2 7.7 4.5 19.2 3.7 4.6-.3 11.3 5.2 16.3-1 5.4-6.6 11-14.2 10.4-23.8m2.4 11.6c.3-3.6 2.5-11.8 1.9-15.1m-60.4-3h-1.2c-.1 3.7-.6 18.3 5.2 16.6m52-34.7c0-5.1-2.1-4.4-6.6-6.9-11.7-6.8-34.1-4.1-43.4 3.1" class="cls-1"/><path d="M164 39.4c-.4-5.1-2.4-12.1-2.3-16.8s1.6-5.9-3-6.9c-4.8-1-9.9 2.4-14.6 1-4-1.2-6.7-5.7-10.9-5.9-5.4-.3-9.3 6.6-14.6 5.9-9.7-4-7.5-3.7-16.3 1.1-1.8.6-3.8.8-3.5 2.9.8 6.6-1.2 10.6-.4 16.7m58.8 33.3c.6 5.5-2.7 13.5-6.8 19.7-7.9 12.8-20.2 9.5-32.5 8.5-12.7-5.9-16-24.4-16.8-36.5" class="cls-1"/><path d="M138.9 75.5c-7.6 2.3-17.4 2.8-25.2 1.3 4.9-7.3 19.2-7 25.2-1.3m19.5-60C159.5-4.4 132 2.1 119.2 1.4c-12-1.6-17.7 9.4-17 20m48.7 76.4c-6 3.2-27.1 10.2-32.9 3.6m36.7-1c-4.7 3.5-11.8 4.3-17.5 5.5m-28.3 40.3c-2.7 19.3-3 24.4-3.6 29.9m10.1-31.7c-1.9 13.3-3.9 27.8-4.7 42.8m-73.9-15.8c-1.4 8.4-2.3 19.5-3.5 26.7 13.4 10.5 22 14.1 38.7 17.6" class="cls-1"/></svg>')}`;
export default image;