/**
 * Our Blog slider
 */
const ourBlogThumbnails = document.querySelectorAll('#about-blog__dot');
const ourBlogSlides = document.querySelectorAll('#about-blog__slide');
const ourBlogLeftArrow = document.querySelector('#about-blog__left-arrow');
const ourBlogRightArrow = document.querySelector('#about-blog__right-arrow');

let ourBlogCarousel = new Carousel({
    panels: ourBlogSlides,
    thumbnails: ourBlogThumbnails,
    leftArrow: ourBlogLeftArrow,
    rightArrow: ourBlogRightArrow,
    panelActiveClass: 'flex',
    thumbnailActiveClass: 'dot--active'
})

/**
 * Quotes slider
 */
const quotesThumbnails = document.querySelectorAll('#quotes__dot');
const quotesSlides = document.querySelectorAll('#quotes__slide');

let quotesCarousel = new Carousel({
    panels: quotesSlides,
    thumbnails: quotesThumbnails,
    panelActiveClass: 'flex',
    thumbnailActiveClass: 'dot--active'
})

