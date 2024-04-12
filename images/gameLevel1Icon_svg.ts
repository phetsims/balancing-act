/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="257" height="167" viewBox="0 0 257 167"><defs><linearGradient id="linear-gradient" x1="128.5" x2="128.5" y1="0" y2="167" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#50b4d2"/><stop offset="1" stop-color="#ccecfc"/></linearGradient><style>.cls-3,.cls-4{stroke-width:0}.cls-8{stroke:#010101}.cls-3{fill:#bbbdbf}.cls-4{fill:#a4a4a5}.cls-8{fill:none;stroke-width:.3px}</style></defs><path d="M0 0h257v167H0z" style="fill:url(#linear-gradient);stroke-width:0"/><path d="M170.2 165.2h-11.5l-30.6-64-31.1 64H86.3l37-75.7h9.5z" style="stroke-miterlimit:10;stroke:#010101;fill:#f6eb16"/><path d="M128.3 88.5c2.8 0 5.1 2.1 5.1 4.6s-2.3 4.6-5.1 4.6-5.1-2.1-5.1-4.6 2.3-4.6 5.1-4.6Z" style="stroke-miterlimit:10;stroke:#010101;fill:#b4b4b4"/><path d="M6.7 97.9h243.2v6.2H6.7z" style="fill:#e5c29e;stroke-miterlimit:10;stroke:#010101" transform="rotate(-5 128.692 100.85)"/><path d="m105.2 74-48.3 4.1.4 4.7v.7l2.2-.2v.5l1.2 13.9-2.1.2.4 4.2v1.2c.1 0 22.4-1.9 22.4-1.9l25.1-2.1 3-.3v-1.4c-.1 0-.5-4-.5-4l-2.1.2-.6-6.8-.3-3.1-.4-4.5 2.1-.2-.4-4.3v-1.2l-2.2.2ZM66.1 97.3 65 84.1v-1.2c-.1 0 14.9-1.3 14.9-1.3L81.1 96l-3.3.3zv.1Zm20.4-1.8-1.2-14.4 15-1.3.5 5.7.2 2.5.5 6.3-15 1.3v.2-.2Z" class="cls-3"/><path d="M105.1 75c-9.6.4-39.9 3.4-46.5 4.2-.3.9-1.1 2.7-1.4 3.6l-.4-4.7 48.3-4.1z" style="stroke-width:0;fill:#cfd1d2"/><path d="m100.3 79.8-2-1.1c-4.1.4-11 .9-15.1 1.3l1.3 15.1c.5.2 1.3.5 1.9.7v-.2l15.1-1.3-.5-6.3-.2-2.5zm-41.6-.6c6.5-.8 36.8-3.8 46.5-4.2-.2 1.2-1 2.4-1.8 3.2-.4.4 1.3 14.3 1.2 14.5-.6 2.3 1.7 3.2 1.9 5.2-15.8 1.8-31.7 3.2-47.5 4.2l-.4-4.2 2.1-.2-1.2-13.9v-.5l-2.1.2v-.7c.3-.9 1-2.8 1.3-3.6M66 97.4c0-.1 11.7-1.1 11.7-1.1L81 96l-1.2-14.4v-.2c.1 0-1.7-1-1.7-1-4.1.4-11 .9-15.1 1.3l1.3 15.1c.4.2 1.2.4 1.7.6" class="cls-3"/><path d="m86.5 95.5-1.2-14.4 15-1.3-2-1.2c-4.1.4-11 .9-15.1 1.3L84.5 95c.5.2 1.3.5 1.9.7v-.2Z" class="cls-4"/><path d="M105.2 74v1c-.2 1.2-1 2.4-1.8 3.2-.4.4 1.3 14.3 1.2 14.5-.6 2.3 1.7 3.2 1.9 5.2-15.8 1.8-31.7 3.2-47.5 4.2v1.2c.1 0 22.4-1.9 22.4-1.9l25.1-2.1 3-.3v-1.4c-.1 0-.5-4-.5-4l-2.1.2-.6-6.8-.3-3.1-.4-4.5 2.1-.2-.4-4.3v-1.2l-2.2.2ZM66.1 97.3 65 84.1v-1.2c-.1 0 14.9-1.3 14.9-1.3v-.2c.1 0-1.7-1-1.7-1-4.1.4-11 .9-15.1 1.3 0 .6 1.3 15.1 1.3 15.1.4.2 1.2.4 1.7.6Z" class="cls-4"/><path d="m58.9 102.1-.3-4.2 2.1-.2-1.2-13.9-.1-.5-2.1.2v-.7l-.4-4.7 48.3-4.1 2.1-.2.1 1.1.4 4.3-2.1.2.4 4.5.2 3.1.6 6.8 2.1-.2.3 4 .2 1.4-3.1.3-25.1 2.1-22.3 1.9z" class="cls-8"/><path d="m66.1 97.3 11.7-1 3.3-.3-1.3-14.4-15 1.3.1 1.2zm20.4-1.8 15-1.3-.5-6.2-.3-2.5-.4-5.7-15 1.3z" class="cls-8"/></svg>')}`;
export default image;