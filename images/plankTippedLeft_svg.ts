/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="a" width="220" height="86" viewBox="0 0 220 86"><defs><linearGradient id="b" x1="110" x2="110" y1="0" y2="78" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#50b3d2"/><stop offset="1" stop-color="#cbebfb"/></linearGradient><style>.g,.h{stroke:#000;stroke-miterlimit:10}.h{stroke-width:.5px}.g,.h{fill:none}</style></defs><path d="M0 0h220v78H0z" style="stroke-width:0;fill:url(#b)"/><path d="M0 78h220v8H0z" style="stroke-width:0;fill:#8cc353"/><path d="M131.7 78h-6.3l-16.8-35.1-17 35.1h-5.8L106 36.5h5.2z" style="fill:#f5ea14;stroke:#000;stroke-miterlimit:10;stroke-width:.5px"/><path d="M8.4 40.3h203.2v3.4H8.4z" style="stroke:#000;stroke-miterlimit:10;stroke-width:.5px;fill:#f3ca7f" transform="rotate(-19.7 109.898 41.924)"/><path d="m119.4 36.8 1.2 3.2" class="h"/><path d="m130.1 33 1.2 3.2" class="g"/><path d="m140.9 29.2 1.1 3.2" class="h"/><path d="m151.6 25.3 1.1 3.2" class="g"/><path d="m162.3 21.5 1.1 3.2" class="h"/><path d="m173 17.7 1.1 3.2" class="g"/><path d="m183.7 13.9 1.1 3.1" class="h"/><path d="m194.4 10 1.2 3.2" class="g"/><path d="m205.1 6.2 1.2 3.2M13.7 74.6l1.2 3.2" class="h"/><path d="m24.5 70.8 1.1 3.2" class="g"/><path d="m35.2 66.9 1.1 3.2" class="h"/><path d="m45.9 63.1 1.1 3.2" class="g"/><path d="m56.6 59.3 1.1 3.2" class="h"/><path d="m67.3 55.4 1.1 3.2" class="g"/><path d="m78 51.6 1.1 3.2" class="h"/><path d="m88.7 47.8 1.2 3.2" class="g"/><path d="m99.4 44 1.2 3.2" class="h"/><path d="M107.6 38.7h4.2v5h-4.2z" style="stroke:#000;stroke-miterlimit:10;stroke-width:.5px;fill:#c7c7c7" transform="rotate(-19.7 109.422 41.248)"/><path d="M108.7 36c1.5 0 2.8 1.1 2.8 2.5s-1.2 2.5-2.8 2.5-2.8-1.1-2.8-2.5 1.2-2.5 2.8-2.5Z" style="stroke:#000;stroke-miterlimit:10;stroke-width:.5px;fill:#dbdbdb"/><path d="M108.7 38c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6" style="stroke-width:0"/></svg>')}`;
export default image;