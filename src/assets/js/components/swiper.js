import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Mousewheel,
  Keyboard,
  Parallax,
  EffectFade,
  Thumbs,
  Controller,
} from 'swiper/modules';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const swipers = document.querySelectorAll('[data-swiper]') || [];

    swipers.forEach((elem) => {
      let options = elem.dataset && elem.dataset.options ? JSON.parse(elem.dataset.options) : {};
      options.modules = [Navigation, Pagination, Scrollbar, Autoplay, Mousewheel, Keyboard, Parallax, EffectFade, Thumbs, Controller];
      var swiper = new Swiper(elem, options);
    });

    // Custom Product Page Swiper Init
    const productSwiper = document.querySelector('.swiper-product-imgs');
    if (productSwiper) {
      const cssVariableBreakpointLG = getComputedStyle(document.documentElement).getPropertyValue('--theme-breakpoint-lg') || '992px';
      const breakpoint = window.matchMedia(`(max-width: ${cssVariableBreakpointLG})`);
      const swiperWrapper = document.querySelector('.swiper-wrap');
      const options = {
        modules: [Navigation, Pagination, EffectFade],
        slidesPerView: 1,
        loop: true,
        autoHeight: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        },
        autoplay: false
      };
      let swiper;

      function checkIfConvertProductImgsToSwiper() {
        if (breakpoint.matches) {
          enableSwiper();
        } else {
          disableSwiper();
        }
      }

      function enableSwiper() {
        if (swiperWrapper) {
          swiperWrapper.classList.add('swiper-wrapper');
        }
        swiper = new Swiper(productSwiper, options);
      }

      function disableSwiper() {
        if (swiper !== undefined) swiper.destroy(true, true);
        if (swiperWrapper) {
          swiperWrapper.classList.remove('swiper-wrapper');
        }
      }

      // Monitor our breakpoint for changes to device width. Using deprecated addListener to get it working in Safari
      breakpoint.addListener(checkIfConvertProductImgsToSwiper);

      // check if we need to hide filters for smaller devices
      checkIfConvertProductImgsToSwiper();
    }

    const updateListingSwiperBtns = (width) => {
      const btns = document.querySelectorAll('.swiper-btn') || [];
      if (btns.length > 0 && width) {
        btns.forEach((btn) => {
          btn.style.width = `${width}px`;
        })
      }
    }
  });

  // Custom product page slideshow - horizontal swiper
  var galleryThumbs = new Swiper('.gallery-thumbs-horizontal', {
    modules: [Thumbs],
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top-horizontal', {
    modules: [Thumbs],
    spaceBetween: 0,
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    }
  });

  // Custom product page slideshow - vertical swiper
  var galleryThumbs = new Swiper('.gallery-thumbs-vertical', {
    modules: [Thumbs],
    spaceBetween: 5,
    slidesPerView: 'auto',
    direction: 'vertical'
  });
  var galleryTop = new Swiper('.gallery-top-vertical', {
    modules: [EffectFade, Thumbs],
    spaceBetween: 0,
    effect: 'fade',
    navigation: false,
    thumbs: {
      swiper: galleryThumbs
    }
  });

    // Custom Linked Product Carousel - Large
    var linkedCarouselLarge = new Swiper('.swiper-linked-carousel-large', {
      modules: [Controller],
      spaceBetween: 0,
      slidesPerView: 1,
      roundLengths: true,
      loop: true,
      controller: {
        control: linkedCarouselSmall
      }
    });
    // Custom Linked Product Carousel - Small
    var linkedCarouselSmall = new Swiper('.swiper-linked-carousel-small', {
      modules: [Navigation, Pagination, Controller],
      spaceBetween: 0,
      slidesPerView: 1,
      roundLengths: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-next-linked',
        prevEl: '.swiper-prev-linked',
      },
      pagination: {
        el: '.swiper-pagination-custom',
      },
      controller: {
        control: linkedCarouselLarge
      }
    });

    // Custom Linked Product Lookbook Carousel
    var linkedLookbookProducts = new Swiper('.swiper-linked-lookbook', {
      modules: [Controller],
      spaceBetween: 0,
      slidesPerView: 1,
      roundLengths: true,
      loop: true
    });
  // Custom lookbook swiper
  var lookbookThumbs = new Swiper('.lookbook-thumbs-horizontal', {
    modules: [Thumbs],
    spaceBetween: 5,
    slidesPerView: "auto",
  });
  var lookbookImgs = new Swiper('.lookbook-top-horizontal', {
    modules: [Navigation, Pagination, Thumbs, Controller],
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-lookbook',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-next-thumbs',
      prevEl: '.swiper-prev-thumbs',
    },
    thumbs: {
      swiper: lookbookThumbs
    },
    controller: {
      control: linkedLookbookProducts
    }
  });




})();
