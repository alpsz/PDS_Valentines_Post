
let slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    controlsContainer: '#customize-controls',
    prevButton: '.prev',
    nextButton: '.next',
    autoplayButton: '.auto',
    navPosition: 'bottom',
    responsive: {
        1600: {
            items: 3,
            gutter: 20,
            nav: true
        },
        1024: {
            items: 3,
            gutter: 20,
            nav: true
        },
        768: {
            items: 2,
            gutter: 20,
            nav: true
        },
        480: {
            items: 1
        }
    }
});
