/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Asia" xmlns="http://www.w3.org/2000/svg" width="176.1" height="269" viewBox="0 0 176.1 269"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-2{fill:none;stroke:#010101;}.cls-2{stroke-miterlimit:10;}.cls-3{fill:#312f33;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13{stroke-width:0px;}.cls-4{fill:#636668;}.cls-5{fill:#2b2c2b;}.cls-6{fill:#6d7b91;}.cls-7{fill:#374150;}.cls-8{fill:#cc9f81;}.cls-9{fill:#ca587b;}.cls-10{fill:#fff;}.cls-11{fill:#f0b48e;}.cls-12{fill:#e9e8e8;}.cls-13{fill:#010101;}</style></defs><path class="cls-3" d="m167.1,53.9c-.2,3.5-.5,3-1.2,6.2-2,0-3.3,2-3.5,4.9h-.2c0,.2-.1.5-.2.7-3.9-3.5-5.9-9.1-5-14.3,4.3.7,7.8,1.5,10.2,2.5Z"/><path class="cls-7" d="m69.6,207.2c.6,12.1,1.7,25.7,1,37.6-11.5,1-23.6.4-35.2-.6-.7-23.2-.5-48.6,1.4-71.9,7.1,1.7,13.6-1.9,3.1-4.2,3.9-.2,7.9-.6,4.5-5.2-.5-.7-1.4-1-2.5-1.1,7.5,0,3.8-6.2-2.2-5.6h0c3.3.2,7.5-.9,5.4-4.1,16.2,3.3,32.4,1.3,48.5-1,11.5,21.1,29,59,39.4,78.3,3.8,5.4,16.9,7.1,24.3,6.9-4.8,31.9-27.3,36.6-55.1,29.8-17.7-6.2-25.4-43.1-32.3-58.9h-.4Z"/><path class="cls-3" d="m150.9,53.8c2.2.8,3.1,1.8,3.3,4.9-.6,3-9.9-1-16.6,1.7-.8-2.1-.3-1.8,0-3.7,2.4-2.4,9.9-4.2,13.2-2.9Z"/><path class="cls-13" d="m144.1,63c1.9,0,1.9,6.3,0,6.3-1.9,0-1.9-6.4,0-6.3Z"/><path class="cls-10" d="m143.6,87.8c-4.4,6.4-19.3,10.5-23.7,1.5,7.4,2.8,22.2-.2,23.7-1.5Z"/><path class="cls-12" d="m168,38.8c-1.4-.5-2.7-.9-4.1-1.3-4.3-16.6-12.1-35.7-30.7-35.9-20.1-.1-24.4,14.9-30.6,35.5-7-1.7-6,17.4-3,17,8-3.1,15.9-3.6,25.9-4.1,14.7-.3,29.5-.3,41.6,4,5.1,2.6,3.7-14.1.9-15.1Z"/><path class="cls-12" d="m153.8,96.9c-3.4,4.3-6.5,4.7-10.5,6.6h0c-2.3,2.7-5.1,5-8,6.9v.4c10.3,0,15.2.1,20.4-6.5.9-2.6.1-5.7-1.9-7.5Z"/><path class="cls-12" d="m120.2,104.8c-3.2,2.6-5.9,5.8-7.6,9.5v.2c3.6-1.2,7.3-2.4,10.7-3v-.2c1.2-1.2,1.8-2.9,1.9-4.7-1.9-.4-3.2-.7-4.9-1.9Z"/><path class="cls-3" d="m115.9,55.3c3.7-.1,8.7,1,7.5,5.3-3.2-1.1-11.3-.9-15.2.9.7-3.2,3.9-6,7.7-6.1Z"/><path class="cls-13" d="m116.4,64c1.8,0,1.8,6.2,0,6.1-1.8,0-1.8-6.2,0-6.1Z"/><path class="cls-9" d="m104.8,149.3h0c4.3-.8,8.4-1.5,13-2.3-4.4,2.6-10.1,10.8-10.5,10.8-1.8-2.4-2.9-8.5-2.5-8.5Z"/><path class="cls-6" d="m161.8,119.2c-.3-4-3.8-11.9-6.6-14.6-4.7,6.8-10,6-19.9,6.2-10.2,0-14.1.7-22.7,3.7v-.2c1.7-3.7,4.4-7,7.6-9.5-.4-.2-.8-.5-1.2-.8-5.6.9-8.7,7.4-11.8,11.6l.2.7c-16.6,5.2-40.3,13.8-60.2,14.9-4.1.3-10,1.2-12.5,4.8-2.4,3.4-2,12.8,1.6,15.6,2.9-.7,7.2-.8,8.7.7,17.6,3.5,35.2,1.1,52.7-1.8.2,3.6-.3,4.5-.3,7.9,4,7.8,9,18.2,12.7,25.8,4.9,8,19.8,41,22.9,45.4,4.3,5.7,18.1,7.3,25.9,6.8.7-25.3-1.4-47.8.6-72.5.5-13.9,2.7-31.2,2.2-44.5Zm-54.4,38.6h0c-1.8-2.4-2.9-8.5-2.5-8.5h0c4.3-.8,8.4-1.5,13-2.3-4.4,2.6-10.2,10.8-10.5,10.8Z"/><path class="cls-3" d="m105.7,52.1c-.9,2.7.8,12.7-3.6,11.3-.9-.8-.2-2.7-1.2-3.4-.4-2.9-.6-4.6-.8-6.2,1.6-.7,3.5-1.2,5.7-1.7Z"/><path class="cls-7" d="m80,124.6v.2c-10.6,3.1-21,5.5-32.8,6.3,5.3-13.2,24.2-13.6,32.8-6.5Z"/><path class="cls-4" d="m38.4,162c1.2,0,2.4-.1,3.4,0-1.2.1-2.4.1-3.5.2,0,0,0-.1,0-.2Z"/><path class="cls-8" d="m39.9,168.2c-.9,0-1.7,0-2.5.1,0-.2,0-.5.1-.7.8.2,1.6.4,2.4.5Z"/><path class="cls-11" d="m167.7,60.4c-2.9-1.2-5,.8-5.3,4.5h-.2c0,.2-.1.5-.2.7-3.9-3.5-5.9-9.1-5-14.3-14-2.1-36.7-2.4-51.2.8-.9,2.7.8,12.7-3.6,11.3-.9-.8-.2-2.7-1.2-3.4,0,0,0,0,0-.1h-.5c-2.8,5-.5,18.4,4.6,21.8,3.1,12.1,10.2,22.2,20.2,24.9,0,1.7-.7,3.4-1.9,4.7v.2c3.7-.6,5.9-.5,12.1-.7v-.4c3-1.8,5.7-4.1,8-6.8h0c11.3-3.9,16.2-12.4,18.2-26.7,1.9.9,4.7,1.7,6.3-2.7,1.2-3.6,4.5-11.9,0-13.8Zm-51.2,9.7c-1.8,0-1.8-6.2,0-6.1,1.8,0,1.8,6.2,0,6.1Zm-8.3-8.7c.4-6.9,16.5-9.1,15.2-.9-3.2-1.1-11.3-.9-15.2.9Zm20.1,33c-4.4-.3-6.4-2.2-8.3-5.2,7.4,2.8,22.2-.2,23.7-1.5-3.1,4-9.1,7.1-15.3,6.7Zm15.8-25.2c-1.9,0-1.9-6.4,0-6.3,1.9,0,1.9,6.3,0,6.3Zm-6.3-8.9c-.8-2.1-.3-1.8,0-3.7,3.9-3.2,16.3-6.4,16.6,2-.6,3-9.9-1-16.6,1.7Z"/><path class="cls-11" d="m45.6,153.8c0-4.3-9.5-3.1-12.1-1-2.6,3.4,1.5,3.4,5.5,3.5,2.8,0,6.3.1,6.6-2.5Z"/><path class="cls-11" d="m39.7,156.3c-7.5-1.3-10.3,7-1.2,5.7,3.3-.2,11.3.4,5.9-4.8-.7-.7-2.6-.8-4.6-.9Z"/><path class="cls-11" d="m36.2,162.7c-5.7,3.8.6,4.8,3.7,5.5-1.6.1-4.5,0-5.3,1.1-1.4,2.3.3,3,2.2,3.1,7.1,1.7,13.6-1.9,3.1-4.2,3.9-.2,7.9-.6,4.5-5.2-1.7-1.9-6.2-.9-8.2-.3Z"/><path class="cls-5" d="m72.2,260.9h0c.8-1.9-1-12.3-1.6-16-11,.9-22.7.4-33.8-.5h0c-12.2,3.3-30.8,3.1-30,18.6h-.5c-.9,1.9-.9,3.3.5,5.2,13.4,2.2,46.7-.8,65.4,0,.7.2,0-7.3,0-7.3Z"/><path class="cls-1" d="m36.3,151.5c-3.6-2.7-4-12.2-1.6-15.6,2.5-3.5,8.4-4.5,12.5-4.8,11-.8,20.8-2.9,30.8-5.7,25.2-7.1,43.1-16.5,68-14.8"/><path class="cls-1" d="m156.5,136.5c-6.4,9.8-28.7,8-38.7,10.5-24.1,3.8-48.3,9.9-72.7,5.2"/><path class="cls-1" d="m97.8,150.7c0,3.6-.3,4.4-.3,7.9"/><path class="cls-1" d="m155.2,104.6c7.1,8.6,7.5,17.1,6.2,28.9-.8,9.9-1.1,20.5-1.9,30.3-2,24.6,0,47.4-.6,72.5-7.9.5-21.7-1.1-25.9-6.8-3.1-4.3-17.9-37.3-22.9-45.4"/><path class="cls-1" d="m93.6,151.2c5.3,9.2,11.7,23.2,16.5,32.9"/><path class="cls-1" d="m36.8,172.4c-1.9,23.3-2.1,48.7-1.4,71.9,11.6,1,23.8,1.6,35.2.6.7-12-.4-25.5-1-37.6-.9-9-3.5-21.6-1.5-29.3"/><path class="cls-1" d="m37.5,167.7c0,.2,0,.5-.1.7"/><path class="cls-1" d="m38.4,162c0,0,0,.1,0,.2"/><path class="cls-1" d="m39.7,156.2h0"/><path class="cls-1" d="m157.4,236c-4.8,32.1-27.1,37-55.1,30.1-17.7-6.2-25.4-43.1-32.3-58.9"/><path class="cls-1" d="m47.2,131.1c5.3-13.2,24.2-13.6,32.8-6.5"/><path class="cls-2" d="m39.9,168.2c-4.9-.8-9.1,3.7-2.4,4.3"/><path class="cls-2" d="m37.5,172.5c7.4,1.7,12-2.3,2.4-4.3-3.1-.7-9.4-1.8-3.7-5.5,2.8-1.5,14.4.7,8.1-5.5-.7-.8-3.4-.9-5.3-.9-6.6.5-8.9-2.8-2.6-4.8,3.4-.6,9.1-1.3,9.2,2.3-.8,4.8-10.9.3-12.4,4.6-2.1,6.9,8.6,1.3,11.3,4.6,3.3,4.7-.7,5-4.5,5.2"/><path class="cls-2" d="m146,110.6c5.3-1.7,6.6-2.4,9.2-6"/><path class="cls-1" d="m22.2,265.5c0,0,0,.3,0,.4"/><line class="cls-1" x1="22.1" y1="251.2" x2="22.3" y2="251.2"/><line class="cls-1" x1="6.3" y1="264.4" x2="7" y2="264.4"/><path class="cls-1" d="m70.6,244.9c.6,3.7,2.4,14,1.6,16"/><path class="cls-1" d="m72.2,260.9c-16.2-.3-46.7,7.7-65.2,3.6"/><path class="cls-1" d="m44.6,244.9c-3.1,1.7-13.8,4.7-22.3,6.3"/><path class="cls-1" d="m6.7,263.7c0-6.5,2.3-13.6,15.1-16.2.3,4.4.8,13.4.4,18.1"/><path class="cls-1" d="m36.7,244.4c-3.6,1.2-9.1,2.3-14.9,3"/><path class="cls-1" d="m6.8,268.2c13.4,2.2,46.7-.8,65.4,0,.7.2,0-7.3,0-7.3"/><path class="cls-1" d="m6.3,263c-.9,1.9-.9,3.3.5,5.2"/><path class="cls-1" d="m103,64c0,12.1,3.2,31.4,16,39.9,8.1,6.1,19.1,2.1,29.6-2.9"/><path class="cls-1" d="m108.1,61.4c3.9-1.8,12.1-2,15.2-.9"/><path class="cls-1" d="m137.7,60.4c6.6-2.7,16,1.3,16.6-1.7"/><path class="cls-1" d="m122.3,79.7c-.4,3.5-.4,6.6,8.9,5.1"/><path class="cls-1" d="m162.3,66.1c-.1-3.7,2-7.3,5.4-5.7,5.4,1.5.2,21.5-5.8,16.6"/><path class="cls-1" d="m161.8,73.1c-.6,11.9-4.8,23.6-13.1,27.9"/><path class="cls-1" d="m108.1,61.4c.4-6.9,16.5-9.1,15.2-.9"/><path class="cls-1" d="m137.7,60.4c-.8-2.1-.3-1.8,0-3.7,3.9-3.2,16.3-6.4,16.6,2"/><path class="cls-1" d="m117.8,67c0,4-2.8,4-2.7,0,0-4,2.8-4,2.7,0Z"/><path class="cls-1" d="m145.6,66.1c0,4.1-3,4.1-3,0,0-4.1,3-4.1,3,0Z"/><path class="cls-1" d="m167.1,53.9c-.2,3.5-.5,3-1.2,6.1"/><path class="cls-1" d="m100.9,60.1c-.4-2.9-.6-4.6-.8-6.2"/><path class="cls-1" d="m100.3,60c-2.8,4.9-.5,18.3,4.6,21.8"/><path class="cls-1" d="m143.6,87.8c-4.4,6.4-19.3,10.5-23.7,1.5"/><path class="cls-1" d="m119.9,89.3c7.4,2.8,22.2-.2,23.7-1.5"/><path class="cls-1" d="m100,53.8c-3.4,2.3-3.7-15.6.1-16.3,22.3-4.9,43.4-7.2,67.8,1.2,2.8,1,4.2,17.4-.7,15.1-2.5-1.1-5.9-1.9-10.3-2.6-16.2-2.1-40.8-3-56.9,2.5Z"/><path class="cls-1" d="m163.9,37.5c-4.3-16.6-12.1-35.7-30.7-35.9-20.1-.1-24.4,14.9-30.6,35.5"/><path class="cls-1" d="m156.9,51.4c-.9,5.2,1.1,10.7,5,14.2l.2-.8"/><path class="cls-1" d="m105.7,52.3c-1,2.6.8,12.6-3.7,11.2-.9-.8-.2-2.7-1.2-3.4"/><path class="cls-1" d="m133.3,1.5c-4.4,3.5-7.7,23.9-7.7,31.6"/><path class="cls-1" d="m123.7,33.6c-.5,6.4.2,10.6,1.8,16.3"/><path class="cls-1" d="m153.9,97c1.9,1.8,2.6,4.9,1.8,7.4"/><path class="cls-1" d="m125.1,106.8c0,1.7-.7,3.3-1.9,4.6"/><path class="cls-1" d="m143.3,103.6c-2.3,2.6-5.1,4.9-8,6.8"/><path class="cls-1" d="m120.1,104.8c-3.2,2.5-5.9,5.8-7.6,9.5"/><path class="cls-2" d="m117.8,147c-4.4,2.6-10.1,10.8-10.5,10.8-1.8-2.4-2.9-8.5-2.5-8.5"/><path class="cls-2" d="m107.7,158c-2.2,6.2-2.5,13.1-.7,19.4"/><path class="cls-1" d="m119,104c-5.6.9-8.7,7.4-11.8,11.6"/><path class="cls-2" d="m119,104h0"/></svg>')}`;
export default image;