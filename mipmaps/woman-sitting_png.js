/* eslint-disable */
const mipmaps = [
  {
    "width": 160,
    "height": 243,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 80,
    "height": 122,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 40,
    "height": 61,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 20,
    "height": 31,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAfCAYAAADnTu3OAAAAAklEQVR4AewaftIAAASMSURBVI3BW4hUZQDA8f/5znfOd+ZyZmZn1lnXGVdbFdPFa0pgD70UgfoSShmoEIgSCOlTQUEP4XNQL0Ui9tJbEIg9FFhUPpihFqgP3lLXXXdndi47s3M9l2ZwJk4y7vr7aTyn1LL0x1bIesf3tZF2qznnuO4fUpdbXdepFvK5w8AtOjSew2gm+61hmnvsRCqmAVIXNBt1pArhuR7zpVypXCx9Ml8ufa6zFE3bP5we+cgKRyMhpRgeTqGUQghBJBym7bhI3bB839tcmS9/JVlCZuXYccNQyjRN4vE4htfmyKsbMaTOmV+uoxGhgoeyQhnguGQJhmms9zyPWDjEWzvGWLU8RcRSdO3espLvrk6iTIWuS6RhRAWLM522E1ehMPt2rCZph4lYiq75ao1VIyk2DEnaThtlhRkZXfGmYBF2LPaBlDKE72MaJtP5In2TuQJCg2Q8SigUotWs02o2HgoWkUim3jBMBWi0XZcXMmnuTD6mayQZR5kmTcdDFzpC6EjDqEoW4bpuxXVdTCEoVmpIXcf1fGYKZXzfx5A6Xc1WE6HraJpmCxYx9fDBnlar2RJCcPnWI9pth3WvH2DTm0fxk2O4rsedmXnwwXXaOI5T1Fmcr2lipx1LrK+5Oq3aPInGDOU7f6PVy/x67Ta3Sy3q9RrVSqX06MH9L3WWYIUjWy0rNNRs1B7fuD8tL/x1O2xbazBH11LwNZJDCVJDQ42fL/z0GnBOsoRyIf9huZD/bd++/cfWdExMTJDJZNF1nY1somtqako7c+b0VTokg206duzoKSCTzxci27dvX7N27TqZTqcZxDQNBewELkr+L3bw4KFPx8fH92az2fFUaphkMsmz5HI5YrEYmiboCNEhCThx4uQXu3fvOWwYBs9SLBYpl8t0pdNplFLMzc21gD/pkARIaXTR12w2qVQqVCrztAp1HMtnbGyM1atXE1Sv16eAEh2SgBsXf1zwilOs2LAFx3EwDINoNIpSinx+lomXt2HbMZ5Wqy1M0yMJUMrYSrNKMplECEGj0UApRZc9mkBKySCNRqNCjyDgpRfH19nRKEIIugqFAn2e5yGExiDV6sI8PYKAmyUuD63dTJ/v8x/f9wGNQVzXcekRBIxmV/qJ4WUMomkaz6KUpegRBLiu4xDQajXp03Udz/N4Bo0eQYBlhRIEzM7OluiRUuI4DoNEIuE4PYIAy1IJAsrl8pVqtUqXaZrU6zUGiUSiKXoEAVLKCAGmqaaKxeIjOqSU5HI5BlFKDdEjCRBChAjI5WYrnuf9ns1m39Y0DcsyuXbtCvF4Ak0TdDmOw+TkQ/okT+zdteuVQ/fu/WMXi0X6ZmZmo+fP//DZxMTE3pGRdEQphVKKJzy6DEPQaNTu0CO3bdt2anx8zUnbtkOtVpvZ2Tx9y5ePbgcu3bx541wqlTwgpWSQublCjh6RyWTftW07xFN838f3fYuOs2e/ee/69etXarUavu/T12g0uHv37qPTp0+fpUcD3rcsa1QppRHgOI63sLBwCfieJyRwJB6Pr7RtW7qu609PTz8GvgYW6PkXjWq5Kdht1MAAAAAASUVORK5CYII="
  },
  {
    "width": 10,
    "height": 16,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAklEQVR4AewaftIAAAHESURBVF3Bv1PTUAAH8G9eXkp+NEmpXENLPKqg1oKjFTj/Alf09NxlFBdmJyd3NzcXj/Pc/Dd04By0gyCHV2lK8xr70iSvz8fgCf18NMxYbCw9scvuS0ppQ0p5VhSi3+/9eq5jxkJQfzc/f2X9/u3m3PWgWom4aAgpQorLdKLrNx9vrOJuq4k4GeOwz8CYvUpwQT28ukd1w6o4JrK8gJQSgW9DTgUILutB06aTXAD1NkpWGYxn0AiROi5IGPtSqS486EVx2Z78MYeFgePRZHp09PMtxX/Bzs6zPcdxT9rttZUwDGGaJm5tJfiw//4NhbK7++LR5ubWa9u2ll3Xw7kkSTAcDqHrOhSDQknOomaejpdHIsdgECEdpVhp3QClFHEcRwC6BIpfDO78Pv4BxmIAEk7FAaUU56SUDAqBMnaXTvyggaIoMEtKOYVCoLieT6hhIMuyAjM0TaNQCBTPc2tQCCGHnPOJgn8IIT4UCqB1etpvWpYFxljqed7nanVuo9v9BkoNMBYXUOj29sNPjI2uHRx8Bed80TRLrzqdzrpt22UpBdKUf4eilUqlp6ZpWlDyPB9wzj8CuFer1daEEGkURfsA8r+tV7vOE5sGXwAAAABJRU5ErkJggg=="
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