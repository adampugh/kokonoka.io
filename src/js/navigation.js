const t1 = new TimelineMax({ paused: true });

t1.to('.navigation__toggle-btn__one', 0.6, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});

t1.to('.navigation__toggle-btn__two', 0.6, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.6
});

t1.to('.navigation__menu', 1.2, {
    top: '0%',
    ease: Expo.easeInOut,
    delay: -1.2
});

t1.staggerFrom('.navigation__menu ul li', 1.2, {
    x: -200,
    opacity: 0,
    ease: Expo.easeOut
}, 0.1);

const reverseColour = () => {
    const whiteRgb = 'rgb(255, 255, 255)';
    const $navigation = $('.navigation');
    const navigationColour = $navigation.css('color');
    
    if (navigationColour === whiteRgb) {
        $('.navigation__toggle-btn__one, .navigation__toggle-btn__two').delay(2000).animate({ backgroundColor: '#101010'}, 'slow');
        $navigation.delay(2000).animate({ color: '#101010'}, 'slow')
    } else {
        $('.navigation__toggle-btn__one, .navigation__toggle-btn__two').animate({ backgroundColor: '#fff'}, 'slow');
        $navigation.animate({ color: '#fff'}, 'slow')
    }
}

t1.reverse();
$(document).on('click', '.navigation__toggle-btn', () => {
    reverseColour();
    t1.reversed(!t1.reversed());
});

$(document).on('click', 'a', () => {
    reverseColour();
    t1.reversed(!t1.reversed());
});