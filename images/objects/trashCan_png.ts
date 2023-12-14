/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;