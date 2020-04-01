/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
