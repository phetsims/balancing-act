/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Asia" xmlns="http://www.w3.org/2000/svg" width="154" height="394" viewBox="0 0 154 394"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{fill:none;stroke:#010101;stroke-linecap:round;}.cls-2{stroke-miterlimit:10;}.cls-3{fill:#f2f2f0;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10{stroke-width:0px;}.cls-4{fill:#2e241c;}.cls-5{fill:#cc8e6d;}.cls-6{fill:#e41a55;}.cls-7{fill:#d9a07a;}.cls-8{fill:#f3703c;}.cls-9{fill:#fcb11d;}.cls-10{fill:#010101;}</style></defs><path class="cls-4" d="m97.2,53.6c12.7,11.8-5.7,26.2-9.4,19.1h-1.9c0-1,0-1.9.1-2.8,3.7-5,7-9.6,8.7-16.6.8.5,1.6.6,2.4.3Z"/><path class="cls-7" d="m59.6,158.2c-3.4,0-5.5,0-8.3-1.9.2-1.9,0-4.5-.3-7.6,2.2.9,3.3,1.6,6.1,1.8.9,2.7,1.7,5.2,2.6,7.6Z"/><path class="cls-10" d="m58.4,33.2c2,1.1,2.7,2.6,1.5,2.6-1.1,0-2.9-1.9-6.2-1-1.8.5-4.3,2.4-4.4,2.2.9-1.7,6-5.7,9.1-3.8Z"/><path class="cls-4" d="m96.6,40.8c0-.7,0-1.4,0-2.1-20.8-11.8-24.7-23.1-35.8-20.2-1.1-5.2.2-8,2-13h-.1c2-4.2,7.7-5,12.3-4.2,19.3,1.2,30.8,20.4,26.3,38.4-1.6,0-3.6-.5-4.7,1.1h0Z"/><path class="cls-10" d="m53.7,45.5c0-4.3,3.4-4.3,3.3,0,0,4.3-3.4,4.3-3.3,0Z"/><path class="cls-6" d="m53.1,122.7c14,43.9,33.3,91.2,54.6,125.9,26.2,30.9,20.1-10.5,13.7-26.9h-.2c1.6-10.9-.6-21.7-2.8-34.8-1.2,3.1-11.5,11.3-12.2,5.1-1.2,0-3.9-1.5-2.5-3.4-1.5-.2-3.2-1.9-2.3-4.3-4.9-1.2-3-4.1-.8-6.5-1.3-6.4,7.2-5.3,10.7-6.7,1.2-1.9,2.1-3.5,2.7-4.7-1.7-7.4-6.5-18.6-9.1-29.7-22.4-.7-36.6-31.1-48.3-51.3-3.2-.6-6.2.4-8.9,2.1.9,11.3,2.8,26.5,5.3,35.4Z"/><path class="cls-6" d="m119.2,272.9c-28.4-20.9-40.7-69.2-54.6-101.7-7.2.6-10.1-.3-16.3-2.7-9.3,34.3-11.9,41-3.4,95.2-6.6,35-16,70.2-19.2,108.8,30.5,7.2,72.5,9.8,104,.9-1.5-31-11.8-81.2-10.5-100.6Z"/><path class="cls-8" d="m45.6,88.9c-7.4,6.3-12.8,19-16.1,27.6,5.6,3.6,8.3,5.1,17.5,7.3,1.1,7.7,3.1,17.5,4,24.8,2.2.9,3.3,1.6,6.1,1.8-5.6-17.7-12.9-44-11.4-61.6Z"/><path class="cls-8" d="m126.1,112.9c-5.3-9.5-14.8-23.2-28.1-26-6.1,1.7-5.8,23.2-16,23.3,9.8,9,18.4,14.6,22,14.4,0-1.3,0-2.8-.2-4.4.6,1.2,1.1,2.4,1.7,3.7,5.8-2.9,15.4-7.2,20.7-11Z"/><path class="cls-10" d="m77.2,45.5c0-4.9,4.1-5,4.1,0,0,5-4.1,5-4.1,0Z"/><path class="cls-9" d="m70.4,109c10.7,17.3,21.2,26.4,34.6,27.4-1.1-4.5-.8-7.7-.9-11.9-12.9-2.5-35.1-26.4-45.6-40.5-1,.3-2.4.6-3.5.8l1.8.3c6.3,10.8,7.5,13,13.7,23.9Z"/><path class="cls-9" d="m57,150.5c.9,2.7,1.7,5.2,2.6,7.6-3.4,0-5.5,0-8.3-1.9-.9,4.3-2,8.2-3,12.1,6.2,2.3,9.1,3.2,16.3,2.7,2.9,13.8,62,155,62,80.4h0c.7,17.2-14.8,2.4-18.9-3-14.5-21.6-31.6-63.1-43-92.2-6.9-16.4-16.4-46.6-16.8-69.1-.8.5-1.5,1-2.2,1.6-1.4,17.6,5.8,43.9,11.4,61.6Z"/><path class="cls-9" d="m129.2,373.5c-31.4,9-73.3,6.1-103.6-1-.5,5.8-.8,11.8-1,17.8,8.6,4.8,103.8,5.1,104.6.1.7-4.4.8-10.2.5-17h-.4Z"/><path class="cls-9" d="m28.2,127.2c4.6,2.4,14.2,7.4,20.2,5.5-.5-3.1-1-6.1-1.4-8.8-9.1-2.2-11.8-3.7-17.5-7.3-1.7,4.4-2.8,7.8-3.4,8.7-.4.2.5,1,2.1,1.9Z"/><path class="cls-9" d="m114.1,130.7c5.9-2.2,11-5.6,16.4-9.5-.8-1.5-2.2-4.6-4.3-8.4-5.4,3.9-15,8.2-20.7,11,1,2.2,2.1,4.8,3.2,8.5,2-.5,3.8-1.1,5.4-1.7Z"/><path class="cls-5" d="m96.7,86.7q-4.5-.9-8.9-1.7c-2-4.4-2.1-10.1-1.7-15.1,3.7-5,7-9.6,8.7-16.6,5,2.4,9.4-7.2,8.2-11-.8-2.5-4.7-3.7-6.4-1.4h0c0-.7,0-1.4,0-2.1-20.8-11.8-24.7-23.1-35.8-20.2-3.6.1-19.2,11-14.9,21.5-6.4,2-2.2,12.7,1.3,15.1h.1c2.1,7,7.8,15.1,12.3,20.2,0,0,.4,7.3.4,7.9,0,.3-.7.7-1.6,1,7.2,10,16,18.9,23.6,26,10.2,0,9.9-21.6,16-23.3-.4,0-.8-.2-1.3-.2,0,0,0,0,0,0Zm-22.6-53.5c3.6-2.1,11.2,1.9,12.7,3.6-.1.1-3.7-1.7-6.2-2.2-4.4-.7-6.4,1.2-7.8,1.3-1.6,0-1-1.5,1.4-2.7Zm5.1,16.2c-2.6.1-2.6-7.7,0-7.6,2.6,0,2.6,7.7,0,7.6Zm-.3,11.7c-2.6,7.9-12.5,11.9-17.4,4.9,6,1.6,16.5-3.4,17.4-4.9Zm-23.6-12.2c-2.2,0-2.2-6.7,0-6.6,2.1,0,2.1,6.7,0,6.6Zm-1.7-14.1c-1.8.5-4.3,2.4-4.4,2.2.9-1.7,6-5.7,9.1-3.8,2,1.1,2.7,2.6,1.5,2.6-1.1,0-2.9-1.9-6.2-1Z"/><path class="cls-5" d="m134,139.1c-1.8-5.5-2.9-9.2-6.1-16.1-4.8,3.4-8.8,5.8-13.9,7.7,2.3,3.7,4.3,9.2,5.8,13.9h.4c-4.3,8.6-2.8,17.9-8.9,26.3-3.6,1.4-12,.3-10.7,6.7-2.2,2.4-4.1,5.3.8,6.5-.9,2.5.8,4.1,2.3,4.3-1.4,1.9,1.3,3.4,2.5,3.4.8,7.8,17.3-6.4,13.8-12.7,5.8-11,16.4-28.9,14.1-40.1Z"/><path class="cls-5" d="m44.2,162.1c-4.2-4.6-6-11.2-9.3-16.2l.3-.2c.5,1.1,4.9-9.2,7.6-12.8-4.9-.9-11.2-3.7-14.5-5.7-2.4,4.3-4.4,10.1-6.5,13.6-9.9,16.8,20,27.3,21.3,47.6,1.6-6.6,3.6-13.5,5.6-21h-.3c0-.4-3-3.9-4-5.3Z"/><path class="cls-10" d="m74.1,33.2c3.6-2.1,11.2,1.9,12.7,3.6-.1.1-3.7-1.7-6.2-2.2-4.4-.7-6.4,1.2-7.8,1.3-1.6,0-1-1.5,1.4-2.7Z"/><path class="cls-4" d="m43.6,40.6c-6.2-14.2-.4-39,19-35.1,0,0,0-.1,0-.2h.1c-1.8,5.1-3.1,7.9-2,13.1-3.6.1-19.2,11-14.9,21.5-.8.5-1.4.8-2,1.3l-.3-.7Z"/><path class="cls-3" d="m61.5,65.9c6,1.6,16.5-3.4,17.4-4.9-2.6,7.9-12.5,11.9-17.4,4.9Z"/><path class="cls-2" d="m46.3,117.3c.2,12.9,6.4,28.4,4.5,40.9"/><path class="cls-2" d="m53.1,85.2c-15.9,4-21.5,27.9-27,40.1"/><path class="cls-2" d="m47.9,132.7c-6.2,1.4-18.4-3.6-21.8-7.5"/><path class="cls-2" d="m102.2,116.6c2.3,6,4.4,9,6.4,15.9"/><path class="cls-2" d="m96.8,86.7c17.3,3,27.5,21.9,33.7,34.6"/><path class="cls-2" d="m96.1,86.6c.2,0,.4,0,.6,0"/><path class="cls-2" d="m51.8,201.4c-.8,64.4-25.7,122.7-27.2,188.8,8.6,4.8,103.8,5.1,104.6.1,3.4-33.7-11.9-93.5-10.1-117.5"/><path class="cls-2" d="m98,86.9c-6.1,1.7-5.8,23.3-16.1,23.3"/><path class="cls-2" d="m87.8,84.9q4.5.8,8.9,1.7s0,0,0,0"/><path class="cls-1" d="m45.1,31.7c0,3.7.2,5.9,1.1,9.6-3.2,7.4,6.3,27.6,13.4,34,9.3,12.1,22.8,2.5,31.4-12.6"/><path class="cls-1" d="m57,45.5c0,4.3-3.4,4.3-3.3,0,0-4.3,3.4-4.3,3.3,0Z"/><path class="cls-1" d="m81.3,45.5c0,5-4.1,5-4.1,0,0-4.9,4.1-5,4.1,0Z"/><path class="cls-1" d="m61,57.5c1.9,1.5,7.4,1.2,9.3,0"/><path class="cls-1" d="m61.5,65.9c6,1.6,16.5-3.4,17.4-4.9-2.6,7.9-12.5,11.9-17.4,4.9Z"/><path class="cls-1" d="m96.6,38.7c0,8.5-1.8,17.5-5.6,24"/><path class="cls-1" d="m44.9,33.9c4.7-10.1,12-14.5,15.9-15.4,11.1-2.9,15,8.5,35.8,20.2"/><path class="cls-1" d="m86.1,69.6c-.4,5-.3,10.8,1.7,15.3"/><path class="cls-1" d="m96.6,40.8c1.7-2.3,5.6-1.1,6.4,1.4,1.3,3.9-3.7,14.2-8.7,10.7"/><path class="cls-1" d="m46,40s0,0,0,0c-6.4,2-2.2,12.7,1.3,15.1"/><path class="cls-1" d="m53.8,33.2c-1.4.5-4.7,3.6-4.5,3.8,3.7-2.6,6.8-3.1,10.6-1.2,1.2,0,.5-1.5-1.5-2.6-1.5-.8-3.6-.4-4.6,0Z"/><path class="cls-1" d="m80.1,33c2,.5,6.9,3.5,6.7,3.7-4.7-2.3-9.5-3.1-14.1-.9-1.6,0-1-1.5,1.4-2.7,1.7-.9,4.6-.5,6-.1Z"/><path class="cls-1" d="m101.3,39.6c4.5-17.9-7-37.1-26.3-38.4-4.6-.8-10.4,0-12.4,4.3-19.4-4-25.2,20.8-19,35.1"/><path class="cls-1" d="m87.8,72.6c3.7,7.1,22.1-7.3,9.4-19.1"/><path class="cls-1" d="m62.8,5.5c-1.8,5-3.1,7.7-2,12.9"/><path class="cls-1" d="m59.6,75.3c-.1,7.5,3.2,8.8-6.6,9.9"/><path class="cls-2" d="m130.4,121.2c-7,5.2-13.5,9.1-21.8,11.2"/><path class="cls-2" d="m58.5,84.5c9.6,12,35.6,42.3,46.9,39.5"/><path class="cls-2" d="m45.6,88.9c-1.2,24.2,8.8,55.4,17.5,78.5,12.3,30.1,26.3,75,47.3,98.1,9.5,9.9,16.6,14.3,16.2-14"/><path class="cls-2" d="m104.4,172.6c-17.5-10.7-44.7-66.3-51.3-87.4"/><path class="cls-2" d="m103.7,120.2c-1.2,14.8,7.2,34.5,10.3,46"/><path class="cls-2" d="m118.3,186.8c15.2,79.1-25.2,14.7-37.1-18.3-11.1-29.9-24.1-52.2-30.7-82"/><path class="cls-2" d="m121.3,221.6c6.4,16.3,12.5,57.9-13.7,26.9-14.5-21.6-31.6-63.1-43-92.2-6.7-16.4-16.5-46.4-16.7-68.9"/><path class="cls-2" d="m104.3,136.6c-22-1.6-36.1-31.2-47.7-51.4"/><path class="cls-2" d="m50.8,158.2c-10.4,40.4-15.8,48.3-5.8,106.7"/><path class="cls-2" d="m51.4,156.3c2.7,2,4.8,1.6,8.2,1.8"/><path class="cls-2" d="m48.5,168.5c6.1,2.4,8.9,3.1,16.1,2.6"/><path class="cls-2" d="m129.2,373.5c-30.9,8.7-72.8,6.4-102.6-.9"/><path class="cls-2" d="m50.9,148.7c2.2.9,3.2,1.6,6.1,1.9"/><path class="cls-2" d="m126.5,112.6c-5.5,4-15.1,8.3-21.1,11.3"/><path class="cls-2" d="m29.5,116.6c5.7,3.7,8.1,4.9,17.3,7.4"/><path class="cls-2" d="m76.6,247.3c-11.6,28.3-16.3,77.1-19.4,107.5"/><path class="cls-2" d="m92,308.4c-5.8,24.9-5.9,51.1-.4,76.1"/><path class="cls-1" d="m114.1,130.7c2.3,3.7,4.3,9.2,5.8,13.9"/><path class="cls-1" d="m128,123c3.2,6.9,4.2,10.6,6.1,16.1,2.4,11.3-8.2,29.1-14.1,40.1"/><path class="cls-1" d="m111.3,171c6.3-9,4.9-18.9,9.6-28"/><path class="cls-1" d="m103,175c-2,2.5-8.6,7.5-1.6,9.1-.9,2.5.8,4.1,2.3,4.3-1.4,1.9,1.3,3.4,2.5,3.4.8,7.8,17.3-6.4,13.8-12.7"/><path class="cls-1" d="m111.3,171c-3.6,1.3-12.1.3-10.7,6.7"/><path class="cls-1" d="m28.2,127.2c-2.4,4.3-4.4,10.1-6.5,13.6-9.9,16.7,19.9,27.1,21.4,47.9"/><path class="cls-1" d="m43,132.5c-2.8,3.4-7.3,14.5-7.9,13.2"/><path class="cls-1" d="m29.7,140.7c7.7,5,8.4,14.8,14.4,21.3,1,1.4,4.2,4.9,4,5.2"/></svg>')}`;
export default image;