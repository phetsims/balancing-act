/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" width="61.1" height="80.8" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61.1 80.8"><defs><style>.c{fill:none;stroke:#000;stroke-width:.8px;}.d{fill:#f7c2d9;}.d,.e,.f,.g,.h,.i,.j,.k,.l,.m,.n,.o{stroke-width:0px;}.e{fill:#f8e280;}.f{fill:#d2b42a;}.g{fill:#ccaa2c;}.h{fill:#e1e1df;}.i{fill:#c2a12e;}.j{fill:#fbd94b;}.k{fill:#f3d128;}.l{fill:#fff;}.m{fill:#e4be21;}.n{fill:#e4c823;}.o{fill:url(#b);}</style><linearGradient id="b" x1="3.7" y1=".4" x2="31.9" y2=".4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7c1d8"/><stop offset="1" stop-color="#eb008b"/></linearGradient></defs><path class="m" d="m57.3,38.6h0c-1.4.4-3.3.7-5.7,1,0-.4,0-.9.1-1.3,1.2-.3,2.4-1.9,2.4-4.6s0-.7,0-1.1c4.1-.6,6.6-1.2,6.6-1.7h0l-1.1,6.6h0c0,.4-.8.8-2.3,1.2Z"/><path class="g" d="m51.6,39.6c2.4-.3,4.3-.7,5.7-1l-.3,2.8c-2.4.4-5,.8-7.6,1.1,0-1.1.1-2,.1-2.6.8,0,1.5-.2,2.2-.3Z"/><path class="m" d="m56.9,41.4l-4.7,37.8c-.8.5-4,.8-8.3,1h0c2.9-8,4.8-29.5,5.3-37.7,2.6-.3,5.2-.6,7.6-1.1Z"/><path class="f" d="m60.6,30.8c0,.5-2.4,1.1-6.6,1.7,0-.8-.1-1.8-.3-3,4.3.3,6.8.8,6.8,1.3Z"/><path class="l" d="m51.9,36.5c.5-.2.9-.7.9-1.4s-.3-1.1-.7-1.3c-.2-.1-.4-.2-.6-.2-.7,0-1.2.7-1.2,1.5s.6,1.5,1.2,1.5.2,0,.3,0Zm-.2,1.8c-1.4.3-2.9-1-2.9-4.1s0-.6,0-1c2-.2,3.8-.4,5.3-.6,0,.4,0,.8,0,1.1,0,2.8-1.2,4.3-2.4,4.6Z"/><path class="l" d="m53.8,29.6c.1,1.2.2,2.2.3,3-1.5.2-3.3.4-5.3.6,0-1-.2-2.4-.4-3.9,2,.1,3.9.2,5.5.3Z"/><path class="l" d="m53.8,29.6c-1.6-.1-3.4-.2-5.5-.3-1.3-8.5-5.9-23-18.1-28.3.5-.2,1-.3,1.5-.4,16.2,1.5,21,19.9,22.1,29.1Z"/><path class="i" d="m52.1,33.8c.4.2.7.7.7,1.3s-.4,1.2-.9,1.4c0-.9.2-1.8.2-2.7Z"/><path class="i" d="m52.1,33.8c0,.9-.2,1.8-.2,2.7,0,0-.2,0-.3,0-.7,0-1.2-.7-1.2-1.5s.6-1.5,1.2-1.5.4,0,.6.2Z"/><path class="k" d="m49.4,39.9c-5.1.6-11.7,1-19,1s-14.1-.4-19.2-1c-.6,0-1.1-.1-1.6-.2v-.3c-.4-1.9.1-5.5.3-6.5,5.5.6,13,1.1,21.2,1.1s12.8-.3,17.7-.8c0,.4,0,.7,0,1,0,3.1,1.5,4.5,2.9,4.1,0,.4,0,.9-.1,1.3-.7,0-1.4.2-2.2.3Z"/><path class="f" d="m49.4,39.9c0,.6,0,1.4-.1,2.6-12.7,1.5-27.1,1.4-37.7.2-.2-1-.3-1.8-.4-2.4v-.5c5.2.6,11.9,1,19.3,1s13.9-.4,19-1Z"/><path class="f" d="m9.9,32.8c-1.4-.2-2.6-.3-3.7-.5-3.2-.5-5.3-1-5.7-1.4,0,0,0-.1,0-.2,0-.5,3.4-1,8.8-1.4,5.5-.4,13-.6,21.3-.6s12.8.1,17.8.4c.2,1.5.4,2.9.4,3.9-4.9.5-11,.8-17.7.8s-15.6-.5-21.2-1.1Z"/><path class="k" d="m49.3,42.5c-.6,8.2-2.4,29.7-5.3,37.7h0c-7.8.4-19.4.3-27.3-.2-.7-7.3-3.7-29-5.1-37.3,10.7,1.2,25,1.2,37.7-.2Z"/><path class="o" d="m31.9.4c0,0-.1,0-.2,0-.8,0-1.6-.1-2.5-.1.9,0,1.7,0,2.7,0Z"/><path class="d" d="m29.3.4c.9,0,1.7,0,2.5.1-.5.1-1,.3-1.5.4-.4-.2-.9-.4-1.3-.5,0,0,.2,0,.3,0,0,0,0,0,.1,0Z"/><path class="h" d="m28.9.4c.4.2.9.3,1.3.5C14.5,6.3,12.3,29.2,12.3,29.2l-3.1.2h-1.6c0,0,2.6-27.8,21.3-29Z"/><path class="d" d="m29.2.4c0,0-.2,0-.3,0,0,0,0,0,0,0,0,0,.2,0,.3,0Z"/><path class="e" d="m11.6,42.7c1.4,8.3,4.4,30,5.1,37.3-1.4,0-2.7-.2-3.8-.3-.4-5.9-3.6-28.3-5-37.5,1.2.2,2.5.3,3.8.5Z"/><path class="n" d="m11.1,40.3c.1.6.2,1.4.4,2.4-1.3-.2-2.6-.3-3.8-.5-.2-1.2-.4-2.2-.5-2.9.7.1,1.5.2,2.3.3.5,0,1.1.1,1.6.2v.5Z"/><path class="j" d="m7.8,42.2c1.5,9.2,4.6,31.6,5,37.5-1.7-.2-3.1-.3-4-.6h0L3.8,41.5c1.2.3,2.5.5,4,.7Z"/><path class="e" d="m7.3,39.3c-.6-.1-1.2-.2-1.7-.3-.2-2.4.4-5.9.4-5.9v-.7c1.2.2,2.4.3,3.8.5-.2,1.1-.7,4.6-.3,6.5v.3c-.9-.1-1.6-.2-2.3-.3Z"/><path class="n" d="m5.6,39c.5,0,1.1.2,1.7.3.1.7.3,1.7.5,2.9-1.4-.2-2.7-.5-4-.7l-.4-3c.6.2,1.3.3,2.2.5Z"/><path class="j" d="m3.4,38.5c-1.3-.4-2-.7-2-1.1h0l-1.1-6.4c.4.4,2.5.9,5.7,1.4v.7c-.1,0-.7,3.5-.6,5.9-.9-.2-1.6-.3-2.2-.5Z"/><path class="c" d="m53.8,29.6c4.3.3,6.8.8,6.8,1.3s-2.4,1.1-6.6,1.7"/><path class="c" d="m48.8,33.2c-4.9.5-11,.8-17.7.8s-15.6-.5-21.2-1.1c-1.4-.2-2.6-.3-3.7-.5-3.2-.5-5.3-1-5.7-1.4,0,0,0-.1,0-.2,0-.5,3.4-1,8.8-1.4,5.5-.4,13-.6,21.3-.6s12.8.1,17.8.4"/><path class="c" d="m57.3,38.6c-1.4.4-3.3.7-5.7,1-.7,0-1.4.2-2.2.3-5.1.6-11.7,1-19,1s-14.1-.4-19.2-1c-.6,0-1.1-.1-1.6-.2-.8-.1-1.6-.2-2.3-.3-.6-.1-1.2-.2-1.7-.3-.9-.2-1.6-.3-2.2-.5-1.3-.4-2-.7-2-1.1"/><path class="c" d="m59.6,37.4c0,.4-.8.8-2.3,1.2"/><path class="c" d="m52.2,79.1s0,0,0,0c-.8.5-4,.8-8.3,1-7.8.4-19.4.3-27.3-.2-1.4,0-2.7-.2-3.8-.3-1.7-.2-3.1-.3-4-.6"/><polyline class="c" points=".4 30.8 .5 31 1.5 37.4"/><line class="c" x1="60.7" y1="30.8" x2="59.6" y2="37.4"/><polyline class="c" points="8.8 79.1 8.8 79.1 3.8 41.5 3.4 38.5 3.4 38.4"/><polyline class="c" points="52.2 79.1 56.9 41.4 57.3 38.6 57.3 38.6 57.3 38.4"/><path class="c" d="m30.2,1C14.5,6.3,12.3,29.2,12.3,29.2l-3.1.2h-1.6c0,0,2.6-27.8,21.3-29"/><path class="c" d="m29.3.4c.9,0,1.7,0,2.7,0,0,0-.1,0-.2,0"/><path class="c" d="m29.2.4c0,0-.2,0-.3,0,0,0,0,0,0,0,.4.2.9.3,1.3.5,12.2,5.3,16.8,19.8,18.1,28.3.2,1.5.4,2.9.4,3.9,0,.4,0,.7,0,1,0,3.1,1.5,4.5,2.9,4.1,1.2-.3,2.4-1.9,2.4-4.6s0-.7,0-1.1c0-.8-.1-1.8-.3-3-1.1-9.2-5.9-27.6-22.1-29.1-.8,0-1.6-.1-2.5-.1"/><path class="c" d="m52.1,33.8c.4.2.7.7.7,1.3s-.4,1.2-.9,1.4c0,0-.2,0-.3,0-.7,0-1.2-.7-1.2-1.5s.6-1.5,1.2-1.5.4,0,.6.2Z"/></svg>')}`;
export default image;