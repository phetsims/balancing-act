/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Latin_America" xmlns="http://www.w3.org/2000/svg" width="125.4" height="302" viewBox="0 0 125.4 302"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-2{fill:none;stroke:#010101;}.cls-2{stroke-miterlimit:10;}.cls-3{fill:#454847;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11{stroke-width:0px;}.cls-4{fill:#4e453e;}.cls-5{fill:#2b2c2b;}.cls-6{fill:#191411;}.cls-7{fill:#cc4b81;}.cls-8{fill:#ae856a;}.cls-9{fill:#fff;}.cls-10{fill:#e7cfd6;}.cls-11{fill:#010101;}</style></defs><path class="cls-8" d="m74.6,157c-.3-.7-.4-1.5.2-2.5-4.3-1.6-2.2-3.8,0-5.5-.4-4.2,4.3-4.3,8.2-4.4,11,.5,11.9-17.5,18.3-22.5-.7-.8-9.2-10-11.8-12.8,3-3.5,7.7-10.3,10.1-12.2,2.8,3.6,13.3,18.1,14.4,20.7,2.4,5.6-3.9,18.9-8.4,22.9-3.3,2.9-10.4,8.6-13.5,11.9.9,3.8-3.6,8-6.9,9.6-.4.2-.8.3-1.1.5h0c-2.8,1.1-6.4,1.8-5.9-1.2-1.1-.1-3.4-1.7-1.9-3.1-.7-.2-1.4-.7-1.7-1.4Z"/><path class="cls-8" d="m102.9,291.7c1.2,2,.7,4.7-1.4,5.8-2.1-3.8-4.3-5.2-2.8-9.8,1.6,1.1,3.3,2.3,4.2,4Z"/><path class="cls-10" d="m87.4,111.4c-.9-.9-1.5-1.7-2-2.2,3.8-5.7,8-11.2,12.6-16.3h.6c1.3,2.1,1.8,3.8,1.1,4.3-3.1,2.3-8.3,11.2-12.3,14.2Z"/><path class="cls-7" d="m84.6,108.1c-.5-.6-.8-1.1-1.2-1.7,3.8-6,7.8-12,12.7-17.1.9,1.2,1.7,2.4,2.4,3.4h-.6c-4.6,5.2-8.8,10.6-12.6,16.4-.3-.4-.6-.7-.8-1Z"/><path class="cls-7" d="m83.4,180.9v-.4c3.1,0,3.6,4.7.5,5.2-3.3.5-3.9-4.7-.5-4.8Z"/><path class="cls-8" d="m84.8,162.5c.2,0,.3-.1.5-.2-.1,0-.3.1-.5.2Z"/><path class="cls-8" d="m94.3,297.6c-4.1-1.2-7.5-2.4-10.7-4v-.2c4.9-.2,11.1.1,13.6,4.9-1-.1-1.9-.4-2.8-.7Z"/><path class="cls-8" d="m84.1,162.8c.2,0,.5-.2.7-.3-.2,0-.5.2-.7.3h0Z"/><path class="cls-7" d="m83.8,169.5c1.9,6.9-11.4,2.9-1.5-1.8.6.5,1.1,1.1,1.5,1.8Z"/><path class="cls-7" d="m81.9,193.2c3,1.1,1.7,5.8-1.5,5.1-3.4-1-1.9-5.9,1.5-5.1Z"/><path class="cls-4" d="m39.3,79.9c3.5,27.4,0,24.3-5.5.7C27,57.1,19,8.6,53.3,2c13.3-1,32.4,9.1,34.4,20.2,3.6,20.3,3.6,39.2-2.5,57.9-8,23-16.3,33-7.7-.2,7.5-26-.3-52.1-26.2-65.8-20.4,17-15.2,42.6-12,65.9Z"/><path class="cls-7" d="m76,208.4c-2.6-1.8-1-6.2,2.2-5.7v.5c5.8,0,2.1,8.4-2.2,5.2Z"/><path class="cls-7" d="m84,162.8c-21.5,8.8-46.2,2.9-50.4-.3.2-2.6.4-4.9.7-7.1,12.5,5.4,26.9,4.5,40.4,1.7.4.7,1.1,1.2,1.7,1.4-1.5,1.4.8,3,1.9,3.1-.5,2.9,3,2.3,5.8,1.2Z"/><path class="cls-7" d="m102.9,291.7h0c1.2,2.1.7,4.8-1.4,5.9-2.1-3.8-4.3-5.2-2.8-9.8-1.8-1.2-3.5-2.3-5.3-3.4,5.2,10.5-12.8,3.6-17.7,3.6h0c-1.3-1.1-2.3-2.6-2.5-4.4-6.1,17.5,39.1,26.9,29.7,8.2Zm-8.6,5.9c-4.1-1.2-7.5-2.4-10.7-4v-.2c4.9-.2,11.1.1,13.6,4.9-1-.1-1.9-.4-2.8-.7Z"/><path class="cls-8" d="m75.6,288c-1.9-1.6-2.6-3.8-2.2-6.2.2-9-1.4-17.5-2.4-22.5-4.3-15.8-1.5-32.7-6.1-48.2,7.8-.2,14.3-1.3,20.6-3.9.1,11.3.3,17,2.9,26.8,1,9.1-2.8,29-1.7,46.4,2.3,1.2,4.5,2.5,6.7,3.8,5.2,10.5-12.8,3.6-17.7,3.6h0Z"/><path class="cls-5" d="m72.4,78.7c-.2-2.8-.4-4.4-.4-8.6,1.6-1,5.8-3.9,8.2-10.5-.1,6.7-1.3,13.4-2.7,20-1.5-.3-4.5-.3-5.1-1Z"/><path class="cls-7" d="m68.4,188.3c-3.2-1.1-1.7-5.9,1.6-4.9,3.1,1.1,1.6,5.8-1.6,4.9Z"/><path class="cls-7" d="m67.2,202.4c-2.9-.1-3.8-4.1-1.5-5.7,1-.8,2.7,1.3,3.9,1.7,1.4,1.7-.3,4.2-2.3,4Z"/><path class="cls-6" d="m72.1,33.6c-1.3.8-12.1,1.2-10.7-1.7,4.5-2,10-.2,10.7,1.7Z"/><path class="cls-11" d="m65.7,38.4c2.6-.1,2.6,7.9,0,7.8-2.6,0-2.6-7.9,0-7.8Z"/><path class="cls-9" d="m67,59.5c-4.3,7-15.2,8.8-19.3,2h0c5.7,1.8,18.2-1,19.3-2Z"/><path class="cls-7" d="m63.3,173.7c-3.5,0-3.4-5.5.2-5.4,3.4.2,3.3,5.4-.2,5.4Z"/><path class="cls-7" d="m53.4,173.7c3.4.2,3.1,5.4-.2,5.3-3.4-.2-3.1-5.4.2-5.3Z"/><path class="cls-7" d="m48.3,208.1c-1.7-1.5-.7-4,.6-5.5l.9.2c6.3-1.5,3.6,8.6-1.4,5.3Z"/><path class="cls-7" d="m49.7,192c-4.2.4-3.4-5.4,0-5.8,3.1.6,3.3,5.3,0,5.8Z"/><path class="cls-7" d="m60,87.7c-5.9-.2-11.9-3.6-14.7-8.9,1-.2,1.9-.4,2.8-.6,0,0-.1,0-.2,0,5.9,7.6,18.2,7.9,24.5.7.3.2,1.3.4,2.6.5-2.8,5.2-9.2,8.4-15.1,8.2Z"/><path class="cls-11" d="m43.4,45.6c-2.1,0-2.1-6.9,0-6.8,2.1,0,2.1,6.9,0,6.8Z"/><path class="cls-7" d="m43.1,171.1c-1.8,5.9-7.7-2.2-1.6-2.4h0c.8.6,1.5,1.4,1.6,2.4Z"/><path class="cls-10" d="m60,87.7c5.9.1,12.3-3,15.1-8.2.7,0,1.5.2,2.3.3-8.6,33.3-.3,23.2,7.7.2,3.7,1.2,7.9,5.3,11,9.3-4.9,5.1-9,11.1-12.7,17.1.4.6.7,1.1,1.2,1.7-1,10.5-1.6,25.7-1.6,36.5-3.9.1-8.6.2-8.2,4.4-2.2,1.7-4.3,4,0,5.5-.5.9-.5,1.8-.2,2.5-13.5,2.8-27.8,3.8-40.4-1.7,4.6-17.7.5-34.6-.6-52.6-4.3-2.3-8.4-5-12.2-7.9,3.5-5.9,6.1-10.6,12.4-14.2,5.5,23.5,8.9,26.7,5.5-.7,1.8-.3,4-.7,6.1-1.1,2.7,5.3,8.7,8.8,14.7,8.9Z"/><path class="cls-6" d="m41.2,34c-1.1,0-2,0-2.8-.5.6-1.6,5.8-3.2,9.8-1.6.9,2.7-5.4,1.5-7,2Z"/><path class="cls-5" d="m48.9,73.2c.1,1.6-.2,3.2-.5,4.8-2.8.8-6.4,1.4-9.1,1.8-1.2-8.7-2.6-17.5-2.9-25.6,0,8.2,6.3,14.9,12.5,19Z"/><path class="cls-7" d="m37.5,196.3c-3.2.8-4.9-3.8-1.8-5.2,3.9-.6,5.4,3.5,1.8,5.2Z"/><path class="cls-8" d="m79.8,54.6c-1.1-17.2-12.1-31.2-28.5-40.6-16.6,13.9-23.2,46.9-2.4,59.3.1,1.6-.2,3.3-.5,4.9-.1,0-.3,0-.4.1,5.9,7.6,18.2,7.9,24.5.7-.1,0-.2-.1-.1-.2-.2-2.8-.4-4.4-.4-8.6,2-.5,9.3-7.5,7.9-15.6Zm-36.4-9c-2.1,0-2.1-6.9,0-6.8,2.1,0,2.1,6.9,0,6.8Zm-2.2-11.6c-1.1,0-2,0-2.8-.5.6-1.6,5.8-3.2,9.8-1.6.9,2.7-5.4,1.5-7,2Zm6.5,27.5h0c5.7,1.8,18.2-1,19.3-2-4.3,7-15.2,8.8-19.3,2Zm16-19.2c0-5,4.1-5,4.1,0,0,5-4.1,5-4.1,0Zm5.3-8.1c-2.4-.3-5,0-7.3-.8-2.6-3.8,10.7-2.2,10.4.2-.9.6-1.9.6-3.1.6Z"/><path class="cls-10" d="m33.8,106.3c0,1.3.2,2.6.3,3.9-.6-.4-1.6-1.1-2.9-1.9h0c-3.4-2.3-8.5-5.6-10.9-7.6-2.1-1.5-.8-1.9-.2-3.4,4.2,3.5,8.6,6.8,13.7,9Z"/><path class="cls-7" d="m33.6,102.8c0,1.2,0,2.3.1,3.5-5-2.2-9.5-5.5-13.7-9,.4-.8.8-1.6,1.3-2.5,3.9,3,7.9,5.6,12.2,7.9Z"/><path class="cls-8" d="m18.5,136c-14.5-13.6-5.8-20.1,1.8-35.3,2.3,1.9,7.4,5.3,10.9,7.6-1.5,2.8-7.6,12.4-7.8,11.9h0c3,8,10.1,16.3,12.5,24.2h0c-.8,5.6-2,11.9-2.4,18.2-5.5,0-6.5-19.5-15-26.5Z"/><path class="cls-7" d="m29.3,184.3c-.4-3.2,4.6-3.6,4.7-.3,0,2.8-4.3,3.1-4.7.3Z"/><path class="cls-8" d="m32.7,219.7c-.6-3-.5-8.5,0-11.2,5.2,1.3,12.4,2.3,20.3,2.6-1.9,8.2-.6,25.9-2.5,29.9-4.3,16.1-6.8,23.1-7.5,40.7h.1c-.2,2.2-1.1,4.2-2.3,5.9-5.7,1.4-22.2,4.4-14.5-6.3h0c1.2-.7,2.3-1.3,3.4-1.8,2.2-22.4-1-39,2.9-59.8Z"/><path class="cls-8" d="m33.3,293.3c-4.2,1.8-9.1,2.5-13.7,2,3.8-2.2,9.4-3.3,13.7-2Z"/><path class="cls-3" d="m80.6,193.2c-2.8.4-2.9,4.5-.2,5.1,4,.9,4.3-5.8.2-5.1Zm-41.3-.4c-1.1-2.8-6-1.8-5.3,1.4.8,3.6,6.4,2.1,5.3-1.4Zm24.1-24.4c-3.5-.1-3.7,5.3-.2,5.4,3.4,0,3.6-5.2.2-5.4Zm-32.3,13.3c-2.8.6-2.2,4.8.6,4.7,3.2-.3,2.5-5.3-.6-4.7Zm52.5-9.6c1-1.5-.2-3.4-1.4-4.4-5.8,1.8-3.7,8.2,1.4,4.4Zm-7.7,36.3c4.3,3.2,8-5.3,2.3-5.2v-.5c-3.3-.5-4.9,3.9-2.3,5.7Zm-9.3-23.2c-.8,3.2,4,4.6,5,1.5,1-3.2-4.1-4.7-5-1.5Zm-17.7,17.4c-4,3.8,1.2,9,4.3,4.2,1.2-2.2-1.1-5-3.5-4l-.9-.2Zm1.7-26.4c-.1,3.4,5,3.6,5.2.3.1-3.4-5-3.6-5.2-.3Zm-9.1-7.4c-2.7-.5-3.8,3.5-1.2,4.4,2.8.6,3.7-3.2,1.2-4.3h0Zm44.5,14c-.2-1.2-1.4-2.2-2.6-2.3v.4c-6.6,1.9,2.2,8.7,2.6,1.8Zm-52.5-20.2c4.2,3.2,29.2,9.1,50.6.3,2.4,11,6.3,35.9,7.4,41.6-9.3,5.4-19.5,7.1-30.8,6.8,0,.3-1.9-15.6-3.8-25.4.1,12.8-1.2,15.4-1.2,25.3-10.9-.4-21.4-1.2-29.5-5,.1-.8.2-1.6.3-2.4.9,3.1,5.8,1.7,4.9-1.4-.6-2-3.6-2.5-4.6-.5,2.1-14.8,2.8-24.7,6.7-39.3Zm13.2,27.2c.6,3.3,5.6,2.6,5.4-.7-.4-4.4-5.4-3-5.4.7Zm23.3,10.5c.1-.7,0-1.4-.5-1.9-1.2-.4-2.9-2.5-3.9-1.7s-1.5,2.2-1.2,3.4c.6,2.8,4.9,3.1,5.5.2Z"/><path class="cls-7" d="m26.8,201.8c1-1.9,4-1.5,4.6.5.9,4.6-6.5,3.9-4.6-.5Z"/><path class="cls-7" d="m43.1,282.5h0c-.3,1.9-1.1,3.6-2.2,5.2-5.7,1.4-22.2,4.4-14.5-6.3h0c-2,.9-4,1.9-5.8,3v.2c2.6,3-2.9,7-3.5,10.2-2.2-.5-4.5-1.2-4.4-3.4-6.8,16.3,37.8,3.2,30.5-8.8Zm-23.5,12.7c3.8-2.2,9.4-3.3,13.7-2-4.2,1.8-9.1,2.5-13.7,2Z"/><path class="cls-8" d="m16.9,294.8c-9.3-2-1.4-8.6,3.6-10.4v.2c2.6,3-2.9,7-3.5,10.2,0,0,0,0,0,0Z"/><path class="cls-2" d="m36.1,48.1c.7,9.8.4,17.3,12.8,25.1,7.5,6.9,24.7-.2,30.8-12.3"/><path class="cls-2" d="m61.4,31.9c4.5-2,10-.2,10.7,1.7-1.3.8-12.1,1.2-10.7-1.7Z"/><path class="cls-2" d="m72.4,78.7c-.2-2.8-.4-4.4-.4-8.6"/><path class="cls-2" d="m31.2,108.3c1.4.9,2.3,1.5,3,2"/><path class="cls-2" d="m33.8,80.6c-8.4,3.5-10.5,11.2-14.6,18.6,2,3.1,8.2,6.1,12,9"/><path class="cls-2" d="m48.4,78.1c-3.2.8-6,1.3-9.1,1.8"/><path class="cls-2" d="m85.6,80.1c4.7,2,14.7,11.1,14.1,17-3.1,2.3-8.3,11.2-12.3,14.2-3-3.1-3.6-4.6-6.1-8.3"/><path class="cls-2" d="m72.4,78.7c.9.9,3.4.7,5.1,1"/><path class="cls-2" d="m33.6,97.9c-.3,10,1.3,20.3,2.7,30.2,1.7,12.4-2.1,22.2-2.7,34.5"/><path class="cls-2" d="m84.6,108.1c-1,10.5-1.6,25.8-1.6,36.6"/><path class="cls-2" d="m45.1,42.2c0,4.4-3.3,4.4-3.3,0,0-4.4,3.3-4.4,3.3,0Z"/><path class="cls-2" d="m67.7,42.3c0,5-4.1,5-4.1,0,0-5,4.1-5,4.1,0Z"/><path class="cls-2" d="m47.9,53.2c0,2.7,8.6,3.5,10.7,2.3"/><path class="cls-2" d="m47.3,61.2c5.6,2.2,18.6-.7,19.7-1.7-4.3,7-15.2,8.8-19.3,2"/><path class="cls-2" d="m84,162.8c-21.5,8.8-46.2,2.9-50.4-.3"/><path class="cls-2" d="m85.3,162.3c-.4.2-.8.3-1.1.5"/><path class="cls-2" d="m20.4,100.6c-7.6,15.3-16.4,21.8-1.8,35.4,8.5,7.1,9.4,26.5,15,26.5"/><path class="cls-1" d="m31.2,108.3c-1.6,2.8-7.6,12.4-7.8,11.9"/><line class="cls-2" x1="31.2" y1="108.3" x2="31.2" y2="108.3"/><path class="cls-1" d="m19.2,115.7c4.7,3,6,8.8,8.3,13.3,2.6,3.7,7.7,11.2,8.4,15.4"/><path class="cls-1" d="m89,108.7c2.7,2.9,11.5,12.5,12.4,13.5"/><path class="cls-1" d="m99.7,97.1c2.8,3.6,13.3,18.1,14.4,20.7,2.4,5.6-3.9,18.9-8.4,22.9-3.3,2.9-10.4,8.6-13.5,11.9"/><path class="cls-1" d="m86,144.4c10.3-4.9,9-21.5,21-26.4"/><path class="cls-2" d="m85.3,162.3c3.3-1.6,7.8-5.8,6.9-9.6"/><path class="cls-1" d="m84.1,162.8c.4-.2.8-.3,1.1-.5"/><path class="cls-2" d="m84,162.8s0,0,.1,0"/><path class="cls-1" d="m77.3,147.1c-2,1.8-8.6,5.3-2.5,7.5-1,1.7,0,3.4,1.6,3.9-1.5,1.4.8,3,1.9,3.1-.5,2.9,3,2.3,5.8,1.2"/><path class="cls-1" d="m86,144.4c-3.9.6-11.7-.7-11.2,4.7"/><path class="cls-2" d="m48.8,72.9c.2,1.8-.1,3.5-.5,5.2"/><path class="cls-2" d="m48.2,31.9s0,0,0,0"/><path class="cls-2" d="m48.2,31.9c1.4,2.5-8.6,2.3-9.8,1.6.6-1.6,5.8-3.2,9.8-1.6,0,0,0,0,0,0Z"/><path class="cls-1" d="m56.9,185.8c1.9,9.8,3.8,25.6,3.8,25.4,11.5.3,21.8-1.5,31.3-7.1"/><path class="cls-1" d="m33.6,162.5c-4.2,15.7-5,27.7-7.4,43.6,8.1,3.8,18.6,4.6,29.5,5"/><path class="cls-1" d="m91.5,204.5c-1.1-6-5-30.7-7.4-42"/><path class="cls-1" d="m32.7,208.5c-2.3,25-1.5,46.5-3.1,72.7"/><path class="cls-1" d="m53.1,211.1c-1.9,8.2-.6,25.9-2.5,29.9-4.3,16.1-6.8,23.1-7.5,40.7"/><path class="cls-1" d="m64.8,210.9c2.8,6.8,2.5,13.3,2.7,20.6.3,19.1,6.6,33,5.7,53.6"/><path class="cls-1" d="m85.5,207.2c.2,11.3.3,17.1,2.9,26.9,1,9.4-3.2,32-1.5,49.2"/><path class="cls-1" d="m56.9,185.8c.1,12.7-1.2,15.2-1.2,25.1"/><path class="cls-1" d="m33,278c-5.6,3.7-18.5,6.8-20.4,13.4,0,3.1,4.5,3.5,7,3.9,9.4,1.1,22.9-3.3,23.6-14.2"/><path class="cls-1" d="m73.6,281.3c-1.9,9.4,13.5,13.7,20.7,16.3,4.2,2.1,11.4-.2,8.5-5.8-4.5-5.7-11.7-8.5-17.9-12.1"/><path class="cls-1" d="m93.3,284.2c5.4,10.6-12.7,3.7-17.6,3.8.3,0,.5.1.8.2"/><path class="cls-1" d="m98.5,287.2c-.7,6.4-.3,5,2.9,10.3"/><path class="cls-1" d="m97.3,298.5c-2.3-5-8.7-5.4-13.6-5.2"/><path class="cls-1" d="m41.7,287.4c-5.7,1.6-23.2,4.9-15.3-6"/><path class="cls-1" d="m33.7,293.4c-4.3-1.6-10.2-.5-14.1,1.8"/><path class="cls-1" d="m20.6,284.6c2.4,2.9-2.7,6.9-3.5,9.9"/><path class="cls-1" d="m102.9,291.7c9.6,18.9-36.9,9.3-29.5-8.9"/><path class="cls-1" d="m43.1,282.5c7.2,12.1-37.3,25.1-30.5,8.8"/><path class="cls-2" d="m28.6,31c1.2-13.3,11.4-28.1,24.7-29.1,13.3-1,32.4,9.1,34.4,20.1,3.6,20.3,3.6,39.2-2.5,57.9-.7,1.9-9.4,27.3-11.7,19.8,7.9-34,14.9-65.2-22.2-85.8"/><path class="cls-2" d="m51.3,13.9c-26,21.7-10.3,56.2-10.6,84.7,0,1.1-1.6,1.3-1.9.2-6.2-23.4-13-42-10.2-67.8"/><path class="cls-2" d="m72.8,78.6c-6.2,7.5-18.8,7.3-24.8-.4.3-.1.6-.3,1-.4"/><path class="cls-2" d="m98,92.8c-4.8,5.3-9.2,11.1-13.1,17.1,0-.1.2-.3.3-.4"/><path class="cls-2" d="m95.8,89.6c-4.6,5.2-8.8,10.9-12.4,16.8"/><path class="cls-2" d="m34.7,106.7c-5.2-2.3-10-5.4-14.2-9.2"/><path class="cls-2" d="m34.5,103.3c-4.6-2.5-9.1-5.3-13.3-8.6"/><path class="cls-2" d="m75.1,79.7c-6.6,10.8-23.7,10.3-29.7-.8"/><path class="cls-2" d="m74.9,157c-13.4,2.7-27.8,4-40.3-1.6"/><path class="cls-2" d="m37,191.3c3.1-.5,3.2,4.4.5,5-3.6.9-4.8-4.8-1.1-5.4"/><path class="cls-2" d="m41.5,168.9c2.5,1.1,1.6,4.9-1.2,4.3-3.2-1.2-.8-5.8,2.1-4.1"/><path class="cls-2" d="m49.7,186.1c3.1.6,3.3,5.3,0,5.8-4.2.4-3.4-5.4,0-5.8Z"/><path class="cls-2" d="m53.4,173.7c3.4.2,3.1,5.4-.3,5.3-3.4-.2-3.1-5.4.2-5.3"/><path class="cls-2" d="m81.9,193.2c3,1.1,1.7,5.8-1.5,5.1-3.2-.8-2.1-5.6,1.1-5.1"/><path class="cls-2" d="m69.7,183.3c-3.2-.8-4.5,4.1-1.4,5,3.1.9,4.6-3.9,1.6-4.9"/><path class="cls-2" d="m82,167.4c4,2.7,1.3,7.4-2.8,5.2-1.7-2,.9-4.3,2.9-4.8"/><path class="cls-2" d="m69.5,198.4c2.4,3.7-4.2,5.8-5.1,1.7-.3-1.2.2-2.6,1.2-3.4s2.7,1.3,3.9,1.7Z"/><path class="cls-2" d="m68.1,197.4c.6.1,1.1.5,1.5,1"/><path class="cls-2" d="m49.8,202.8c2.4-1.1,4.7,1.8,3.5,4-3.4,5-8.4-.7-4.1-4.5"/><path class="cls-2" d="m78,203.2c3.1-.8,4.4,3.7,1.8,5.2-4.9,3.2-7.7-6.1-1.7-5.7"/><path class="cls-2" d="m83.2,180.5c3.2-.3,4,4.6.8,5.2-3.3.5-3.9-4.7-.5-4.8"/><path class="cls-2" d="m31.2,181.6c-2.8.6-2.2,4.8.6,4.7,2.8-.2,2.8-4.5,0-4.7"/><path class="cls-2" d="m28.1,200.7c-3,1.1-1.5,5.7,1.6,4.8,3.1-1,1.7-5.7-1.4-4.8"/><path class="cls-2" d="m63.3,168.3c-3.4,0-3.4,5.3,0,5.4,3.4,0,3.6-5.2.2-5.4.2,0,.3.1.5.2"/></svg>')}`;
export default image;