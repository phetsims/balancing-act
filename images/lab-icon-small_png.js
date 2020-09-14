/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';

const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;