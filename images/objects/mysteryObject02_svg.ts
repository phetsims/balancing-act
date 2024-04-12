/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="52.1" height="60.7" viewBox="0 0 52.1 60.7"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:.8px}.cls-2{fill:#f3b51a}.cls-2,.cls-3,.cls-6,.cls-7{stroke-width:0}.cls-3{fill:#f7bc34}.cls-6{fill:#0054a5}.cls-7{fill:#008ed3}</style></defs><path d="M50.9 34.8V18.2c0-1.3-1-2.3-2.3-2.3h-7.8c-1.7.2-3.8.2-5.6.2h-5.3v-.4H3.1c-1.3 0-2.3 1-2.3 2.3v16.6H.3v6.6h.5V57c0 1.3 1 2.3 2.3 2.3h19.4v.8h7.4v-.8h18.7c1.3 0 2.3-1 2.3-2.3V41.2h.8v-6.6h-.8ZM6.4 41.4c.1 0 0 0 0 0" class="cls-2"/><path d="M40.8 15.9h-8.3c-1.4-.2-2.4-.4-2.7-.7 1.2-.2 9.4-.4 11-3 1.1-1.7 1.9-4.5 1.6-6.5 0-.7-.4-1.2-.8-1.7 1.1-.8 2.2-1.5 3.6-1.9 1.9-.6 2.6.6 2.6.4 1.1 1.3 1.4 3.2 1.4 4.9 0 2.3-1.9 6.1-4.5 7.6-.2.1-.5.2-.8.3-.8.3-1.9.4-3.2.6Z" class="cls-6"/><path d="M29.9 59.5V41.4h15.3c-.2 5.6-.9 11.6-1.6 17v1.1H29.8Z" class="cls-2"/><path d="M45.3 41.4H51v15.8c0 1.3-1 2.3-2.3 2.3h-4.9v-1.1c.7-5.4 1.3-11.4 1.6-17Zm5.6-6.6h-5.8c-.1-1.1-.3-2.3-.2-3.6 0-3.9 0-7.8.1-11.8 0-1 0-2.1-.4-3.1 0-.2-.1-.3-.2-.5h4.3c1.3 0 2.3 1 2.3 2.3v16.6Z" style="stroke-width:0;fill:#e2a025"/><path d="M6.3 34.8H.8V18.2c0-1.3 1-2.3 2.3-2.3h7.4c-2.6 1.7-3.7 5.1-4 8.3-.2 3.5.4 7-.2 10.4 0 0 0 .2-.1.3Z" class="cls-3"/><path d="M29.9 15.9h2.5c.7 0 1.4.1 2.2.2h-4.7zm3.5 10.4 1.5-3.9 4 .8-3.7-7.1c1.8 0 3.8 0 5.6-.2h3.6c0 .1.2.3.2.5.4 1 .4 2 .4 3.1 0 3.9 0 7.8-.1 11.8 0 1.3.1 2.5.2 3.6H29.9V19.8l3.5 6.6Z" class="cls-2"/><path d="M50.9 34.8h-5.8c.1 1.2.3 2.4.3 3.8v2.8h6.4v-6.6H51ZM32.4 15.9h8.3c-1.7.2-3.8.2-5.6.2h-.6c-.8 0-1.5 0-2.2-.2Z" class="cls-6"/><path d="M22.5 34.8H6.3s0-.2.1-.3c.5-3.4 0-6.9.2-10.4.2-3.2 1.4-6.6 4-8.3h6.9l-3.7 7.1 4-.8 1.5 3.9 3.3-6.2v14.9Z" class="cls-2"/><path d="M.8 41.4h5.5c0 6 .2 12.1.9 18.1H3.1c-1.3 0-2.3-1-2.3-2.3z" class="cls-3"/><path d="M22.5 59.5H7.3c-.7-6-1-12.1-.9-18.1 0 0 .1 0 0 0h16.1z" class="cls-2"/><path d="M45.5 1.1c-.2 0-.5 0-.9-.1.3 0 .6 0 .9.1M19.4 2.8c.7.4 1.4 1.4 1.9 2 1.4 1.7 2.8 4.2 2.7 6.4L22.7 14c-1.3-.8-2.2-1.8-3.7-2.3-1.1-.4-2.1-.7-3.1-1.2-.6-.3-2.6-1.2-2.7-1.9 0-.4.3-1.1.8-1.7 1.4-1.4 1.5-1.7 3.8-4.1.5-.3 1-.4 1.5 0Zm28.3-.6c-.4-.4-1.4-.9-1.9-1.1.1 0 .3 0 .4.1.6.2 1.1.5 1.5 1M35.2 16h-.5z" class="cls-6"/><path d="M29.9 34.8V19.7l3.5 6.6 1.5-3.9 4 .8-3.7-7.1h-5.3v-.4H17.4l-3.7 7.1 4-.8 1.5 3.9 3.3-6.2v14.9H6.3c-.9 2-.3 4.5.1 6.6h16.1v19h7.4v-19h15.3v-2.8c0-1.4-.1-2.6-.3-3.8H29.7ZM18.3 15.3c1.2 0 2.4-.1 3.7-.2v-.4c-1.1-.6-2.2-.6-3.4-.8-1.4-.2-2.8-.6-4.2-.7-4.3-.4-3.3-3.2-1.4-5.3.4-.4.8-.8 1-1.1 1.4-1.4 1.5-1.6 3.8-4l.6-.6C16.9.7 10.3 1 8.4 1.9c-3 1.5-4.7 4.9-4.5 8 .3 4.1 1.4 4.8 4.9 4.8 3.2 0 6.3.5 9.5.5Z" class="cls-7"/><path d="M6.4 41.4c-.5-2.2-1-4.6-.1-6.6H.4v6.6z" style="stroke-width:0;fill:#00a1e0"/><path d="M6.3 41.4c-.1 0 0 0 0 0M47.7 2.2c-.4-.4-1.4-.9-1.9-1.1h-.2c-.2 0-.5 0-.9-.1C43 .8 39.9.3 38.9.5c-2.1.4-2.2 3.7-2.7 5.4-.5 1.4-1.2 2.8-2.1 4-.3.4-.7 1-1.1 1.3-.5.4-1.6 1.8-1.6 1.8 2.3.2 4.7-2.9 5.9-4.4 1.4-1.7 2.7-3.3 4.4-4.5 1.1-.8 2.2-1.5 3.6-1.9 1.9-.6 2.6.6 2.6.4 0 0 0-.2-.2-.3Zm-17.9 13 .1-.2 1.3-2.2.8-1.4-7.1-.3-1.9 3-.8 1.2-.1.1 7.4.3z" class="cls-7"/><path d="M40.8 15.9h7.8c1.3 0 2.3 1 2.3 2.3v16.6m-21-18.9h2.5M.8 34.8V18.2c0-1.3 1-2.3 2.3-2.3h14.3m5.1 43.6H3.1c-1.3 0-2.3-1-2.3-2.3V41.4m50.1 0v15.8c0 1.3-1 2.3-2.3 2.3H29.9m0-18.1v19h-7.4v-19m7.4-21.7v15.1m-7.4-19v-.1h7.4v.4m-7.4 18.7V19.9m28.4 14.9h.8v6.6H.4v-6.6z" class="cls-1"/><path d="m35.2 16.1 3.7 7.1-4-.8-1.5 3.9-3.5-6.6-2-3.6h2l4.7-.1" class="cls-1"/><path d="M48 2.5c1.1 1.3 1.4 3.2 1.4 4.9 0 2.3-1.9 6.1-4.5 7.6-.2.1-.5.2-.8.3-.8.3-1.9.4-3.2.6-1.7.2-3.8.2-5.6.2h-.6c-.8 0-1.5 0-2.2-.2-1.4-.2-2.4-.4-2.7-.7m16-14.1c.1 0 .3 0 .4.1.6.2 1.1.5 1.5 1m-3-1.2c.3 0 .6 0 .9.1" class="cls-1"/><path d="M29.9 15c1.2 0 9.4-.3 11-2.8 1.1-1.7 1.9-4.5 1.6-6.5 0-.7-.4-1.2-.8-1.7" class="cls-1"/><path d="M48 2.5s0-.1-.2-.3c-.4-.4-1.4-.9-1.9-1.1h-.3c-.2 0-.5-.1-.9-.2C43 .7 39.9.2 38.9.4c-2.1.4-2.2 3.7-2.7 5.4-.5 1.4-1.2 2.8-2.1 4-.3.4-.7 1-1.1 1.3-.5.4-1.6 1.8-1.6 1.8 2.3.2 4.7-2.9 5.9-4.4C38.7 6.8 40 5.2 41.7 4c1.1-.8 2.2-1.5 3.6-1.9 1.9-.6 2.6.6 2.6.4M29.8 15.2l-.3.5-7.4-.3.1-.1.8-1.2 1.9-3 7.1.3-.8 1.4-1.3 2.2zM14 6.9c-.5.6-.9 1.3-.8 1.7 0 .7 2.1 1.6 2.7 1.9 1 .5 2 .8 3.1 1.2 1.5.6 2.5 1.5 3.7 2.3l1.3-2.8c.1-2.2-1.3-4.7-2.7-6.4-.5-.6-1.2-1.6-1.9-2-.5-.3-1.1-.2-1.5 0s-.7.5-1 .8c-.8.6-1 1-1.6 1.8-.2.3-.7.9-1.1 1.5" class="cls-1"/><path d="m17.8 2.8.6-.6C16.9.7 10.3 1 8.4 1.9c-3 1.5-4.7 4.9-4.5 8 .3 4.1 1.4 4.8 4.9 4.8 3.2 0 6.3.5 9.5.5 1.2 0 2.4-.1 3.7-.2v-.4c-1.1-.6-2.2-.6-3.4-.8-1.4-.2-2.8-.6-4.2-.7-4.3-.4-3.3-3.2-1.4-5.3.4-.4.8-.8 1-1.1 1.4-1.4 1.5-1.7 3.8-4.1Zm-.4 13.1-3.7 7 4-.7 1.5 3.8 3.3-6.1 2.1-4 .1-.1h-7.3z" class="cls-1"/></svg>')}`;
export default image;