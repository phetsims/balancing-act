/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="a" width="49" height="50.8" viewBox="0 0 49 50.8"><defs><style>.b{fill:#ec1c24}.b,.c,.d{stroke:#000;stroke-width:.8px}.c{fill:#c9da2a}.d{fill:#c0272d}</style></defs><path d="M1.7 23.4h45.7V50H1.7z" class="c"/><path d="M.4 14.4h48.3v9.1H.4z" class="c"/><path d="M21.4 14.2h6.8v36.2h-6.8z" class="b"/><path d="M1.3 29h46.8v6H1.3z" class="b"/><path d="M38.6 11.2c1-1.5 1.8-4.1 1.5-5.9-.1-.8-.6-1.5-1.2-2-.7-.6-1.5-.4-2.3-.7 1.1-.2 2-.9 3.1-1.3 1.3-.4 2.5-.6 3.8-.1 2.2.8 2.9 3.4 2.8 5.6 0 2.1-1.8 5.5-4.1 7-2.3 1.4-13.5 1.3-13.7 0 0 0 8.6 0 10.2-2.6Z" class="d"/><path d="M30 11.8c2.1.2 4.3-2.6 5.4-4 2.1-2.6 4.1-4.8 7.3-5.9 1.7-.6 2.3.5 2.4.3C45.1 2 43.4 1 43 .9c-.8 0-5-.8-6.1-.6-1.9.4-2 3.4-2.5 4.9-.4 1.3-1.1 2.6-1.9 3.6-.3.4-.7.9-1 1.2-.4.4-1.5 1.7-1.5 1.7Zm-1.8 2.5-6.7-.2 2.5-3.9 6.5.3z" class="b"/><path d="M23.2 10.2c.1-2-1.2-4.3-2.5-5.9-.5-.6-1.1-1.4-1.7-1.8-.9-.5-1.7.2-2.3.8-.7.6-1.3 1.2-1.9 2-.4.5-1.5 1.9-1.4 2.6 0 .6 1.9 1.4 2.4 1.7 1 .5 1.9.7 2.8 1.1 1.4.5 2.3 1.4 3.4 2.1l1.1-2.6Z" class="d"/><path d="M18.1 2.1C16.7.8 10.7 1 8.9 1.9 6.2 3.2 4.6 6.3 4.8 9.2c.3 3.7 1.2 4.4 4.5 4.4 2.9 0 5.7.4 8.7.4 1.1 0 2.2 0 3.3-.2v-.3c-1-.6-2-.6-3.1-.7-1.3-.2-2.5-.5-3.8-.6-4-.4-3-3-1.2-4.8 2.4-2.5 1.9-2 4.9-5.2Z" class="b"/></svg>')}`;
export default image;