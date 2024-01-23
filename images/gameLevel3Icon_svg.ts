/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" width="257" height="167" viewBox="0 0 257 167"><defs><linearGradient id="linear-gradient" x1="128.5" x2="128.5" y1="0" y2="167" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#50b4d2"/><stop offset="1" stop-color="#ccecfc"/></linearGradient><linearGradient id="linear-gradient-2" x1="26.7" x2="38.5" y1="63.2" y2="83.6" gradientTransform="rotate(9 28.771 73.167)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bbbdbf"/><stop offset=".2" stop-color="#a8a9ab"/><stop offset=".5" stop-color="#787879"/><stop offset=".9" stop-color="#2c292a"/><stop offset="1" stop-color="#231f20"/></linearGradient><linearGradient id="linear-gradient-3" x1="179.5" x2="232.3" y1="76.5" y2="76.5" gradientTransform="rotate(9.8 118.546 53.288)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#231f20"/><stop offset=".2" stop-color="#9c9ea1"/><stop offset=".3" stop-color="#797a7d"/><stop offset=".4" stop-color="#545557"/><stop offset=".5" stop-color="#353637"/><stop offset=".6" stop-color="#1e1e1f"/><stop offset=".7" stop-color="#0d0d0d"/><stop offset=".9" stop-color="#030303"/><stop offset="1"/></linearGradient><linearGradient xlink:href="#linear-gradient-3" id="linear-gradient-4" x1="179" x2="232.2" y1="33.7" y2="33.7"/><linearGradient xlink:href="#linear-gradient-3" id="linear-gradient-5" x1="180.6" x2="230.5" y1="23.1" y2="23.1"/><linearGradient xlink:href="#linear-gradient-3" id="linear-gradient-6" x1="180.7" x2="230.3" y1="88.2" y2="88.2"/><linearGradient xlink:href="#linear-gradient-3" id="linear-gradient-7" x1="180.7" x2="230.3" y1="88.2" y2="88.2"/><linearGradient xlink:href="#linear-gradient-3" id="linear-gradient-8" x1="180.6" x2="230.5" y1="23" y2="23"/><linearGradient xlink:href="#linear-gradient-3" id="linear-gradient-9" x1="179" x2="230.9" y1="33.7" y2="33.7"/><linearGradient xlink:href="#linear-gradient-3" id="linear-gradient-10" x1="179" x2="231.7" y1="76.5" y2="76.5"/><style>.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-21,.cls-22,.cls-23,.cls-25,.cls-26{stroke-width:0}.cls-28,.cls-30{fill:none}.cls-28{stroke-width:.3px;stroke:#231f20}.cls-30{stroke:#010101;stroke-width:.4px}.cls-11{fill:#5d5d5d}.cls-12{fill:#77502a}.cls-13{fill:#717272}.cls-14{fill:#4e4d4e}.cls-15{fill:#599843}.cls-16{fill:#171717}.cls-17{fill:#ac8768}.cls-18{fill:#a77c58}.cls-19{fill:#d97931}.cls-21{fill:#b99572}.cls-22{fill:#9e754c}.cls-23{fill:#8d6639}.cls-25{fill:#30302f}.cls-26{fill:#9a6f44}</style></defs><path d="M0 0h257v167H0z" style="fill:url(#linear-gradient);stroke-width:0"/><path d="M170.4 164.9h-11.5l-30.6-64-31.1 64H86.6l36.9-75.7h9.6z" style="stroke:#010101;stroke-miterlimit:10;fill:#f6eb16"/><path d="M128.5 88.2c2.8 0 5.1 2.1 5.1 4.6s-2.3 4.6-5.1 4.6-5.1-2.1-5.1-4.6 2.3-4.6 5.1-4.6Z" style="stroke:#010101;stroke-miterlimit:10;fill:#b4b4b4"/><path d="M125.6-20.4h6.2v243.2h-6.2z" style="stroke:#010101;fill:#e5c29e;stroke-miterlimit:10" transform="rotate(-80 128.772 101.148)"/><path d="M24 79.2c-3.2-1.4-6.9-1.7-6-8.5.8-6.2 8.7-7 13.7-6.9 5.3 0 9.9 2.1 13.5 6.3 2.2 2.6 6.1 11.6-2.6 12.1 0 0-14.7-2-18.6-3Z" style="fill:url(#linear-gradient-2);stroke:#000;stroke-width:.3px"/><ellipse cx="79.9" cy="69.6" rx=".5" ry="15.6" style="stroke-width:.3px;stroke:#231f20;fill:#231f20;stroke-linecap:round" transform="rotate(-80.2 79.959 69.666)"/><path d="m83 69.9-3.2 1.9h-.1l-.3.3h-.1l-.2.2h-.2v-.4l-2.3-2.8-10.5-12.7c.3.8 10.6 19.1 13.1 17.2C81.8 75 96.7 62 97.1 61.5z" class="cls-15"/><path d="M87.8 64.8c4.5-5.2 9.2-11.3 9.4-11.7l-14 14.1c1.4-.9 3-1.7 4.6-2.4m-1.3-8.7c3-9.6 6-20.3 6.2-20.8S84 60 84 60c.8-1.3 1.6-2.6 2.5-3.9M82.8 65c.4-.4.8-.9 1.3-1.3.8-.8 1.6-1.5 2.5-2.3 4.3-7.8 9.1-17.6 9.3-18.2L84.7 61.8zm-.5-9.7c.6-2.1 1.2-4.3 1.8-6.5 1-8.5 1.8-16.2 1.8-16.7l-3.6 22v1.1ZM81 65.4c.1-.4.2-.8.4-1.2.3-1 .7-2.1 1.1-3.3.7-2 1.5-4.1 2.3-6.3 2.3-10.4 4.5-22.2 4.5-22.8S83 57.5 83 57.5l-1.5 6.1-.4 1.8Zm-.7-5.7V64c0-.2 0-.4.1-.6l.9-8.8L83.7 31c-.1.6-2 12.4-3.3 23v5.8Zm-1.3-.4V33.2c0 .6-.8 11.6-1.2 21.7.4 1.5.7 3 1.1 4.5Zm-1.6 7-8.5-17.9c.1.4 2.5 7.7 5 14.1 1.3 1.2 2.5 2.5 3.5 3.8m.4-3.5c.3.6.5 1.1.7 1.7l-.7-3.6-4.3-21.2c0 .5 1.3 11.4 2.7 20.2.5 1 1.1 2 1.5 3Z" class="cls-15"/><path d="M87.8 64.8c-1.6.7-3.2 1.5-4.6 2.4l14-14.1s-5.7 3.9-10.8 8.3c-.8.8-1.7 1.5-2.5 2.3L82.6 65l1.9-3.2 11.2-18.6c-.1.2-4.9 6.3-9.3 12.9-.9 1.3-1.7 2.6-2.5 3.9l8.7-24.7c-.3.6-4.5 10.1-8 19.2-.8 2.2-1.6 4.3-2.3 6.3-.4 1.2-.8 2.3-1.1 3.3-.1.4-.3.8-.4 1.2l.4-1.8 1.5-6.1L89 31.7c-.1.4-2.7 8.4-5.2 17-.6 2.2-1.2 4.4-1.8 6.5v-1.1l3.6-22c0 .4-1.5 6.5-3 13.8.4-8.1.6-15 .6-15l-2.4 23.6-.9 8.8c0 .2 0 .4-.1.6V53.8c-.2-9.8-1-20.3-1.1-20.8v26.1l-1.2-4.5c-1.9-7.5-4.3-14.8-4.4-15.2l4.3 21.2.7 3.6c-.2-.5-.5-1.1-.7-1.7l-1.5-3c-3.1-5.7-7.1-11.2-7.3-11.5l8.5 17.9c-1-1.3-2.2-2.6-3.5-3.8-3.6-3.4-7.6-6.2-7.7-6.3l10.5 12.7 2.3 2.8v.6h.2c0-.1.2-.2.2-.2h.1l.3-.2h.1l3.2-2 14.1-8.4s-4.7 1.2-9.4 3.3Z" style="stroke-width:0;fill:#92c952"/><path d="M78.2 73.6c-1.4-.7-2.4-2.2-3.4-3.7-2-2.9-3.1-4.7-5.1-7.6-.9-1.3-3-4.5-3.6-6.1 3.8 2.3 7.9 6.1 11.1 10" class="cls-28"/><path d="M73.9 62.5c-1.8-4.7-3.6-9-4.8-13.9 3.4 4.6 7 9.7 9.5 15.9" class="cls-28"/><path d="M76.1 59.3c-.4-2.2-2.5-17-2.5-19.3 1.6 3.6 5.7 19.1 5.8 21.4" class="cls-28"/><path d="M77.9 54.4c.1-6.9.7-14.3 1.2-21.2.5 3.9 1.6 25.1 1.2 30.6" class="cls-28"/><path d="M81.9 55.9c.9-5.8 1.3-19.7 1.6-24.9-1.2 6.5-2.3 15.3-3.3 22M80 73.7c1.5-.2 3-1.3 4.5-2.3 2.8-2.1 4.5-3.4 7.3-5.4 1.2-.9 4.3-3.2 5.4-4.5-4.3.9-9.5 3.1-13.8 5.7m4.4-2.5c3.2-3.8 6.4-7.3 9.2-11.5-4.7 3.2-9.9 6.8-14.3 11.8" class="cls-28"/><path d="M86.8 61c1.1-1.9 8-15.2 8.8-17.4-2.7 2.9-11.7 16-12.5 18.2m3.5-6c2.2-6.5 4.2-13.7 6-20.4-1.8 3.5-9.9 23.6-11.4 28.3m.7-7.8c1.3-5.8 5.8-19.1 7.3-24.1-1 6.5-2.9 15.2-4.3 21.8" class="cls-28"/><path d="M82.7 46.9c.9-4.8 2.1-10 3.2-14.7-.4 5.2-1.1 10.2-1.7 15.9" class="cls-28"/><path d="M90.9 71.7c-3.6-.5-8.6-1.2-11-1.6-2.3-.4-7.3-1.4-11-2.2-2.6-.5-4.5-1-4.5-1s.2 19.2 3.6 19.8l2.7.5L81.2 89l4 .7c3.4.6 10.1-17.4 10.1-17.4s-1.8-.2-4.3-.6Z" class="cls-19"/><path d="M95.2 72.3s-6.6 18-10.1 17.4l-4-.7c3.5-.9 8.1-10.2 9.7-17.2v-.2c2.5.3 4.3.6 4.3.6Z" style="stroke-width:0;fill:#b86428"/><path d="M90.9 71.8v.2c-1.6 7-6.2 16.3-9.7 17.2-3.3-.6-7.5-1.3-10.5-1.8-2.2-6.3-2.7-12.6-1.8-19.3 3.7.8 8.7 1.8 11 2.2s7.3 1.1 11 1.6Z" class="cls-19"/><path d="m70.7 87.3-2.7-.5c-3.4-.6-3.6-19.8-3.6-19.8s1.9.4 4.5 1c-.9 6.6-.4 13 1.8 19.3" style="stroke-width:0;fill:#db874e"/><path d="M90.9 71.8c2.5.3 4.3.6 4.3.6s-6.6 18-10.1 17.4l-4-.7c-3.3-.6-7.5-1.3-10.5-1.8l-2.7-.5c-3.4-.6-3.6-19.8-3.6-19.8s1.9.4 4.5 1c3.7.8 8.7 1.8 11 2.2s7.3 1.1 11 1.6Z" style="fill:none;stroke-width:.3px;stroke:#010101"/><path d="m227 93.9-1 2.9h-.2l.9-3h.3Z" style="stroke-width:0;fill:url(#linear-gradient-3)"/><path d="M233.7 51.6v3.1h-.2c0-1.1 0-2.1.1-3.1Z" style="stroke-width:0;fill:url(#linear-gradient-4)"/><path d="M233.5 54.7c-.3 5.8-1 12.7-2.3 20.3s-2.8 13.5-4.4 18.9l-6.1-1.1c1.8-6.8 3.5-14 4.4-19.1.9-5.3 1.6-13 2.2-20.4 3.2.6 5.7 1.1 6.3 1.2Z" class="cls-12"/><path d="m220.6 92.8 6.1 1.1c-.3 1-.6 2-.9 2.9l-6-1c.3-1 .5-2 .8-3m13-41.2c0 1 0 2-.1 3.1-.7-.1-3.1-.6-6.3-1.2 0-1 .1-2.1.2-3.1 3.3.7 5.8 1.1 6.3 1.2Z" class="cls-16"/><path d="m219.8 95.8 6 1c-1 3.2-2 5.9-2.9 8.2l-5.3-.9c.7-2.5 1.5-5.4 2.3-8.4Zm13.9-51.9v7.7c-.5 0-3-.6-6.3-1.2.2-2.8.4-5.4.5-7.8 3 .7 5.2 1.2 5.8 1.4Z" class="cls-12"/><path d="m233.6 40.8.3 3.1h-.2c0-1.1 0-2.1-.1-3.1" style="stroke-width:0;fill:url(#linear-gradient-5)"/><path d="m223 105.1-1.2 2.9h-.1c.4-.9.8-1.9 1.2-2.9z" style="stroke-width:0;fill:url(#linear-gradient-6)"/><path d="m217.6 104.2 5.3.9c-.4 1.1-.8 2-1.2 2.9l-5-.9c.2-.9.5-1.9.8-3Zm15.9-63.4c0 .9 0 2 .1 3.1-.6-.1-2.9-.7-5.8-1.4 0-1.1.1-2.2.2-3.2 3.2.8 5.4 1.4 5.5 1.5" class="cls-16"/><path d="m216.7 107.1 5 .9c-1.6 3.7-2.6 5.8-2.6 5.8l-4-.7s.7-2.3 1.7-5.9Zm16.1-72.7c.2.2.6 2.5.8 6.4-.2 0-2.3-.6-5.5-1.5.2-3.8.3-6.2.3-6.2v-.2c2.7.7 4.2 1.2 4.4 1.5" class="cls-12"/><path d="M225 73.8c-.9 5.1-2.6 12.2-4.4 19.1l-7-1.2c1.6-7.2 3.2-14.7 4.1-19.9.9-5.1 1.8-12.6 2.6-19.6 2.4.5 4.8.9 6.8 1.3-.5 7.3-1.3 15.1-2.2 20.4Z" class="cls-23"/><path d="m213.6 91.6 7 1.2c-.3 1-.5 2-.8 3l-6.8-1.2c.2-1 .4-2 .7-3Z" class="cls-16"/><path d="m213 94.6 6.8 1.2c-.8 3-1.6 5.9-2.3 8.4l-6.5-1.1c.6-2.5 1.2-5.4 1.9-8.4Z" class="cls-23"/><path d="M227.4 50.3c0 1-.1 2-.2 3.1-2-.4-4.4-.9-6.8-1.3.1-1 .2-2 .3-3.1 2.4.5 4.7.9 6.7 1.3" class="cls-25"/><path d="M227.8 42.6c-.1 2.4-.3 5-.5 7.8-2-.4-4.3-.8-6.7-1.3.3-2.8.6-5.5.8-7.9 2.2.5 4.4 1 6.3 1.4Z" class="cls-23"/><path d="m211.1 103 6.5 1.1c-.3 1.1-.6 2.1-.8 3l-6.4-1.1c.2-.9.5-1.9.7-3" class="cls-16"/><path d="m210.4 106 6.4 1.1c-1 3.6-1.7 5.9-1.7 5.9l-6.1-1s.6-2.4 1.4-6" class="cls-23"/><path d="M228 39.4c0 1-.1 2.1-.2 3.2-1.9-.4-4.1-.9-6.3-1.4.1-1.2.2-2.2.3-3.2 2.3.5 4.4 1 6.2 1.5Z" class="cls-25"/><path d="M228.4 32.9v.2s-.2 2.5-.4 6.2c-1.8-.4-3.9-1-6.2-1.5.4-3.8.6-6.3.6-6.3 2.4.5 4.3.9 5.9 1.3Z" class="cls-23"/><path d="M217.7 71.7c-.9 5.2-2.5 12.8-4.1 19.9l-8.4-1.4c1.5-7.3 3-15.1 3.9-20.3s1.9-12.4 2.9-19.3c2.6.5 5.5 1 8.4 1.6-.8 7.1-1.7 14.5-2.6 19.6Z" class="cls-26"/><path d="m205.2 90.2 8.4 1.4c-.2 1-.5 2-.7 3l-8.3-1.4z" class="cls-25"/><path d="m204.6 93.2 8.3 1.4c-.7 3-1.3 5.9-1.9 8.4l-8.1-1.4c.5-2.5 1.1-5.4 1.7-8.5Z" class="cls-26"/><path d="M220.7 49c-.1 1-.2 2-.3 3.1-2.8-.5-5.8-1.1-8.4-1.6.1-1 .3-2.1.4-3.1 2.5.5 5.4 1 8.3 1.6" class="cls-25"/><path d="M221.5 41.1c-.2 2.4-.5 5.1-.8 7.9-2.9-.6-5.8-1.1-8.3-1.6.4-2.9.7-5.6 1.1-8 2.5.5 5.4 1.1 8.1 1.7Z" class="cls-26"/><path d="m202.9 101.6 8.1 1.4c-.2 1.1-.5 2.1-.7 3l-8-1.4q.3-1.35.6-3" class="cls-16"/><path d="m202.3 104.6 8 1.4c-.8 3.6-1.4 5.9-1.4 5.9l-7.9-1.3v-.2s.5-2.3 1.2-5.8Z" class="cls-26"/><path d="M221.9 37.9c-.1 1-.2 2.1-.3 3.2-2.7-.6-5.5-1.2-8.1-1.7.1-1.1.3-2.2.4-3.2 2.8.5 5.5 1.1 8 1.7" class="cls-25"/><path d="M222.5 31.6s-.2 2.5-.6 6.3c-2.5-.6-5.2-1.1-8-1.7.5-3.7.8-6.2.8-6.2q4.5.75 7.8 1.5Z" class="cls-26"/><path d="M209.1 69.9c-.9 5.3-2.4 13-3.9 20.3l-9-1.6c1.1-7.3 2.3-15 3.2-20.3.9-5.1 2.3-12.4 3.6-19.3 1.6.3 3.1.5 4.4.7s2.9.5 4.6.8c-1 6.9-2 14.2-2.9 19.3Z" class="cls-22"/><path d="m196.2 88.6 9 1.6-.6 3-8.9-1.5c.1-1 .3-2 .4-3Z" class="cls-25"/><path d="m195.8 91.7 8.9 1.5c-.6 3-1.2 5.9-1.7 8.5l-8.4-1.4c.4-2.6.8-5.5 1.2-8.5Z" class="cls-22"/><path d="M212 50.5c-1.7-.3-3.3-.6-4.6-.8s-2.8-.5-4.4-.7c.2-1 .4-2.1.6-3.1 1.7.3 3.2.5 4.3.7s2.7.5 4.5.8c-.1 1-.3 2-.4 3.1" class="cls-25"/><path d="M213.5 39.4c-.3 2.4-.7 5.2-1.1 8-1.8-.3-3.3-.6-4.5-.8s-2.6-.4-4.3-.7c.6-2.9 1.1-5.6 1.6-8 1.7.3 3.2.5 4.6.7 1.1.2 2.4.4 3.7.7Z" class="cls-22"/><path d="m194.5 100.2 8.4 1.4q-.3 1.65-.6 3l-8.2-1.4c.1-.9.3-1.9.4-3" class="cls-25"/><path d="m194.1 103.2 8.2 1.4c-.7 3.5-1.2 5.8-1.2 5.8v.2l-7.9-1.4c0-.1.3-2.4.8-6.1Z" class="cls-22"/><path d="M213.9 36.2c-.1 1-.3 2-.4 3.2-1.3-.3-2.6-.5-3.7-.7-1.3-.2-2.9-.5-4.6-.7.2-1.1.4-2.1.6-3.1 1.5.2 2.9.5 4.4.7 1.2.2 2.5.4 3.7.7Z" class="cls-25"/><path d="M214.6 30.1s-.3 2.4-.8 6.2c-1.2-.2-2.5-.5-3.7-.7-1.5-.2-2.9-.5-4.4-.7.7-3.7 1.2-6.1 1.2-6.1 1.3.2 2.6.4 4 .7s2.5.4 3.7.7Z" class="cls-22"/><path d="M193.2 109.2c0 .1-9.1-1.4-9.1-1.4s.3-2.4.7-6.1l9.2 1.6c-.5 3.6-.8 6-.8 6Z" class="cls-18"/><path d="m194.1 103.2-9.2-1.6c.1-.9.3-1.9.4-3l9.3 1.6c-.2 1.1-.3 2.1-.4 3Z" class="cls-14"/><path d="M207 28.7s-.5 2.4-1.2 6.1c-3.1-.5-6.1-.9-8.9-1.2.9-3.6 1.4-6 1.4-6v-.2c2.5.3 5.4.7 8.7 1.3m-12.5 71.5-9.3-1.6c.3-2.6.7-5.5 1.1-8.6l9.4 1.6c-.5 3.1-.9 6-1.2 8.5Z" class="cls-18"/><path d="M205.8 34.9c-.2.9-.4 2-.6 3.1-2.8-.4-6-.9-9-1.2.3-1.1.5-2.1.7-3 2.7.3 5.8.7 8.9 1.2Z" class="cls-14"/><path d="M205.2 38c-.5 2.4-1 5.1-1.6 8-2.7-.4-6-.9-9.2-1.4.6-2.8 1.2-5.5 1.8-7.8 3 .4 6.1.8 9 1.2" class="cls-18"/><path d="m195.8 91.7-9.4-1.6c.1-1 .3-2 .4-3l9.5 1.6c-.1 1-.3 2-.4 3Z" class="cls-14"/><path d="m196.2 88.6-9.5-1.6c1-7.2 2-14.7 2.9-19.9s2.5-12.6 4-19.6c3.1.5 6.4 1 9.3 1.5-1.3 6.9-2.7 14.2-3.6 19.3-.9 5.2-2.1 12.9-3.2 20.3Z" class="cls-18"/><path d="M203.6 45.9c-.2 1-.4 2.1-.6 3.1-2.9-.5-6.2-1-9.3-1.5.2-1 .4-2 .7-3 3.2.5 6.5 1 9.2 1.4" class="cls-14"/><path d="M198.3 27.5v.2l-1.5 6c-2.5-.3-4.8-.6-6.6-.8.6-1.8 1.3-3.8 2-5.9v-.2c1.5.1 3.6.3 6 .6Zm-14.2 80.2-5.9-1c0-.5.2-2.8.5-6.2l6.2 1.1c-.5 3.7-.7 6-.7 6Z" class="cls-17"/><path d="M196.9 33.7c-.2.9-.5 1.9-.7 3-2.5-.3-4.9-.6-6.9-.8.3-.9.6-1.9 1-3 1.8.2 4.1.4 6.6.8m-12 67.9-6.2-1.1c0-.9.1-2 .2-3l6.4 1.1c-.1 1.1-.3 2.1-.4 3" class="cls-13"/><path d="m185.3 98.6-6.4-1.1c.2-2.6.5-5.5.7-8.6l6.8 1.2c-.4 3.1-.8 6-1.1 8.6Zm10.9-61.9c-.5 2.3-1.2 5-1.8 7.8-2.7-.4-5.3-.8-7.4-1.1.7-2.2 1.4-4.7 2.3-7.5 2 .2 4.4.5 6.9.8" class="cls-17"/><path d="M194.4 44.5c-.2 1-.5 2-.7 3-2.8-.4-5.5-.9-7.6-1.2.3-.9.5-1.9.8-2.9 2.1.3 4.7.7 7.4 1.1Zm-8 45.5-6.8-1.2c0-1 .2-2 .3-3l6.9 1.2c-.1 1-.3 2-.4 3" class="cls-13"/><path d="m186.8 87-6.9-1.2c.7-7.4 1.5-15.2 2.4-20.4 1-5.6 1.2-9.7 3.8-19 2.1.3 4.8.8 7.6 1.2-1.6 7-3.1 14.4-4 19.6s-2 12.7-2.9 19.9Z" class="cls-17"/><path d="M192.3 26.9v.2c-.8 2.1-1.4 4.1-2 5.9-2.4-.3-4-.4-4.3-.4 1.5-3.6 2.6-5.5 2.8-5.7.2-.1 1.4-.1 3.5 0m-14.1 79.8-3.1-.5s-.4-2.2-.6-6.3l4.1.7c-.3 3.3-.4 5.6-.5 6.2Z" class="cls-21"/><path d="m178.6 100.5-4.1-.7c0-.9 0-2-.1-3.1l4.4.8c0 1.1-.2 2.1-.2 3" class="cls-11"/><path d="m178.9 97.5-4.4-.8c0-2.5 0-5.4.1-8.7l5 .9c-.3 3.1-.5 6.1-.7 8.6" class="cls-21"/><path d="M190.3 32.9c-.3 1-.7 2-1 3-2.3-.3-3.9-.4-4.5-.5.4-1.1.8-2 1.1-2.9.4 0 2 .2 4.3.4Zm-10.7 56-5-.9c0-1 0-2 .2-3.1l5.1.9c0 1-.2 2-.3 3Z" class="cls-11"/><path d="m179.9 85.8-5.1-.9c.4-5.4 1.1-11.8 2.3-19.1q2.1-11.85 4.5-20.1c.6 0 2.3.4 4.6.7-2.6 9.3-2.8 13.5-3.8 19-.9 5.2-1.7 13-2.4 20.4Zm9.4-49.9c-.9 2.8-1.7 5.3-2.3 7.5-2.4-.4-4.1-.6-4.6-.7.9-2.8 1.7-5.3 2.5-7.4.6 0 2.2.2 4.5.5Z" class="cls-21"/><path d="M186.9 43.4c-.3 1-.6 2-.8 2.9-2.3-.4-4-.6-4.6-.7.3-1 .6-2 .8-2.9.4 0 2.2.3 4.6.7" class="cls-11"/><path d="M174.5 99.8h-.1l-.2-3.1h.2c0 1.2 0 2.2.1 3.1" style="stroke-width:0;fill:url(#linear-gradient-7)"/><path d="M185.9 32.5c-.4.9-.7 1.8-1.1 2.9h-.2l1.2-2.9Z" style="stroke-width:0;fill:url(#linear-gradient-8)"/><path d="M182.2 42.8h.1c-.3.9-.6 1.9-.8 2.9h-.2l1-2.9Z" style="stroke-width:0;fill:url(#linear-gradient-9)"/><path d="M174.5 88h-.1l.1-3.1h.2c0 1.1-.1 2.1-.2 3.1" style="stroke-width:0;fill:url(#linear-gradient-10)"/><path d="M174.4 96.7c0-2.5 0-5.4.1-8.7m47.2 20c-1.6 3.7-2.6 5.8-2.6 5.8l-4-.7-6.1-1-7.9-1.4-7.9-1.4-9.1-1.6-5.9-1-3.1-.5s-.4-2.2-.6-6.3m51.3-3.1c-1 3.2-2 5.9-2.9 8.2m10.6-50.3c-.3 5.8-1 12.7-2.3 20.3s-2.8 13.5-4.4 18.9m6.9-50v7.7m-47.8-19.1c1.5-3.6 2.6-5.5 2.8-5.7.2-.1 1.4-.1 3.5 0q2.25.15 6 .6c2.4.3 5.3.7 8.7 1.3 1.3.2 2.6.4 4 .7s2.5.4 3.7.7q4.5.75 7.8 1.5c2.4.5 4.3 1 5.9 1.3 2.7.7 4.1 1.2 4.4 1.5.2.2.6 2.5.8 6.4m-51.1 2c.9-2.8 1.7-5.3 2.5-7.4m-10.2 49.5c.4-5.4 1.1-11.8 2.3-19.1q2.1-11.85 4.5-20.1" class="cls-30"/><path d="M192.3 27c-.7 2.1-1.4 4.1-2 5.9-.3 1-.7 2-1 3-.9 2.8-1.7 5.3-2.3 7.5-.3 1-.6 2-.8 2.9-2.6 9.3-2.8 13.5-3.8 19-.9 5.2-1.7 13-2.4 20.4 0 1-.2 2-.3 3-.3 3.1-.5 6.1-.7 8.6 0 1.1-.2 2.1-.2 3-.3 3.3-.4 5.6-.5 6.2v.1m20-78.9s-.6 2.4-1.4 6c-.2.9-.5 1.9-.7 3-.5 2.3-1.2 5-1.8 7.8-.2 1-.5 2-.7 3-1.6 7-3.1 14.4-4 19.6s-2 12.7-2.9 19.9c-.1 1-.3 2-.4 3-.4 3.1-.8 6-1.1 8.6-.1 1.1-.3 2.1-.4 3-.5 3.7-.7 6-.7 6M207 28.7s-.5 2.4-1.2 6.1c-.2.9-.4 2-.6 3.1-.5 2.4-1 5.1-1.6 8-.2 1-.4 2.1-.6 3.1-1.3 6.9-2.7 14.2-3.6 19.3-.9 5.2-2.1 12.9-3.2 20.3-.1 1-.3 2-.4 3-.5 3.1-.9 6-1.2 8.5-.2 1.1-.3 2.1-.4 3-.5 3.6-.8 6-.8 6m21.2-79s-.3 2.4-.8 6.2c-.1 1-.3 2-.4 3.2-.3 2.4-.7 5.2-1.1 8-.1 1-.3 2-.4 3.1-1 6.9-2 14.2-2.9 19.3s-2.4 13-3.9 20.3l-.6 3c-.6 3-1.2 5.9-1.7 8.5q-.3 1.65-.6 3c-.7 3.5-1.2 5.8-1.2 5.8m21.5-78.9s-.2 2.5-.6 6.3c-.1 1-.2 2.1-.3 3.2-.2 2.4-.5 5.1-.8 7.9-.1 1-.2 2-.3 3.1-.8 7.1-1.7 14.5-2.6 19.6-.9 5.2-2.5 12.8-4.1 19.9-.2 1-.5 2-.7 3-.7 3-1.3 5.9-1.9 8.4-.2 1.1-.5 2.1-.7 3-.8 3.6-1.4 5.9-1.4 5.9m19.2-78.8s-.1 2.5-.3 6.2c0 1-.1 2.1-.2 3.2-.1 2.4-.3 5-.5 7.8 0 1-.1 2-.2 3.1-.5 7.3-1.3 15.1-2.2 20.4-.9 5.1-2.6 12.2-4.4 19.1-.3 1-.5 2-.8 3-.8 3-1.6 5.9-2.3 8.4-.3 1.1-.6 2.1-.8 3-1 3.6-1.7 5.9-1.7 5.9" class="cls-30"/><path d="M222.9 105.1h.1l-1.1 2.9h-.2l-5-.9-6.3-1.1-8.1-1.4-8.2-1.4-9.2-1.6-6.3-1.1-4.1-.7h-.1l-.2-3.1h.2l4.5.8 6.4 1.1 9.2 1.6 8.4 1.4 8.2 1.4 6.5 1.2zm10.8-61.2h.2l-.3-3.1c-.2 0-2.3-.6-5.5-1.5-1.8-.4-3.9-1-6.2-1.5-2.5-.6-5.2-1.1-8-1.7-1.2-.2-2.5-.5-3.7-.7-1.5-.2-2.9-.5-4.4-.7-3.1-.5-6.1-.9-8.9-1.2-2.5-.3-4.8-.6-6.6-.8-2.4-.3-4-.4-4.3-.4l-1.2 2.9h.2c.6 0 2.2.2 4.5.5 2 .2 4.4.5 6.9.8 3 .4 6.1.8 9 1.2 1.7.3 3.2.5 4.6.7 1.1.2 2.4.4 3.7.7 2.5.5 5.4 1.1 8.1 1.7 2.2.5 4.4 1 6.3 1.4 3 .7 5.2 1.2 5.8 1.4Zm-.2 10.8h.2v-3.1c-.5 0-3-.6-6.3-1.2-2-.4-4.3-.8-6.7-1.3-2.9-.6-5.8-1.1-8.3-1.6-1.8-.3-3.3-.6-4.5-.8s-2.6-.4-4.3-.7c-2.7-.4-6-.9-9.2-1.4-2.7-.4-5.3-.8-7.4-1.1-2.4-.4-4.1-.6-4.6-.7h-.1l-1 2.8h.2c.6.1 2.3.4 4.6.8 2.1.3 4.8.8 7.6 1.2 3.1.5 6.4 1 9.3 1.5 1.6.3 3.1.5 4.4.7s2.9.5 4.6.8c2.6.5 5.5 1 8.4 1.6 2.4.5 4.8.9 6.8 1.3 3.2.6 5.7 1.1 6.3 1.2Zm-6.8 39.2h.3l-1 3-.2-.1-6-1-6.8-1.2-8.4-1.4-8.8-1.5-9.4-1.7-6.8-1.1-5.1-.9h-.1l.1-3.1h.2l5.2.9 6.9 1.2 9.4 1.6 9 1.6 8.4 1.4 7 1.2z" class="cls-30"/></svg>')}`;
export default image;