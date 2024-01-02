/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Oceania" xmlns="http://www.w3.org/2000/svg" width="154" height="394" viewBox="0 0 154 394"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-2{fill:none;stroke:#010101;}.cls-2{stroke-miterlimit:10;}.cls-3{fill:#5cc0ce;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0px;}.cls-4{fill:#393638;}.cls-5{fill:#3e52a4;}.cls-6{fill:#cd499a;}.cls-7{fill:#b48071;}.cls-8{fill:#fff;}.cls-9{fill:#010101;}</style></defs><path class="cls-7" d="m99.2,180.3c-1.4-7,9.2-7.1,13.9-8.3h0c6.1-8.9,9.8-20.2,13.7-29.3h-.3c-7.5-9-10.7-13.8-13.3-16.4h-.2c6.2-4.3,11-10.4,14.7-16.9h.4c9.8,11.9,16.9,24.7,18.7,28,4.8,8-17.8,35.9-24,44,1.8,4.1-2.7,11-5.4,13.8-1.7,1.7-11.8,8.2-11.6,2-1.5,0-4.7-1.8-3-4.1-1.8-.3-3.8-2.3-2.7-5.2-5.6-1.2-3.7-5-.9-7.7Z"/><path class="cls-5" d="m95.8,376c6.1-.2,31.8,9,24.1-4.8l.2-.2c5.8,3.4,23.2,14.3,7.9,18.3-12.2-1.1-22.9-5.7-32.2-13.2h0Z"/><path class="cls-5" d="m133.4,386.2c.9-1.7.6-3.6-.3-5.3h0c13.3,23.2-48.4,13.2-40.8-10.5.6,9.2,35.4,25.3,41,15.8Z"/><path class="cls-7" d="m92.3,370.3c0-.6,0-1.3.2-1.9h0c.9-27.7-6.5-37-6.6-63.2,12.5.2,22.1-2,30-3.4-.4,11.8-6.6,42-4.2,64.3,3.5,1.7,6,3.2,8.4,4.8l-.2.2c7.7,13.8-18,4.7-24.1,4.8h0c-1.7-1.4-3.2-3.3-3.4-5.6Z"/><path class="cls-5" d="m33.5,300.1c-3-.7-5.4-1.6-7.1-2.4-.4-2.3-.7-5.2-.8-8.6,2.5-.2,9-4.9,9.3-5.1,0,0,2.4,6.7,6.3,9.5,2.5,1.8,8.8,5.2,9.2,4.3,3.3-6.6,4.4-14.5,1.1-21.1,6.9-.4,13.3-4.9,16.1-11.3-6.2-3.3-13.3-4.7-20.2-4.1.2-7-2-14.1-6.1-19.8-5.9,3.4-9.9,9.9-10.1,16.7-1.3-1-2.7-1.9-4.1-2.6,1.8-20.7,5-45.7,8.2-68.4.8-.7,1.6-1.5,2.3-2.4,2.4,4.2,6,7.2,10.7,8.6-3,2.8-5.1,6.7-5.8,10.7,6.8,1.6,14,1.2,20.6-1.1,1.6,6.9,5.5,13.2,10.9,17.7,4.9-4.8,6.7-11.1,5.2-17.8,3.3,3.3,7.2,5.9,11.5,7.8-3.5,6.1-4.9,13.4-3.9,20.4,6.8-.2,13.4-4.1,16.8-10,2.6,5.4,5.9,9.9,13.7,11.7,1.9,33.8,11.2,66-3,68.9-21.6,6.3-58.9,3.3-80.8-1.7h0Z"/><path class="cls-3" d="m38.1,127.9c-4.7-1.5-9.1-4-12.8-7.3,2.3-1,4.8-5.9,5.2-7.1,2.1,1.6,11,1.1,13.2-1-.6-3.7-2.8-7-6.9-8.1,3.5-2.8,5.4-6.9,4.6-10.3-3.1.8-6.1,2.1-8.8,3.8,3.6-4.3,7.5-6,17.6-9.3.8,5.7.6,12.3,3.6,17.3,9.5,2.3,20.2,1,30.1,2,5.3,1.2,2.1-11.6,9.8-20.5,6.9.8,12.3,2.2,18.6,6.8-.5,2.7,0,5.8,1.2,8.6-5.4-1.6-7.2.2-9.9,2.2,2,3.4,7,7,10.2,7.4-1.1,1.5-.3,9.1,1.7,11.9-3.8,4.7-7.2.6-9.2-3.4-2.9,32.5-4.6,24,.2,52.3-4.3,1-8.3,2.6-7.4,7-1.4,1.6-3,3.2-2.7,5.2-1.7,2.9-2,6.4-2.1,9.8-3-3.9-7.5-6.8-12.4-7.6,6.2-7.7,5.4-12.7,4.9-19.4-7.9.5-13.6,4.4-17.4,9.7,0-.6-6.8-8.3-11.4-8.5,3.2-2.6,5.5-5.5,7.5-9.1-5.7-3.9-13.5-4.6-19.9-1.8,1.2-5.9,1.2-11.5-4-17.5-.6.3-1.2.7-1.8,1.1-.5-4.9-1.3-9.7-1.7-14.3Z"/><path class="cls-7" d="m85.9,85.9c-1.4-4-1.5-6.3-1.5-10.1h0c10.7-7.3,10.3-33.2,8.1-44.6-2.5-9.6-4-9.8-12.8-14.2-9.5,2.3-19.4,6.8-22.4,14.4,10.2-.4,5.6,5.6-1.4,3.5-4.8,10-3.9,22.5-.6,37.5h0c1.9,2.4,3.9,4.7,6,6.4h0c-.3,1.9-.4,5-.7,7.5-3.3.4-6.9,1.2-10.2,2.2.8,5.7.6,12.3,3.6,17.3,9.5,2.3,20.2,1,30.1,2,5.3,1.2,2.1-11.6,9.8-20.5-4.3-.7-5-.8-7.8-1.6Zm-29.6-35.8c-2.7.1-2.7-8.3,0-8.2,2.7-.1,2.7,8.3,0,8.2Zm22.5-4.1c0-5.3,4.2-5.3,4.2,0,0,5.3-4.2,5.3-4.2,0Zm5.7-14.2c2,.4,6.9,4.1,3.4,3.9-4.3-2.5-10.2,1.7-13.7-1.7-1.3-3,7.6-2.7,10.3-2.2Zm-23.4,35.5c6.8,3,16.3-.7,17.7-2.1-5.3,7.8-13.9,10.2-17.7,2.1Z"/><path class="cls-4" d="m89,34.7c1.8,2.3-7.4-.8-9.2.4-1.7.4-4.7.7-5.5-1.1-1.3-3,7.6-2.7,10.3-2.2,1.8.3,4,2.5,4.4,2.9Z"/><path class="cls-4" d="m103.6,24.3c-3.5-10.5-9.2-18.6-20.2-20.2C42.3-15,22.2,54.3,49.5,78.5c2.3,2.5,10.6,8.7,8.1,1.8-5-14.8-7.4-34.3-1.7-45.4-.5,0-1-.2,0,0,2.7-10.2,12.5-15.3,23.8-17.9,8.9,4.5,10.3,4.6,12.8,14.2,2.1,11.4,2.6,37.3-8.1,44.6h0c0,.5,0,.9,0,1.3,23.2-1.2,26.4-34.4,19.2-52.8Z"/><path class="cls-9" d="m80.9,42c2.7-.1,2.7,8.3,0,8.2-2.7.1-2.7-8.3,0-8.2Z"/><path class="cls-8" d="m78.9,65.2c-5.3,7.8-13.9,10.2-17.7,2.1,6.8,3,16.3-.7,17.7-2.1Z"/><path class="cls-4" d="m55.9,34.9c.5-1.4.9-2.5,1.4-3.5,10.2-.4,5.6,5.6-1.4,3.5,0,0,0,0,0,0Z"/><path class="cls-9" d="m56.3,42c2.7-.1,2.7,8.3,0,8.2-2.7.1-2.7-8.3,0-8.2Z"/><path class="cls-7" d="m32.5,369c1.3-16.3,1.6-66.1,1.1-68.8,7.1,1.8,17.3,3.3,28.3,4.2-.7,22.9-9.4,44.2-10.4,66.1-.1,3.1-1.3,6-3.3,8.5-6.3,1.6-31.1,5.5-19.6-7.1l-.4-.8c1.5-.7,2.9-1.3,4.4-2Z"/><path class="cls-5" d="m48.1,378.9c1.6-2,2.6-4.2,3.1-6.7h0c9.8,15.4-50.5,32.2-42.1,11.6,8.5,10.4,32.3,3.6,38.9-4.9Z"/><path class="cls-6" d="m128.1,107.6c-1.4-2.6-12.1-10.7-15.8-13.3-.5,2.7,0,5.8,1.2,8.6-5.4-1.6-7.2.2-9.9,2.2,2,3.4,7,7,10.2,7.4-1.1,1.5-.3,9.1,1.7,11.9,4.7-4.1,8.6-8.8,11.7-14.1-.2-.2-.4-.4-.6-.6.5-.6,1-1.3,1.5-2.1Z"/><path class="cls-6" d="m105.7,197.2c-1.5,0-4.7-1.8-3-4.1-1.8-.3-3.8-2.3-2.7-5.2-2.3-.6-3.4-1.5-3.6-2.5-1.7,2.9-2,6.4-2.1,9.8-3-3.9-7.5-6.8-12.4-7.6,6.2-7.7,5.4-12.7,4.9-19.4-7.9.5-13.6,4.4-17.4,9.7,0-.6-6.8-8.3-11.4-8.5,3.2-2.6,5.5-5.5,7.5-9.1-5.7-3.9-13.5-4.6-19.9-1.8,1.2-5.9,1.2-11.5-4-17.5-.6.3-1.2.7-1.8,1.1,2,14.9-3.1,29.9-4.6,45.1.8-.7,1.6-1.5,2.3-2.4,2.4,4.2,6,7.2,10.7,8.6-3,2.8-5.1,6.7-5.8,10.7,6.8,1.6,14,1.2,20.6-1.1,1.6,6.9,5.5,13.2,10.9,17.7,4.9-4.8,6.7-11.1,5.2-17.8,3.3,3.3,7.2,5.9,11.5,7.8-3.5,6.1-4.9,13.4-3.9,20.4,6.8-.2,13.4-4.1,16.8-10,2.6,5.4,5.9,9.9,13.7,11.7-1.6-13.7-3.4-26.3-5.2-34.3-3.2,1.5-6.6,2.2-6.4-1.4Z"/><path class="cls-6" d="m47.4,261.4c.2-7-2-14.1-6.1-19.8-5.9,3.4-9.9,9.9-10.1,16.7-1.3-1-2.7-1.9-4.1-2.6-.9,11.1-1.8,23.6-1.4,33.5,2.5-.2,9-4.9,9.3-5.1,0,0,2.4,6.7,6.3,9.5,2.5,1.8,8.8,5.2,9.2,4.3,3.3-6.6,4.4-14.5,1.1-21.1,6.9-.4,13.3-4.9,16.1-11.3-6.2-3.3-13.3-4.7-20.2-4.1Z"/><path class="cls-6" d="m27.9,118.2c.9-1.2,2.6-4.8,2.6-4.8,2.1,1.6,11,1.1,13.2-1-.6-3.7-2.8-7-6.9-8.1,3.5-2.8,5.4-6.9,4.6-10.3-8.3,1.3-12.5,8.5-17.2,14.8-3.9,3.6-3.1,8.8,1.1,11.7,1-.7,2-1.5,2.6-2.3Z"/><path class="cls-5" d="m9.2,383.8c-.3-6.6,14-9.6,18.8-12.9l.4.8c-11.4,12.6,13.3,8.7,19.6,7.1-6.6,8.6-30.5,15.4-38.9,4.9Z"/><path class="cls-7" d="m25,149c4.8,8.2,9.3,19.5,12.5,23.3-1,6.7-2.1,13.9-3,20.9-2.1-.8-3.2-8.4-4.7-10-6.5-5.7-15.3-13.6-23.2-30.6-.6-9.6,7.6-17.7,15.7-35.2h0c3.3,4.6,8.5,7.8,13.8,9.9-2.9,3.5-10.2,22.5-10.9,21.7h-.2Z"/><path class="cls-2" d="m113.1,172s0,.1,0,.2"/><path class="cls-2" d="m106.4,121c-2.9,32.5-4.6,24,.2,52.3"/><path class="cls-2" d="m22.3,117.3c-8,17.5-16.3,25.7-15.7,35.2"/><path class="cls-2" d="m60.5,86.4c-7.1.5-23.5,6.3-25.8,9.4"/><path class="cls-2" d="m36.1,127.2c-2.9,3.4-10.3,22.8-11,21.7"/><path class="cls-2" d="m20.6,142.6c6.5,7.5,12.8,24.7,16.9,29.7"/><path class="cls-2" d="m113.2,126.4c2.6,2.6,5.8,7.3,13.3,16.3"/><path class="cls-2" d="m128.1,109.6c9.8,11.8,16.9,24.6,18.7,27.9"/><path class="cls-2" d="m97.6,88.1c3.6.4,7.2,1.7,10.7,3.7"/><path class="cls-2" d="m102.2,177.2c-2.5,2.8-10.2,9-2.1,10.8-1.2,2.9.9,4.9,2.7,5.2-1.8,2.3,1.5,4.1,3,4.1-.2,6.2,9.9-.2,11.6-2,2.8-2.8,7.2-9.7,5.4-13.8"/><path class="cls-2" d="m114.4,171.7c-4.9,1.6-16.6,1.1-15.2,8.7"/><path class="cls-2" d="m33.5,300.1c21.6,4.3,68.1,10.6,87-1.8,3.9-5-3.8-79.8-8.3-99.7"/><path class="cls-2" d="m40.6,152.5c-6.4,47.6-17.1,98.3-14.1,145.2,1.7.8,4.1,1.6,7.1,2.4"/><path class="cls-2" d="m122.8,181.5c6.2-8.1,28.8-36.1,24-44"/><path class="cls-2" d="m129.2,137.4c-5.4,11-8.7,23.8-16.1,34.5"/><path class="cls-2" d="m6.6,152.5c7.8,17,16.7,24.9,23.2,30.6"/><path class="cls-2" d="m85.9,85.9c3.1.9,7.3,1.5,11.6,2.1"/><path class="cls-2" d="m29.8,183.1c1.5,1.6,2.5,9.2,4.7,10"/><path class="cls-2" d="m37.6,117.3c-.3,11.6,2.9,23.4,3,35.2"/><path class="cls-1" d="m33.5,300.1c.6,3,.3,53.2-1.1,69.7"/><path class="cls-2" d="m33.5,300.1h0"/><path class="cls-1" d="m33.5,300s0,0,0,.1"/><path class="cls-1" d="m33.1,368.7c-6.5,3.8-21.3,7.3-24,14.1,4.8,12.2,34,4.3,39-3.9,2-2.4,3.1-5.4,3.3-8.5,1-21.8,9.7-43.2,10.4-66.1"/><path class="cls-1" d="m85.9,305.3c0,26.2,7.6,35.5,6.6,63.2"/><path class="cls-1" d="m93,367.5c-3.4,11.4,19.7,18.2,28.4,20.9,5.4,2.5,15.7,0,11.7-7.5-6.1-6.8-13.5-10.2-21.4-14.8-2.4-22.2,3.9-52.5,4.2-64.3"/><path class="cls-1" d="m119.9,371.2c7.7,13.8-18,4.7-24.1,4.8l1.1.2"/><path class="cls-1" d="m49.2,378.6c-6.2,1.8-32.4,6.1-20.7-6.8"/><path class="cls-1" d="m133.1,380.8c13.5,23.5-49.9,13-40.5-11.4"/><path class="cls-1" d="m51.3,372.2c10,15.6-51.5,32.1-41.8,11.4"/><path class="cls-1" d="m55.3,72.5c8.2,12.3,19.4,13.6,32.8,0"/><path class="cls-1" d="m85.9,85.9c-1.4-4-1.5-6.3-1.5-10.1"/><path class="cls-1" d="m61.2,79c-.5,2.5-.2,7.4-1.4,10.1"/><path class="cls-1" d="m83,46c0,5.3-4.2,5.3-4.2,0,0-5.3,4.2-5.3,4.2,0Z"/><path class="cls-1" d="m62.2,61c2.4,2.7,5.7.5,9.5,1.1"/><path class="cls-1" d="m61.2,67.3c6.8,3,16.3-.7,17.7-2.1-5.3,7.8-13.9,10.2-17.7,2.1Z"/><path class="cls-1" d="m74.3,34c3.4,3.4,9.4-.8,13.7,1.7,3.5.3-1.4-3.4-3.4-3.9-2.7-.5-11.6-.8-10.3,2.2Z"/><path class="cls-1" d="m83.4,4.1c2.9,3.1,2.1,7.7-.9,11.2-3.5,3.2-12.6,3.7-15.4,5.9-9.7,6.5-10.1,10.4-13.5,20-2.6,7.5-.2,28.1,3.9,39.1,2.6,6.9-5.7.7-8.1-1.8C22.2,54.3,42.3-15,83.4,4.1Z"/><path class="cls-1" d="m79.7,17c8.9,4.5,10.3,4.6,12.8,14.2,2.5,9.6,1.2,33-4.4,41.3"/><path class="cls-1" d="m83.4,4.1c29.7,4.1,32.8,70.7,1.7,73"/><path class="cls-1" d="m54.2,46c0,5.3,4.2,5.3,4.2,0,0-5.3-4.2-5.3-4.2,0Z"/><path class="cls-1" d="m58.5,31.5c8.7,0,4.3,5.6-3.2,3.4-.4,0,3.1.2,2.1.2"/><path class="cls-2" d="m93.7,87.8c-7.3,7.6-4.5,21.5-9.7,20.2-9.9-1-20.6.3-30.1-2-2.9-4.9-3-11.4-3.5-17"/><path class="cls-2" d="m108.3,91.8c3.2,1.9,22.4,14.3,19.4,17.7-4.2,6.3-8.9,14.5-16.2,17.1-3.2-.4-6.3-8.5-8.1-9.7"/><path class="cls-2" d="m38.2,127.9c-24.9-10.3-17.6-15.7-3.5-32.2"/><path class="cls-2" d="m48.3,193.6c2-1.9,4.4-3.4,7-4.2-4.8-5.6-5.7-13.7-4.2-20.8.2-1.1,7.8,1,10,1.9,4.4,1.7,8.4,7.6,8.4,7.6,3.8-5.4,9.5-9.3,17.4-9.7.5,6.7,1.3,11.7-4.9,19.4,4.9.8,9.4,3.7,12.5,7.6"/><path class="cls-2" d="m79.3,203.1c1.5,6.6-.4,13-5.2,17.8-5.5-4.5-9.4-10.8-10.9-17.7-6.6,2.4-13.8,2.8-20.6,1.1.6-4.1,2.8-7.9,5.8-10.7"/><path class="cls-2" d="m69.5,178.1c-1,1.8-1,3.7-.9,5.7"/><path class="cls-2" d="m55.3,189.4c2.4,1.4,5.1,2.2,7.9,2.2"/><path class="cls-2" d="m63.2,203.1c1.6-.6,3.1-1.6,4.3-2.9"/><path class="cls-2" d="m81.9,187.7c-1.9-.5-4.3,0-6.1.7"/><path class="cls-2" d="m27.1,255.6c1.4.7,2.8,1.6,4.1,2.6.2-6.8,4.2-13.4,10.1-16.7,4.2,5.7,6.3,12.8,6.1,19.8,6.9-.6,14,.8,20.2,4.1-2.8,6.3-9.2,10.8-16.1,11.3,3.2,6.6,2.1,14.5-1.1,21.1-.5.9-6.7-2.5-9.2-4.3-3.9-2.7-6.3-9.5-6.3-9.5-.3.2-6.5,4.6-9,5.1"/><path class="cls-2" d="m34.9,284.1c1.4-1.5,1.9-3.3,2.3-5.3"/><path class="cls-2" d="m51.5,276.7c-1.9-2-4.4-3.4-7.1-4.2"/><path class="cls-2" d="m47.3,261.5c-1.7.1-3.4.7-4.8,1.7"/><path class="cls-2" d="m31,257.7c0,1.7.3,3.3.9,4.9"/><path class="cls-2" d="m25.9,271.6c1.7.9,3.5,1,5.5.9"/><path class="cls-2" d="m117.3,232.9c-7.7-1.8-11.1-6.3-13.7-11.7-3.4,5.9-10,9.8-16.8,10-1-7,.4-14.3,3.9-20.4-6.4-2.7-12-7.3-15.9-13.1,5.4-4.3,13.2-5.2,19.5-2.4.1-3.5.4-6.9,2.1-9.9"/><path class="cls-2" d="m94.3,195.4c.8,2.7,2.3,5.1,4.3,7"/><path class="cls-2" d="m90.9,210.8c1.6.7,3.3,1,5.1.8"/><path class="cls-2" d="m103.5,221.8c.8-1.5,1.3-3.1,1.5-4.7"/><path class="cls-2" d="m114.3,211.2c-1.1-1.2-2.4-1.9-4.2-2.7"/><path class="cls-2" d="m115.8,124.9c-2.1-2.9-3.1-10.7-1.9-12.3-3.2-.4-8.2-4.1-10.2-7.4,2.7-2,4.5-3.8,9.9-2.2-1.3-2.9-1.7-6-1.2-8.6"/><path class="cls-2" d="m128.2,107.5c-.4.8-1,1.5-1.6,2.2.2.2.4.4.6.6"/><path class="cls-2" d="m113.9,112.5c1.1.1,1.9-.4,2.7-1"/><path class="cls-2" d="m123.3,116.2c-.2-1.7-.6-2-1.5-3.6"/><path class="cls-2" d="m126.6,109.7c-.8-.8-1.7-1.4-2.7-1.7"/><path class="cls-2" d="m120.6,100.2c-.5.7-.9,1.4-1.2,2.3"/><path class="cls-2" d="m113.6,102.9c.4,1.2,1.5,2.4,2.4,3.3"/><path class="cls-2" d="m32.6,97.9c2.7-1.7,5.7-3,8.8-3.8.8,3.4-1.1,7.5-4.6,10.3,4.1,1.1,6.3,4.4,6.9,8.1-2.2,2-11.1,2.6-13.2,1-.5,1.3-3,6.2-5.3,7.2"/><path class="cls-2" d="m30.5,113.4c.3-1.1-.2-1.9-.7-2.8"/><path class="cls-2" d="m36.8,104.3c-1.7,0-3.6.5-5.3,1.2"/><path class="cls-2" d="m39.9,142.2c.6-.4,1.2-.8,1.8-1.1,5.2,6,5.2,11.6,4,17.5,6.4-2.8,14.2-2,19.9,1.8-2,3.6-4.3,6.5-7.5,9.1"/><path class="cls-2" d="m48.3,193.6c-4.7-1.4-8.3-4.4-10.7-8.6-.8,1-1.6,1.8-2.6,2.6"/><path class="cls-2" d="m37.6,184.9c1-2.6,1.2-5.5.7-8.2"/><path class="cls-2" d="m50.4,175.1c-.9-1.5-2.7-3.4-4.2-4.3"/><path class="cls-2" d="m46.2,158.2c-1.5.7-2.9,1.7-4.1,2.9"/></svg>')}`;
export default image;