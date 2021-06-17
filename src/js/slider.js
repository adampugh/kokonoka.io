// add slider code
const images = ['images/sleep4.jpg', 'images/swoon6.jpg', 'images/swoon1.jpg'];
const texts = [['SLEEP'], ['SWOON EDITIONS'], ['CRUX MAGAZINE']];
const isMobile = screen.width < 800;
const textTitleSizeResponsive = isMobile ? 100 : 144;

rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,
    backgroundDisplacementSprite: 'http://hmongouachon.com/_demos/rgbKineticSlider/map-9.jpg',
    cursorDisplacementSprite: 'http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png',
    cursorScaleIntensity: 0.6,
    cursorMomentum: 0.14,
    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,
    slideTransitionDuration: 0.8,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,
    nav: true,
    navElement: '.main-nav',
    imagesRgbEffect: false,
    imagesRgbIntensity: 4,
    navImagesRgbIntensity: 120,
    textsDisplay: true,
    textTitleSize: textTitleSizeResponsive,
    textsTiltEffect: true,
    googleFonts: ['Playfair Display:400'],
    textsRgbEffect: true,
    textsRgbIntensity: 1,
});
