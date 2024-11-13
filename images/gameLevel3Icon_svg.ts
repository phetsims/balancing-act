/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="257" height="167" viewBox="0 0 257 167"><defs><linearGradient id="linear-gradient" x1="128.5" x2="128.5" y1="0" y2="167" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#50b4d2"/><stop offset="1" stop-color="#ccecfc"/></linearGradient><linearGradient id="linear-gradient-2" x1="26.68" x2="38.46" y1="63.23" y2="83.64" gradientTransform="rotate(8.97 28.794 73.55)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bbbdbf"/><stop offset=".16" stop-color="#a8a9ab"/><stop offset=".49" stop-color="#787879"/><stop offset=".94" stop-color="#2c292a"/><stop offset="1" stop-color="#231f20"/></linearGradient><style>.cls-1,.cls-2{fill:none}.cls-1,.cls-10,.cls-15,.cls-18,.cls-7,.cls-9{stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round}.cls-23{stroke-width:0}.cls-2{stroke-width:.33px;stroke:#231f20}.cls-7{fill:#4e4d4e}.cls-9{fill:#5d5d5d}.cls-10{fill:#717272}.cls-15{fill:#30302f}.cls-18{fill:#171717}.cls-23{fill:#d97931}</style></defs><path id="Layer_2" d="M0 0h257v167H0z" style="fill:url(#linear-gradient);stroke-width:0"/><g id="Layer_1"><path d="M170.45 164.93h-11.53l-30.63-64.02-31.08 64.02H86.56l36.99-75.72h9.52z" style="stroke:#010101;stroke-miterlimit:10;fill:#f6eb16"/><path d="M128.51 88.25c2.81 0 5.09 2.07 5.09 4.62s-2.28 4.62-5.09 4.62-5.09-2.06-5.09-4.62 2.28-4.62 5.09-4.62Z" style="stroke:#010101;stroke-miterlimit:10;fill:#b4b4b4"/><path d="M125.63-20.43h6.21v243.19h-6.21z" style="stroke:#010101;fill:#e5c29e;stroke-miterlimit:10" transform="rotate(-80 128.73 101.163)"/><path d="M23.96 79.25c-3.18-1.43-6.87-1.72-6.01-8.45.8-6.25 8.73-6.96 13.67-6.89 5.32.08 9.86 2.07 13.54 6.31 2.24 2.57 6.06 11.64-2.58 12.08 0 0-14.68-2.04-18.62-3.05Z" style="fill:url(#linear-gradient-2);stroke:#000;stroke-width:.32px"/><path d="M95.35 72.3c-.05.29-6.99-.67-15.5-2.14s-15.37-2.89-15.32-3.17 6.99.67 15.5 2.14 15.37 2.89 15.32 3.17Z" style="stroke-linecap:round;stroke-width:.33px;stroke:#231f20;fill:#231f20"/><path d="M97.23 53.09s-5.75 3.88-10.75 8.34c4.34-7.84 9.11-17.63 9.35-18.18-.13.17-4.9 6.34-9.27 12.89 3.05-9.58 6.03-20.25 6.16-20.8v.03c-.27.58-4.49 10.11-7.99 19.23 2.29-10.4 4.46-22.2 4.55-22.78v.02c-.15.45-2.73 8.42-5.2 17.01 1.05-8.49 1.82-16.19 1.84-16.65v.02c-.09.37-1.51 6.49-3.03 13.81.45-8.07.64-15.02.64-15.02-.12.58-2.01 12.4-3.34 22.97-.25-9.84-1.05-20.31-1.08-20.78v-.02c-.06.56-.82 11.61-1.15 21.66-1.89-7.5-4.27-14.77-4.42-15.22v-.02c.03.54 1.25 11.4 2.72 20.27-3.14-5.73-7.13-11.18-7.34-11.46.11.44 2.45 7.74 4.97 14.14-3.62-3.45-7.58-6.17-7.73-6.26.35.76 10.59 19.12 13.13 17.25 2.64 1.44 17.48-11.6 17.92-12.08 0 0-4.72 1.25-9.37 3.31 4.52-5.2 9.18-11.3 9.41-11.66Z" style="stroke-width:0;fill:#599843"/><path d="M87.82 64.75c-1.6.71-3.19 1.52-4.57 2.4l13.98-14.06s-5.75 3.88-10.75 8.34c-.85.76-1.68 1.53-2.45 2.31-.44.43-.86.87-1.26 1.31l1.91-3.19 11.15-18.61c-.13.17-4.9 6.34-9.27 12.89-.86 1.29-1.71 2.6-2.5 3.88l8.65-24.65c-.26.58-4.48 10.11-7.98 19.23-.83 2.15-1.62 4.29-2.3 6.27-.4 1.16-.76 2.26-1.08 3.29-.13.42-.25.84-.37 1.23l.44-1.8 1.5-6.09 6.34-25.67c-.15.45-2.72 8.42-5.19 17.01-.62 2.16-1.24 4.37-1.81 6.5l.09-1.11 3.56-22.03c-.09.37-1.51 6.49-3.03 13.81.45-8.07.64-15.02.64-15.02l-2.35 23.65-.88 8.82c-.04.2-.08.38-.12.57.05-1.32.08-2.76.09-4.28 0-1.84-.02-3.8-.08-5.78-.25-9.84-1.05-20.31-1.08-20.78L79 59.31c-.32-1.47-.68-2.98-1.06-4.49-1.89-7.5-4.27-14.77-4.42-15.22l4.27 21.24.73 3.65c-.23-.54-.48-1.1-.75-1.66-.47-.99-.99-1.99-1.54-2.99-3.14-5.73-7.13-11.18-7.34-11.46l8.47 17.94c-1.01-1.3-2.24-2.59-3.51-3.8-3.62-3.45-7.58-6.17-7.73-6.26l10.53 12.69 2.33 2.81c-.04.13-.06.26-.08.39 0 .06-.02.12-.02.18l.19-.12.19-.11.11-.07.3-.18.15-.09 3.21-1.92 14.14-8.42s-4.72 1.25-9.37 3.31Z" style="stroke-width:0;fill:#92c952"/><path d="M78.22 73.59c-1.36-.68-2.41-2.2-3.42-3.68-1.98-2.91-3.11-4.66-5.09-7.57-.86-1.26-2.95-4.49-3.57-6.08 3.77 2.26 7.91 6.06 11.12 9.99" class="cls-2"/><path d="M73.86 62.46c-1.76-4.66-3.59-8.98-4.83-13.87 3.4 4.61 7.01 9.74 9.51 15.91" class="cls-2"/><path d="M76.08 59.27c-.42-2.22-2.48-16.98-2.49-19.35 1.56 3.64 5.71 19.1 5.76 21.36" class="cls-2"/><path d="M77.93 54.44c.14-6.88.65-14.33 1.16-21.23 0 0 0-.01 0 0 .51 3.92 1.58 25.06 1.15 30.56" class="cls-2"/><path d="M81.94 55.94c.89-5.81 1.32-19.7 1.58-24.94-1.21 6.45-2.31 15.3-3.26 22.01m-.31 20.74c1.51-.19 3.01-1.27 4.46-2.32 2.84-2.07 4.49-3.35 7.33-5.43 1.23-.9 4.29-3.25 5.4-4.53-4.31.87-9.48 3.06-13.82 5.69" class="cls-2"/><path d="M87.79 64.72c3.22-3.8 6.39-7.26 9.2-11.45-4.74 3.21-9.86 6.83-14.29 11.81" class="cls-2"/><path d="M86.76 60.96c1.14-1.95 8.02-15.17 8.82-17.4-2.68 2.91-11.69 16.04-12.49 18.15" class="cls-2"/><path d="M86.64 55.8c2.17-6.53 4.18-13.72 6.01-20.39 0 0 0-.02 0 0-1.79 3.53-9.94 23.63-11.44 28.33m.73-7.8c1.34-5.76 5.76-19.08 7.27-24.1-1.02 6.48-2.95 15.19-4.29 21.84" class="cls-2"/><path d="M82.72 46.93c.91-4.78 2.14-9.95 3.19-14.73-.36 5.2-1.06 10.24-1.71 15.88" class="cls-2"/><path d="M90.95 71.74c-3.64-.49-8.62-1.18-10.96-1.56-2.31-.38-7.32-1.42-11.03-2.2-2.57-.55-4.52-.97-4.52-.97s.21 19.21 3.64 19.8c.67.11 1.59.27 2.67.46 3 .52 7.21 1.24 10.49 1.81 1.63.28 3.04.52 3.95.68 3.42.59 10.06-17.44 10.06-17.44s-1.85-.25-4.31-.58Z" class="cls-23"/><path d="M95.25 72.34s-6.63 18.03-10.06 17.44c-.91-.16-2.32-.4-3.95-.68 3.53-.9 8.14-10.2 9.68-17.17l.02-.17c2.46.33 4.31.58 4.31.58" style="stroke-width:0;fill:#b86428"/><path d="m90.94 71.76-.02.17c-1.54 6.98-6.15 16.27-9.68 17.17-3.29-.57-7.5-1.29-10.49-1.81-2.2-6.33-2.65-12.65-1.79-19.29 3.71.78 8.72 1.82 11.03 2.2 2.34.38 7.32 1.07 10.96 1.56Z" class="cls-23"/><path d="M70.74 87.29c-1.08-.19-2.01-.35-2.67-.46-3.42-.59-3.64-19.8-3.64-19.8s1.95.42 4.52.97c-.86 6.64-.41 12.96 1.79 19.29" style="stroke-width:0;fill:#db874e"/><path d="M90.94 71.76c2.46.33 4.31.58 4.31.58s-6.63 18.03-10.06 17.44c-.91-.16-2.32-.4-3.95-.68-3.29-.57-7.5-1.29-10.49-1.81-1.08-.19-2.01-.35-2.67-.46-3.42-.59-3.64-19.8-3.64-19.8s1.95.42 4.52.97c3.71.78 8.72 1.82 11.03 2.2 2.34.38 7.32 1.07 10.96 1.56Z" style="fill:none;stroke:#010101;stroke-width:.33px"/><path d="M186.93 43.45c-2.39-.35-4.13-.6-4.58-.67.85-2.84 1.69-5.3 2.45-7.38.56.06 2.21.24 4.48.5-.92 2.83-1.7 5.32-2.35 7.55m-7.05 42.38-5.15-.89c.51-10.75 3.8-29.23 6.78-39.28.6.1 2.29.36 4.59.72-4.23 17.18-4.38 22.62-6.22 39.45m-1.01 11.69-4.44-.76c-.05-2.46-.03-5.39.12-8.75l5.05.87c-.28 3.1-.52 6.06-.73 8.65Zm-.68 9.2-3.06-.53s-.38-2.18-.58-6.33l4.09.7c-.25 3.3-.41 5.6-.44 6.15Zm12.06-73.78c-2.36-.25-3.94-.4-4.33-.43 1.5-3.65 2.58-5.53 2.84-5.66.25-.13 1.43-.15 3.53 0-.64 2.17-1.45 4.19-2.04 6.08Z" style="stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round;fill:#b99572"/><path d="M198.31 27.7c-.44 1.85-.92 3.86-1.42 6-2.53-.31-4.81-.56-6.63-.76.59-1.89 1.4-3.91 2.04-6.08 1.53.11 3.55.32 6.04.63zm-3.94 16.85-7.44-1.1c.65-2.23 1.43-4.72 2.35-7.55 1.95.23 4.35.52 6.9.84-.61 2.57-1.2 5.21-1.8 7.81Zm-7.61 42.47-6.89-1.18c1.85-16.84 1.99-22.25 6.22-39.45 2.14.33 4.8.75 7.59 1.19-3.05 13.07-5.26 26.11-6.93 39.44Zm-1.5 11.6-6.39-1.1c.21-2.59.45-5.55.73-8.65l6.77 1.17c-.37 2.86-.75 5.76-1.1 8.58Zm-1.12 9.06v.06l-5.96-1.02c.04-.56.2-2.85.44-6.15l6.25 1.08c-.24 1.95-.52 4.2-.74 6.03Z" style="stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round;fill:#ac8768"/><path d="M205.76 34.89c-3.09-.46-6.14-.86-8.88-1.19.5-2.22 1.05-4.25 1.45-6.21 2.43.31 5.32.72 8.66 1.25-.36 1.74-.85 4.26-1.23 6.15m-2.18 11.06c-2.74-.43-6.03-.93-9.2-1.4.6-2.6 1.19-5.24 1.8-7.81 2.98.37 6.14.79 8.97 1.22-.52 2.66-1.04 5.32-1.57 7.99m-7.36 42.69-9.46-1.63c1.67-13.33 3.88-26.37 6.93-39.44 3.11.49 6.39 1.01 9.28 1.47a740 740 0 0 0-6.76 39.59Zm-2.95 20.54-.02.12-9.11-1.57c.23-1.86.5-4.12.75-6.1l9.23 1.59c-.28 1.97-.57 4.01-.84 5.95Zm1.27-8.97-9.27-1.59c.35-2.82.73-5.72 1.1-8.58l9.41 1.62c-.42 2.85-.83 5.71-1.24 8.55" style="stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round;fill:#a77c58"/><path d="M210.18 35.58c-1.47-.24-2.95-.47-4.42-.69.41-2.03.86-4.33 1.23-6.15 2.39.38 5.25.87 7.65 1.31 0 .03-.3 2.41-.78 6.17-1.21-.23-2.44-.44-3.68-.65Zm-2.27 11.07c-1.12-.19-2.62-.43-4.34-.71.53-2.67 1.05-5.33 1.57-7.99 3.15.47 5.26.85 8.3 1.46-.32 2.43-.67 5.17-1.06 8.05-1.78-.33-3.33-.61-4.48-.81Zm-13.8 56.58 8.24 1.42c-.77 3.78-1.18 5.7-1.23 6.01l-7.87-1.35c.29-1.99.56-4.06.86-6.07Zm10.55-10.04c-.61 3.05-1.19 5.95-1.7 8.47l-8.41-1.45c.41-2.84.82-5.7 1.24-8.55l8.88 1.53Zm4.45-23.34c-.9 5.26-2.4 13.01-3.86 20.34l-9.03-1.55a730 730 0 0 1 6.76-39.59c3.43.55 5.56.88 9 1.5-.95 6.94-2 14.22-2.87 19.3" style="stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round;fill:#9e754c"/><path d="M221.85 37.89c-2.48-.56-5.2-1.14-7.99-1.66.48-3.77.77-6.14.78-6.17 2.98.54 5.58 1.05 7.82 1.52-.12 1.26-.28 2.98-.61 6.31m-9.45 9.57 1.06-8.05c2.54.51 5.36 1.12 8.07 1.72-.25 2.39-.53 5.09-.84 7.91-2.87-.55-5.8-1.11-8.29-1.58m.59 47.17c-.63 2.84-1.27 5.65-1.91 8.43l-8.12-1.4c.51-2.52 1.1-5.42 1.7-8.47zm-10.65 10.02 8.04 1.39c-.36 1.59-1.21 5.15-1.4 5.97l-7.87-1.35c.05-.3.46-2.23 1.23-6.01m15.39-32.94c-1.16 6.64-2.63 13.33-4.07 19.93l-8.41-1.45c3.1-15.48 4.66-24.2 6.72-39.64 2.62.47 5.54 1.01 8.37 1.55-.75 6.49-1.54 13.26-2.61 19.61" style="stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round;fill:#9a6f44"/><path d="M221.85 37.89c.33-3.34.49-5.05.61-6.31 2.38.5 4.35.95 5.9 1.35-.2 2.02-.2 4.34-.35 6.44-1.76-.45-3.86-.95-6.17-1.48Zm3.13 35.88c-1.14 6.39-2.75 12.76-4.37 19.06l-6.95-1.19c3.02-13.06 5.34-26.16 6.68-39.54 2.41.46 4.77.91 6.8 1.31-.53 6.8-1.06 13.64-2.17 20.36Zm-14.59 32.27 6.36 1.1c-.5 1.77-1.25 4.44-1.69 5.92l-6.07-1.04c.19-.84 1.03-4.37 1.4-5.97Zm9.44-10.23c-.73 2.79-1.5 5.6-2.26 8.36l-6.5-1.12c.64-2.78 1.28-5.59 1.91-8.43l6.84 1.18Zm.85-46.77c.31-2.82.6-5.51.84-7.91 2.25.49 4.43.99 6.32 1.42-.15 2.59-.3 5.13-.48 7.79-2.02-.39-4.33-.84-6.68-1.3" style="stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round;fill:#8d6639"/><path d="M228.13 37.08c.11-1.35.07-2.91.24-4.15 2.68.69 4.14 1.2 4.37 1.49.2.24.59 2.5.8 6.41-.13-.04-2.25-.64-5.53-1.46.05-.78.08-1.52.12-2.28Zm-2.29 59.76c-1.01 3.16-2.02 5.92-2.92 8.25l-5.35-.92c.76-2.76 1.52-5.57 2.26-8.36zm-9.09 10.3 5 .86c-1.57 3.74-2.65 5.75-2.65 5.75l-4.05-.7c.43-1.48 1.18-4.15 1.69-5.92Zm14.43-32.15a162 162 0 0 1-4.42 18.9l-6.14-1.06c3.62-12.89 5.81-26.06 6.54-39.43 3.22.63 5.66 1.11 6.34 1.25-.31 5.81-1 12.67-2.32 20.33Zm-3.46-30.23c.05-.76.09-1.5.13-2.2 2.96.67 5.19 1.2 5.82 1.35.06 2.21.06 4.78-.04 7.67-.51-.1-2.98-.58-6.26-1.23.13-1.93.24-3.73.35-5.58Z" style="stroke:#010101;stroke-linejoin:round;stroke-width:.35px;stroke-linecap:round;fill:#77502a"/><path d="M178.18 106.85s0-.04.01-.13" class="cls-1"/><path d="m178.63 100.56-4.09-.7c-.05-.93-.09-1.97-.11-3.1l4.44.76c-.09 1.09-.16 2.11-.24 3.04" class="cls-9"/><path d="M174.43 96.76c.02 1.13.06 2.17.11 3.1l-.11-.02-.2-3.12.2.03Z" class="cls-1"/><path d="m184.88 101.64-6.25-1.08c.08-.93.15-1.96.24-3.04l6.39 1.1c-.13 1.01-.25 2.03-.38 3.03Z" class="cls-10"/><path d="m194.11 103.23-9.23-1.59c.13-1 .25-2.01.38-3.03l9.27 1.59c-.15 1-.29 2.05-.43 3.02Z" class="cls-7"/><path d="M202.95 101.66c-.22 1.07-.42 2.08-.61 2.99l-8.24-1.42c.14-.98.28-2.02.43-3.02l8.41 1.45Z" class="cls-15"/><path d="M211.08 103.05c-.24 1.07-.48 2.07-.69 2.98l-8.04-1.39c.19-.92.39-1.92.61-2.99z" class="cls-18"/><path d="M217.58 104.17c-.29 1.06-.57 2.06-.83 2.97l-6.36-1.1c.21-.92.45-1.92.69-2.98l6.5 1.12Z" class="cls-18"/><path d="M222.92 105.09c-.41 1.06-.81 2.03-1.17 2.91l-5-.86c.25-.91.53-1.9.83-2.97l5.35.92Z" class="cls-18"/><path d="m223.06 105.11-1.17 2.91-.13-.02c.36-.87.76-1.85 1.17-2.91z" class="cls-1"/><path d="M190.25 32.94c-.34 1.03-.67 2.01-.97 2.96-2.27-.26-3.92-.44-4.48-.5.39-1.06.77-2.02 1.12-2.89.39.03 1.97.18 4.33.43" class="cls-9"/><path d="M185.83 32.51s.03 0 .09.01c-.35.86-.73 1.82-1.12 2.89-.13-.02-.2-.02-.2-.02l1.23-2.87Z" class="cls-1"/><path d="M196.88 33.7c-.22.93-.46 1.95-.7 3.04-2.54-.32-4.95-.61-6.9-.84.31-.94.63-1.93.97-2.96 1.82.2 4.09.45 6.63.76" class="cls-10"/><path d="M205.76 34.89c-.19.95-.41 2.05-.61 3.06-2.83-.43-6-.84-8.97-1.22.25-1.09.48-2.1.7-3.04 2.74.33 5.78.73 8.88 1.19Z" class="cls-7"/><path d="M213.45 39.41c-3.04-.61-5.15-.99-8.3-1.46.2-1.02.42-2.11.61-3.06 2.7.39 5.43.84 8.1 1.34-.12.98-.26 2.05-.41 3.19Z" class="cls-15"/><path d="M205.31 37.14c.15-.79.3-1.55.45-2.25q-.21 1.065-.45 2.25" class="cls-1"/><path d="M221.53 41.13c-2.72-.6-5.54-1.21-8.07-1.72.15-1.14.29-2.21.41-3.19 2.79.52 5.5 1.1 7.99 1.66-.11 1.07-.22 2.15-.33 3.25" class="cls-15"/><path d="M227.84 42.55c-1.89-.43-4.07-.93-6.32-1.42.11-1.1.22-2.17.33-3.25 2.3.52 4.4 1.03 6.17 1.48-.05 1.07-.11 2.08-.17 3.19Z" class="cls-15"/><path d="M233.67 43.9c-.63-.15-2.86-.68-5.82-1.35.06-1.11.12-2.11.17-3.19 3.28.82 5.41 1.42 5.53 1.46.05.93.1 1.96.12 3.08" class="cls-18"/><path d="M233.85 43.94s-.06-.02-.19-.04c-.02-1.12-.07-2.14-.12-3.08h0l.3 3.12Z" class="cls-1"/><path d="M186.93 43.45c-.3 1.03-.58 2.01-.83 2.94-2.3-.36-3.99-.63-4.59-.72.28-1 .56-1.96.84-2.89.45.07 2.19.32 4.58.67" class="cls-9"/><path d="M182.23 42.76s.04 0 .12.01c-.28.92-.56 1.88-.84 2.89-.16-.02-.24-.04-.24-.04l.96-2.87Z" class="cls-1"/><path d="M194.37 44.55c-.22 1-.45 2.01-.68 3.03-2.79-.44-5.46-.86-7.59-1.19.25-.93.53-1.9.83-2.94 2.11.31 4.73.69 7.44 1.1" class="cls-10"/><path d="M203.58 45.95c-.19 1.02-.4 2.06-.6 3.1-2.89-.46-6.17-.98-9.28-1.47.23-1.02.46-2.03.68-3.03 3.17.47 6.46.97 9.2 1.4" class="cls-7"/><path d="M211.97 50.55c-3.44-.62-5.57-.96-9-1.5.2-1.05.41-2.08.6-3.1 3.69.58 5.11.83 8.82 1.52q-.21 1.53-.42 3.09Z" class="cls-15"/><path d="M220.34 52.1c-2.83-.54-5.75-1.08-8.37-1.55q.21-1.56.42-3.09c2.48.47 5.41 1.02 8.29 1.58-.1 1.01-.23 2.04-.34 3.06m6.81 1.31c-2.04-.39-4.39-.85-6.8-1.31.11-1.02.23-2.05.34-3.06 2.35.45 4.67.91 6.68 1.3-.07 1.01-.14 2.04-.22 3.07" class="cls-15"/><path d="M233.49 54.65c-.69-.13-3.12-.62-6.34-1.25.07-1.03.14-2.06.22-3.07 3.27.65 5.74 1.13 6.26 1.23-.03.99-.08 2.02-.13 3.08Z" class="cls-18"/><path d="M233.68 54.69s-.06-.01-.19-.04c.06-1.06.1-2.09.13-3.08.06.02.1.02.1.02l-.03 3.1Z" class="cls-1"/><path d="m179.6 88.87-5.05-.87c.04-.98.1-2 .17-3.06l5.15.89c-.1 1.02-.19 2.04-.28 3.04Z" class="cls-9"/><path d="M174.72 84.95c-.07 1.06-.13 2.07-.17 3.06l-.13-.02.1-3.07.2.04Z" class="cls-1"/><path d="m186.37 90.04-6.77-1.17c.09-1 .18-2.02.28-3.04l6.89 1.18c-.13 1.02-.27 2.03-.4 3.02Z" class="cls-10"/><path d="m195.78 91.66-9.41-1.62c.13-1 .27-2 .4-3.02l9.46 1.63c-.15 1.02-.3 2.03-.45 3.02Z" class="cls-7"/><path d="M205.25 90.19c-.2 1.01-.4 2.01-.59 2.99l-8.88-1.53c.15-.99.29-2 .45-3.02l9.03 1.55Z" class="cls-15"/><path d="M213.66 91.64c-.23 1-.44 1.99-.67 2.99l-8.33-1.44c.2-.98.4-1.98.59-2.99l8.41 1.45Z" class="cls-15"/><path d="M220.61 92.83c-.25.99-.51 1.99-.78 2.97l-6.84-1.18c.23-.99.44-1.98.67-2.99l6.95 1.19Z" class="cls-18"/><path d="M226.75 93.89c-.3 1.02-.6 2-.91 2.95l-6.01-1.03.78-2.97 6.14 1.06Z" class="cls-18"/><path d="m227.05 93.94-1.01 2.93-.2-.03c.31-.95.61-1.93.91-2.95z" class="cls-1"/></g></svg>')}`;
export default image;