/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Latin_America" xmlns="http://www.w3.org/2000/svg" width="164.1" height="244" viewBox="0 0 164.1 244"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-2{fill:none;stroke:#010101;}.cls-2{stroke-miterlimit:10;}.cls-3{fill:#764722;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11{stroke-width:0px;}.cls-4{fill:#832268;}.cls-5{fill:#d39572;}.cls-6{fill:#dbc7a9;}.cls-7{fill:#c1495f;}.cls-8{fill:#cf673f;}.cls-9{fill:#fff;}.cls-10{fill:#e9af40;}.cls-11{fill:#010101;}</style></defs><path class="cls-4" d="m79.2,129.8c-4.2-7.3-17.3-13.4-20.4-22.6.4-1.4,6.9-3.6,11.2-5,10.8-4.4,20.3-9.3,31-12.3,10.4-3.5,24.9-9.6,33.3.8h.2c-.4,5.4-1.1,10.7-2,16,2.2-2.8,4.2-5.6,5.9-8.5,10.3,36,25.1,73.8,16.8,111.3-45.2,0-57.9-47.8-76.1-79.8Z"/><path class="cls-5" d="m127.9,70.2c2.1-2.5,4.3-5.4,6.6-8.8-2.5-19-4.7-47.1-27.5-44.9-7.5-.2-14.3,4.2-17.4,10.1-3.4,6.4-3.6,15-4.1,27.2,0,0,0,0,0,0,1.1,8.9,10.3,22,17.1,26.4h0c.7,3.3-.4,6-1.5,9.8,9.3-2.8,21.4-8.8,30.2-1.9-2.7-5-4.6-12.2-3.4-17.8Zm-13-33.7c4-2.2,11.9.2,13.7,2.7-.2.1-5.3-1.4-8-1.4-4.4.1-5.6,1.4-7,1.5-1.7.1-1.1-1.5,1.4-2.9Zm4.5,13.7c-2.8.1-2.8-8.1,0-8,2.7-.1,2.7,8.1,0,8Zm-25-.5c-2.2.1-2.2-7.1,0-7,2.2,0,2.2,7.1,0,7Zm5.2-10.5c-2.7-1.2-9.7-.4-12.1.2,1.5-2.3,8.2-4,11.6-2.3,2.1,1.2,1.8,2.2.5,2.1Zm1.8,28.3c6.1,2.4,17.6-1.3,18.8-2.7-2.7,6.8-14.8,11.5-18.8,2.7Z"/><path class="cls-11" d="m119.5,42.1c2.7-.1,2.7,8.1,0,8-2.8.1-2.8-8.1,0-8Z"/><path class="cls-9" d="m120.2,64.6c-2.7,6.8-14.8,11.5-18.8,2.7,6.1,2.4,17.6-1.3,18.8-2.7Z"/><path class="cls-3" d="m134.5,10.4c-6.3-3.5-11.9-7.4-17.1-8.1-48.7-6.5-44.6,62.8-32.7,93.6,5.5-2.3,11.2-4.3,16.5-6,1.1-3.7,2.2-6.4,1.5-9.7h0c-6.8-4.5-16-17.6-17.1-26.5,0,0,0,0,0,0,.5-12.1.6-20.8,4.1-27.2,3.2-5.9,9.9-10.3,17.4-10.1,22.7-2.2,24.9,25.9,27.5,44.9-2.3,3.4-4.5,6.3-6.6,8.8-1.1,6.9.8,16.1,6.4,20.5h.2c-.4,5.4-1.1,10.7-2,16,12-17.4,20.4-43.2,18.3-63s-11.1-28.1-16.4-33.3Z"/><path class="cls-3" d="m128.6,39.2c-1.8-2.6-9.7-4.9-13.7-2.7-2.4,1.3-3,3-1.4,2.9,4.5-2.2,10.6-1.4,15-.1Z"/><path class="cls-3" d="m91.8,36.7c-7.9,4-2.8,2,2.6,1.7,3.3.1,4.1.7,5.2.7,1.3.1,1.5-.8-.5-2.1-1.5-.9-6.2-.7-7.3-.3Z"/><path class="cls-11" d="m94.4,42.6c2.2,0,2.2,7.1,0,7-2.2.1-2.2-7.1,0-7Z"/><path class="cls-5" d="m44.9,111.7c7.7-1.4,7.2-1.2,14.1-3.3,4.8,8.3,15.7,14.3,20.2,21.3-7.9,1.3-41.6,5.1-43.7,5.2-4.2-1.4-5.9-12.6-3.9-16.7,2.4-4.7,8.7-5.8,13.2-6.6Z"/><path class="cls-7" d="m62.3,205.7v-.3c3.5-2.1,7,2.8,3.9,5.4-1.7,1.4-4.1.8-6.2.2-2.5-1.8-.8-5.9,2.3-5.4Z"/><path class="cls-8" d="m53,205.5c2.2-.6,3.8,2.3,2.3,3.9.4.2.8.5,1.2.7.3,3.6-3.2,3.2-4.9.9-6.3.4-3.3-6,1.4-5.6Z"/><path class="cls-4" d="m54,238c.7-6.4,0-8.8-1.4-12.6-5.6,2.5-25.8,9.3-30.6,5.3h0c-5.3.1-15.5.9-13.7,8.3-3.5,6.6,19.3,3.9,29.5,4.2,7.3-.2,11.2.3,16-.3.6.2.2-5,.2-5h0Z"/><path class="cls-5" d="m53,218.2c-.5,3.2-.4,3.7-.4,7.1-5.6,2.5-25.8,9.3-30.6,5.3h0c8-1.1,14.2-4.5,14.5-13.3,5.9.7,11.5.9,16.5.9Z"/><path class="cls-10" d="m43.9,205.4c0,.1.2.3.2.4,0-.2-.1-.3-.2-.4,4.6-.7,1.3,6.2-2,5.5-6.8-.3-2.7-10.7,2-5.5Z"/><path class="cls-5" d="m39.7,146.9c3.7-3.9.6-5.1-2.9-5.8,11.2-4,.3-6.2-5.1-5.1l2.3.3c-2.1-.2-4.6,0-3.4,2.9.5,1.1,3.5,1.4,6.2,2-4,.7-10.8.2-5.4,5,1,.6,6.7,2.5,8.4.8Z"/><path class="cls-5" d="m27.7,150.1c.4,2,2.8,2.6,5.3,2.9-7.8-1.7-8.4,3.2-1.5,5h0c9.7,3.2,11.7-4.7,1.6-5,6.3,1.8,12.3-4.1,3.9-5.3-4.1-.2-10.4-3.2-9.3,2.4Z"/><path class="cls-7" d="m33.1,203.9c3.5,0,4,4.4,3.4,7-1.6,1-4.1,0-4.6-1.8-.1-.5-.2-1.2-.7-1.4-.7-.2-1.1.6-1.6,1.1-5.6,1.6-3.9-6.9,3.6-5.4v.5Z"/><path class="cls-6" d="m112.6,189c-15.8-16.5-21.3-40.5-33.3-59.2-7.9,1.3-41.6,5.1-43.7,5.2v.9c6.8-.2,8.7,3.1,1.3,5.3,3.5.7,6.6,1.8,2.9,5.8-.6.6-1.6.8-2.8.7,8.3,1.3,2.4,7.1-3.9,5.3,10.1.3,8,8.3-1.6,5-3.3,20.2-4.9,39.1-7.7,57,13.3,3.6,34.5,3.9,45.9,1.9-.7-8.1-1.6-17.3-2.3-26.3,5.5,15.7,20.4,51,35,52.4,28.4,3,42.8,0,43.7-34.2-12.8-2.3-24.7-10-33.5-19.9Zm-59.7,23.3c-.8-1.3-1.8-1.5-3.2-1.3-7.2-4.1,9.5-9.2,5.6-1.6.4.2.8.5,1.2.7.6,2-2.1,3.7-3.6,2.2Zm-12.7-8c1.3-.6,3,0,3.7,1.2,4.6-.7,1.3,6.2-2,5.5-3.6.1-5.2-5.1-1.8-6.7Zm26.1,6.6c-1.7,1.4-4.1.8-6.2.2-2.5-1.8-.8-5.9,2.3-5.4v-.3c3.5-2.1,7,2.8,3.9,5.4Zm-37.6-7.1c1.4-.6,3-.5,4.4-.4v.5c3.5,0,4,4.4,3.4,7-1.6,1-4.1,0-4.6-1.8-.1-.5-.2-1.2-.7-1.4-.7-.2-1.1.6-1.6,1.1-3.7,1.8-4.4-4.1-.9-5Z"/><path class="cls-6" d="m58.9,107.2c.4-1.4,6.9-3.6,11.2-5-12.1-.6-17.7.8-25.2,9.5,7.7-1.4,7.2-1.2,14.1-3.3-.2-.5-.2-.9-.1-1.3Z"/><path class="cls-6" d="m44.1,205.9c0-.2-.1-.3-.2-.4,0,.2.2.3.2.4Z"/><path class="cls-2" d="m80.9,129.4c-8.2,1.7-42.5,5.3-45.3,5.5-4.2-1.4-5.9-12.6-3.9-16.7,6.4-8.8,18.6-5.8,27.4-9.8"/><path class="cls-2" d="m31.3,158.2c-3.2,20.2-4.9,39-7.6,56.8"/><path class="cls-2" d="m23.7,215.1c13.3,3.6,34.5,3.9,45.9,1.9-1.5-17.5-4.3-46.1-4.4-61.2"/><path class="cls-2" d="m70.1,102.2c-12.3-.7-18.1,1-25.7,10"/><path class="cls-2" d="m146.1,208.1c-.8,34.4-14.8,38.1-43.8,35-14.9-1.6-29.8-37.3-35.3-53.2"/><path class="cls-2" d="m36.8,141.2c-2.7-.5-5.7-.8-6.2-2-1.3-2.8,1.2-3.1,3.4-2.9"/><path class="cls-2" d="m32.9,153c-2.5-.4-4.9-.9-5.3-2.9-1.1-5.6,5.2-2.6,9.3-2.4,1.2,0,2.2,0,2.8-.7,3.7-3.9.6-5.1-2.9-5.8"/><path class="cls-2" d="m31.7,136c5.4-1.1,16.3,1.1,5.1,5.1-4,.7-10.8.2-5.5,5,.8.7,3.3,1,5.6,1.5,3.5.8,6.4,1.9,1.9,5.2-2.1,1.9-15-3-11.6,3,.4.8,2.1,1.6,4.2,2.2h0c9.7,3.2,11.7-4.7,1.6-5"/><line class="cls-2" x1="34" y1="136.4" x2="31.7" y2="136"/><path class="cls-1" d="m85.5,53.7c1.1,8.9,10.3,22,17.1,26.4,8.9,7.6,24.5-6.3,31.9-18.8"/><path class="cls-1" d="m96.2,46.1c0,4.5-3.5,4.5-3.5,0,0-4.5,3.5-4.5,3.5,0Z"/><path class="cls-1" d="m121.6,46.1c0,5.2-4.3,5.2-4.3,0,0-5.2,4.3-5.2,4.3,0Z"/><path class="cls-1" d="m101.5,53.6c-.9,3.5-1.3,5.6-.9,5.9,1.8,1.3,5.2,2.7,7.1,1.5"/><path class="cls-1" d="m101.4,67.4c6.1,2.4,17.6-1.3,18.8-2.7-2.7,6.8-14.8,11.5-18.8,2.7Z"/><path class="cls-1" d="m89.6,26.5c3.2-5.9,9.9-10.3,17.4-10.1,32.9-4.2,29.4,68.4,25.6,90.3"/><path class="cls-1" d="m88.6,28.3c.3-.6.6-1.2,1-1.8"/><path class="cls-1" d="m88,29.8c.2-.5.4-1,.6-1.4"/><path class="cls-1" d="m91.8,36.7c-7.9,4-2.8,2,2.6,1.7,3.3.1,4.1.7,5.2.7,1.3.1,1.5-.8-.5-2.1-1.5-.9-6.2-.7-7.3-.3Z"/><path class="cls-1" d="m122.6,35.8c2.1.5,6.2,3.2,6,3.4-4.4-1.3-10.5-2-15,.1-1.7.1-1.1-1.5,1.4-2.9,1.8-1,6.2-1,7.7-.6Z"/><path class="cls-1" d="m132.6,106.7C205.1-5.6,40.9-55.2,84.6,95.9"/><path class="cls-1" d="m89.7,26.3c0,0,0,.1-.1.2-3.4,6.3-3.6,15-4.1,27.2,0,0,0,0,0,0-.3,14.7.6,31.4,1.5,41.2"/><path class="cls-1" d="m103.4,16.7c.1-6.3,5.3-12.1,11.2-14.4"/><path class="cls-1" d="m134.3,90.7c-12.2-13.9-35.1.9-49.7,5.2-4.8,1.9-8.9,4.4-14.5,6.3-4.7,2-12.2,3.1-11.1,6.3,4.9,8.3,15.7,14.3,20.2,21.3,18.1,32,30.9,79.9,76.1,79.8,8.3-37.5-6.6-75.3-16.8-111.3"/><path class="cls-1" d="m127.9,70.1c-1.2,5.6.7,12.8,3.4,17.8"/><path class="cls-2" d="m102.6,80.2c.7,3.2-.4,6-1.5,9.7"/><path class="cls-1" d="m52.6,225.5c0-3.4-.2-3.9.4-7.1"/><path class="cls-1" d="m36.5,217.3c-.5,3.4-.7,4-1.2,6"/><path class="cls-1" d="m52.6,225.5c1.6,3.7,2,6.2,1.4,12.5"/><path class="cls-1" d="m54,238c-11.4-.2-31.1,5.1-45.8,1"/><path class="cls-1" d="m9.3,242.4c9.7,1.8,31.6.9,44.5.6.6.2.2-5,.2-5"/><path class="cls-1" d="m8.3,239c-1,2-.5,2.7,1,3.4"/><path class="cls-1" d="m35.3,223.4c-6,11.9-28.7,2.7-27,15.6"/><path class="cls-1" d="m52.4,225.3c-5.4,2.7-25.8,9.2-30.4,5.3"/><path class="cls-1" d="m68.9,213.5c-14.8,2-29.4,1.6-44.2-2.1"/><path class="cls-1" d="m68.4,203.5c-14.7.5-28.1-.6-42.5-3.2"/></svg>')}`;
export default image;