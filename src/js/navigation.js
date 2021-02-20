const t1 = new TimelineMax({ paused: true });

t1.to('.navigation__toggle-btn__one', 0.6, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut,
});

t1.to('.navigation__toggle-btn__two', 0.6, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.6,
});

t1.to('.navigation__menu', 1.2, {
    top: '0%',
    ease: Expo.easeInOut,
    delay: -1.2,
});

t1.staggerFrom(
    '.navigation__menu ul li',
    1.2,
    {
        x: -200,
        opacity: 0,
        ease: Expo.easeOut,
    },
    0.1
);

const reverseColour = () => {
    const whiteRgb = 'rgb(255, 255, 255)';
    const $navigation = $('.navigation');
    const navigationColour = $navigation.css('color');
    const $navigationToggleBtns = $('.navigation__toggle-btn__one, .navigation__toggle-btn__two');
    const $body = $('body');

    if (navigationColour === whiteRgb) {
        $body.css('overflow-y', 'scroll');
        $navigationToggleBtns.delay(2000).animate({ backgroundColor: '#101010' }, 'slow');
        $navigation.delay(2000).animate({ color: '#101010' }, 'slow');
    } else {
        $body.css('overflow-y', 'hidden');
        $navigationToggleBtns.animate({ backgroundColor: '#fff' }, 'slow');
        $navigation.animate({ color: '#fff' }, 'slow');
    }
};

t1.reverse();

const $navigationToggleBtn = $('.navigation__toggle-btn');
const $navigationMenuLinks = $('.navigation__menu__menu-items ul li a');

const reverseColourAndAnimation = () => {
    reverseColour();
    t1.reversed(!t1.reversed());
};

const disableClickDuringAnimation = ($el, duration, fn) => {
    $el.off();
    fn();
    setTimeout(() => $el.on('click', () => disableClickDuringAnimation($el, duration, fn)), duration);
};

$navigationToggleBtn.on('click', () => {
    disableClickDuringAnimation($navigationToggleBtn, 2000, reverseColourAndAnimation);
});

$navigationMenuLinks.on('click', () => {
    reverseColourAndAnimation();
});

const navItems = $('.navigation__menu__menu-items li a');
const $firstImage = $('.navigation__hover__image1');
const $secondImage = $('.navigation__hover__image2');
const $thirdImage = $('.navigation__hover__image3');
const $fourthImage = $('.navigation__hover__image4');

const images = [$firstImage, $secondImage, $thirdImage, $fourthImage];
$.each(images, (index, image) => image.hide());

$(navItems[0]).hover(
    () => $firstImage.fadeIn(1000),
    () => $firstImage.fadeOut(1000)
);
$(navItems[1]).hover(
    () => $secondImage.fadeIn(1000),
    () => $secondImage.fadeOut(1000)
);
$(navItems[2]).hover(
    () => $thirdImage.fadeIn(1000),
    () => $thirdImage.fadeOut(1000)
);
$(navItems[3]).hover(
    () => $fourthImage.fadeIn(1000),
    () => $fourthImage.fadeOut(1000)
);
