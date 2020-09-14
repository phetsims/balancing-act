/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';

const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;