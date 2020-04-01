/* eslint-disable */
const mipmaps = [
  {
    "width": 162,
    "height": 268,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 81,
    "height": 134,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 41,
    "height": 67,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 21,
    "height": 34,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAiCAYAAACwaJKDAAAAAklEQVR4AewaftIAAASrSURBVJXBa2iVdRwH8O/v//8/l/Oc85wzd9W5eXZzazoT1FkaCTXfZL0oKxAKIqILvojCV73oTUTQmwjsjbCKoqIEISKxLTQEG5nY8jJntdkux7k1dzv38zzP//n3hMnOxja3z4ewNvqmuvqjmmHsI6JyAjQFZF3X6RkeHHwdwBgChDWoa2o6axjmPiJCMaUUHMe59Pdff3YAmOJYpdq6+g9CIesQEWExIgLnfL1t202zMzPHBVZJ0/XtjeVR7G6OY3RyBmPTc9iwLor1pTGksjn82DcEoesdACICq6WUu7s5jpqKMtRUlKFYwXHRdXkQnPNY2LYPMqyS53nDsbCFnONASh//8X0f2XwBhq4BUCAihCP2BoFVSieTF0fSLjKMo9LW4Y0ngFglJpIOamMCUkowxpBOJm8JrFI4bLkPH3gyW11dbTmOg65PjuKZF19GOp2GlBLDNwagpHSu9/WdElil0ZGRTy+dPP72gGXWp7M51FaVo7vzQ0jfhwLQ3lKP0xevXgMwKbAGlmlMlNqRel1wCM5RFrNx17WhBM4PJs4hwLAGw+P/nHA9zycQUtkc5tIZeFLCkxKe5/WOjYwcQYBjDS70D/TsbGnYURaL3mfqGkxdR7ZQwFzOQfW23eWnz/dfkoXkdY41Otvb93VLfOMOIXjLVM5DrH4rNj/wCCZn07zn6ngsPzP0pcAaxePxAzXtHQ9OTs2Ccw2j03n88dPP+OLUZXBhbkFAYGmNzz+7/6WwFYreGp/6/buunk6rqu2wEal6PC307e8e664gxlGMiEGBYggILCIEb3vjlae/13Utnsp4YDr8spbH3ieulRIx3IOPgECRksZHu7kw2j8/kyrxmQYiBoAzJngp7kEpBaVkGgGBeZu4FtrPuEYKAOHelC+hfA9KKQAKABUQYJg3sSUmUxsNF8qXuEv5Eko6qDQLkG4uI908pJeH9PJQygdxHVwzwbUQAhkEBOY9dGBnRSTju6CwBsfxQETQNA5dEyAidPfcov7bBpanXAQY5l2ZmktNOp4H09ARtS3YkRBMQwdjDESErY0RCytQyk8hwDBvUjKV54bAcqorI6iLuViWUlkEGIoY66y5SCyMu7K5PIoxxrCnLQKlFJailEojwFCEiMIoIqWPxSrLwmir9LAMhgBDESISKMI5w2JEhO3NFpTysRiBNAQYVuB5EkupKLOxq1ZhOQwLEYowxtKFguNgESLC/ZttKF9iASIdAYaFGIowxmTBcfuxhFg0hD0NhIVIQ4BhBUQQt6eTPVjGts1R2NzDYgwr459980NnPu/ksYSwZeC5/evw1C4NHa2ECiNzEwGBgGVZexsaGl4YGp20onYIuiYAEDK5PPM8P5nN5X8zTX0vlmCaOuIbdeQLTuFUd/cxBERra+s74XD4TSFE5MbNJIAkiuhNTU2Heq8MvLenfetXVsiIYglKKczMprrnkplfEGCWZb0qhIhgGUKIyJlzvScHh8beSqVz40opFPOkVLenk79+9PG3h/E/amxsPGKaZg1jrMT3/Rnf913c4adSqfFEInECQAJ3lBx8Yt9rG6pKmxmRyBfcmZGbE1e6zlzoRJF/AcnN2Ml52KzPAAAAAElFTkSuQmCC"
  },
  {
    "width": 11,
    "height": 17,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAARCAYAAAAL4VbbAAAAAklEQVR4AewaftIAAAHjSURBVG3By2pTURQG4H+ts7NPbo1Nmoa0sSY25WBQLKkXEBQyU3Aq0ifQodiZfYM6C4gvUAcO7Fic1oqKkHqhEIyDtBQ0kNaYmDQ5t+2OZCByvo8QIF8s3pPSXCeijFKq4zjORvNbo8oIkEnE11by2fyZZDxyKZ+dC4VC6wCkQIDK+SIt5bJgJriej9pBK5OazdxiBJgtlX+ES1cwmp5D2FrBYirun/T7h4wAo/16vb27DW4forv3HhcK882TQb/GCPD96PiZNMSxUgogQuL0Ug0aI8DTrZevO7HsVpsS8Bcu4vN+7zo0gYmH9+88UqC7tXq/tdei+eqLjxaxAaAB5XvT0AS0lHVzc3N7uAoyBJEEG/hLKQXle1DKG0IT0FaXYzM9kHAUQYYIv3479k7DlSCA2AAUhtAEtLD0OunMFMyIibGR7cpPBz/RdxljyscQGkOTM9GBGTFh2w7GTClwo2TiHzY0hsbMJv6zuBBFOuxjgqExNAUQxohGjuP2oMmQwLVSGBMGNIZGAEEjArue9wUThVwMFcuAlYYLTZTL5eq73WYlnYzCVzASUfGqkM9eNZiFYTCWz53C2dzgzdsdQDDz5d7APuoN7BYAt9vtfkgmpzZiEfM2iIRtO18fP3n+ANofzGSmzALF6tYAAAAASUVORK5CYII="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  window.phetImages.push( mipmap.img ); // make sure it's loaded before the sim launches
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = function() {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;