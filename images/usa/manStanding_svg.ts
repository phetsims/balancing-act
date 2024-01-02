/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="USA" xmlns="http://www.w3.org/2000/svg" width="157.2" height="423" viewBox="0 0 157.2 423"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12{stroke-width:0px;}.cls-3{fill:#282c2d;}.cls-4{fill:#9b7a6b;}.cls-5{fill:#3a3a3a;}.cls-6{fill:#444545;}.cls-7{fill:#152b50;}.cls-8{fill:#cc9f81;}.cls-9{fill:#dad9e1;}.cls-10{fill:#b32a2e;}.cls-11{fill:#847b63;}.cls-12{fill:#fff;}</style></defs><path class="cls-7" d="m75.8,236.8c-16.7,2-21-1.8-35.3-5.4-.8-24.8.2-57.7-.5-81.6h-.8c-2.8,3.7-10.4,21.9-11.1,21.1l-.4.3c2.6,4,4.5,8.8,6.3,13-4.9,1.2-8.6,6-10.3,10.7-6.4-9.1-18.6-20.2-13.7-29.8h.2c6.1-16.5,16.8-50.9,31.8-61.5,3-.7,11.3-1.9,14.1-1.3-2.3,5.5,8.5,14.5,11,15.8,0,0,.5-1.6,1.6-3.7h0c2.2,5.9,9.7,4.4,11.3-.8,2.2,2.2,3.4,4.1,3.4,4.1,3-3.7,10.2-11.1,7.3-16.1,3.2.6,2.4-.3,5.2,0h0c17.4.6,20.8,7.2,30.4,19.7,37,53.5,23,52.9,4.1,78.4-3.1-3.4-6.4-7.3-10.6-9.2,4.3-7.5,5.1-15.3,9.1-21.5-.4.2-.8.4-1.2.6-2.6-3.1-11-15.1-18.3-25.7l-.9.7c-4.4,16.9-5.9,37-3.2,53.8-2.5,1.1-4.1,2.9-3.5,6.4-2.6,3-4.9,6.6.9,8.2-1.1,3.1.9,5.2,2.6,5.5-1.4,2,.6,3.7,2.1,4.2.3,1.6.6,5.9,1.1,8.1-8.8,5.4-22.6,5.2-32.5,6Z"/><path class="cls-9" d="m114.9,196.1c-.6-.4-1.1-.7-1.7-.9,4.6-12.7,14.4,2.6,19.4,7-1.6,2.5-3.9,5-6,7-2.1-5.2-7.3-10.2-11.7-13.1Z"/><path class="cls-6" d="m107.4,52.2l.5-.2c1.6,1.4,1.9,6.2-.2,7.1.3-5.8-8.3-5.3-7.8,1,0,1.1-2.3.8-3.9.5.2-2,.3-4,.4-6.1,4.1,1.7,6.8-2.3,11-2.3Z"/><path class="cls-6" d="m70.4,52.7c0-.6-.1-1.2-.2-1.9l.5-.6,25,.9v.3c-.2,2.7-1.1,12.1-1.6,12.9h-22.1c-.8-4.2-1.2-7.6-1.5-11.6Zm23.1.4q0-.1,0,0c-2.3,0-16.5-.3-21.2-.6.4,4.1.7,6.5,1.4,10,4.8.2,12.5.3,18.3.1.5,0,1.3-8.6,1.4-9.6h0Z"/><path class="cls-12" d="m93.6,53.1c-.1,1-.9,9.6-1.4,9.6-5.8.1-13.5,0-18.3-.1-.7-3.5-1-6-1.4-10,4.7.3,18.9.6,21.2.6Zm-9.5,4.3c0-3.8-2.8-3.8-2.8,0,0,3.9,2.8,3.9,2.8,0Z"/><path class="cls-9" d="m79.9,113.5c-1.4-1.4-3.1-2.9-5.1-4.2v-.2c6.9-.5,12.1-4.8,11.5-12h.7c8.8,6.1,1.4,14.8-3.7,20.5,0,0-1.2-1.9-3.4-4.1Z"/><path class="cls-2" d="m82.6,54.5c1.8,0,1.8,6,0,5.9-1.8,0-1.8-6,0-5.9Z"/><path class="cls-10" d="m74.7,109.4c2,1.3,3.8,2.8,5.1,4.2-1.7,5.1-9.1,6.7-11.3.8h0c.9-1.6,2.1-3.5,3.8-5.1.8,0,1.6,0,2.5,0v.2Z"/><path class="cls-11" d="m108.3,230.7c-11,6.3-26.7,5.4-39,6.3-10.1,1.6-19.7-4-28.8-5.7-3.5,32.5-11.9,117-17.1,151.8,9.1,10.9,17.7,22.2,32.2,11.6,0-7.9,16.6-132.8,16.6-141.9l.7-.4c.1.2.2.3.3.5h.1c4.5,20.1,24.1,123.2,25.8,144,8.4,3.3,7.2,5.3,15,1.2,3.5-1.8,16.4-9,19.9-15,0,0-15.6-92.7-25.7-152.4Z"/><path class="cls-6" d="m70.4,52.7c0,1,.2,2,.3,2.9-2.2-.1-4.4.2-6.7.2.1-.9.2-1.9.3-2.9,2.1.1,4.1,0,6.1-.1Z"/><path class="cls-9" d="m60.8,103.6h0c2.2,3.5,6.8,5.4,11.4,5.6-2.2,1.9-5,7.2-5.4,8.8-3.3-1.6-18.1-14.8-7.5-18.7h0c.4.1.8.3,1.2.5h0c.3,1.8-.2,2.3.2,3.9Z"/><path class="cls-6" d="m40.9,54.4h0c-.2-1.1-.4-2.3-.5-3.4l24.2-.7c-.3,4.6-.8,8.6-1.6,13.2-5.6.2-14.4.4-21.1.2-.1,0-.3-.6-.5-1.5.3-2,.6-2.5.5-3h0c-.3-1.4-.6-3-.9-4.7Zm1.3-1.7s0,0,0,0h0c.1,1,.9,9.2,1.4,9.2,5.6.1,12.9,0,17.6-.1.7-3.3,1-5.7,1.4-9.6-4.5.3-18.1.6-20.3.6,0,0,0,0,0,0Z"/><path class="cls-12" d="m62.5,52.3c-.4,3.9-.7,6.3-1.4,9.6-4.7.2-12,.3-17.6.1-.5,0-1.2-8.2-1.4-9.2,2.2,0,15.8-.3,20.3-.6Zm-7.2,5.3c0-3.8-2.6-3.8-2.6,0,0,3.8,2.6,3.8,2.6,0Z"/><path class="cls-3" d="m112.8,40.9c-1.4-27.4-15-37.6-38.2-39.2-6.4-1.3-22.7-1.4-29.8,7.7-13.2,13.9-14.3,17.1-5.5,45.2.6,0,1.1-.2,1.7-.2-.7-4.1-1.3-8.9-1.3-12.9h0c4.1-24.9,11.4-16.4,26.5-13.1,29.3-5.2,30.5-11.1,30.2,26,4.2,1.6,7.3-2.2,11.5-2.5,1.6,1.4,1.9,6.2-.2,7.1-.6,3.7-3,16.1-7.4,12.9.2,3.2.3,6.2-.2,8.5,1-.8,1-.8,2-2,3,3.6,7.5-16,8.3-20-.5,12,2.8-15.8,2.3-17.6Z"/><path class="cls-3" d="m84.8,46.3c-2-1.2-6.1,0-8,1.1.4,1,0,2,.7,2.2,7.6-1.1,18.2,1,7.2-3.2Z"/><path class="cls-3" d="m52.8,45.9c-3.1,0-6.8,2.5-7.4,4.4,3.2-1,9.8-1.1,12.4-.5,1.3-3.7-2-3.9-5.1-3.9Z"/><path class="cls-2" d="m54.1,54.6c1.7,0,1.7,5.9,0,5.8-1.7,0-1.7-5.9,0-5.8Z"/><path class="cls-5" d="m155.8,404.8c2.8-13.4-14.6-17.9-22.8-20.1-7.1,7-19.1,15.6-26.4,15.7v.2c1.2,6.4,9.7,4.1,17.6,16.3,8.6,10.2,23.5,7.1,30.7-3.3,1.8-2.6,3-6.3,1-8.8Z"/><path class="cls-5" d="m52.4,396.6c-14.4,7.5-20.1-4.2-28.9-13.5-20.8,5.4-21.9,15.9-21.6,22.8h-.2c-5.4,6.8,12.7,14.1,20.2,11.6,5.8-1.9,12.4-6.3,18-8.8,4.5-1.7,13.4-2.9,12.4-9.7.3-.4.5-.8.7-1.3l-.5-1Z"/><path class="cls-6" d="m40.5,54.5c.1,1.5.3,3.3.5,4.9-3.7.8-2.7-1.9-3.5-4.4.7-.1,2.2-.4,3-.5Z"/><path class="cls-4" d="m124.9,205.8c-2.5-3.8-6.5-7.6-10-9.8-4.6,1.5-14.6.9-13.2,8.7-2.6,3-4.9,6.6.9,8.2-1.1,3.1.9,5.2,2.6,5.5-1.6,2.3,1,4.2,2.9,4.3.6,9.7,20.2-7.3,16.3-15.7.3-.6,0-.6.5-1.2Z"/><path class="cls-4" d="m100.3,72c4.3,3.2,6.7-9.2,7.4-12.9.3-5.8-8.3-5.3-7.8,1,0,1.1-2.3.8-3.9.5,1.2-10.7.1-32.9-2.5-34.3-5.9-5.1-18.1,2.3-27.4,2.3-15-3.3-22.4-11.8-26.5,13.1h0c0,2.9.3,6.3.8,9.5l24.2-.7c0,.9-.1,1.8-.2,2.6,2.1.1,4.1,0,6.1-.1,0-.6-.1-1.2-.2-1.9l.5-.6,25,.9v.3c-.2,2.7-1.1,12.1-1.6,12.9h-22.1c-.6-3.3-.9-5.8-1.2-8.8-2.2-.1-4.4.2-6.7.2-.3,2.6-.6,4.9-1.1,7.7-2.2-.5-22.2,2.1-21.6-1.3-.6,3.7-1.2,10.5,1.4,15.1,6.6,10.6,7.7,17.6,17.8,22.4h0c.3,1.8-.2,2.3.2,3.9h0c7.4,10.4,28.6,6,25.5-9h0c7.1-5.1,16.8-11.7,14.1-22.7Zm-42.4-22.2c-2.6-.7-9.3-.5-12.4.5.6-3.7,14.3-7.6,12.4-.5Zm19.7-.2c-.7-.2-.4-1.1-.7-2.2,1.9-1.1,5.9-2.2,8-1.1.9.5,4.4,1,4.6,2.4-.4,1.4-6.6-.5-11.9.8Z"/><path class="cls-4" d="m40.2,193.6c-.4-.9-1.7-2.8-2.6-4,0,0,0,0,0,0h0s0,0,0,0c0,0-.1-.2-.1-.2,0,0,0,0,0,0-3.9,3.7-5.8,7.9-7.8,12.4,5.3,5,4.5,21.6,10.7,22.8-.1-8.5-.2-19.9-.1-30.9Z"/><path class="cls-9" d="m33.9,184.1c.8-.2,1.6-.3,2.4-.3.5,1.3,1.8,3.4,2.4,4.4-5.7,4.6-7.7,10.9-10.7,17-10.2-6.1-2.2-18.5,5.9-21.1Z"/><path class="cls-8" d="m37.6,189.5s0,0,0,0h0Z"/><path class="cls-8" d="m37.6,189.5h0s0,0,0,0c0,0,0,0,0,0Z"/><path class="cls-1" d="m41.8,59.2c-3.7,13.1,2.8,22,8.7,31.7,11.2,19.2,35.1,7.6,47.8-6.9"/><path class="cls-1" d="m40.9,54.4c.3,1.7.6,3.3.9,4.7"/><path class="cls-1" d="m39.8,37.4c-.7,5.4.2,11.5,1.1,17.1"/><path class="cls-1" d="m45.4,50.2c3.2-1,9.8-1.1,12.4-.5"/><path class="cls-1" d="m77.6,49.5c5.3-1.3,11.4.6,11.9-.8"/><path class="cls-1" d="m64.2,65.4c-1.4,1.7-3.9,1.6-5.1,4.3,0,3.5,1.5,4.4,3.7,5.2"/><path class="cls-1" d="m39.6,41.5c4.1-24.9,11.4-16.4,26.5-13.1,9.3,0,21.5-7.4,27.4-2.3,2.6,1.5,3.6,23.6,2.5,34.3,1.6.3,3.9.7,3.9-.5-.5-6.3,8.1-6.7,7.8-1-.6,3.7-3.1,16.1-7.4,12.9"/><path class="cls-1" d="m103.8,12.8c-8.4-8.4-19.3-9.7-29.2-11.1"/><path class="cls-1" d="m39.2,54.2c-8.9-28.1-7.3-31,5.6-44.8"/><path class="cls-1" d="m99.9,80.6c1-.9,1.2-1,2.2-2.2,3,3.6,7.5-16,8.3-20,.1-.6-.1,4.2,0,3.7,4.1-16.4,2.3-38.2-6.7-49.4"/><path class="cls-1" d="m44.8,9.4C52.1.3,68.1.4,74.6,1.7"/><path class="cls-1" d="m100.1,69.2c.1,5.1,1.5,11-1.7,14.8"/><path class="cls-1" d="m55.6,102.1c-2.7-.3-10.9.6-13.8,1.4-15.1,10.8-25.9,45.4-32,62.2"/><path class="cls-1" d="m129.3,168.9c-.6.3-1,.5-1.7.8-3.3-4-17.5-24.5-24.2-34.1"/><path class="cls-1" d="m94.7,101.6c18.1.4,21.6,6.5,31.6,19.8,29.2,38.2,22,52.9,22,52.9"/><path class="cls-1" d="m39.7,125c.4,32.3.4,72.7.8,106.3,14.3,3.6,18.6,7.4,35.3,5.4,10.1-1.2,25.7,0,33.6-7.3"/><path class="cls-1" d="m108.4,144.7c-4.5,16.5-5.4,36.2-3.6,52.7"/><path class="cls-1" d="m29.2,201c5.8,5.3,4.9,22.5,11.3,23.5"/><path class="cls-1" d="m9.9,164.9c-4.8,9.7,7.4,20.8,13.8,29.9"/><path class="cls-1" d="m39.2,149.7c-2.8,3.6-10.5,22.2-11.2,21"/><path class="cls-1" d="m37.6,189.5s0,0,0,0c.9,1.5,2.6,3.4,2.7,4.5"/><path class="cls-1" d="m37.5,189.4c0,0,0-.1,0-.1h0"/><line class="cls-1" x1="37.6" y1="189.5" x2="37.6" y2="189.5"/><path class="cls-1" d="m37.5,189.4s0,0,0,0h0s0,0,0,0c0,0,0,0,0,0"/><path class="cls-1" d="m22.3,165.2c6,4.5,8.9,12.6,11.7,19.1"/><path class="cls-1" d="m125,205.6c-.5.6-.4.9-.7,1.4"/><path class="cls-1" d="m148.3,174.3c-2.7,8.2-11.6,18.2-18,25.6"/><path class="cls-1" d="m119.7,190.6c6.3-11.4,5.4-22.7,17.5-29.1"/><path class="cls-1" d="m104.5,201.5c-2.3,3.1-10.1,9.3-2,11.5-1.1,3.1.9,5.2,2.6,5.5-1.6,2.3,1,4.2,2.9,4.3.6,9.7,20.2-7.3,16.3-15.7"/><path class="cls-1" d="m115.2,196c-4.6,1.7-15,.9-13.5,8.9"/><path class="cls-1" d="m40.5,231.3c-3.5,32.5-11.9,117-17.1,151.8,9.1,10.9,17.7,22.2,32.2,11.6,0-7.9,16.6-132.8,16.6-141.9"/><path class="cls-1" d="m73,251.1c4.9,21.2,24.3,123.8,26.2,145.8,8.4,3.3,7.2,5.3,15,1.2,3.5-1.8,16.4-9,19.9-15,.3.1-18-104.4-26.9-160.7"/><path class="cls-1" d="m1.9,406.1c-.3-7.2.6-17.5,21.6-23"/><path class="cls-1" d="m2.2,405.9c11.7,14,26.1,4.2,39.1-2.2,3.6-1.5,9.9-1.5,11.7-6"/><path class="cls-1" d="m108.3,400.6c8.9,4.1,15.7,12.9,24.1,17.2,7.9,2.9,21.8-4.4,23.5-13.7,2-12.5-14-16.5-21.2-19.1"/><path class="cls-1" d="m1.6,405.9c-5.4,6.8,12.7,14,20.2,11.6,5.8-1.9,12.4-6.3,18-8.8,4.7-1.7,14.1-3.2,12.2-10.4"/><path class="cls-1" d="m106.5,400.6c1.3,6.3,9.8,4.1,17.7,16.3,9.5,14.2,38.4.9,31.3-12.5"/><path class="cls-1" d="m86.3,94.6c0,2.2-.3,5.3-.3,6.9"/><path class="cls-1" d="m60.6,101.9c0,.7.1,1.4.3,2.2"/><path class="cls-1" d="m60.5,99.7c.4,1.4,0,1,0,2.2"/><path class="cls-1" d="m90.6,101.6c3.2.6,2.5-.2,5.3.1"/><path class="cls-1" d="m45.4,50.2c.6-3.7,14.3-7.6,12.4-.5"/><path class="cls-1" d="m77.6,49.5c-.7-.2-.4-1.1-.7-2.2,1.9-1.1,5.9-2.2,8-1.1.9.5,4.4,1,4.6,2.4"/><path class="cls-1" d="m57.5,85.1c6.8,2.4,16.7,1.2,23.5-3.1"/><path class="cls-1" d="m102.9,59.8c0,2-.6,3.8-1.4,5.6"/><path class="cls-1" d="m55.4,57.6c0,3.8-2.6,3.8-2.6,0,0-3.8,2.6-3.8,2.6,0Z"/><path class="cls-1" d="m84,57.4c0,3.9-2.8,3.9-2.8,0,0-3.8,2.8-3.8,2.8,0Z"/><path class="cls-1" d="m42.2,52.8h0"/><path class="cls-1" d="m42.2,52.8c.1,1,.9,9.2,1.4,9.2,5.6.1,12.9,0,17.6-.1.7-3.3,1-5.7,1.4-9.6-4.5.3-18.1.6-20.3.6Z"/><path class="cls-1" d="m42.2,52.7s0,0,0,.1"/><path class="cls-1" d="m42.2,52.8c0,0,0,0,0,0"/><path class="cls-1" d="m40.2,51.4c.3,1.5.6,10,1.6,12.3,6.7.2,15.5,0,21.1-.2.8-4.6,1.2-8.4,1.6-12.9"/><path class="cls-1" d="m93.6,53.1h0"/><path class="cls-1" d="m93.6,53.1c-.1,1-.9,9.6-1.4,9.6-5.8.1-13.5,0-18.3-.1-.7-3.5-1-6-1.4-10,4.7.3,18.9.6,21.2.6Z"/><path class="cls-1" d="m93.6,53.1q0-.1,0,0"/><path class="cls-1" d="m72,64.2c-.9-4.7-1.3-8.7-1.7-13.4"/><path class="cls-1" d="m95.7,51.6c0,0,0-.1,0-.1-.3,2.8-.9,12.2-1.7,13"/><path class="cls-1" d="m95.5,54c4.2,2.7,7.5-1.9,11.9-1.9"/><path class="cls-1" d="m41.1,54.4c0,0-.1,0-.2,0-1,0-2.6.4-3.5.6.6,3.4.6,5.7,4.8,4"/><path class="cls-1" d="m64.7,52.9c2,0,3.9,0,5.8-.2"/><path class="cls-1" d="m64.1,55.8c2.3,0,4.6-.4,6.9-.2"/><path class="cls-1" d="m76.4,242.4c-.4-.5-.8-4-.6-6.1"/><path class="cls-1" d="m69.2,236.2c.4,6.9.5,11.9,4,16.7"/><path class="cls-1" d="m40.2,51c.4,0,24.2-.7,24.5-.8"/><path class="cls-1" d="m70.7,50.2c.4,0,24.9.9,25.3.9"/><path class="cls-1" d="m72,64.2c.4,0,22.2.1,22.6.1"/><path class="cls-1" d="m107.9,51.9c1.6,1.4,1.9,6.3-.3,7.2"/><path class="cls-1" d="m60.8,103.6c5.1,7.9,21.9,7.8,25.1-2"/><path class="cls-1" d="m59.3,99.2c-10.6,3.9,4.2,17.2,7.5,18.7.4-1.8,3.3-7.2,5.7-9.1"/><path class="cls-1" d="m87,97.2c8.8,6.1,1.4,14.7-3.7,20.4-.6-1.3-5.8-6.9-8.5-8.3"/><path class="cls-1" d="m68.5,114.3c2.2,6,9.9,4.3,11.4-1"/><path class="cls-1" d="m38.4,188.4c-5.6,4.6-7.4,10.8-10.4,16.8-10.9-6.5-1.1-21,8.3-21.4.7,1.5,2,3.8,2.7,5"/><path class="cls-1" d="m113.1,195.1c5.3,2.8,11,8.2,13.5,14,2.1-2,4.4-4.5,6-7-5.2-5-15.5-20-19.8-6"/></svg>')}`;
export default image;