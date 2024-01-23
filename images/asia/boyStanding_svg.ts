/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Asia" width="125.7" height="299" viewBox="0 0 125.7 299"><defs><style>.cls-1{fill:none;stroke:#010101;stroke-linecap:round;stroke-linejoin:round}.cls-6{stroke-width:0;fill:#cdaea3}</style></defs><path d="M63.9 89.2c.8 15 .3 27.1 3.2 41.2-3.7 2.9-6.9 5.9-11.6 9.2-3.5-4.8-3.5-3.8-8.4-10.4 3.7-16.4 6.7-24.3 8.5-40.5 5.5-1 3.6-1.6 8.3.3Z" style="stroke-width:0;fill:#d53056"/><path d="M61.2 189.5c0 4-5 35.9-5 39.4-11.7 4.5-23.5.9-33.3-2.7 1.9-21.4 8.4-44.8 9.9-66.8.2.2 35.8 8.2 52.2-.4-.9 2.3.7 3.9 2.2 4.1-1.4 1.8 1.2 3.2 2.4 3.2 2.1 11.7 10 56.3 10 56.8-6.2 3.4-18.9 6.3-27.9 5.6-1.9-3.8-6.2-25.8-10.4-39.2Z" style="stroke-width:0;fill:#d53057"/><path d="M89.5 166.4c0 .4.1.8.2 1.3-.2-.3-.3-.8-.2-1.3" style="stroke-width:0;fill:#dbbfb3"/><path d="M65.5 40.9c2.5 0 2.5 7.2 0 7.1-2.5 0-2.5-7.2 0-7.1m-21.9.2c2 0 2 6.3 0 6.2-2 0-2-6.3 0-6.2" style="stroke-width:0;fill:#010101"/><path d="M115.7 108.8c-4.8-4.3-17.8-20.7-24.8-24.9-1-.4-14.2-4.9-14.7-5.1-.6-1.7-1.7-3.8-3.5-3.9 0 2 .2 3.5.3 5.4.3 3.3-12.5 7.1-12.5 7.1-1.8-.1-9.7-.9-8.3-10.6-.3-.2-.6-.4-1-.6-1.2.1-2.2 1.2-3.1 2.7-1.8.9-13.2 6.3-15.3 8.6-4.5 4.7-14.7 21.8-19.4 29.3 2.5 7.5 9.2 10.9 16.5 12.9 1.1-2 3.8-5.9 4.3-7.2 0 10.2 0 19.7-.8 29.3 16.6 3.4 34.7 3.6 50.7 0 0-2 1.4-3.1 3.3-3.8-.8-7.5-1.7-15.8-.6-23.7.4-2.3 0-13.6 1.2-13.3 5.3 5.9 12.7 13.6 15.5 16.7 6.7-2.3 12-11.2 12.2-18.9m-60.2 30.9c-3.5-4.8-3.5-3.8-8.4-10.4 3.7-16.4 6.7-24.3 8.5-40.5 5.5-1 3.6-1.6 8.3.3.7 15 .3 27.2 3.1 41.3-3.7 2.9-6.9 5.9-11.6 9.2Zm23 98.7h-.3c4.1 16.2 8.2 28.4 9.6 44.3.9-1.5 1.8-2.3 2.8-2.9-1.8-10.6 6.1-12.5 10.5-11.3-1.4-10.5-2.4-24-2.7-33.9-6.1 3.4-12.9 4.6-19.8 3.9ZM56.5 68c6.4.2 11.5-5.5 10.5-5.2-4.9 1.4-13.6 2.7-18.2.7 1.5 3.5 4.1 4.5 7.8 4.5ZM27 236.5c-.6 12.6-.3 21.5-2.6 32.4 6.9-.3 10.9 5 9.4 11.2h-1.2c1.7.8 2.5 2.1 3.4 4 .6-6.8 7.6-31.6 11.6-45-8.6 3.6-20.5-2.4-20.5-2.6Z" style="stroke-width:0;fill:#fff"/><path d="M89.2 36.6c-1.3-.9-3.1-.2-3.8 1.4-3.7 8.2-6.9-19.9-18.7-17.9-16.6 2.5-33.6-5-32.6 17.1-6.5-.8-4.3 17.6 1.1 15.4 2.7 11.4 8.6 17.9 16.9 24-1.4 9.6 6.4 10.5 8.3 10.6 0 0 12.8-3.7 12.5-7.1-.3-3.1-.4-5.5-.4-8.8C76.2 68.1 83 61.4 84.7 52c6.1.3 8.9-12 4.5-15.5ZM43.6 47.3c-2 0-2-6.3 0-6.2 2 0 2 6.3 0 6.2m13 20.7c-3.7 0-6.3-1.1-7.8-4.4 4.6 1.9 13.3.6 18.2-.8 1-.3-4.1 5.4-10.5 5.2Zm9-20.1c-2.5 0-2.5-7.2 0-7.1 2.5 0 2.5 7.2 0 7.1m32 176.3c-4.5 1.9-15.1 4.5-22.3 4.7.8 2 1.8 5.6 2.9 9.6 7.1.5 13.9-.4 20.2-3.9-.2-4.3-.4-7.9-.7-10.3Zm24.3-102c-1.5-2.7-3.8-4.2-7.3-7.8-1.3 3.9-2.9 7.2-5 8.9-3.8 3.7-3.4 7.8-6.2 13.1-6.5 9.9-7.2 9.8-16.1 11.6-2.3.7-3.8 2.5-3.2 4.9-2.2 2.2-4.1 5 .7 6.1-.9 2.3.7 3.9 2.2 4.1-1.4 1.8 1.2 3.2 2.4 3.2 1 7.4 16.9-6.1 13.6-11.8 4.9-9.4 23.3-21.7 18.8-32.4ZM27.3 227.7c0 2.3-.2 5.5-.3 8.8 0 .2 11.9 6.2 20.5 2.6 1.5-5.1 2.5-8.5 2.6-8.6-9 1.6-16.4-.6-22.7-2.8Z" class="cls-6"/><path d="M88.5 36.3C93.8 14.8 79.8 4.4 61 3c-23.7-.9-30.6 13.4-28.5 34.5.6-.2 1.2-.3 1.6-.2-1.1-22.1 16-14.6 32.6-17.1 11.8-2.1 15 26.1 18.7 17.9.6-1.4 1.9-2.1 3.1-1.8m30.5 251c-1.8-5.7-10.5-7.2-14.5-10.7-.6-.9.5-4.2 0-5.2-3.8-6.4-16.4-3.8-14 8.4-4.5 1.9-5.5 13.8-3.5 17.3 1.5 1.5 5.7 1.1 7.9 1.1 7.5-.7 16.6 1.8 23.3-1.6 1.1-1.2 1.2-7.8.8-9.3M84.2 152.9c0-.4-.1-.7-.1-1-15.9 3.5-34.1 3.4-50.7 0-.2 2.4-.4 4.9-.7 7.6.2.2 35.8 8.2 52.2-.4-4.8-1.2-2.9-3.9-.7-6.1ZM32.5 280.2h1.2c3.5-12.7-18.1-16.6-15.2-1.7-4.4 1.1-12.6 4.2-14.5 8-.8 1.5-1.5 10.8 0 11.5.5.2 3.7.9 4.2 1 5.6.3 25.5-.3 27.1-1.3 2.9-3.4 2-15.3-2.9-17.4Z" style="fill:#383938;stroke-width:0"/><path d="M33.1 144.2c-4.1-2.1-6.7-7.8-8.7-12h.6c.9-1.1 1.9-2.8 2.4-3.4-4.8-1.6-8.8-3.6-11.6-7.6-15 18.8 11.9 22.6 14 42.8 1.1 3.2.5 2.6 2.3 3 .9-8.4 1.6-14.9 1.9-22.8h-.8Z" class="cls-6"/><path d="M60.1 87.3c.3.1 12.8-3.7 12.7-7.1m-20.7-3.5c-1.5 9.5 6.4 10.5 8 10.6M48 78.9c-1.8.9-13.2 6.3-15.3 8.6-4.5 4.7-14.7 21.8-19.4 29.3 2.5 7.5 9.2 10.9 16.5 12.9m18.4-50.9h-.1m61.5 44.6c-2.8 2.6-3.5 3.1-6.2 4.3-3.7-4.1-16.1-16.8-20.9-23.1m-6.4-25.8c.5.1 13.7 4.7 14.7 5.1 7 4.2 20.1 20.7 24.8 24.9 0 4.3-3.2 12.2-6 14.5m-75.4-.8c0 13 0 24.4-1.4 36.9.2.2 35.8 8.2 52.2-.4" class="cls-1"/><path d="M34.4 102.2c-.2 7.1-.2 13.3-.3 20.3m53.3-11c-.5 9.2-1.9 26.2 0 36.6m-71.8-26.8c-14.9 18.9 12 22.6 14 42.7 1.1 3.3.5 2.6 2.4 3m-4.7-38.1c-.6.5-1.5 2.3-2.4 3.3m9.3-9.8c-.5 1.4-3.2 5.2-4.4 7.3m-9.3-2.4c4.8 4.6 6.9 14 12.5 16.9m81.6-29.8c3.5 3.6 5.8 5 7.3 7.8 4.4 10.7-13.9 23-18.8 32.4m-7.7-8.3c10.4-8.7 8.5-16.6 14.8-23.5" class="cls-1"/><path d="M86.6 150.5c-1.9 2.3-8.4 7-1.7 8.6-.9 2.3.7 3.9 2.2 4.1-1.4 1.8 1.2 3.2 2.4 3.2.7 7.4 16.9-5.8 13.6-11.8" class="cls-1"/><path d="M95.4 146.3c-2.1.7-5.5.8-8.1 1.8h0c-2.3.7-3.8 2.5-3.2 4.9M51.3 76.1c-1.3.1-2.3 1.2-3.3 2.8h0c-2.8 4.8-4.4 14.4-5.6 15.4 4.2-3.6 13.1-5.4 17.5-6.4 4.5.9 11.7 4.9 16.2 7.1-.9-1.7 3.5-17-3.1-20.1" class="cls-1"/><path d="M63.9 89.2c.8 15 .3 27.1 3.2 41.2-3.7 2.9-6.9 5.9-11.6 9.2-3.5-4.8-3.5-3.8-8.4-10.4 3.8-16.3 6.5-24 8.6-40.1m28.8 62.7c-16.1 3.6-34.4 3.5-51.1 0m-.7 7.7c-1.4 21.9-7.9 45.4-9.9 66.8 9.7 3.6 21.6 7.1 33.3 2.7 0-3.5 5-35.4 5-39.4" class="cls-1"/><path d="M58.2 180.7c4.5 11.4 11.7 42.9 12.9 47.6 8.4 2.1 22.3-2 28.4-5.1-.1-.8-7.9-44.8-10-56.8M50 172.6c2.3 2 7 6.9 8.2 8.1m-30.9 47c-.1 5.3-.7 18.9-.8 22.4M50 230.5c-3.9 12.7-13.4 45.4-14.1 53.6" class="cls-1"/><path d="M75.2 228.9c5.2 17.6 10.7 35.9 12.5 53.8m9.9-58.5c1.3 13 .9 30 3.5 43.9m-74.6-18c0 3.5-1.2 15.6-2.2 18.8m74.3-.8c12.1 1.7-.2 8.5 11.2 11.5 8 3.4 11.8 8.7 8.5 17.1-1.3 2.5-29.2 2.4-31.3.5-1.8-1.8-.7-12.3.7-14.4 4.7-6 14.9-6.6 22.1-3.1" class="cls-1"/><path d="M90.5 279.8c-2.2-9.4 5.5-11.8 8.1-11.7m-64.9 12.1c3.5-12.7-18.1-16.6-15.2-1.7 3.6 2 10.1-.3 14 1.7 5 2.1 5.8 14 2.9 17.4-3.4.8-24.8 2.5-31.4.3-1.6-.7-.9-10 0-11.5 2-3.8 10.1-6.9 14.5-8m79.8-43.9c-6.1 3.4-12.9 4.6-19.8 3.9m-31.1.7c-8.6 3.6-20.5-2.4-20.5-2.6m46-156.3c-.3-3.1-.4-5.5-.4-8.8" class="cls-1"/><path d="M34.1 33.3c-1 18 3.1 33.6 18.1 43.4 10.8 6.2 29.3-8.8 32.5-24.5M39.9 35.4c1.2-.9 5.8-1 7-.5m14.1-.2c2.2-1.1 8-.4 8.4.5" class="cls-1"/><path d="M45.1 44.2c0 4-3.2 4-3.1 0 0-4 3.2-4 3.1 0m22.4.2c0 4.6-3.9 4.6-3.8 0 0-4.6 3.9-4.6 3.8 0M49 53c-1.3 3.3 3.9 5.9 8.4 5.6m-9.1 4.6c4.8 2.4 13.6 1 18.7-.4.2 2.8-15 9.6-18.3.8M32.5 37.5C30.4 16.4 37.3 2.1 61 3c18.8 1.4 32.8 11.7 27.5 33.2" class="cls-1"/><path d="M85.3 38.3c2-4.7 6.4-.5 6 3.4 0 3.9-3.1 13.5-8.1 9.5M34.1 37.3c-6.4-.7-4.2 17 .9 15.5" class="cls-1"/><path d="M85.4 38.1c-3.7 8.2-6.9-20-18.7-17.9-5.3.7-25.4.6-27.4 2.2-3.3 2.5-4.7 7.8-5.4 11.8" class="cls-1"/></svg>')}`;
export default image;