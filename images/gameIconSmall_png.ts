/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;