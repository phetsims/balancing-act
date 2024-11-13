/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Asia" width="157.2" height="423" viewBox="0 0 157.2 423"><defs><style>.cls-1{stroke:#231f20}.cls-1,.cls-2{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-2,.cls-3{fill:none}.cls-2,.cls-3{stroke:#010101}.cls-4{fill:#312f33}.cls-10,.cls-11,.cls-12,.cls-4,.cls-8,.cls-9{stroke-width:0}.cls-8{fill:#ca587b}.cls-9{fill:#fff}.cls-10{fill:#f0b48e}.cls-11{fill:#e9e8e8}.cls-12{fill:#010101}</style></defs><path d="M54.8 49.5c3.4-.1 7.8.9 6.7 4.7-2.9-1-10.2-.8-13.7.8.7-2.9 3.5-5.4 7-5.5m-13.5-1.6c1.3-.5 2.8-.9 4.4-1.3-.8 2.4.7 11.4-3.3 10.2-.8-.7-.2-2.4-1.1-3h-.5c.4-.5 1.1-.7 1.6-.5-.8-3-1.1-4-1.2-5.3Z" class="cls-4"/><path d="M55.1 91.1c0 2.3.4 14.3 6.8 14.5-.6.4-1 1-1.3 1.8-2.1 1-7.8 1.8-10.7 3.7-2.5 1.6-.3-11.7.2-12.8 2-4.3 2-4.4 4.7-7.4l.2.2Z" class="cls-9"/><path d="M60.6 107.4c-.8 2.2-.1 4.4 1.3 5.9-1.5 13.3-6.4 21.8-6.4 25.6-1.5-9.3-2.6-20.1-2.8-29.1 3.1-1.2 6.4-1.6 8-2.4Z" class="cls-11"/><path d="M96.3 58.8c-3.5-3.2-5.3-8.2-4.5-12.9 3.9.6 7 1.4 9.1 2.3-.2 3.1-.5 2.7-1.1 5.6-1.8 0-2.9 1.8-3.2 4.4h-.2c0 .2-.1.5-.2.7Z" class="cls-4"/><path d="M69 114.5c.2 7.4 1.7 17.1 4.3 24.4-5.8 11.4-11.6 21.1-11.6 21.4-2.1-1.7-4.4-10.6-6.2-21.4 0-3.8 4.9-12.4 6.4-25.6 1.8 2 4.8 2.4 7.1 1.2" class="cls-8"/><path d="M40.1 55.3c.1-.6.3-1.2.7-1.6 1.9 0 .3 3.6 2.4 3.3 0 .5.4 8.6 1.7 16.3-4.4-2.6-5.9-13.8-4.9-18Z" class="cls-10"/><path d="M54.1 60c0-3.6 2.5-3.6 2.5 0s-2.5 3.6-2.5 0" class="cls-12"/><path d="M58.5 80.1c6.7 2.5 19.9-.2 21.3-1.4-3.9 5.7-17.3 9.4-21.3 1.4" class="cls-9"/><path d="M61.9 105.6c-6.4-.3-6.8-12.2-6.8-14.5 8.8 8 15.4 5.7 30.4-1l.4.6c.4 7.8-9.1 14.9-13.2 15-2.8-1.4-7.9-1.9-10.8 0Z" class="cls-10"/><path d="M61.9 113.3c-6-7.9 5.2-10.8 10.8-7.7 3 6-6.1 13-10.8 7.7" class="cls-8"/><path d="M127.5 391.4c-3-1-8.3-2.8-10.9-4.4-2 3.5-12.1 7.4-21.2 8.1.3 2.3-1.5 3.8-.7 5.9 1.4 3.9 1.4 3.1 7.5 5.8 4.9 2.2 7.4 5.7 11 9.6 22.9 22 55-18 14.4-25.1Zm-65.9 4.1c-15.1 4.1-19.1 3.5-28.2-5.2-21.8 5.2-23.9 10.7-23.7 17.1h-.2c-2 5.3 13.3 13.4 21.1 11 6.1-1.8 13-6 18.9-8.4 9.8-3.4 14.8-2.2 12-14.5Z" style="stroke-width:0;fill:#1e1f23"/><path d="M33.5 390.3c-4.3-24.3-.3-135.3 1-151 17.7 1.6 12.9 8 29.1-3.9 3.9 2.9 9.7 10.5 16 9.8 11-1.1 19.2-.8 31.3-3.4 2.8 42.7 5.9 145.1 5.9 145.1-2.9 5.2-22.6 10.5-31.2 7.3-4.6-18-11.7-121.4-14.4-146.2h-.1c0 8.7-2.4 137.1-4.8 146.2-14.6 4.5-23.6 6.2-32.6-4Z" style="stroke-width:0;fill:#374150"/><path d="M101.7 34.6c-1.2-.4-2.5-.8-3.7-1.2C94.2 18.5 87.1 1.2 70.4 1 52.3 1 48.5 14.4 42.8 33c-6.3-1.5-5.4 15.6-2.7 15.3 7.3-2.8 14.3-3.2 23.3-3.7 13.3-.2 26.6-.2 37.5 3.6 4.6 2.4 3.3-12.7.8-13.6m-28.5 73.6c-.1 2.9-1.6 5.1-4.2 6.4.2 7.4 1.7 17.1 4.3 24.4 5.3-10.3 10.5-21.9 11.4-29.1-4-2.2-8.7-2.1-11.4-1.7Z" class="cls-11"/><path d="M79.8 78.7c-1.4 1.2-14.7 3.9-21.3 1.4 4 8.1 17.4 4.4 21.3-1.4M61.6 54.2c1-7.4-13.3-5.4-13.7.8 3.5-1.6 10.9-1.8 13.7-.8m18.6 2.2c-1.7 0-1.7 5.7 0 5.6 1.7 0 1.7-5.7 0-5.6M91.8 46c-.8 4.7 1 9.7 4.5 12.8 0-.2.1-.5.2-.7h.2c.3-3.3 2.1-5.1 4.8-4 4.1 1.7 1.2 9.2 0 12.5-1.4 4-3.9 3.2-5.7 2.4-1.3 11.6-6.8 18.9-10.4 21.2-15 6.7-21.6 9-30.4 1v-.4l-.2.2c-9.3-6.9-11.9-26.3-11.7-33.9 3.2-1.7 1.6-7.3 2.4-10.4 13.1-2.9 33.5-2.6 46.2-.7Zm-2.4 6.5c-.2-7.6-11.4-4.7-14.9-1.8-.3 1.7-.7 1.4 0 3.3 6-2.4 14.4 1.1 14.9-1.5M56.5 60c0-3.6-2.5-3.6-2.5 0s2.5 3.6 2.5 0" class="cls-10"/><path d="M84.6 109.8c-4-2.2-8.7-2.1-11.4-1.7.1-.9.1-1.9-.5-2.5 3.6-.2 11.5-5.2 12.9-12.6h.4c3.9 5.7 2.1 12.8 1.9 19.4-1-1.1-2.1-2-3.3-2.6" class="cls-9"/><path d="M74.5 54c-.7-1.9-.3-1.6 0-3.3 3.5-2.9 14.7-5.8 14.9 1.8-.5 2.7-8.9-.9-14.9 1.5" class="cls-4"/><path d="M102.5 192.9c-1.5-7.2 7.8-6.6 12.5-7.8v.3c3.7 3.7 7.3 7.3 10.9 11 2.5 6.5-16.5 23.3-17.4 13.9-1.4 0-4.6-1.8-2.9-4.1-1.7-.3-3.8-2.3-2.6-5.2-6-1.5-3.3-5.2-.6-8.1Z" class="cls-10"/><path d="M134.4 124.4c-3-4.4-12.6-18.7-12.6-18.7-2.4-1-31.1-9.1-33.9-9 1.5 4.8.3 10.5.1 15.8-1-1.1-2.1-2-3.3-2.6-.9 7.2-6.1 18.8-11.4 29.1-5.8 11.4-11.6 21.1-11.6 21.4-5.9-8-8.6-37.8-9-50.5-1 .4-1.9.8-2.7 1.3-2.5 1.6-.3-11.7.2-12.8-4.1 1-20.7 5.2-22.9 7.3-7.5 9.7-14.4 36.9-19 50.8-6.3 16 19.2 35.2 25.9 47.6-.6 14.3-1 28.2-.8 35.2 18.6 1 13.2 8.6 30.2-3.8 11 11.5 15.6 10.5 31 8.5 3.5-.7 16.5.1 20.2-4.7-2.2-12.9-4-26.3-4-26.4-1.3 0-2.2-.7-2.1-2.7-1.4 0-4.6-1.8-2.9-4.1-1.7-.3-3.8-2.3-2.6-5.2-6-1.5-3.3-5.2-.6-8.1-1.1-5.2 3.5-6.3 8-7.1-2.2-12.5-1.3-33.9 2.2-46.4 7.1 8 13.7 16.7 16.1 20.9-3.9 8-5.9 14.2-13 24.5-.3 0-.5.2-.8.2v.3c3.6 4.8 11.3 8.5 12.2 14.5 3.5-5.3 18.5-25.2 22.1-35.6 0 0 5-9.8-15-39.8Zm-98.9 39.8c0 2.6 0 6.2-.2 10.4-3.4-5.3-5.6-9.5-7.8-13.2 1.3-1.7 5.5-11.2 8.7-17h.2c-.6 5.6-.8 10.1-.8 19.7Z" style="stroke-width:0;fill:#6d7b91"/><path d="M81.6 59.2c0 3.7-2.7 3.7-2.7 0s2.7-3.7 2.7 0" class="cls-12"/><path d="M43.3 57.3c.1 22 10.5 50.4 41.1 33.3M47.9 55c3.5-1.6 10.9-1.8 13.7-.8m12.9-.2c6-2.4 14.4 1.1 14.9-1.5" class="cls-2"/><path d="M60.6 71.4c-.4 3.1-.3 5.9 8 4.6m28-16.8c-.1-3.3 1.8-6.6 4.8-5.1 4.9 1.5.2 19.3-5.3 14.9" class="cls-2"/><path d="M96.2 65.5c-.1 11.5-6.4 23.3-11.8 25.2" class="cls-2"/><path d="M50.2 98.4c-4.1 1-20.7 5.2-22.9 7.3-7.5 9.7-14.4 37-19 50.8m104.4-17.1c-2-2.3-4-4.4-6-6.5m22.1 27.4c-2.5-4.2-9-12.9-16.1-20.9M88 96.6c2.7 0 31.4 8 33.7 9 13.9 18.1 33.1 52.1 27.6 58.6M37.9 132.9c-2.6 14.9-2.3 24.8-2.6 41.7-.5 16.7-2.3 50.8-1.9 64.7 18.6 1 13.2 8.6 30.2-3.8 11 11.5 15.6 10.5 31 8.5 3.5-.7 16.5.1 20.2-4.7m-2.1-99.9c-3.5 12.6-4.4 33.9-2.2 46.4" class="cls-1"/><path d="M8.2 156.4c-6.3 16 19.2 35.2 25.9 47.6m2-59.5c-3.3 5.9-7.4 15.3-8.8 17.2" class="cls-1"/><path d="M24.9 157.8c3.9 5.5 5.8 9.8 10.3 16.8m79.9 10.8c3.5 4.8 11.3 8.5 12.1 14.5 3.5-5.3 18.5-25.2 22.1-35.6m-33.5 20.5c5.7-8.3 8.2-14.2 10.7-19.6 2.8-6 2-5.9 7.8-10.8" class="cls-1"/><path d="M105.1 190.1c-2.4 3-10.2 8.8-2 10.9-1.1 2.9.9 4.9 2.6 5.2-1.7 2.3 1.4 4.1 2.9 4.1 1 9.6 21.1-8.4 17.1-14.8" class="cls-1"/><path d="M115.8 184.8c-4.8 1.6-14.9.5-13.4 8.1m-67.9 47.2c-1.4 15.1-5.3 126.5-1 150.3 9 10.1 18 8.5 32.6 4 2.4-9.1 4.8-137.5 4.8-146.2m43.8-8.9c-2.2-12.9-4-26.3-4-26.4m-40 32.7c3.1 26.1 9.9 129.3 14.7 148.7 8.7 3.1 28.4-2.1 31.2-7.3 0 0-3.1-103.6-5.9-146" class="cls-1"/><path d="M9.8 407.6c-.3-6.7 1.7-12 23.7-17.3m-23.4 17.1c12.3 13.3 27.3 4 40.9-2.1 3.7-1.5 9.3-.7 11.3-5.1m32.2-.3c4.1 2.4 12.8 6.8 16.2 9.9 3.3 3 6.9 6.1 11 7.5 8.2 2.7 22.9-1.1 24.9-10.1 1.4-15.3-21-13.7-30-20.2" class="cls-1"/><path d="M61.6 395.5c2.8 12.2-2.2 11.1-12 14.5-5.9 2.4-12.8 6.6-18.9 8.4-7.9 2.3-23.1-5.7-21.1-11m85.8-12.2c-1.4 6.8-1.8 8.5 6.7 11.6 4.9 2.2 7.4 5.7 11 9.6 9.3 11.9 33.7 6.2 32.9-9M72.7 105.6c4.1 0 13.5-7.1 13.2-15m-30.8.1c0 2.6.3 15 7.2 14.9" class="cls-1"/><path d="M47.9 55c.4-6.2 14.8-8.2 13.7-.8m12.9-.2c-.7-1.9-.3-1.6 0-3.3 3.5-2.9 14.7-5.8 14.9 1.8M56.6 60c0 3.6-2.5 3.6-2.5 0s2.5-3.6 2.5 0m25-.8c0 3.7-2.7 3.7-2.7 0s2.7-3.7 2.7 0m19.4-11c-.1 3.1-.5 2.7-1.1 5.5m-57.5-.5c-.8-3-1.1-4-1.2-5.3m1.2 5.3c-5.8.6-1.6 18.2 2.5 20.1m34.9 5.4c-3.9 5.7-17.3 9.4-21.3 1.4" class="cls-2"/><path d="M58.5 80.1c6.7 2.5 19.9-.2 21.3-1.4" class="cls-2"/><path d="M41.3 47.9c-4.2 3.6-4-13.6-.6-14.4 20.1-4.4 39.1-6.5 61.1 1.1 2.6.9 3.8 15.6-.6 13.6-2.2-1-5.3-1.7-9.3-2.3-14.4-1.9-36.2-2.6-50.6 2" class="cls-1"/><path d="M98.1 33.4C94.3 18.5 87.2 1.2 70.5 1 52.4 1 48.6 14.4 42.9 33m43.2 60.1c3.9 5.6 2.1 12.7 1.9 19.4-3.3-4.3-11.1-5.1-14.7-4.3m-12.7-.8c-2.1 1-7.8 1.8-10.7 3.7-2.5 1.6-.3-11.7.2-12.8 2-4.4 2.2-4.6 4.9-7.6" class="cls-1"/><path d="M61.9 105.6c2.9-1.9 8-1.4 10.8 0 1.7 3.2-.5 7.5-3.7 8.9-5.3 3.1-11.9-4.5-7.1-8.9" class="cls-1"/><path d="M73.3 138.9c5.3-10.3 10.5-21.9 11.4-29.1" class="cls-3"/><path d="M61.7 160.3c0-.3 5.8-10 11.6-21.4m-20.6-29.1c.4 12.6 3.1 42.5 9 50.5" class="cls-1"/><path d="M69 114.2c.2 7.5 1.7 17.3 4.3 24.7m-11.4-25.6c-1.5 13.3-6.4 21.8-6.4 25.6m8 96.6" class="cls-3"/><path d="M61.7 160.3c-.3 3.9-.3 48.4 1.9 75.1M91.8 46c-.8 4.7 1 9.7 4.5 12.8 0-.2.1-.5.2-.7M45.7 46.7c-.9 2.4.7 11.3-3.3 10.1-.8-.7-.2-2.4-1.1-3" class="cls-1"/><path d="M70.5 1c-3.9 3.1-6.9 21.5-6.9 28.5m-1.7.4c.5 5.3.2 9.6 1.6 14.7" class="cls-3"/></svg>')}`;
export default image;