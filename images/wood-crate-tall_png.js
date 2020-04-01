/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
