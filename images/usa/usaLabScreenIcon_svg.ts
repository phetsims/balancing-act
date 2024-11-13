/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="548" height="374" viewBox="0 0 548 374"><defs><linearGradient id="linear-gradient" x1="274" x2="274" y1="0" y2="374" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#69cbee"/><stop offset="1" stop-color="#d0ecfa"/></linearGradient><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-5,.cls-6{stroke:#000;fill:none}.cls-10,.cls-19,.cls-20,.cls-8,.cls-9{stroke-width:0}.cls-5{stroke-miterlimit:10}.cls-9{fill:#f3b51a}.cls-10{fill:#f7bc34}.cls-19{fill:#0054a5}.cls-20{fill:#008ed3}</style></defs><path d="M0 0h548v374H0z" style="fill:url(#linear-gradient);stroke-width:0"/><path d="M363.5 374H342l-65.8-128.5L209.4 374h-19.7l79.5-151.9h14z" style="stroke:#000;stroke-miterlimit:10;fill:#ff0"/><circle cx="276.2" cy="230.1" r="7.6" style="stroke:#000;fill:#b3b3b3;stroke-width:.5px;stroke-miterlimit:10" transform="rotate(-45 276.207 230.091)"/><path d="M276 227.6c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3" class="cls-8"/><path d="M266.4-3h12.2v493h-12.2z" style="stroke:#000;stroke-miterlimit:10;fill:#e6c29e" transform="rotate(-75 272.47 243.549)"/><path d="M162.1 200.9c5.9-4 18.4-18.5 21.7-23.3-.6-9.1-7.2-16.3-12.7-22.2-11.5 8.5-29.8 22.7-34.3 24.9-3.2-.2-3 .3-6 .3-1.4 8-1.2 15.8 6.5 19.8 6.3 3.2 18.1 7 24.9.5Z" style="stroke-width:0;fill:#636567"/><path d="M177.7 83c-1.9-.6-3.3 5-1.4 5.4 1.9.6 3.3-5 1.4-5.4" class="cls-8"/><path d="M173.5 98.6c1.9 7.2 10.9 11.4 16 6.1-5.3.3-15.3-4.9-16-6.1" style="stroke-width:0;fill:#fff"/><path d="M152.2 110.5c5.6-4 7.1-2.7 12.8-2.7.5 8.5 4.9 10.7 9.2 14.6v-.2c2.1.8 5.9-.9 5.8-8.1 1.2 0 2.3-.1 3.4-.4 6.4 5.8 12.9 18.9 18.5 27.9-4.8-4.2-7.8-2.8-11.2-2.2l-.2.3c-3.3-2.7-6.8-6-9.1-7.9-3.4 3.2-6.4 9-7.9 12.9 2.7 1.3 4.9 3.1 6.8 4.3-10.8 6.7-37.8 28.7-43.5 31.3-8.9 0-7.7 2.5-5.4-9.5 5.1-18 9.9-46.4 20.8-60.3" style="stroke-width:0;fill:#fbd00d"/><path d="M151.3 78.4c7.3-14.8 16.3-31.1 33.4-27 6.8 4.8 7.3 0 12.1 1.8 14 8 18.6 23.1 17.5 38.7-1.2-2.1-2.7-3.9-4.6-5.4-5 6.2-7.1 26.3-5.4 31.8-5.3 1.3-14.2-2.1-18.7-4.9v-.2c9.5-2.8 16.4-10.7 16.3-19.5 1.7-3.3 3.5-6.3 4.5-9.5-5.9-3.6-13.3-5.4-19.4-7.2 1-4.1.7-8-.2-11.8.7 3.7-1.8 7.7-3.7 11-4.4-1.6-8.5-2.6-12-3.4-6.5 11.5-9.6 23.4-5.1 35-5.4 0-9.5-.5-14.9-.5-1.5-11.2-4.6-17 0-28.9Z" style="stroke-width:0;fill:#957346"/><path d="M197.4 88.2c-1.5-.5-2.8 4.4-1.2 4.7 1.5.5 2.8-4.4 1.2-4.7" class="cls-8"/><path d="M166.2 107.8H165c.5 8.5 4.9 10.7 9.2 14.6v-.2c2.1.8 5.9-.9 5.8-8.1 7.6-.8 16.3-4.7 19.8-12.1 2.2-4.3 2.2-8.5 2.2-8.5 1.7-3.3 3.5-6.3 4.5-9.5-5.9-3.6-13.3-5.4-19.4-7.2 1-4.1.7-8-.2-11.8.7 3.7-1.8 7.7-3.7 11-4.4-1.6-8.5-2.6-12-3.4v.7c-7 11.2-9.3 23.1-5.1 34.3Zm10.1-19.4c-1.9-.4-.4-6 1.4-5.4 1.9.4.4 6-1.4 5.4m21.1-.2c1.5.3.3 5.2-1.2 4.7-1.6-.3-.3-5.2 1.2-4.7m-23.9 10.4c.7 1.2 10.6 6.5 16 6-1.8 1.9-3.4 2.8-6.3 2.4-4.8-.9-7.9-2.9-9.7-8.4m0 46.1c1.5-3.8 4.5-9.7 7.9-12.9 2.3 1.9 5.8 5.2 9.1 7.9l.2-.3c3.5-.6 6.4-2 11.2 2.2 3.3 2.9 2.5 3.1 3 6 5.8 2.2 11.4 7.5 7 13.6-1.8.6-4.1.6-6.3.2 0 .2-.1.7 0 .9 1 .3 2 .7 2.7 1.1l-1.1-.3c2.8.9.9 2.8-1.6 1.7v.2c1.7.9 3.9 1.9 1 2.9h-1.2c3.8.1 2.9 3.7-.4 2.8 3.5.6 2.5 2.9-.5 2.4-1.7 7-4.5 12.4-4.3 19.1h.4c-1.2.9-1.9 3.3-2.1 6.9-.2 0-.4-.2-.5-.2v.3c-6.5.8-9.6-2.6-11.2-4 .5-.9 3.2-13.6 2.8-16.2-.2-1-.8-9.3 0-11.8l-.4-.2c-1.4 3.8-2.5 7.1-5.2 10.3-.6-9.1-7.2-16.3-12.7-22.2 4.5-3.3 8-5.8 9.3-6.4-2-1.2-4.2-3-6.8-4.3Z" style="stroke-width:0;fill:#debea3"/><path d="M179.8 207.1c-.3-2.9 3.1-10.1 5.2-12 1.1-1.9 4.8 5.9 12.8 4.2v-.3c.1 0 .3.1.5.2.5-4.3.8-8 4.4-7.1.9.6-1.3 5.6.3 7.1 7.7 6.8 24.1 8.6 18.6 22.3-11.5-.5-29.8-6.6-42.9-9.7-.5.1 1.1-4.7 1.2-4.9Z" style="stroke-width:0;fill:#b22b33"/><path d="M184.7 51.3c6.8 4.8 7.3 0 12.1 1.8 14 8 18.6 23.1 17.5 38.7-5.4-9.4-17.9-12.1-27.2-14.8 1-4.1.7-8-.2-11.8.7 3.7-1.8 7.7-3.7 11-6.2-2.2-11.5-3.3-17.1-4.3 2.4-6.5 6.1-12.8 12.8-15.2" class="cls-5"/><path d="M185.7 113.2c4.5 2.7 13.3 6.2 18.7 4.9-1.7-5.3.4-25.4 5.2-31.6m-38.5-13.1c-6.9 11.2-9.2 23.1-5 34.3-5.4 0-9.5-.5-14.9-.5-1.5-11.2-4.6-17 0-28.9 7.3-14.8 16.3-31.1 33.5-27" class="cls-5"/><path d="M206.5 84.1c-1 3.2-2.8 6.2-4.5 9.5 0 0 0 4.2-2.2 8.5-2.5 6.1-8.6 8.7-14.2 11-8.9 2.9-12.5.2-21-10.9m35.5-16.3c-.4-2.2-2.1-2.5-3.3-1.6m-17-4.2c-1.2-2.1-3.7-1.8-4.3-.6" class="cls-5"/><path d="M195.6 90.3c-.8 3.1 1.6 3.7 2.4.6s-1.6-3.7-2.4-.6Zm-20.1-5c-1 3.5 2 4.3 2.9.8 1-3.5-2-4.3-2.9-.8Zm12.8 9.4c-.2 1.1.5 1.5 1.5 1.6-.2.8-1.3 3.2-2.7 3.3m2.8 5c-5.3.7-15.7-4.8-16.4-6 1.9 7.2 10.9 11.4 16 6.1m-30.9 2.8c-16.3 2.8-22.1 48.1-27.2 63.2-2.3 12-3.5 9.6 5.4 9.5m45.7-51.2c.2-1.7.2-3.4.2-4.6m-1.5 7.3c3.7 3.1 10.8 10.1 15.5 12.3 7.9 3.7 21.5 7.3 15 17.6m-47.6-48c5.8 5.2 13.6 11.7 19.5 16.8" class="cls-5"/><path d="M174 144.8c10.3 5.9 25.6 19.2 37.8 16.4m-38.5-16c.2 0 0 0 0 0Zm-22.5-13.5c7.5 6.5 15 9.6 22.4 13.4m10.2-31.4c6.4 5.9 13 18.9 18.5 27.9" class="cls-5"/><path d="M136.8 180.3c5.7-2.6 32.8-24.7 43.7-31.4m-6.2-26.7c2 .8 5.8-1 5.7-8.1m-15-6.4c.2 5.4 2.7 9.1 4.5 10.6m14.1 12.1c-5.2 2.8-8.3 10-10.2 14.8m17.3-5.8c3.5-.6 6.4-2 11.2 2.2 3.3 2.9 2.5 3.1 3 6.1m-15.4 19.5c-1 2.6-.3 10.9-.1 12 .5 2.5-2.5 15.2-2.7 16m-55.9-14.5c-1.4 7.9-1.2 15.7 6.5 19.8 6.3 3.2 18.1 7 24.9.5m42.1-27.6c-1.7 7-4.5 12.4-4.3 19.2m5.5-27.6v.2m-.1-3.1v.3" class="cls-5"/><path d="M190.8 162.7c-2.4 5.3-3.2 10.3-7.1 14.9-.6-9-7.1-16.1-12.4-22m-10.1 45.9c6.5-3.9 19-18.8 22.6-23.9" class="cls-5"/><path d="M185 195.2c-2.1 1.9-5.6 9.1-5.2 12m18.1-7.8c-8 1.7-11.7-6.1-12.8-4.2m-6 14c10.6 2 30.1 9.6 42.9 9.9" class="cls-1"/><path d="M196.7 199c5.3 1.2 13 7.7 17 9.8m8.3 11.3c1.2-4.7.8-9.6-7.3-13.7-.9 2.3-2.4 7-2.9 10m-9.3-24.2c1.3.5-1.3 5.6.4 7.2 1.6 1.4 7.9 5.4 11.7 7" class="cls-1"/><path d="M200.6 200.3c-.8-1.6-.6-8 1.9-8.1m19.1 29.5c-11.5-.5-29.8-6.6-42.9-9.7-.5.1 1.1-4.7 1.2-4.9" class="cls-1"/><path d="M222.2 218.9c.3 1.6 0 1.1-.7 2.8m-23.2-22.2c.5-4.3.8-8.4 4.5-7.2" class="cls-1"/><path d="M203.7 167.7c-.5-.2-1-.4-1.1-.8-1.1-2.7 1.2-2.3 2.9-1.9 2.5 1.1 4.4-.9 1.6-1.7m-2.7 7.5c1.1.3 2.4.5 2.9-.3 1.6-2.4-2.2-2.2-3.7-2.8" class="cls-5"/><path d="M208.2 163.5c-1.2-.8-7-3-3.9.8 1.1 1.3 5.9 2.4 2.2 3.7-.7.2-1.9-.2-2.8-.3-3.8-1-2.4 2.8.8 3.1 3.5.6 3.5 2.9-.1 2.5-4.9-.3-4.5-4.2.1-2.5" class="cls-5"/><path d="m492.4 262.8 5.4-20.3c.4-1.5-.5-3.1-2.1-3.5l-5.2-1.4-4.4-1.2c-2.2-.4-4.7-.9-6.9-1.6-.2 0-.4-.1-.6-.2h-.1l-5.8-1.6v-.2l.1-.2-9.1-2.4c0 .1-6.2-1.5-6.2-1.5l-8.4-2.2-9-2.4c-1.6-.4-3.1.5-3.5 2l-5.4 20.3-.6-.2-2.2 8.1.6.2-5.2 19.3c-.4 1.5.5 3.1 2.1 3.5l5.1 1.4 18.6 5-.3 1 9.1 2.4.3-1 16.9 4.5 6 1.6c1.6.4 3.1-.5 3.5-2l5.2-19.3 1 .3 2.2-8.1-1-.3Zm-56.5-6.5c.2 0 0 0 0 0" class="cls-9"/><path d="m486.2 236.4-10.2-2.7c-1.6-.6-2.8-1.3-3-1.7h.2c1.5.2 11.5 2.6 14.3 0 1.8-1.7 3.8-4.9 4.1-7.4.1-.8 0-1.6-.4-2.3 1.6-.7 3.2-1.1 5-1.2 2.5-.1 2.9 1.5 3.1 1.3.9 1.9.7 4.4 0 6.4-.9 2.7-4.3 6.8-8 7.9-.3 0-.7.1-1.1.2-1.1 0-2.5 0-4.1-.4Z" class="cls-19"/><path d="m458.7 286.1 5.9-22.1 18.8 5c-2.1 6.8-4.8 13.9-7.4 20.3l-.4 1.3z" class="cls-9"/><path d="m483.3 269 6.9 1.8-5.2 19.3c-.4 1.5-2 2.5-3.5 2l-6-1.6.4-1.3c2.6-6.4 5.3-13.5 7.4-20.3Zm9.1-6.2-7.1-1.9c.2-1.4.4-2.9.9-4.5 1.3-4.8 2.7-9.6 4-14.3.4-1.3.7-2.6.6-3.9 0-.2 0-.4-.1-.6l5.2 1.4c1.6.4 2.5 2 2.1 3.5l-5.4 20.3Z" style="stroke-width:0;fill:#e2a025"/><path d="m437.8 248.2-6.6-1.8 5.4-20.3c.4-1.5 2-2.5 3.5-2l9 2.4c-3.7 1.2-6.2 5-7.5 8.8-1.4 4.2-1.8 8.6-3.6 12.6 0 0-.2.2-.2.3" class="cls-10"/><path d="m472.9 232.8 3.1.8c.8.3 1.7.6 2.6.9l-5.8-1.5v-.2Zm.9 13.9 3-4.2 4.6 2.2-2.2-9.9c2.2.7 4.7 1.2 6.9 1.6l4.4 1.2c0 .2.1.4.1.6.1 1.3-.2 2.6-.6 3.9-1.3 4.8-2.7 9.6-4 14.3q-.6 2.4-.9 4.5l-18.5-4.9 4.9-18.4 2.2 9.2Z" class="cls-9"/><path d="m476 233.6 10.2 2.7c-2.2-.4-4.7-.9-6.9-1.6s-.6-.2-.6-.2h-.1c-.9-.3-1.8-.6-2.6-.9" class="cls-19"/><path d="m457.7 253.5-19.8-5.3c0-.1.2-.2.2-.3 1.8-4 2.2-8.5 3.6-12.6 1.3-3.8 3.8-7.6 7.5-8.8l8.4 2.2-6.8 7.4 5.1.4.5 5.2 6.1-6.4-4.9 18.2Z" class="cls-9"/><path d="m429.1 254.5 6.7 1.8c-2.1 7.4-3.7 14.8-4.8 22.4l-5.1-1.4c-1.6-.4-2.5-2-2.1-3.5l5.2-19.3Z" class="cls-10"/><path d="m449.6 283.7-18.6-5c1.1-7.6 2.7-15.1 4.8-22.4 0 0 .2 0 0 0l19.6 5.2-5.9 22.1Z" class="cls-9"/><path d="M496.8 219.8c-.2 0-.6-.2-1-.4.3.1.7.2 1 .4m-32.5-6.5c.7.7 1.3 2.1 1.7 3.1 1.1 2.5 2.1 6 1.2 8.7l-2.4 3c-1.3-1.4-2.2-2.9-3.8-4.1-1.2-.9-2.3-1.5-3.4-2.5-.7-.6-2.8-2.3-2.7-3.1 0-.5.8-1.2 1.5-1.8 2.1-1.3 2.4-1.5 5.9-3.7.7-.2 1.3-.1 1.9.4Zm34.8 8.6c-.4-.6-1.4-1.5-1.9-1.9.2 0 .3.2.4.3.7.4 1.2 1 1.5 1.7Zm-19.8 12.8c-.2 0-.4 0-.6-.1h.6Z" class="cls-19"/><path d="m466.7 255.9 4.9-18.4 2.2 9.2 3-4.2 4.6 2.2-2.2-9.9c-.2 0-.4-.1-.6-.2h-.1l-5.8-1.6v-.2l.1-.2-9.1-2.4c0 .1-6.2-1.5-6.2-1.5l-6.8 7.5 5.1.4.5 5.2 6.1-6.4-4.9 18.2-21-5.6c-1.7 2.2-1.9 5.3-2 8.1l20.9 5.6-5.9 22.1-.3 1 9.1 2.4.3-1 5.9-22.1 20 5.3c.4-1.1.7-2.3 1-3.4.5-1.7.7-3.3.9-4.8l-19.8-5.3Zm-7.7-27.6c1.5.4 3 .7 4.5 1 0-.1.1-.3.1-.4-1.1-1.1-2.5-1.5-3.9-2.1-1.7-.7-3.2-1.6-4.9-2.2-5.2-1.9-3-5 0-6.9.6-.4 1.2-.7 1.6-1 2.1-1.3 2.4-1.5 5.9-3.7.3-.2.6-.3.9-.5-1.3-2.3-9.5-4.1-12.2-3.6-4.1.8-7.4 4.4-8.1 8.3-.9 5.1.1 6.3 4.5 7.5 3.9 1 7.5 2.6 11.5 3.7Z" class="cls-20"/><path d="M435.9 256.3c.1-2.8.3-6 2-8.1l-6.6-1.8-.6-.2-2.2 8.1.6.2 6.7 1.8Z" style="stroke-width:0;fill:#00a1e0"/><path d="M435.8 256.3q-.15 0 0 0m63.3-34.4c-.4-.6-1.4-1.5-1.9-1.9h-.2c-.2 0-.6-.2-1-.4-2-.8-5.6-2.4-6.9-2.5-2.7-.2-3.9 3.8-5.1 5.7-1 1.6-2.4 3.1-3.8 4.2-.5.4-1.2.9-1.8 1.2-.7.3-2.5 1.7-2.5 1.7 2.7 1 6.6-2 8.7-3.5 2.2-1.6 4.4-3.1 6.8-4.1 1.6-.7 3.2-1.1 5-1.2 2.5-.1 2.9 1.5 3.1 1.3 0 0 0-.2-.2-.4Zm-26.1 10 .1-.1 2.4-2.3 1.4-1.4-8.5-2.8-3.4 3.1-1.3 1.2-.1.1 8.9 2.7z" class="cls-20"/><path d="m492.4 262.8-7.1-1.9c-.2 1.5-.4 3-.9 4.8-.3 1.1-.6 2.2-1 3.4l6.9 1.8 1 .3 2.2-8.1-1-.3Z" class="cls-19"/><path d="m486.2 236.4 4.4 1.2 5.2 1.4c1.6.4 2.5 2 2.1 3.5l-5.4 20.3m-19.6-30 3.1.8m-44.8 12.8 5.4-20.3c.4-1.5 2-2.5 3.5-2l9 2.4 8.4 2.2m-7.9 55-18.6-5-5.1-1.4c-1.6-.4-2.5-2-2.1-3.5l5.2-19.3m61.2 16.4-5.2 19.3c-.4 1.5-2 2.5-3.5 2l-6-1.6-16.9-4.5" class="cls-6"/><path d="m464.6 264-5.9 22.1-.3 1.1-9.1-2.4.3-1.1 5.9-22.1m16.2-24.1-5 18.4m-2.8-25.6v-.1l9.1 2.4-.1.2-.1.2m-15.1 20.5 4.8-18.2" class="cls-6"/><path d="m492.4 262.8.9.2-2.1 8.1-1-.2-6.9-1.9-18.7-5-9.1-2.4-19.6-5.3h-.1l-6.7-1.8-.6-.1 2.2-8.1.5.1 6.6 1.8 19.9 5.3 9 2.4 18.6 5zm-13.1-28 2.2 9.9-4.6-2.3-3.1 4.3-2.1-9.2-1.3-5.1 2.4.6 5.8 1.5" class="cls-6"/><path d="M499.3 222.3c.9 1.9.7 4.4 0 6.4-.9 2.7-4.3 6.8-8 7.9-.3 0-.7.1-1.1.2-1.1 0-2.5 0-4.1-.4-2.2-.4-4.7-.9-6.9-1.6-.2 0-.4-.1-.6-.2h-.1c-.9-.3-1.8-.6-2.6-.9-1.6-.6-2.8-1.3-3-1.7m24.3-12c.2 0 .3.2.4.3.7.4 1.2 1 1.5 1.7m-3.3-2.6c.3.1.7.2 1 .4" class="cls-6"/><path d="M473.1 231.8c1.5.3 11.5 2.7 14.3.1 1.8-1.7 3.8-4.9 4.1-7.4.1-.8 0-1.6-.4-2.3" class="cls-6"/><path d="M499.3 222.3s0-.2-.2-.4c-.4-.6-1.4-1.5-1.9-1.9l-.3-.2c-.2 0-.6-.2-1-.4-2-.8-5.6-2.4-6.9-2.5-2.7-.2-3.9 3.8-5.1 5.7-1 1.6-2.4 3.1-3.8 4.2-.5.4-1.2.9-1.8 1.2-.7.3-2.5 1.7-2.5 1.7 2.7 1 6.6-2 8.7-3.5 2.2-1.6 4.4-3.1 6.8-4.1 1.6-.7 3.2-1.1 5-1.2 2.5-.1 2.9 1.5 3.1 1.3m-26.4 9.7-.5.5-8.9-2.7.1-.1 1.3-1.2 3.4-3.1 8.5 2.8-1.4 1.4-2.4 2.3zm-16.6-15.2c-.8.6-1.5 1.3-1.5 1.8 0 .8 2 2.6 2.7 3.1 1.1 1 2.2 1.6 3.4 2.5 1.7 1.2 2.5 2.6 3.8 4.1l2.4-3c.9-2.7-.1-6.2-1.2-8.7-.4-.9-.9-2.3-1.7-3.1-.6-.6-1.2-.6-1.9-.4-.5.1-1 .4-1.5.6-1.2.5-1.5.8-2.6 1.7-.4.3-1.1.8-1.8 1.4" class="cls-6"/><path d="M462.4 212.9c.3-.2.6-.3.9-.5-1.3-2.3-9.5-4.1-12.2-3.6-4.1.8-7.4 4.4-8.1 8.3-.9 5.1.1 6.3 4.5 7.5 3.9 1 7.5 2.6 11.5 3.7 1.5.4 3 .7 4.5 1 0-.1.1-.3.1-.4-1.1-1.1-2.5-1.5-3.9-2.1-1.7-.7-3.2-1.6-4.9-2.2-5.2-1.9-3-5 0-6.9.6-.4 1.2-.7 1.6-1 2.1-1.3 2.4-1.5 5.9-3.7Zm-4.8 15.8-6.8 7.5 5.1.3.6 5.2 6-6.4 4-4.2v-.1l-2.6-.7-6.2-1.7z" class="cls-6"/></svg>')}`;
export default image;