/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="USA" width="125.7" height="299" viewBox="0 0 125.7 299"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10}.cls-2{fill:#4c2f21}.cls-11,.cls-12,.cls-2,.cls-5,.cls-8{stroke-width:0}.cls-5{fill:#2b3990}.cls-8{fill:#b32a2e}.cls-11{fill:#fff}.cls-12{fill:#010101}</style></defs><path d="M98.4 261.8c-6.6-.2-6.8 5.8-5.1 8.7v.2c-2.9-1.6-5.4.8-8.3-1-.1-2.7-.3-5.5-.7-8 2.9.1 11.4-1.8 13.5-3.7.2 1.2.4 2.5.6 3.8" class="cls-11"/><path d="M93.3 270.5c-1.7-2.9-1.5-8.9 5.1-8.7-4.4.2-4.6 7.4-3.1 9.9-.7-.4-1.4-.8-2.1-1.1v-.2Z" class="cls-8"/><path d="M86.1 72c11.8-13.4 12.3-30.1 9.3-45.4.3 0 .7.2 1.1.3-2-8.7-12.8-20.5-20.8-21.5-1.2-.1 3.3-1.1 1.7-2.3-2.7-2-12.1-3.4-15.8 0C57.4.4 45.5.9 40.4 2.1 42 3.6 43.6 4.2 44.5 5c-11.4 1.5-20.8 7.9-22.2 21.6.9-.8 1.7-1.4 2.7-1.3-1.8 5-1.1 12.8 0 17.8 1.7-4.1 3.7-10 8-12.1 1.1 2 2.3 3.9 3.2 6 2.7-4.2 5.9-7.1 10-10.3-.3 4.9 1.5 7.3 2.3 12 2.4-6.2 4.4-9.3 10.1-13.7.3 2.7 1.9 4.9 2.4 7.6 8.1-9.4 7-5.4 10.4 3.7 1.8-3.1 1.9-3.3 3.6-6.4 5 4.9 2.8 18.6 3 25.2 2.8-5.1 2.6-7.7 5.4-12.4-1 13.8-2 14.8-6 26.5 2.2-1.5 3.6-6.3 5.7-7.9-1.3 4.1-2.6 6.8-4.6 10.5 4.3-3.9 7.1-7.3 8.9-10.9.4 3.1-.1 8.3-1.3 11Z" style="stroke-width:0;fill:#604231"/><path d="M86.3 66.7c0 1.2-6.2 8.1-12.4 12.3-.8-1.1-2.3-2.5-2.8-3.3 4.5-3.4 8.5-9.6 12-14.3-1.3 4.1-2.6 6.8-4.6 10.5 4.3-3.9 7.1-7.3 8.9-10.9.2 1.7.1 3.8 0 5.8h-1Z" class="cls-2"/><path d="M33.8 121.7c0-4.3 0-8.7.3-12.9 6.5 3 15.7 2.1 22.8 2.2 5.3 0 18.9 1 21.3-1.4 1.8 3.4 3.2 7.9 5.3 11.4l-.4.2s0 1-.1 2.2h-.3c-2.8 7.6-41.4 2.4-48.9 1z" style="stroke-width:0;fill:#262262"/><path d="M95.3 98.1c-7.2-9.3-9.4-11.7-21.6-10.2 0-2.8-.7-5.4-3.3-4.8 1.7 5.5-2.7 8.6-8.5 11.3-6.8 3.2-10.7-4.3-10.4-10.6-1.2 1-2 2-2.6 3.1-13.2-3-19.8 11.4-27.1 19.7 2.3 6.6 4 13 12 15.2 0-4.3 0-8.7.3-12.9 6.5 3 15.7 2.1 22.8 2.2 5.3 0 18.9 1 21.3-1.4 2.3 4.3 3.7 10.1 7.1 14 8.1-1.9 16.4-7 17.7-16.2 0 0-5.6-7.2-7.7-9.3Z" class="cls-5"/><path d="M82.7 128.4c0-1 .2-3.2.3-4.9h-.3c-2.8 7.6-41.4 2.4-48.9 1 .2 14.2.2 28.1.8 42.2 11.5 3 33.1 5.7 43.3-1.5l.6-.2c-.4-1.2.8-2.8 2-4.1-.6-3 1.4-4.3 4-5-1.3-8.4-3.5-18.6-1.9-27.5Z" class="cls-5"/><path d="M65.3 43c2.6 0 2.6 7.7 0 7.6-2.6.1-2.6-7.7 0-7.6" class="cls-12"/><path d="M65.4 64.9c-5 8.8-18.2 11.3-23 2.5 6.8 2.3 21.7-1.2 23-2.5" class="cls-11"/><path d="M48.3 81.1c-.5 1-.9 2-1.8 2.7-2.4-2.6-5.5-4.9-7.1-8.1l.4-.5c2.8 2.4 5.6 4.5 8.5 5.9" class="cls-2"/><path d="M40.8 263.9c-.1.7-.2 1.4-.3 2.2-.8 1.9-4.8 1.1-6.6 0 3.3-4.1-1.9-7.7-5.9-7.3.2-.9.3-2.2.5-3.8h.2c2.7 2.2 11.6 3.5 13.4 2.3h.6c-.7 2.1-1.4 4.2-1.8 6.5Z" class="cls-11"/><path d="M87.6 175.8c-1.2.1-2.1-.4-2-2-1.4 0-3.4-1.4-2.2-3.1-1.3-.2-2.9-1.7-2-3.9-1.7-.4-2.4-1-2.7-1.8l-.6.2c-9.4 6.3-27.3 5.1-38 2.7 0 1.1-.2 2.3-.5 3.2h-1.3c0-1.4 0-3-.5-3.9l-1.2-.3c-1.8 14.5-4.4 24.8-8.6 39.8 9.2 5.4 22.1 7.3 33.4 3.1 0-3.5.5-8 .5-11.9h.2c1 6.2 1.6 12.1 1.6 11.5 11.1 2.7 23 2 32.8-5.3-7.5-19.9-5.8-19.8-8.9-28.3" style="stroke-width:0;fill:#b59d68"/><path d="M40 167.9c0 1.1-.2 2.3-.5 3.2h-1.3c0-1.4 0-3-.5-3.9.7.2 1.5.4 2.2.7Z" style="stroke-width:0;fill:#998b62"/><path d="m39.7 75.3-.4.5c.1.2.2.4.4.7-.2 1-1.2 1.8-1.1 3.3-5.2-6-7.5-13.1-9.7-20.7-1.3 2.2-1.9 5-2.1 7.5-3.4-8.9-6-22.4-3.6-32.5h.6c0 3.2.5 6.5 1.1 9.1.8-1.9 1.6-4.1 2.7-6.2l.3.2c.2 4.5.8 6.6 1.9 11.4-.8 4.7 2.3 23 10 26.8Z" class="cls-2"/><path d="M37.7 43.2c2.1 0 2.1 6.7 0 6.6-2.1 0-2.1-6.7 0-6.6" class="cls-12"/><path d="M116.4 128.2c-2.4-4.6-10-11.3-14.5-16.8-3 5.4-6.2 9-11.7 10.5 3.6 3.8 8.1 8.8 12.2 12.3-4.8 5.1-4.3 16.2-11.3 20.5-3.3 1.1-11.5.4-10.4 6.2-2.3 2.4-3.4 5 .7 5.9-.9 2.2.7 3.7 2 3.9-1.2 1.6.8 3 2.2 3.1.8 7.1 15.7-5.9 12.6-11.3 7.6-9.2 23-20.9 18.2-34.3M96.8 233.3c-3.4-8.8-5.9-16.2-6.2-25.9-7.7 3.7-14.1 4.2-21.7 2.9 4.6 6.5 5 12.4 4.9 20.1 1.7 10.6 9 20.5 10.4 31.3 2.9.1 11.4-1.8 13.5-3.7-1.8-13.1.6-16.7-.9-24.7M70.7 86.1c-.3-3.2-.7-5.6-.7-9.3v-.2c11.2-9.3 11.6-18.9 13.3-33.9-2.8 4.8-2.6 7.3-5.4 12.4-.2-6.6 2-20.3-3-25.2-1.7 3-1.8 3.2-3.6 6.4-3.5-9.1-2.3-13.1-10.4-3.7-.5-2.7-2.1-4.9-2.4-7.6-5.7 4.3-7.7 7.4-10.1 13.7-.8-4.7-2.6-7.1-2.3-12-4.1 3.2-7.3 6.1-10 10.3-.8-2.1-2-4-3.2-6-2.3 1.1-4 3.4-5.3 5.8l.3.2c3.1 19.5-.1 36.4 23.8 45.4-1.5 6.3 3.1 15.3 10.1 11.9 4.1-1.9 9.1-5 8.8-8.2Zm-33-36.3c-2.1 0-2.1-6.7 0-6.6 2.1 0 2.1 6.7 0 6.6M65.3 43c2.6 0 2.6 7.7 0 7.6-2.6.1-2.6-7.7 0-7.6M49.7 72.6c-3.9-.5-5.7-2.2-7.4-5.2 6.8 2.3 21.7-1.2 23-2.5-4.3 6.7-9 8.1-15.6 7.7M33 209.1c.8 2.2 0 6.4.3 9.1-7.7 13.1-2.6 21.8-4.9 36.9h.2c2.7 2.2 11.6 3.5 13.4 2.3h.6c3.3-11 15.8-25.3 8.7-37.1 1.1-2.5 3.4-6 3.3-8.6-8.2 1.4-15.7 0-21.6-2.5Zm2.1-33.8h.3c.5-2.8 1-5.7 1.2-8.4-.6-.1-1.3-.2-1.9-.3-.2-4.3-.3-8.6-.4-12.9-4.6-4.8-7.6-11.4-10.7-17.1l.2-.2c.6.6 6.5-12.5 8.6-15.2-5.3-2.1-7.2-5.4-8.8-9.7-2 3.6-9 18-10.8 20.9-4.7 7.5.8 13.2 6.2 19.2 4 4.4 7.6 7.6 9.3 13.1 1.2 3.9 2 10.7 6.9 10.6Z" style="stroke-width:0;fill:#c6926e"/><path d="M27.9 258.8c7.2-.4 9.1 6.3 3.1 10.1 3.7-4.4 3.9-9.8-6.7-8.8.5-.8 2-1.2 3.6-1.3" class="cls-8"/><path d="M124.4 285.8c2.2-11.3-13.9-12.4-21-16.3 3.9-11.4-13.3-9.8-8.1 2.2-3.3-2.9-6.7-.4-10.3-2.1 0-1.2-.1-2.2-.2-3.3-5.9 1.4-.2 9.9.2 13.4h-.3c0 8.2 8.6 5.8 14.4 14.7 6.9 7.4 18.7 5.1 24.5-2.4 1.4-1.9 2.4-4.6.8-6.4Zm-83.6-21.9c-.1.7-.2 1.4-.3 2.2-.8 1.9-4.8 1.1-6.6 0-.8 1.1-1.8 2-2.8 2.9 3.7-4.4 3.9-9.8-6.7-8.8-.1.2-.2.4-.2.6 0 14.8-23.4 7.2-22.6 25.8h-.2c-4.3 4.9 10.1 10.2 16.1 8.4 4.7-1.4 9.9-4.6 14.4-6.4 3.5-1.3 10.6-1.9 9.9-7 2.3-2.8-.2-7.6.1-10.8.3-2.7 2.5-5.4-1-6.9Z" style="stroke-width:0;fill:#724e2b"/><path d="M27.9 37.1c.2 4.5.8 6.6 1.9 11.4 0 0-.3 5.3 1.2 11.7C32.7 71 42.1 79 51.8 82.4c7.7 3 19.4-5.4 25.6-13.1M35 39.2c1.2-2.8 3.6-2.5 4.8-1m23.8.3c2.3-2.3 5.4-1.2 5.9.7" class="cls-1"/><path d="M51.5 83.3C51 89.7 55 97.6 61.9 94.4c4.1-1.9 9.1-5 8.8-8.2s-.7-5.6-.7-9.3" class="cls-1"/><path d="M51.5 83.7c-13.1 13.7 12.4 27.4 21.2 10 .9-2 2.6-11.9-2.4-10.6" class="cls-1"/><path d="M48.2 86.6c-13-1.9-19.1 11.7-26.4 19.9 2.3 6.6 4.1 13.1 12.1 15.3m39.7-34.3c2.6 1.1 8.8-.8 12.2.8 5.5 3.4 13.8 15.2 17.2 19.1-1.3 9.2-9.6 14.2-17.7 16.2-3.9-4.5-5.1-11-8.2-15.7" class="cls-1"/><path d="M34.9 103.2c-2.5 20.9-.3 42.5-.2 63.5 11.5 3 33.1 5.7 43.3-1.5m5.1-43.7c-1.5 9.8-.7 24.2 1.5 34.7m-.1-67c-5.3 3.3-8.3 12-7.1 16.8M39.3 87c-1.4 3.4-3.9 11.6-3.5 13.5m-12.2 11.1c-2 3.5-9 18-10.8 20.8-4.7 7.5.8 13.2 6.2 19.2 4 4.4 7.6 7.6 9.3 13.1 1.2 3.9 2 10.7 6.9 10.6" class="cls-1"/><path d="M32.5 121.3c-2.2 2.6-8.1 16-8.6 15m-4.5-3.9c6.3 4.1 6.9 12.1 11.8 17.4.8 1.1 2.9 3.3 3.3 4.3m55.3-32.6c3.9 3.8 8.3 9.1 12.6 12.6" class="cls-1"/><path d="M101.7 111.1c4.5 5.6 12.2 12.4 14.7 17 4.8 13.4-10.6 25.1-18.2 34.3" class="cls-1"/><path d="M90.4 155c9.9-5.8 6.3-20.9 17.7-25.2m-25.2 28.7c-2 2.2-7.6 7-1.6 8.2-.9 2.2.7 3.7 2 3.9-1.2 1.6.8 3 2.2 3.1.8 7.1 15.7-5.9 12.6-11.3" class="cls-1"/><path d="M91.1 154.5c-3.3 1.2-11.6.6-10.4 6.4m-44 5.6c-1.7 14.7-4.4 25.1-8.7 40.3 9.2 5.4 22.1 7.3 33.4 3.1 0-3.5.5-8 .5-11.9" class="cls-1"/><path d="M59 185.7c2.2 3.5 4.6 22.6 4.6 23.7 11.1 2.7 23 2 32.8-5.3-7.5-20.1-5.9-19.8-8.9-28.5m-36.5 5c2.2 2 5.9 3.3 8 5.1" class="cls-1"/><path d="M67 177.7c-1.6 2-6 7-7.5 8m-6.2-16.4c.7 1.3 1 4.4 1.6 6 .5 1.5 2 3.9 1.8 3.8m2.8-9.8c-.2 1.4-.4 3.2 0 4.4m7.5-4.8c.5.3 1 1.3.9 2.8.5 0 1.8 0 2.4-.2.5-1.2.3-2.3-.4-3.3m-25.1.7c.3 2.2-.5 5.1 2.8 4.2 0-1.5-.3-3-.6-4.4m-9.2-1.6c.5.9.5 2.5.5 3.9h1.3c.3-.9.6-2 .5-3.1m36.2-1.9c.3.9 1 1.9 1.4 2.8.7 0 1.3-.3 1.7-.6m-45 9.5c2.4-.8 4.6-3 6-5 1.2 4.2-3.3 7.6-6.7 9.2m48.1-9.9c-2.7.3-5.7.5-8.2-.6-.2.7-.1 2.1 0 2.8 2.1.2 10 2.7 9.9.7" class="cls-1"/><path d="M80 169.1c-1.3.7-2.8 1-4.4 1.4 0 1 .4 1.1.6 1.3m-18.1 13c-1.4 4.6-2.9 25.5-3.1 26.8m4.5-24.6c-.4 2.9-2.2 20.1-2 23.4v-1m27.2-35.2c2.1 5.1 7 28.2 9.8 31.7m-61.6 3c.9 2.3 0 6.5.4 9.3-8 13.1-2.2 25.7-5.5 41m26.8-48c.3 2.9-2.2 6.4-3.3 9.1 8.2 15.6-10.7 31-10.8 46.6M69 210.3c4.6 6.5 5 12.5 4.9 20.1 2.7 13.3 11.8 25.2 11.2 39.3m5.5-62.3c.3 9.7 2.8 17.1 6.2 25.9 1.4 7.6-1 16.5 1.6 28.5" class="cls-1"/><path d="M24.1 260.7c1-2.7 6.4-2.2 8.6-.7 7.2 7-7 11.5-11.7 15.9" class="cls-1"/><path d="M1.4 286.8c-1-19.1 22.9-11.1 22.6-26.3m10 5.8c1.8.9 5.6 1.7 6.4-.2" class="cls-1"/><path d="M9.6 273c5.4-1.7 9.9 1.5 12.2 3.7 1.6 1.9 3.8 11.7 2 12.3" class="cls-1"/><path d="M1.7 286.6c9.3 10.1 20.8 3.1 31.2-1.6 2.6-1 6.8-1 8.8-3.5 2.3-2.8-.2-7.6.1-10.8.3-2.7 2.5-5.5-1.1-6.9m43.4 5.1c1.8 2.3 5 1.2 7.2 1.2 5.5 1.6 12.4 7.2 15.7 9.9" class="cls-1"/><path d="M103.5 269.3c3.4-11.5-13.5-9.2-8.1 2.5" class="cls-1"/><path d="M124.4 285.8c2.2-11.5-14.3-12.3-21.3-16.5m-18.9-2.8c-4.1 1.6-1 7.2-.2 10 .5 7.4 8.4 8.8 13.3 13 7.4 9.4 22.6 7.3 27.1-3.7m-123.1.8c-4.3 4.9 10.1 10.2 16.1 8.4 4.7-1.4 9.9-4.6 14.4-6.4 3.6-1.3 11.2-2.1 9.7-7.5" class="cls-1"/><path d="M84.7 280c0 8 8.6 5.7 14.4 14.6 6.9 7.4 18.7 5.1 24.5-2.4 1.4-1.9 2.4-4.6.8-6.4 0-.1-.2-.2-.3-.3" class="cls-1"/><path d="M105.9 295c-3.6-8.7 1.3-18.7 10-20.8m-22.6-3.7c-1.7-2.9-1.5-8.9 5.1-8.7m-74.3-1.6c10.5-1.1 10.8 4.3 6.9 8.8m8.4-222.5c0 4.3-3.4 4.3-3.3 0 0-4.3 3.3-4.3 3.3 0Zm27.9.3c0 5-4.1 5-4.1 0 0-4.9 4.1-5 4.1 0Zm-18.5 7.1c0 1.5-3.2 2.7-3.4 3.4 0 1.2 1.1 3.8 2.9 4.4m-6.5 5.4c6.7 2.8 22.1-.9 23.5-2.2-5 8.8-18.2 11.3-23 2.5" class="cls-1"/><path d="M27.9 18.6c-3.8 6.3-5.4 16.2-3 24.5 1.7-4.1 3.7-10 8-12.1 1.1 2 2.3 3.9 3.2 6 2.7-4.2 5.9-7.1 10-10.3-.3 4.9 1.5 7.3 2.3 12 2.4-6.2 4.4-9.3 10.1-13.7.3 2.7 1.9 4.9 2.4 7.6 8.1-9.4 7-5.4 10.4 3.7 1.8-3.1 1.9-3.3 3.6-6.4 5 4.9 2.8 18.6 3 25.2 2.8-5.1 2.6-7.7 5.4-12.4-1 13.8-2 14.8-6 26.5 2.2-1.5 3.6-6.3 5.7-7.9-1.3 4.1-2.6 6.8-4.6 10.5 10.7-9.5 11.8-17 14.1-31.5.8 1.8 1.1 4.3.9 6.6 4-14.7-1.1-19.7-7.4-30.1" class="cls-1"/><path d="M44.4 5.2C33 6.5 23.6 12.9 22.2 26.7c.8-.8 1.5-1.2 2.3-1.4" class="cls-1"/><path d="M61.6 3.2C57.4.5 45.5 1 40.4 2.2c2 2.2 4.4 1.9 4.7 4.4m16.5-3.4c3.7-3.4 13.1-2 15.8 0 1.6 1.2-2.9 2.2-1.7 2.3 8.1 1 18.8 12.8 20.8 21.5-1.9-.9-4.2 0-5-2M50.1 8.5c-5.6 2.4-11 8.7-13.7 14.1 3.6-2.2 8.2-3.3 11.7-5M23.2 34.1c-2.4 10.1.2 23.6 3.6 32.5.2-2.5.8-5.2 2.1-7.5 2.1 7.5 4.4 14.7 9.7 20.7-.1-1.5.9-2.3 1.1-3.3" class="cls-1"/><path d="M48.1 81.4c-.4 1-.9 1.8-1.7 2.4-2.4-2.6-5.5-4.9-7.1-8.1m31.7-.3c.4 1 2 2.3 2.9 3.6 6.2-4.3 12.4-11 12.4-12.3m.8-7.1c.9 3.5.2 9.2-1 12.4 11-13 13.1-29.6 9.1-44.4m-61.5 81.1c6.6 3.3 16 2.3 23.3 2.4 5.2 0 18.8.9 21.1-1.3M34 124.5c7.3 1.4 46 6.6 48.7-1M28.6 255.1c2.7 2.2 11.6 3.5 13.4 2.3m42.6 4.2c3 0 11.7-1.7 13.6-4.1" class="cls-1"/></svg>')}`;
export default image;