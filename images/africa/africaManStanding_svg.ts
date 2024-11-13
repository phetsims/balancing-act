/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Africa" width="157.2" height="423" viewBox="0 0 157.2 423"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;fill:none;stroke:#010101}.cls-10,.cls-11,.cls-13,.cls-14,.cls-16,.cls-4,.cls-5,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#2b2c2b}.cls-5{fill:#9572a4}.cls-8{fill:#454545}.cls-9{fill:#1e1e1e}.cls-10{fill:#b890bc}.cls-11{fill:#936c57}.cls-13{fill:#fff1d3}.cls-14{fill:#f0ca8b}.cls-16{fill:#010101}</style></defs><path d="M55.2 50.1c1.6 0 1.6 5.8 0 5.7-1.6 0-1.6-5.8 0-5.7" class="cls-16"/><path d="M65.5 96.5c-15.3-2.8-20.7-26.2-22.6-40.7 4.9 16.5 8.4 29.1 26 30.1 13.7-1.9 24.5-9.1 27.9-30.6-.1-6.7 1.2-20.8-4.1-25.3-5.9-4.8-14.7-6.6-23.8-6.6-21-.8-27 9.8-26.4 26.5-1.6-.3-2.8.6-3 2.2C36 35.5 32.1 7.3 63.1 1.4c35.3-2.9 50.1 13.4 42.1 49.5-9.6-2.9 1.2 17.1-19 38.7-2.6 3-2.7 2.9-9.4 5.9-4.6 2.1-5.8 2.8-11.1 1Z" class="cls-8"/><path d="M55.8 42c3.7 0 7.7.3 6.2 6.3-3.2-1.1-11.3-.9-15.1.8.7-3 5.2-7 9-7.1Z" class="cls-8"/><path d="M95.8 400.4c-.1-.4-.2-.8-.2-1.1 3.8 2.5 12 7.1 15.2 10.2 3.1 3.1 6.5 6.4 10.4 7.8 7.3 2.7 20.2-.9 23-9.1-1.2 14.7-21.8 20.5-31.1 8.2-7.8-12-16-9.6-17.4-16Z" class="cls-9"/><path d="M110.7 244.3c-13.4 3.7-32.2 5-45.7 4.8-5.2-.9-13.4-3-19.6-4.3-2.3-.5-4.5-1-6.4-1.4-1.3 15.6-4.7 121.3-.7 145.9 8.5 10.5 16.8 8.8 30.6 4.1 2.3-9.4 4.3-132.7 4.3-141.7h.1c2.6 25.1 9.4 123.1 13.8 141.7 8.3 3.2 26.7-2.3 29.3-7.6 0 0-3.1-98-5.8-141.6Z" style="stroke-width:0;fill:#453b59"/><path d="M73.1 249.2c-1.4-12.5 3.3-35.7-5.6-45.1l-3.9 9.2c-.2 11.8-.3 23.7-.5 35.5-2.6-.5-6.8-1.5-11.3-2.5-.4-20.7-.1-44.4 16-59.7.2 0 .4.1.6.2 13.5 17.3 17.2 39.8 18 61.5-4.8.4-9.5.8-13.4.9Z" style="fill:#61566c;stroke-width:0"/><path d="M16.1 407c-.2-6.6 1.7-12.3 22.2-17.7 8.5 9 12.3 9.6 26.4 5.4.5 2.9-.2 2 .7 4.8-1.9 4.6-7.1 3.8-10.6 5.3-12.8 6.3-26.9 16-38.4 2.2z" class="cls-4"/><path d="M139.8 160.7c3.7-6.7-3.4-15.5 0-22.3 14.9 29.8 4.3 29.8-4.2 53.4.1.2-9.1-13.5-14.7-17.1 2.1-9.3 14.7-6.5 18.9-14" class="cls-5"/><path d="M61.3 95.1s5.1 6.8 8.6 6.9c-2.1 5-2.8 8.7-4.8 14-6.5-3.1-14.4-10.7-13.9-17.3 2.1-2.1 4.3-3.3 6.5-6.1 1.3 1 2.6 1.7 3.7 2.3v.2Z" class="cls-13"/><path d="M34.8 177.1c-4.8 3.7-10.9 10.6-11 16.7-17.5-23.4-16.1-28.8-6.8-54l.4.2c4.2 9.8-5.2 24.4 5.7 31.4 3.6 1.9 8.5 1.4 11.1 4.4.2.4.4.8.7 1.2h-.3Z" class="cls-5"/><path d="M124 197.3c3.8 6.7-15.8 25.2-16.6 15.3-1.4 0-4.5-1.9-2.8-4.2-2.2-.4-3.5-3-2.6-5.4-5.9-1.6-3.2-5.4-.6-8.4-1.5-7.8 8.3-6.8 13-8.4 2.6 1.2 6.5 6.2 9.6 11Z" class="cls-11"/><path d="M59.9 75c6.9 2.6 20.5-.2 21.9-1.4-4 6-17.8 9.7-21.9 1.4" style="stroke-width:0;fill:#fff"/><path d="M43.5 101.5c3.1-1.3 6-2.4 7.6-2.8-.5 5.7 5.5 12.2 11 15.7.8 20-1.4 27.5-.6 47.5 3.5.4 8.8-.4 12.3 0 1.1-20.3 2.3-26.1 2.5-46.4 8.3-2.2 16.4-10.9 18.8-18.7.8 0 3.3 1 6.4 2.5-12.8 11.4-5.8 19.1-8.2 31.3-1.8 3.6-6.3 5.2-8.3 8.8-2.8 5.1.8 11.2 1.5 17 1.3 12.7-10 21.9-18.3 29.9-32.5-38-3.9-35.2-18.8-57.1-2.7-9 7.1-23.3-5.8-27.7Zm96.3 36.9c-3.4 6.8 3.7 15.6 0 22.3-3.4 6.2-12.4 5.3-17 10 1.3-2.9 3.3-7.6 4.2-9.8-3-5.6-14.2-20.6-21.6-28.4h-.5c2.5-8.4 5.1-21.2 13.7-24.2 3.7 4.7 17.9 23.3 21.1 30.2Z" class="cls-10"/><path d="M105.1 50.9c4.2 1.8 1.2 9.5 0 12.9-1.5 4.3-4.1 3.3-6.1 2.4 1.8-5.5-1.3-17.1 6-15.3ZM32.6 204.4c.3-2 1.1-4 2.7-6.9-.1 3.5-.3 7-.4 10.5-.6-1.9-1.3-1.9-2.2-3.5Z" class="cls-11"/><path d="M35.3 197.5c-2.6 4.7-2.9 6.8-3.2 11.2-1.6-3.5-4.8-9.6-8.3-14.9.2-6.1 6.3-13.2 11.3-16.8l.9 1.5c-.2 5.7-.4 12.2-.7 19m57 13.6 3.2-9.5c9.9 9.6 6 31.4 8.7 44.3-2.9.5-6.2 1-9.7 1.5-.9-12.1-1.4-24.2-2.2-36.3" class="cls-13"/><path d="M93.3 119.3c-.8-7.5 2.5-15.1 8.2-19.9 6.5 3.1 15.7 8.1 17.3 8.9-6.5 1.7-8.8 10-11.4 16.2-8.6 32.7-.2 47.4-38.9 62.3-.1-.1-.2-.3-.3-.4 8.3-8 19.7-17.2 18.3-29.9-.7-5.8-4.3-11.9-1.5-17 7.1-7.9 11.1-8 8.3-20.2" class="cls-14"/><path d="M16.1 407h.3c11.5 13.8 25.6 4.1 38.4-2.2 3.5-1.5 8.7-.7 10.6-5.3 1.9 7-7.4 8.5-12 10.2-5.6 2.5-12 6.8-17.7 8.7-7.4 2.4-21.7-5.9-19.9-11.4h.2Z" class="cls-9"/><path d="M128.5 205.9c-1.5-5.1-9.9-17.9-14-19.7 2.8-4.4 4.9-8.2 6.5-11.5 5.7 3.6 14.8 17.3 14.7 17.1-3 6.4-5.8 11.9-7.2 14.1" class="cls-13"/><path d="M53 217.7c-1.5 9.5-1.1 19.1-1.2 28.6-2.2-.5-4.4-1-6.5-1.5-.6-15.9 5.3-32.2-3.1-43.3l-4.4 9c-.8 11.8-1.4 20.4-2.1 32.2-.7 0-1.2-.2-1.5-.2-.4-14.4 1.2-46.3 1.8-64.1.5-18.6 0-29.7 2.7-46 2 22.5 12.8 49.5 29.1 54.1-8.5 8.1-13.1 19.5-14.8 31Z" class="cls-5"/><path d="M61.5 162c-.8-20.1 1.4-27.5.6-47.5 1 .6 2 1.2 2.9 1.6 2-5.3 2.7-9 4.8-14 .9 3.4 2.1 10.6 3 14 1.1 0 2.3-.2 3.4-.5-.2 20.3-1.4 26.2-2.5 46.4-3.5-.4-8.8.4-12.3 0Z" class="cls-14"/><path d="M46.6 212.2c0 9.8-.7 19.5-1.3 32.6-3.4-.8-6.6-1.5-9.6-2 .8-11.8 1.4-20.4 2.1-32.2l4.4-9c3.5 3.5 4.4 10.7 4.4 10.7Z" class="cls-13"/><path d="M86.1 91.1c-5.1 5.8-16.2 11-16.2 11-3.5-.2-8.6-6.9-8.6-6.9V95c6 2.7 9.9 3.8 15.4.6 6.7-3.1 6.8-2.9 9.4-5.9z" class="cls-11"/><path d="M81.8 52.8c0-3.8 2.8-3.8 2.8 0s-2.8 3.8-2.8 0" class="cls-16"/><path d="M55.8 42c-3.8 0-8.3 4.1-9 7.1 3.9-1.7 12-1.9 15.1-.8 1.5-6-2.5-6.4-6.2-6.3Zm28.9 10.8c0-3.8-2.8-3.8-2.8 0s2.8 3.8 2.8 0m8-22.7c5.3 4.5 4 18.6 4.1 25.3C93.4 76.9 82.6 84.1 68.9 86c-17.6-1.1-21.1-13.6-26-30.1-2.3-18.2 2-33.7 25.9-32.3 9.1 0 17.9 1.7 23.8 6.6ZM81.9 73.6c-1.4 1.2-15.1 4-21.9 1.4 4.1 8.3 17.9 4.6 21.9-1.4m10.8-27c-1.9-5-12.8-7.5-16.5-3.4-.3 1.8-.8 3 0 5 6.6-2.5 15.9 1.2 16.4-1.6Zm-37.5 3.5c-1.6 0-1.6 5.8 0 5.7 1.6 0 1.6-5.8 0-5.7" class="cls-11"/><path d="M38.7 132.5c-1-11.6 2.9-17-8.6-25.1 3.1-2.4 7.2-2.9 13.4-5.9 12.9 4.4 3.1 18.7 5.8 27.7 14.8 21.8-13.7 19.1 18.8 57.1l-.3.3c-16.4-4.7-27.1-31.6-29.1-54.1" class="cls-14"/><path d="m95.6 201.6-3.2 9.5c.7 12.1 1.3 24.2 2.2 36.3-2.6.3-5.4.6-8.1.9-.8-21.7-4.5-44.1-18-61.5 29.7-10.8 34.1-25.1 36.6-54.4h.5c2 2.2 3.9 4.5 5.9 6.8-3.5 13-4.3 35.1-2.2 48.1-4.4.7-8.9 1.9-7.8 7.3-2.6 3-5.3 6.8.6 8.4-.4 1.2-.4 2.3 0 3.1l-2.5.9c-.9-1.9-2.2-4-3.9-5.3Z" class="cls-5"/><path d="M76.3 115.5c-1.1.3-2.3.5-3.4.5-.9-3.4-2.1-10.6-3-14 0 0 11.2-5.2 16.2-11v-1.5c2.4 2.3 6.6 4.9 9 7.2-2.3 7.8-10.5 16.5-18.8 18.7Z" class="cls-13"/><path d="M109.5 215.4s1.7 13.9 3.9 27.3c-1.9 2.1-5.6 2.4-9.1 3.3-2-12.6-.2-26.6-4.7-38.9l2.5-.9c.5 1.3 1.6 2.1 2.6 2.3-1.7 2.4 1.4 4.2 2.8 4.2 0 2 .8 2.8 2.1 2.8Z" style="stroke-width:0;fill:#846c8d"/><path d="M28.3 162.3c1.9 3.9 3.6 8.7 6.1 13.5-2.7-3-7.6-2.4-11.1-4.4-10.9-7-1.5-21.5-5.7-31.4l-.4-.2c4.3-9.3 7.6-23.9 13.1-32.4 11.5 8.1 7.6 13.4 8.6 25.1-.7 5.1-1.2 8.8-1.5 12h-.2c-3.2 6.2-7.6 16.8-8.6 17.8Z" class="cls-10"/><path d="M72.4 214.5c.5 10.1.5 24.6.6 34.6-5.3.1-6.6.3-10-.3.2-11.8.3-23.7.5-35.5l3.9-9.2c3.7 3.3 4.9 10.4 4.9 10.4Z" class="cls-13"/><path d="M95.7 399.3c0-1.7 1.1-3.1.9-5 8.6-.8 18.1-4.8 20-8.4 8.8 6.8 29.6 5.2 28.2 20.9-1.8 9.2-15.6 13.3-23.4 10.5-3.9-1.4-7.2-4.7-10.4-7.8-3.3-3.2-11.4-7.8-15.2-10.2Z" class="cls-4"/><path d="M85.2 41.7c2.1.8 7.1 2.1 7.4 4.9-.6 2.8-9.8-.9-16.4 1.6-.8-2-.4-3.3 0-5 2.3-2.2 5.8-2.7 9.1-1.5Z" class="cls-8"/><path d="M42.9 55.8c.4 2.5 1.3 7.6 2.3 12.4l-1.5.3c-4.4-1.8-7.9-19-1.3-18.6.1 2 0 3.4.5 5.9" class="cls-11"/><path d="M42.9 55.8c1.1 10.1 6.4 32.6 14.7 36.8 6 4.1 12.6 6.9 19 3 8.2-3.6 7.3-3.5 11.5-8.3M42.6 54.2s0 .6.3 1.6m3.9-6.7c3.9-1.7 12-1.9 15.1-.8m14.3-.1c6.6-2.5 15.9 1.2 16.4-1.6" class="cls-1"/><path d="M61.3 65.2c-2.1 6.5 10.6 6.3 14.5 4.6m23.8-7.1c0-2.9.5-6.2.5-6.5 0-4.1 2-6.6 5-5.3 5 1.5.2 20-5.4 15.4M42.6 54.2c-1.6-17.9 3-31.9 26.2-30.7 24.7.6 29.5 7.9 28 31.3m2.8 7.9c-.3 8-9 21.9-11.5 24.5m-44.6 14.3c-6.2 3-10.3 3.5-13.4 5.9-3.8 4.3-7.1 18.3-9.5 23.5-4 8.5-6.3 18.3-9.6 27.4m40.1-59.6c-1.6.4-4.5 1.5-7.6 2.8m83.6 59.4c-3-5.6-14.2-20.6-21.6-28.4M95.1 96.8c5.4 1.2 21.8 10.6 23.7 11.4 10.6 12.3 33 45 28.3 56.7M45.4 244.8c14.6 4 25.7 5.5 41.1 3.4 8.6-1.4 20-.9 26.9-5.6M36 178.5c-.5 17.8-2.1 49.8-1.8 64.1 3.6.4 7.2 1.3 11.1 2.2m-6.7-112.3c-2.7 16.3-2.2 27.5-2.7 46" class="cls-1"/><path d="M111.4 139.2c-3.4 13.1-4.3 35.1-2.1 48.1m-76.6 17.1c.9 1.6 1.6 1.6 2.2 3.5M11 158.3c-6.3 16.6 16.1 35.9 21.2 50.7m4.7-64.5c-3.2 6.2-7.6 16.8-8.6 17.8" class="cls-1"/><path d="M26 158.3c3.9 6 5.8 13.5 9.9 20.2h0v.1M147 164.9c-2.9 9-13.4 32.1-18.5 41m-14.1-19.7c5.7-8.7 8.9-16.8 12.6-25.4 1.1-2.3 1.9-2.8 5.4-6.1m-28.4 37c-2.4 3.1-9.9 9.1-2 11.3-1 2.4.4 5 2.6 5.4-1.7 2.4 1.4 4.2 2.8 4.2.9 9.9 20.5-8.6 16.6-15.3" class="cls-1"/><path d="M114.4 186.2c-4.7 1.6-14.5.6-13 8.4M39 243.4c-1.3 15.6-4.7 121.3-.7 145.9 8.5 10.5 16.8 8.8 30.6 4.1 2.3-9.4 4.3-132.7 4.3-141.7m40.1-9.1c-2.2-13.4-3.9-27.2-3.9-27.3m-36.3 33.9c2.9 26.4 9.5 124.2 14.1 144.3 8.3 3.2 26.7-2.3 29.3-7.6 0 0-3.1-98-5.8-141.6m-94.6 163c-.3-7 1.6-12.5 22.2-17.9" class="cls-1"/><path d="M16.4 407c11.5 13.8 25.6 4.1 38.4-2.2 3.5-1.5 8.7-.7 10.6-5.3m30.3-.2c3.8 2.5 12 7.1 15.2 10.2 3.1 3.1 6.5 6.4 10.4 7.8 7.8 2.8 21.6-1.3 23.4-10.5 1.3-15.7-19.4-14.1-28.2-20.9" class="cls-1"/><path d="M64.7 394.8c2.6 12-1.5 11.6-11.3 15-5.6 2.5-12 6.8-17.7 8.7-7.4 2.4-21.7-5.9-19.9-11.4m80.7-12.7c-1.2 6.6-1.8 8.9 6.3 12 4.6 2.3 6.9 5.9 10.4 10 9.3 12.7 31.5 6 31-9.3m-82.9-312s5.1 6.8 8.6 6.9c0 0 11.2-5.2 16.2-11m0-1.4V91h0M46.8 49.1c.8-6.3 17.5-12.1 15.1-.8m14.3-.1c-.8-2-.4-3.3 0-5 3.7-4 14.6-1.5 16.5 3.4m-36.3 6.3c0 3.7-2.6 3.7-2.5 0 0-3.7 2.6-3.7 2.5 0m28.2-.1c0 3.8-2.8 3.8-2.8 0s2.8-3.8 2.8 0" class="cls-1"/><path d="M39.4 52.1C35.9 35.5 32 7.3 63 1.4c35.3-2.9 50.1 13.4 42.1 49.5" class="cls-1"/><path d="M41.8 50c-5.6.6-2.4 16.7 1.9 18.5m53.1-13.2C93.4 76.8 82.6 84 68.9 85.9c-17.6-1-21.1-13.6-26-30.1 0-.3-.2-.7-.3-1m71.8 131.4c4.1 1.8 12.5 14.6 14 19.7m-93.1-8.4c-2.6 4.7-2.9 6.8-3.2 11.2m54-119.1c2.4 2.3 6.6 4.9 9 7.3-2.8 8.8-12.3 18.7-22.2 19.2-.9-3.4-2.1-10.6-3-14-2.1 5-2.8 8.7-4.8 14-6.5-3.1-14.4-10.7-13.9-17.3 2.3-1.9 3.2-3.1 6.1-5.4m15.8 155.8c-1.4-12.5 3.3-35.7-5.6-45.1l-3.9 9.2c-.2 11.8-.3 23.7-.5 35.5" class="cls-1"/><path d="M45.4 244.8c-.6-15.9 5.3-32.2-3.1-43.3l-4.4 9c-.8 11.8-1.4 20.4-2.1 32.2m68.3 2.4c-2.3-12.7 1.2-34.1-8.5-43.4l-3.2 9.5 2.1 35.4M76.3 115.5c-.2 20.3-1.4 26.2-2.5 46.4-3.5-.4-8.8.4-12.3 0-.8-20.1 1.4-27.5.6-47.5m58.8 60.3c5.7 3.6 14.8 17.3 14.7 17.1M34.8 177.1c-4.8 3.7-10.9 10.6-11 16.7" class="cls-1"/><path d="M101.4 99.4c-12.8 11.3-5.7 19.1-8.2 31.3-11.1 11.6-10.8 9.3-6.8 25.8-2.7 34.7-38.8 20.3-34.5 89.5" class="cls-1"/><path d="M43.5 101.5c12.9 4.4 3.1 18.7 5.8 27.7 4.9 7.6 6.5 11 2.9 19.9-3.9 31.9 34.9 36.3 34.2 99.1" class="cls-1"/><path d="M30.3 107.6c6 3.8 9.9 10.7 8.1 17.8.1 23.5 11.3 56.7 30.1 61.5 12.1-4.6 24.3-11.1 30.4-23.1 7.7-15.6 2.2-46.4 19.8-55.5m21.1 30.1c-3.5 6.8 3.6 15.6 0 22.3-3.4 6.2-12.4 5.3-17 10M17.5 140c4.2 9.8-5.2 24.4 5.7 31.4 3.6 1.9 8.5 1.4 11.1 4.4M81.8 73.6c-4 6-17.8 9.7-21.9 1.4" class="cls-1"/><path d="M59.9 75c6.9 2.6 20.5-.2 21.9-1.4" class="cls-1"/></svg>')}`;
export default image;