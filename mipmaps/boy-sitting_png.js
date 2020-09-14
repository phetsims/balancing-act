/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';

const mipmaps = [
  {
    "width": 137,
    "height": 203,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 69,
    "height": 102,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 35,
    "height": 51,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 18,
    "height": 26,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAaCAYAAAC6nQw6AAAAAklEQVR4AewaftIAAAQ7SURBVI3BSWxUZQAH8P/3ve9t895snWln6DJlKy1WY9tAQCBKUERIRA0aL8RI4nZwQQ/evGliMK5xiTcvJFBCgocGWSIaoQYBC2htME1rqZPpAO10trfMWz5fTUnqRAd/P4L/YXNP5vUmXX1TV0TV57xMCYkUjdrVE1cnn/Nc5xoCAu7g8fU9p9Nx7SUOhBWRKRITIkygsqaImdWp+GM+oVdulaqTFA1s6s68LIvCNsN2CCUElBIsJTLa0dUSfQ8Bhgb+LFSUFakokYiAWDQMRglkSQTnHNn8HCQmwOW8mzKRMTTgum68r2c5FEnE8nQTFmiqhNxsCe2pOC6NTkJhLARCuhkaaI+psZrjIt0UQSKqYUGxYkKRRMTDIZg1F6bjEnDeRNGA7/ObxYqBdCIC23Hh+xyKLCIckkEIQVRXITFqEOAiRQO/zBRPTuULRU2RYNg1UEogiwy6KiMR1ZC9VYRA6KjnOiZFA7ZlD58aGX83N1vkfiQDpXcHcqwdnudjdHIGublSbma+8hkCAu7ArDln4fkPdiWlDsxOkBip4tepCg6empge+WNi9/WbhW8QEHAHlImZSmTf3u9/D7dtXjWP2ZKJwxfakaMbonrTvZ3z+bMHEWBogMnhuzp69g8yOdnrOQUMjSRw+UYLqr4CEEBg4U1YxPAfZG1ZX1vXC4cFqWlNi1gCYR7OzWSwFKVSRGDiDs91Tgj4F5oW6v/4xe3HHuourepLl/H0xipCIjCSi+I27pnwnTJQK100zdx5hjpf7H/qg85UfF9IFmOSyHBbKlIFuAfPvAFuF0AcA5QyqGLzMgQY6rQloztiuhrzOcd82YTPfZQNBweOmvC4AQqKv1GGBZQyFQEBdTqao7soIWsEQUAkJENTZcR0BZmkh+GxGgAOzn343AMXQ3AFYaRcuDrEUEdTpIjIBMR1FbOlKhIRDQv6VkWxeyPB0HgrAAIiSAAIPOM6R4CiTkxTh1csS2BB1apZCPg+R7ZSwgNbqxjoLIMIMgCCpSjqjF3P57GoYtjDJcPyp+0i9LQCVRHx5LY80loFt3HPtRCgqPPl0PlJfd0eSKu3YDxXODPtFsdjzSEQQrAgrDE8+8gURFLDUhR1tg50v3L3hi1Yfd/22oHBM4M3C9Uh3+dYqrVFwPMPT4LBAvctCwEhqUvrdg60vb0ypb86sDLxVjIa7k+2d5HLP/3o/nbh2+8GT499vvP+nmdCqhTDEsk4sK4raxw5fu4Nx5zNsyc2dn4lMdoriwIIIQBqOPbRawjIa9tjm0eni1+PTcx8uP6ezvdliTH803R17toVBGjZcloN24XteLAcD4btwnI8WI4H2/FcBN759OQnU9nCIcf1OBZZtuNMZecOYREB0Ly8WX+0qzWcisgsYnm+6XiejcBcxR2+OH7rByzas6t/b//a1l4S+Hk0e+no8ZEjWPQX0zay+xDIZ+sAAAAASUVORK5CYII="
  },
  {
    "width": 9,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAAAAklEQVR4AewaftIAAAGRSURBVF3Bz0sUUQAH8O+b9+bHezuuQbJum2y26AZLSQgaeYhADfESXrwUi4fOHaOTiUcPdupP8BREFNEh0YN4KMIkw1hdI3dFzV1HWdfd9c2bmS5zGPx8CC6ZHMq9Bci4wWjgKn9jvVR5ShFx50ZyorNdzMRtYdjCNJRSXZZOrzJEBJ6bGLqbJbnuJBotibVCCc7mblJDBCOkFOOGolRDu81hCwuMkkMNEevl6ufTevOjFKmgpkxs7jo//52ezzNEUMNOvPl6r/NRxSEtL4aV6uPUzvaLNYqQEDw1m3/yKZc0BneqcXyvXAHxXeE1D1cZQu+m88uWwbLSPUahXIN/4oKoFtp4OqMh9OegairPhy1M9GdaIHobYF8H4mlTQyjblThSnn9SlxfBrT5gdJCD8AQI5Z6GUMfDKTM9MrVRs+RfgzOM3T9C37UzBL6U9Nlwz5eB3o4557iWKfz+tU+1s/cxYT7QGSG5m0594cPyc9aQyrctfa/4Y7Gs/KD4cqn4auF1vptb+u3zpvzWcLYO/gNdipnFgbPuqwAAAABJRU5ErkJggg=="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = simLauncher.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;