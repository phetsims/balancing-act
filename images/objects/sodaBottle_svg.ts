/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" width="28.6" height="80.8" viewBox="0 0 28.6 80.8"><defs><style>.b{font-family:ComicSansMS-Bold, \'Comic Sans MS\';font-size:15.7px;font-weight:700;stroke:#231f20;}.b,.c,.d,.e,.f,.g,.h,.i,.j{stroke-width:.8px;}.b,.d{fill:#008ed3;}.c{fill:#f89a1c;}.c,.d,.e,.f,.g,.h,.j{stroke:#000;}.e{fill:#fff100;}.f,.i{fill:#fff;}.g{fill:#8bc53f;}.h{fill:#838080;}.i{opacity:.6;stroke:#fff;}.j{fill:none;}.k{fill:#967348;}.k,.l{stroke-width:0px;}.l{fill:#a3ce58;}</style></defs><path class="k" d="m27.3,26.2c.8,5.3.8,15,.7,33.8,0,4-.3,6.5-.6,8.1-.9,3.8-25.5,3.7-26.4-.2-1.2-12.6-.5-38.5.3-42.1C3.7,17.7,12.4,14.3,10.9,6.9h-1.7c0,0,0-.7,0-.7h10.2v.6h-1.5c-1.9,8.2,7.5,11.3,9.5,19.4Z"/><path class="j" d="m28,60c0,4-.3,6.5-.6,8.1-.9,3.8-25.5,3.7-26.4-.2-1.2-12.6-.5-38.5.3-42.1C3.7,17.7,12.4,14.3,10.9,6.9h-1.7c0,0,0-.7,0-.7h10.2v.6h-1.5c-1.9,8.2,7.5,11.3,9.5,19.4.8,5.3.8,15,.7,33.8Z"/><path class="g" d="m18,6.2h-7.1V.7c-.4-.4,7.5-.4,7.1,0v5.5Z"/><path class="h" d="m14.5,66.8c4.9,0,13.2-.5,13.2-.5-.6,10.9-2.2,14.2-4.9,14.2s-.9-2.6-3.6-2.6-2,2.5-4.7,2.5-1.7-2.7-4.4-2.7-1.2,2.7-4.4,2.7-5.1-3.9-5.1-14.1c0,0,8.9.5,13.8.5Z"/><path class="l" d="m27.1,25.7c1.1,1.4,1.6,33.6.9,35.4-2.4.9-24.2.7-27.4,0-.2-2.5-.3-31.9.7-35.4,2.2-1,23.9-.8,25.8,0Z"/><path class="j" d="m28,61.1c-2.4.9-24.2.7-27.4,0-.2-2.5-.3-31.9.7-35.4,2.2-1,23.9-.8,25.8,0,1.1,1.4,1.6,33.6.9,35.4Z"/><path class="e" d="m.7,32.3c5.7-1.4,8.4,2.2,12.1,4.3,7,4.1,14.6,5.6,15.4,5.8,0,1.9,0,3.7,0,5.6-17.9,1.4-15.7-9.5-27.6-14.1v-1.5Z"/><path class="c" d="m25,33.4c5,6.9-15.3,21.3-20.2,14.3-5-6.9,15.3-21.3,20.2-14.3Z"/><text class="b" transform="translate(14.8 45) scale(1.1 1)"><tspan x="0" y="0">!</tspan></text><polygon class="d" points="10.8 46.9 9.5 44.4 6.7 44.1 8.6 42.1 8.1 39.3 10.6 40.5 13.1 39.1 12.7 41.9 14.8 43.8 12 44.3 10.8 46.9"/><path class="f" d="m10.3,12.2c.8-2.6.6-5.4.6-5.4h-1.7c0,0,0-.7,0-.7h10.1v.6h-1.5c0,0-.3,2.9.3,5.5"/><path class="i" d="m12.7,16.2c.1.7-.9,1-2.2,2.6-2.8,3.4-.8,4.8-4.8,2.7-.5-.7,4.4-5.8,5.2-6,.3-.5,1.5.6,1.9.7Z"/></svg>')}`;
export default image;