/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Africa" width="164.1" height="244" viewBox="0 0 164.1 244"><defs><style>.cls-1,.cls-2{fill:none;stroke:#010101}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-5,.cls-6,.cls-9{stroke-width:0}.cls-5{fill:#b7884a}.cls-6{fill:#73533f}.cls-9{fill:#010101}</style></defs><path d="M133 79.8c11.1-12.4 8.6-26.6 7.8-36.9-1-4.9-4.2-11.2-7.9-14.4-5.7-5.1-31.5-6.2-37.1-1-7.6 6.2-9 15.4-6.6 25.5-3.5 6.7 4.5 24.5 8.9 28.6 7.1 8.7 14.7 17.1 34.8-1.8Zm-26.5 21c-5.8 2.2-10.6 4.3-14.4 6 .9-19 4.3-12.1-7.2-30.4-7.8-17.2-6.8-39.3 3.2-55.2 33.3-43.8 77.4.5 66.8 40-5.9 18.2-12.7 20.7-5.7 39.6 7.1 15.4 7.1 29.7-1.7 56-3.3 5.4-9.6 3.8-11.7-1.8-12.4-15.6-4.3-53.2-29.2-54.2Z" style="fill:#34312d;stroke-width:0"/><path d="M74.9 211.7c2.7 13.7 5 25.7 5.3 29.1-23.7 3.3-32.1 5.6-63-.6 11.7-19.7 13.9-49.7 17.6-75.5 9 3.1 11.2-4.4 1.7-4.8 6 1.6 11.3-4 3.5-5.1 1.1 0 2.1 0 2.7-.7 3.5-3.8.6-4.8-2.8-5.5 6.8-2.1 5.5-5.2-.9-5.1v-.8c3.1 0 30.2-2.6 46.1-5.9 7.3 11.8 30.7 52.1 34.8 59 4 6.6 11 16 24.3 19.2.1 29.9-18.9 29.7-41.8 27.8-14.1-1.3-22.6-16.6-27.5-31.1" class="cls-5"/><path d="M141.9 166.3c.1 1.1.2 2.1.4 3.2-12.5 3-25.3.8-38.1-.7-1.8-3.1-3.6-6.2-5.4-9.2 14.3 2.1 28.8 2.4 43.2 1.2-.1 2.1-.3 3.1 0 5.5Z" style="stroke-width:0;fill:#454139"/><path d="M140.9 42.9c.8 10.2 3.3 24.4-7.8 36.9-20.1 18.8-27.7 10.4-34.8 1.7-4.4-4-12.4-21.9-8.9-28.6-2.4-10.1-1-19.2 6.6-25.5 5.6-5.2 31.4-4 37.1 1 3.7 3.2 6.8 9.6 7.9 14.4Zm-8.4 1.8c-5.6-7.4-15.4-.6-11.7.3 1.8-1 8.7-1.6 11.7-.3m-4.3 7.1c0-5.5-4.5-5.5-4.5 0s4.5 5.5 4.5 0M120.6 76c2.1-1.7 2.1-.7 4.4-5.1-1.2 1.5-13.4 5.3-19.8 2.7 2.8 6.1 10.3 6.4 15.4 2.4m-16-31.3c1.3.1.5-1.6-1.6-2.9-1.5-.9-3.6-.5-4.7-.1-4.9 3.1-5.7 4.2.8 2.3 3.3-.8 4.4.6 5.5.7m-3.3 7.1c0-4.8-3.7-4.8-3.7 0s3.7 4.8 3.7 0" class="cls-6"/><path d="M128 41.6c1.9.5 4.7 2.8 4.5 3.1-3.1-1.4-10-.7-11.7.3-1.5.2-.9-1.6 1.4-3 1.7-1 4.4-.7 5.8-.4m-2.1 6c2.9-.1 2.9 8.6 0 8.4-2.9.1-2.9-8.5 0-8.4" class="cls-9"/><path d="M125 70.8c-4.1 8.3-15.5 11.1-19.8 2.7 6.4 2.6 18.6-1.2 19.8-2.7" style="stroke-width:0;fill:#fff"/><path d="M103 41.8c2.1 1.3 2.9 3 1.6 2.9-1.1 0-2.2-1.4-5.5-.7-1.8.4-4.7 1.1-4.8.9.8-1.7 5.7-5.2 8.7-3.2Zm-3.5 6.3c2.4-.1 2.4 7.4 0 7.3-2.4.1-2.4-7.4 0-7.3" class="cls-9"/><path d="M142.3 169.5c-12.5 3-25.3.8-38.1-.7 8 13.7 15.5 26.5 15.8 26.9 4.2 9 19.3 21.7 34.3 20.4.2-1.9-9.1-25.6-11.9-46.6Zm-.6-8.7h.3v-.5c-10-2.6-14.6-27-16-36.4-3.8-22.3-14.7-28.2-33.8-17.1-.2-1.1-.2-2.3-.1-3.5-7.9 5.4-14.7 7-22.9 8.8 1.3.3 2.7.8 4.2 1.3-8.4 2.5-18.9 5.5-25.6 7-4.4.9-10.3 1.7-12.7 6.3-1.9 3.9-.3 14.5 3.7 15.9 3.4 0 30.2-2.5 46.4-5.9 3.8 6.2 8.7 14.5 13.6 22.9 14.2 2.1 28.6 2.5 42.9 1.2" style="stroke-width:0;fill:#fcb316"/><path d="M69.1 112.1c1.3.3 2.7.8 4.2 1.3-8.4 2.5-18.9 5.5-25.6 7 6.3-7.3 12.1-10.6 21.4-8.3" class="cls-5"/><path d="M42.8 154c3.5-3.8.6-4.8-2.8-5.5 10.7-3.8.1-5.9-4.9-4.9l2.2.3c-2-.2-4.4 0-3.2 2.7.5 1.1 3.3 1.4 5.9 1.9-3.8.7-10.3.2-5.2 4.7 1 .6 6.3 2.4 8 .8m-12 8.5c.4.7 2 1.5 4 2.1 3.5 1 7.9 1.2 7.9-1.5 0-2.6-3.2-2.8-6.2-3.3-3.8-.4-7.8-.9-5.7 2.7" class="cls-6"/><path d="M31.3 157c.6 3.1 8.6 3.5 10.6 2.6 4.3-3.1 1.5-4.2-1.8-4.9-3.9-.2-9.9-3-8.8 2.3" class="cls-6"/><path d="M106.6 100.8c2.7-1 5.5-2 8.6-3m10.8 26.1c-24.2 11.4-69 18.4-87.2 18.7-4-1.4-5.6-12-3.7-15.9 2.4-4.6 8.3-5.4 12.7-6.3 19.6-4.4 39.5-10.9 58.9-19.6m35.3 59.5c-1.6 17.7 12.7 54.7 12.2 55.9-3.7 0-7-.4-10-1.1M34.7 164.8c-3.6 25.8-5.9 55.7-17.5 75.3" class="cls-2"/><path d="M17.2 240.1c30.9 6.2 39.3 3.9 63 .6-1.9-13.9-13.5-67.1-13.1-78.2m6.4-49c-10.4-4.5-19.3-1.7-26.3 7.4" class="cls-2"/><path d="M144.1 215.4c.1 29.8-19.1 29.1-41.7 27.4-14.1-1.3-22.6-16.6-27.5-31.1M92 103.3c-8 5.4-14.9 7-23.2 8.9M144.2 215c-13.2-3.2-20.2-12.7-24.3-19.2m-35-59.4c7.4 11.9 30.8 52.2 35 59.3m-80-47.2c-2.6-.5-5.4-.8-5.9-1.9-1.2-2.7 1.1-2.9 3.2-2.7" class="cls-2"/><path d="M35.1 143.6c5-1 15.6 1.1 4.9 4.9-3.8.7-10.3.2-5.2 4.7 1.8 1.6 14.3 1.2 7.1 6.4-2.1 1.8-14.3-2.9-11 2.9.4.7 2 1.5 4 2.1 9 3.1 11.2-4.4 1.7-4.8-2.5-.4-4.9-.8-5.3-2.8-1.1-5.3 4.9-2.5 8.8-2.3 1.1 0 2.1 0 2.7-.7 3.5-3.8.6-4.8-2.8-5.5m-2.7-4.6-2.2-.3" class="cls-2"/><path d="M88.2 43.5c0 3.3.1 5.1 1 9.4 0 0-2 6.6.5 13.3 9.1 19.1 17.6 37.3 43.2 13.5M88.3 42v1.6" class="cls-1"/><path d="M141.5 52.9c.1 3.8.4 19.1-8.9 27.3m8.9-27.3c.8-8.8-2-18.3-8.5-24.4-14.3-7.7-45.3-8.1-44.8 15.1" class="cls-1"/><path d="M92.1 106.8c.9-19.1 4.2-12.1-7.2-30.4-7.8-17.2-6.8-39.2 3.2-55.2m.1 0C105.7-2.5 123.8.9 138.5 10c18.5 15.3 23.7 41.6 11.3 63.9-12.4 28.9 17.4 33.3-2.2 82.8" class="cls-1"/><path d="M101.3 51.8c0 4.8-3.7 4.8-3.7 0s3.7-4.8 3.7 0m26.9 0c0 5.5-4.5 5.5-4.5 0s4.5-5.5 4.5 0M106 59.3c-4.7 9.9 8.9 8.5 10.9 7.2m-11.7 7.1c6.4 2.6 18.6-1.2 19.8-2.7-4.1 8.3-15.5 11.1-19.8 2.7m-6.9-31.9c-1.4.5-4.2 3.1-4 3.3 2.6-.3 7.7-2 10.3-.3 1.3.1.5-1.6-1.6-2.9-1.5-.9-3.6-.5-4.7-.1m29.7-.1c1.9.5 4.7 2.8 4.5 3.1-3.1-1.4-10-.7-11.7.3-1.5.2-.9-1.6 1.4-3 1.7-1 4.4-.7 5.8-.4" class="cls-1"/><path d="M105.8 100.9h.8c17.5-.2 19 21.1 21.4 34.2 2.3 7.2 9.1 34.7 19.6 21.8m-5.3 12.6c-12.5 3-25.3.8-38.1-.7" class="cls-2"/><path d="M98.7 159.6c14.2 2.1 28.6 2.5 42.9 1.2m-54.1-24.4c.6 2.6 1 4.2 1.6 6.8" class="cls-2"/></svg>')}`;
export default image;