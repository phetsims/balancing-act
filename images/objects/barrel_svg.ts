/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" width="101.36" height="150.51" viewBox="0 0 101.36 150.51"><defs><linearGradient id="linear-gradient" x1="2.74" x2="99.42" y1="114.6" y2="114.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#231f20"/><stop offset=".24" stop-color="#9c9ea1"/><stop offset=".31" stop-color="#797a7d"/><stop offset=".41" stop-color="#545557"/><stop offset=".52" stop-color="#353637"/><stop offset=".62" stop-color="#1e1e1f"/><stop offset=".74" stop-color="#0d0d0d"/><stop offset=".86" stop-color="#030303"/><stop offset="1"/></linearGradient><linearGradient xlink:href="#linear-gradient" id="linear-gradient-2" x1="1.77" x2="99.21" y1="36.07" y2="36.07"/><linearGradient xlink:href="#linear-gradient" id="linear-gradient-3" x1="4.6" x2="96.19" y1="16.65" y2="16.65"/><linearGradient xlink:href="#linear-gradient" id="linear-gradient-4" x1="4.93" x2="95.68" y1="136" y2="136"/><linearGradient xlink:href="#linear-gradient" id="linear-gradient-5" x1="4.93" x2="95.68" y1="135.98" y2="135.98"/><linearGradient xlink:href="#linear-gradient" id="linear-gradient-6" x1="4.6" x2="96.18" y1="16.44" y2="16.44"/><linearGradient xlink:href="#linear-gradient" id="linear-gradient-7" x1="1.77" x2="96.89" y1="36.04" y2="36.04"/><linearGradient xlink:href="#linear-gradient" id="linear-gradient-8" x1="1.77" x2="98.21" y1="114.58" y2="114.58"/><style>.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-20,.cls-9{stroke-width:0}.cls-21{fill:none;stroke:#000;stroke-width:.75px}.cls-9{fill:#764f29}.cls-10{fill:#4d4c4d}.cls-11{fill:#5c5c5c}.cls-12{fill:#707171}.cls-13{fill:#161616}.cls-14{fill:#ac8768}.cls-15{fill:#a77c58}.cls-16{fill:#b99572}.cls-17{fill:#9e744c}.cls-18{fill:#8c6538}.cls-19{fill:#30302f}.cls-20{fill:#996e43}</style></defs><path d="m99.42 111.8-.92 5.61h-.36c.26-1.8.5-3.67.73-5.61z" style="fill:url(#linear-gradient);stroke-width:0"/><path d="m98.31 33.27.91 5.61s-.13 0-.36-.01c-.23-1.93-.47-3.8-.72-5.59h.17Z" style="stroke-width:0;fill:url(#linear-gradient-2)"/><path d="M98.86 38.86c1.24 10.58 2.12 23.19 2.12 37.43 0 13.31-.88 25.28-2.11 35.5H87.45c1.06-12.89 1.96-26.38 1.96-35.77S88.31 52 87.02 38.57c6 .13 10.56.26 11.84.28Z" class="cls-9"/><path d="M87.45 111.8h11.42c-.23 1.93-.47 3.8-.73 5.61H86.97c.17-1.86.32-3.72.49-5.61Zm10.69-78.53c.24 1.79.49 3.66.72 5.59-1.28-.03-5.84-.15-11.84-.28-.19-1.89-.38-3.76-.58-5.61 6.14.15 10.78.27 11.7.29Z" class="cls-13"/><path d="M86.97 117.4h11.17c-.86 6.02-1.79 11.31-2.71 15.79h-9.94c.47-4.72.99-10.14 1.48-15.79m8.87-98.01c.79 3.99 1.59 8.64 2.3 13.87-.92-.03-5.55-.14-11.7-.29-.51-5.08-1.05-9.92-1.55-14.21 5.55.31 9.74.56 10.94.63Z" class="cls-9"/><path d="m94.67 13.88 1.51 5.54-.35-.03c-.4-2.01-.79-3.85-1.18-5.52h.01Z" style="stroke-width:0;fill:url(#linear-gradient-3)"/><path d="m95.68 133.19-1.22 5.62h-.26c.38-1.7.79-3.57 1.22-5.62z" style="stroke-width:0;fill:url(#linear-gradient-4)"/><path d="M85.48 133.19h9.94c-.42 2.05-.83 3.92-1.22 5.62h-9.29c.17-1.73.36-3.61.56-5.62Zm9.18-119.31c.38 1.66.78 3.51 1.18 5.52-1.2-.06-5.39-.32-10.94-.63-.23-2.07-.45-4.03-.67-5.81 6.12.47 10.12.88 10.43.92" class="cls-13"/><path d="M84.92 138.81h9.29c-1.66 7.23-2.98 11.21-2.98 11.21H83.7s.5-4.4 1.22-11.21M91.23 2.55c.44.38 1.83 4.34 3.43 11.33-.31-.04-4.31-.45-10.43-.92-.82-6.91-1.39-11.38-1.39-11.38l.03-.36c5.07.41 7.86.9 8.37 1.33Z" class="cls-9"/><path d="M89.41 76.02c0 9.39-.9 22.88-1.96 35.77H74.52c.63-13.43 1.16-27.57 1.16-37.24s-.61-23.24-1.37-36.23c4.5.08 8.89.18 12.7.26 1.29 13.43 2.39 27.68 2.39 37.45Z" class="cls-18"/><path d="M74.53 111.8h12.93c-.17 1.88-.32 3.75-.49 5.61H74.25c.09-1.86.19-3.72.28-5.61" class="cls-13"/><path d="M74.25 117.39h12.72c-.5 5.67-1.01 11.08-1.48 15.81H73.41c.27-4.71.56-10.12.84-15.81" class="cls-18"/><path d="M86.44 32.97c.19 1.84.38 3.71.58 5.61-3.8-.08-8.19-.18-12.7-.26-.1-1.89-.2-3.78-.33-5.62 4.39.09 8.7.19 12.45.27" class="cls-19"/><path d="M84.89 18.77c.5 4.29 1.04 9.13 1.55 14.21-3.75-.08-8.06-.18-12.45-.27-.31-5.2-.64-10.15-.93-14.54 4.21.19 8.31.41 11.84.6Z" class="cls-18"/><path d="M73.4 133.19h12.08c-.2 2.01-.4 3.89-.56 5.62H73.08c.1-1.73.22-3.61.32-5.62" class="cls-13"/><path d="M73.08 138.8h11.84c-.72 6.82-1.22 11.22-1.22 11.22H72.41v-.12s.28-4.35.67-11.11Z" class="cls-18"/><path d="M84.23 12.96c.22 1.78.44 3.74.67 5.81-3.53-.19-7.63-.41-11.84-.6-.14-2.12-.28-4.12-.41-5.95 4.31.22 8.25.49 11.58.74" class="cls-19"/><path d="m82.86 1.22-.03.36s.58 4.47 1.39 11.38c-3.33-.26-7.27-.52-11.58-.74-.5-7.01-.86-11.57-.86-11.57V.62c4.45.15 8.14.37 11.07.6Z" class="cls-18"/><path d="M75.69 74.55c0 9.68-.54 23.82-1.16 37.24H58.9c.35-13.68.64-28.14.64-37.92s-.37-22.92-.81-35.76c4.86.04 10.32.12 15.59.2.76 12.99 1.37 26.67 1.37 36.23Z" class="cls-20"/><path d="M58.9 111.8h15.63c-.09 1.88-.19 3.75-.28 5.59H58.76c.05-1.84.1-3.71.14-5.59" class="cls-19"/><path d="M58.76 117.39h15.49c-.28 5.68-.58 11.1-.84 15.81h-15.1c.15-4.71.31-10.12.46-15.81Z" class="cls-20"/><path d="M73.99 32.7c.13 1.84.23 3.72.33 5.62-5.27-.09-10.72-.17-15.59-.2-.08-1.92-.14-3.83-.2-5.7 4.63.06 10.1.17 15.46.28" class="cls-19"/><path d="M73.06 18.16c.29 4.39.63 9.34.93 14.54-5.36-.12-10.83-.22-15.46-.28-.2-5.31-.4-10.38-.59-14.86 4.75.14 10.02.36 15.11.6Z" class="cls-20"/><path d="M58.3 133.19h15.1c-.1 2.01-.22 3.89-.32 5.61H58.13c.05-1.71.12-3.6.17-5.61" class="cls-13"/><path d="M58.13 138.8h14.95c-.38 6.76-.67 11.11-.67 11.11v.12H57.78v-.35s.14-4.25.35-10.88" class="cls-20"/><path d="M72.65 12.21c.13 1.83.27 3.83.41 5.95-5.09-.24-10.37-.46-15.11-.6-.09-2.1-.17-4.07-.24-5.87 5.2.08 10.29.28 14.95.52Z" class="cls-19"/><path d="M71.79.64s.36 4.56.86 11.57c-4.66-.24-9.75-.45-14.95-.52-.29-6.9-.51-11.36-.51-11.36V.3c5.54.04 10.42.15 14.6.32v.03Z" class="cls-20"/><path d="M59.54 73.87c0 9.78-.29 24.24-.64 37.92H42.11c-.32-13.57-.59-27.87-.59-37.59s.23-23.06.5-36c3.01-.04 5.8-.06 8.18-.09 2.47-.03 5.39-.01 8.54 0 .44 12.84.81 26.31.81 35.76Z" class="cls-17"/><path d="M42.11 111.8H58.9c-.04 1.88-.09 3.75-.14 5.59H42.25c-.05-1.84-.09-3.71-.14-5.59" class="cls-19"/><path d="M42.25 117.38h16.51c-.15 5.7-.31 11.11-.46 15.82H42.66c-.13-4.72-.28-10.14-.41-15.82" class="cls-17"/><path d="M58.73 38.12c-3.15-.01-6.07-.03-8.54 0-2.38.03-5.17.05-8.18.09.05-1.95.09-3.88.14-5.78 3.17-.05 5.96-.08 8.04-.08s5.02.03 8.33.08c.06 1.87.13 3.78.2 5.7Z" class="cls-19"/><path d="M57.94 17.56c.19 4.48.38 9.55.59 14.86-3.31-.05-6.21-.08-8.33-.08s-4.86.03-8.04.08c.12-5.34.24-10.43.36-14.92 3.08-.06 5.96-.1 8.46-.08 2.1.01 4.45.06 6.96.14" class="cls-17"/><path d="M42.66 133.19H58.3c-.05 2.01-.12 3.89-.17 5.61H42.81c-.04-1.73-.1-3.61-.15-5.61" class="cls-19"/><path d="M42.81 138.79h15.32c-.2 6.64-.35 10.89-.35 10.89v.35H43.14v-.23s-.14-4.3-.33-11.01" class="cls-17"/><path d="M57.7 11.69c.08 1.8.15 3.78.24 5.87-2.51-.08-4.86-.13-6.96-.14-2.5-.03-5.38.01-8.46.08.05-2.05.1-3.95.15-5.72 2.71-.06 5.46-.1 8.18-.13 2.28-.01 4.57 0 6.85.04" class="cls-19"/><path d="M57.19.32s.22 4.47.51 11.36c-2.28-.04-4.57-.05-6.85-.04-2.71.03-5.46.06-8.18.13.18-6.96.31-11.48.31-11.48 2.34-.03 4.8-.04 7.37-.04 2.38 0 4.66.01 6.83.04v.03Z" class="cls-17"/><path d="M43.15 149.79v.23H26.22v-.12s-.22-4.35-.54-11.12h17.14c.19 6.71.33 11.01.33 11.01" class="cls-15"/><path d="M42.81 138.79H25.67c-.08-1.71-.15-3.6-.24-5.59h17.23c.05 2 .12 3.88.15 5.59" class="cls-10"/><path d="M42.98.3s-.13 4.52-.31 11.48c-5.73.14-11.36.37-16.42.61.41-6.85.7-11.28.7-11.28V.73c4.47-.2 9.83-.36 16.02-.44Zm-.32 132.89H25.43c-.22-4.72-.45-10.14-.68-15.82h17.49c.13 5.68.28 11.1.41 15.82Z" class="cls-15"/><path d="M42.67 11.78c-.05 1.77-.1 3.67-.15 5.72-5.26.12-11.11.33-16.61.59.13-2.03.23-3.95.35-5.7 5.06-.24 10.69-.47 16.42-.61Z" class="cls-10"/><path d="M42.52 17.5c-.12 4.49-.24 9.59-.36 14.92-5.08.08-11.19.2-17.06.33.27-5.26.55-10.26.81-14.67 5.5-.26 11.35-.47 16.61-.59Z" class="cls-15"/><path d="M42.25 117.38H24.76c-.08-1.84-.14-3.7-.22-5.58h17.57c.05 1.88.09 3.75.14 5.58" class="cls-10"/><path d="M42.11 111.8H24.54c-.5-13.26-.91-27.18-.91-36.77s.54-23.47 1.19-36.59c5.77-.09 11.84-.17 17.2-.23-.27 12.94-.5 26.52-.5 36s.27 24.02.59 37.59" class="cls-15"/><path d="M42.16 32.42c-.05 1.91-.09 3.84-.14 5.78-5.36.06-11.43.14-17.2.23.09-1.91.18-3.81.28-5.68 5.87-.13 11.98-.26 17.06-.33" class="cls-10"/><path d="M26.94.73v.38s-.28 4.43-.69 11.28c-4.67.23-8.86.47-12.2.69.54-3.52 1.14-7.28 1.82-11.33l-.03-.28c2.79-.27 6.49-.54 11.1-.74m-.73 149.18v.12H15.15c-.1-1-.52-5.2-1.09-11.25h11.61c.32 6.78.54 11.13.54 11.13" class="cls-14"/><path d="M26.25 12.39c-.12 1.74-.22 3.66-.35 5.7-4.67.22-9.1.45-12.7.65.26-1.8.55-3.7.84-5.66 3.34-.22 7.53-.46 12.2-.69Zm-.57 126.4H14.07c-.17-1.73-.35-3.6-.52-5.59h11.89c.09 2 .17 3.88.24 5.59" class="cls-12"/><path d="M25.43 133.19H13.54c-.44-4.74-.91-10.15-1.37-15.83h12.58c.23 5.7.46 11.11.68 15.83m.48-115.1c-.26 4.4-.54 9.41-.81 14.67-5.02.12-9.87.23-13.77.32.49-4.21 1.1-8.95 1.88-14.33 3.6-.2 8.02-.44 12.7-.65Z" class="cls-14"/><path d="M25.1 32.75c-.1 1.87-.19 3.78-.28 5.68-5.18.08-10.12.14-14.09.2.17-1.75.37-3.6.6-5.57 3.9-.09 8.75-.2 13.77-.32Zm-.34 84.63H12.18c-.15-1.84-.29-3.7-.45-5.58h12.81c.08 1.88.14 3.74.22 5.58" class="cls-12"/><path d="M24.54 111.8H11.73C10.68 98.2 9.8 83.89 9.8 74.21c0-10.39-.81-17.92.93-35.57 3.97-.06 8.91-.13 14.09-.2-.65 13.12-1.19 26.97-1.19 36.59s.41 23.51.91 36.77" class="cls-14"/><path d="m15.85 1.48.03.28c-.68 4.04-1.28 7.81-1.82 11.33-4.34.28-7.26.51-7.95.56C7.67 6.6 9.05 2.87 9.48 2.55c.41-.31 2.55-.7 6.37-1.08Zm-.69 148.54H9.48s-1.36-3.81-3.02-11.25h7.61c.56 6.05.99 10.25 1.09 11.25" class="cls-16"/><path d="M14.07 138.77H6.46c-.38-1.68-.78-3.53-1.18-5.58h8.27c.18 2 .36 3.87.52 5.58" class="cls-11"/><path d="M13.54 133.19H5.28c-.84-4.43-1.71-9.71-2.48-15.83h9.38c.46 5.68.93 11.1 1.37 15.83Z" class="cls-16"/><path d="M14.06 13.08c-.29 1.96-.59 3.85-.84 5.66-4.17.23-7.22.41-8.24.47.38-2.05.77-3.9 1.14-5.57.69-.05 3.61-.28 7.95-.56Zm-1.89 104.28H2.79c-.23-1.79-.45-3.65-.64-5.57h9.57c.15 1.88.29 3.74.45 5.57" class="cls-11"/><path d="M11.73 111.8H2.15C1.1 101.89.37 90.12.37 76.55c0-14.77.76-27.36 1.83-37.77 1.11-.03 4.26-.08 8.52-.14-1.74 17.65-.93 25.17-.93 35.57 0 9.68.88 23.98 1.93 37.59Zm1.48-93.06c-.78 5.39-1.39 10.12-1.88 14.33-4.45.12-7.68.2-8.51.23.68-5.4 1.42-10.1 2.15-14.09 1.02-.06 4.07-.24 8.24-.47" class="cls-16"/><path d="M11.33 33.07c-.23 1.97-.44 3.81-.6 5.57-4.26.06-7.41.12-8.52.14.19-1.91.41-3.72.61-5.48.83-.03 4.06-.12 8.51-.23" class="cls-11"/><path d="M6.45 138.77h-.2l-1.32-5.58h.35c.4 2.05.79 3.9 1.18 5.58Z" style="stroke-width:0;fill:url(#linear-gradient-5)"/><path d="M5.94 13.66s.05 0 .17-.01c-.37 1.66-.76 3.52-1.14 5.57-.24.01-.37.03-.37.03l1.34-5.58Z" style="stroke-width:0;fill:url(#linear-gradient-6)"/><path d="M2.61 33.3h.2c-.2 1.75-.42 3.57-.61 5.48h-.44l.84-5.48Z" style="stroke-width:0;fill:url(#linear-gradient-7)"/><path d="M2.79 117.36h-.26l-.77-5.57h.38c.19 1.92.41 3.78.64 5.57Z" style="stroke-width:0;fill:url(#linear-gradient-8)"/><path d="M5.28 133.19c-.84-4.43-1.71-9.71-2.48-15.83m91.41 21.45c-1.66 7.23-2.98 11.21-2.98 11.21H9.47s-1.36-3.81-3.02-11.25m91.69-21.37c-.86 6.02-1.79 11.31-2.71 15.79m3.43-94.33c1.24 10.58 2.12 23.19 2.12 37.43 0 13.31-.88 25.28-2.11 35.5m-3.03-92.4c.79 3.99 1.59 8.64 2.3 13.87M6.11 13.65C7.67 6.6 9.05 2.87 9.48 2.55c.41-.31 2.55-.7 6.37-1.08 2.79-.27 6.49-.54 11.1-.74 4.48-.2 9.84-.36 16.04-.44 2.34-.03 4.8-.04 7.37-.04 2.38 0 4.66.01 6.83.04 5.54.04 10.42.15 14.6.32 4.45.15 8.14.37 11.07.6 5.07.41 7.86.9 8.37 1.33.44.38 1.83 4.34 3.43 11.33M2.82 33.3c.68-5.4 1.42-10.1 2.15-14.09M2.15 111.8C1.1 101.89.37 90.12.37 76.55c0-14.77.76-27.36 1.83-37.77" class="cls-21"/><path d="M15.87 1.76c-.68 4.04-1.28 7.81-1.82 11.33-.29 1.96-.59 3.85-.84 5.66-.78 5.39-1.39 10.12-1.88 14.33-.23 1.97-.44 3.81-.6 5.57C8.99 56.3 9.8 63.82 9.8 74.22c0 9.68.88 23.98 1.93 37.59.15 1.88.29 3.74.45 5.57.46 5.68.93 11.1 1.37 15.83.18 2 .36 3.87.52 5.58.56 6.05.99 10.25 1.09 11.25.01.15.03.23.03.23M26.96 1.12s-.29 4.43-.7 11.28c-.12 1.74-.22 3.66-.35 5.7-.26 4.4-.54 9.41-.81 14.67-.1 1.87-.19 3.78-.28 5.68-.65 13.12-1.19 26.97-1.19 36.59s.41 23.51.91 36.77c.08 1.88.14 3.74.22 5.58.23 5.68.46 11.1.68 15.82.09 2 .17 3.88.24 5.59.32 6.77.54 11.12.54 11.12M42.98.3s-.13 4.52-.31 11.48c-.05 1.77-.1 3.67-.15 5.72-.12 4.49-.24 9.59-.36 14.92-.05 1.91-.09 3.84-.14 5.78-.27 12.94-.5 26.52-.5 36s.27 24.02.59 37.59c.05 1.88.09 3.75.14 5.58.13 5.68.28 11.1.41 15.82.05 2 .12 3.88.15 5.59.19 6.71.33 11.01.33 11.01M57.19.32s.22 4.47.51 11.36c.08 1.8.15 3.78.24 5.87.19 4.48.38 9.55.59 14.86.06 1.87.13 3.78.2 5.7.44 12.84.81 26.31.81 35.76s-.29 24.24-.64 37.92a2950 2950 0 0 1-.6 21.4c-.05 2.01-.12 3.89-.17 5.61-.2 6.63-.35 10.88-.35 10.88M71.79.64s.36 4.56.86 11.57c.13 1.83.27 3.83.41 5.95.29 4.39.63 9.34.93 14.54.13 1.84.23 3.72.33 5.62.76 12.99 1.37 26.67 1.37 36.23s-.54 23.82-1.16 37.24c-.09 1.88-.19 3.75-.28 5.59-.28 5.68-.58 11.1-.84 15.81-.1 2.01-.22 3.89-.32 5.61-.38 6.76-.67 11.11-.67 11.11M82.83 1.58s.58 4.47 1.39 11.38c.22 1.78.44 3.74.67 5.81.5 4.29 1.04 9.13 1.55 14.21.19 1.84.38 3.71.58 5.61 1.29 13.43 2.39 27.68 2.39 37.45s-.9 22.88-1.96 35.77c-.17 1.88-.32 3.75-.49 5.61-.5 5.66-1.01 11.07-1.48 15.79-.2 2.01-.4 3.89-.56 5.62-.72 6.81-1.22 11.21-1.22 11.21" class="cls-21"/><path d="M95.43 133.19h.25l-1.21 5.62h-9.55l-11.84-.01H58.13l-15.32-.01H25.68l-11.61-.02H6.25l-1.32-5.58zm.41-113.8c.23.01.35.03.35.03l-1.51-5.54h-.01c-.31-.04-4.31-.45-10.43-.92-3.33-.26-7.27-.52-11.58-.74-4.66-.24-9.75-.45-14.95-.52-2.28-.04-4.57-.05-6.85-.04-2.71.03-5.46.06-8.18.13-5.73.14-11.36.37-16.42.61-4.67.23-8.86.47-12.2.69-4.34.28-7.26.51-7.95.56-.12.01-.17.01-.17.01L4.6 19.24l.37-.03c1.02-.06 4.07-.24 8.24-.47 3.6-.2 8.02-.44 12.7-.65 5.5-.26 11.35-.47 16.61-.59 3.08-.06 5.96-.1 8.46-.08 2.1.01 4.45.06 6.96.14 4.75.14 10.02.36 15.11.6 4.21.19 8.31.41 11.84.6 5.55.31 9.74.56 10.94.63Zm3.02 19.47c.23.01.36.01.36.01l-.91-5.61h-.17c-.92-.03-5.55-.14-11.7-.29-3.75-.08-8.06-.18-12.45-.27-5.36-.12-10.83-.22-15.46-.28-3.31-.05-6.21-.08-8.33-.08s-4.86.03-8.04.08c-5.08.08-11.19.2-17.06.33-5.02.12-9.87.23-13.77.32-4.45.12-7.68.2-8.51.23h-.2l-.84 5.48h.44c1.11-.03 4.26-.08 8.52-.14 3.97-.06 8.91-.13 14.09-.2 5.77-.09 11.84-.17 17.2-.23 3.01-.04 5.8-.06 8.18-.09 2.47-.03 5.39-.01 8.54 0 4.86.04 10.32.12 15.59.2 4.5.08 8.89.18 12.7.26 6 .13 10.56.26 11.84.28Zm.01 72.94h.55l-.92 5.6H86.97l-12.72-.01H58.76l-16.51-.01H24.76l-12.59-.02H2.54l-.77-5.56z" class="cls-21"/></svg>')}`;
export default image;