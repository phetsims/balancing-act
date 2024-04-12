/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="a" width="49.3" height="50.8" viewBox="0 0 49.3 50.8"><defs><clipPath id="b"><path d="M46.4 50.4H2.9c-.7 0-1.2-.6-1.2-1.3V23.9c0-.7.6-1.3 1.2-1.3h43.5c.7 0 1.2.6 1.2 1.3v25.2c0 .7-.6 1.3-1.2 1.3" style="fill:none;stroke-width:0"/></clipPath><style>.e,.g{stroke-width:0}.k,.l{stroke:#000;stroke-width:.8px}.k{fill:#652d90}.l{fill:#5b57a4}.e{fill:#f9d45a}.g{fill:#afab34}</style></defs><g style="clip-path:url(#b)"><path d="M.6 11.6h51v41H.6z" style="stroke-width:0;fill:#f4f0da"/><path d="m22.31 24.435 9.192 9.192-9.192 9.193-9.193-9.193z" class="g"/><path d="m44.961 24.486 9.192 9.193-9.192 9.192-9.192-9.192zm-45.303-.102 9.193 9.192-9.193 9.192-9.192-9.192z" class="e"/><path d="m22.346 47.398 9.193 9.193-9.193 9.192-9.192-9.192z" class="g"/><path d="m44.998 47.45 9.192 9.192-9.192 9.192-9.193-9.192zm-45.403-.103 9.192 9.192-9.192 9.193-9.192-9.193z" class="e"/><path d="m22.273 1.371 9.193 9.193-9.193 9.192-9.192-9.192z" class="g"/><path d="m45.024 1.423 9.193 9.192-9.193 9.193-9.192-9.193zM-.378 1.42l9.192 9.192-9.192 9.193-9.193-9.193z" class="e"/><path d="m33.615 36.41 9.192 9.193-9.192 9.192-9.193-9.192zm22.056-.043 9.192 9.192-9.192 9.193-9.192-9.193zm-45.02-.02 9.193 9.192-9.193 9.193-9.192-9.193z" style="stroke-width:0;fill:#ee8131"/><path d="m33.585 12.44 9.193 9.192-9.193 9.193-9.192-9.193zm22.057-.044 9.192 9.193-9.192 9.192-9.193-9.192zm-45.02-.02 9.192 9.193-9.192 9.192-9.193-9.192z" style="stroke-width:0;fill:#ad788f"/></g><path d="M46.4 50.4H2.9c-.7 0-1.2-.6-1.2-1.3V23.9c0-.7.6-1.3 1.2-1.3h43.5c.7 0 1.2.6 1.2 1.3v25.2c0 .7-.6 1.3-1.2 1.3Z" style="fill:none;stroke:#000;stroke-width:.8px"/><rect width="48.5" height="9.1" x=".4" y="14.5" rx="1.4" ry="1.4" style="fill:#fff;stroke:#000;stroke-width:.8px"/><path d="M21.5 14.3h6.8v36h-6.8z" class="l"/><path d="M1.3 29.2h47.1v6.1H1.3zm37.5-18c1-1.5 1.8-4.2 1.5-5.9-.1-.9-.6-1.5-1.2-2-.7-.6-1.5-.4-2.3-.7 1.1-.2 2.1-.9 3.1-1.3 1.3-.4 2.5-.6 3.8-.1 2.2.8 2.9 3.5 2.8 5.6 0 2.1-1.8 5.6-4.2 7-2.3 1.4-13.6 1.3-13.8 0 0 0 8.6 0 10.2-2.6Z" class="l"/><path d="M30.1 11.9c2.1.2 4.3-2.6 5.4-4C37.6 5.3 39.7 3 42.8 2c1.7-.6 2.3.5 2.4.3 0-.2-1.7-1.2-2.1-1.3-.9 0-5-.8-6.1-.6-1.9.4-2 3.4-2.5 5-.4 1.3-1.1 2.6-1.9 3.7-.3.4-.7.9-1 1.2-.4.4-1.5 1.7-1.5 1.7Zm-1.8 2.5-6.7-.2 2.5-4 6.6.3z" class="k"/><path d="M23.3 10.3c.1-2.1-1.2-4.3-2.5-5.9-.5-.6-1.1-1.5-1.8-1.8-.9-.5-1.7.2-2.4.8s-1.3 1.2-1.9 2c-.4.6-1.5 2-1.4 2.6 0 .6 1.9 1.4 2.5 1.7 1 .5 1.9.7 2.8 1.1 1.4.5 2.3 1.4 3.4 2.1l1.1-2.6Z" class="l"/><path d="M18.2 2.1C16.8.7 10.7 1 9 1.9 6.3 3.3 4.7 6.4 4.9 9.3c.3 3.7 1.2 4.4 4.5 4.4 2.9 0 5.8.4 8.7.4 1.1 0 2.2 0 3.4-.2v-.3c-1-.6-2-.6-3.1-.7-1.3-.2-2.5-.5-3.9-.6-4-.4-3-3-1.3-4.8 2.4-2.5 1.9-2 5-5.2Z" class="k"/></svg>')}`;
export default image;