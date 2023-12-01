import Swiper, { Navigation, Pagination } from 'swiper';

/*
Pagination,
EffectFade,
Autoplay,
Parallax,
*/

import "@scss/components/swiper";
//import "@scss/libs/swiper";
//import 'swiper/css';

export function initSliders() {
    if (document.querySelector('.study-programms__slider')) {
        new Swiper('.study-programms__slider', {
            modules: [Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            autoHeight: false,
            speed: 800,
            simulateTouch: true,
            lazy: true,

            pagination: {
                el: '.study-programms__pagination',
                clickable: true,
                type: 'bullets'
            },

            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                859: {
                    slidesPerView: 3
                },
                1120: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    }
    if (document.querySelector('.certificats__slider')) {
        new Swiper('.certificats__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 38,
            autoHeight: false,
            speed: 800,
            simulateTouch: true,
            lazy: true,

            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                900: {
                    slidesPerView: 3
                },
                1120: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    }
}