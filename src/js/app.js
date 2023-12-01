import '@scss/style';

import '@js/script';

//----------------------------------------------------------------COMPONENTS

import { initSliders } from '@js/libs/swiper'; window.onload = initSliders(); /* https://swiperjs.com/ */

// import { showMore } from '@js/components/showMore'; showMore();

import { spollers } from '@js/components/spollers'; spollers();

// import { counter } from '@js/components/counter'; counter();

import { menuInit } from '@js/components/menu'; menuInit();

// import { clock } from '@js/components/clock'; clock();

// import { tabs } from '@js/components/tabs'; tabs();

// import '@js/components/popup';

// import '@js/libs/gallery'; /* https://www.lightgalleryjs.com/ */

// import '@js/libs/marquee'; /* https://mattiacoll.github.io/vanilla-marquee-site/ */

// import '@js/libs/tippy'; /* https://atomiks.github.io/tippyjs/ */

//----------------------------------------------------------------SCROLL

import { headerScroll } from '@js/modules/scroll/headerScroll'; headerScroll();

// import { stickyBlock } from '@js/modules/scroll/stickyBlock'; stickyBlock();

import { pageNavigation } from '@js/modules/scroll/scroll'; pageNavigation();

// import { progressBar } from '@js/components/progressBar'; progressBar();

import { lazyMedia } from '@js/libs/lazyLoad'; lazyMedia /* https://github.com/verlok/vanilla-lazyload */

// import '@js/modules/scroll/watcher';

// import '@js/libs/simpleBar'; /* https://github.com/Grsmto/simplebar/tree/master/packages/simplebar */

//----------------------------------------------------------------FORMS

import { formFieldsInit } from '@js/components/forms/formInit';
formFieldsInit();

import { formSubmit } from '@js/components/forms/formSubmit'; formSubmit();

// import { wordLimit } from '@js/components/forms/wordLimit'; wordLimit();

// import { quantity } from '@js/components/forms/quantity'; quantity();

// import { rating } from '@js/components/forms/rating'; rating();

// import { rangeInit } from '@js/libs/range'; rangeInit(); /* https://refreshless.com/nouislider/ */

// import '@js/components/forms/select';

// import '@js/libs/datePicker'; /* https://www.npmjs.com/package/js-datepicker */

import '@js/libs/inputMask'; /* https://github.com/RobinHerbots/Inputmask */

//----------------------------------------------------------------MODULES

// import { changeFontSize } from '@js/modules/changeFontSize'; changeFontSize();

// import { hourRange } from '@js/modules/hourRange'; hourRange(7.30, 15.45);

// import { addLoadedClass } from '@js/modules/loaded'; addLoadedClass();

// import { colorScheme } from '@js/modules/colorScheme'; colorScheme();

// import { addTouchClass } from '@js/modules/touch'; addTouchClass();

// import { fullVHfix } from '@js/modules/fullScreenFix'; fullVHfix();

// import { changeStyle } from '@js/modules/changeStyle';
// changeStyle({
//     firstRemoveClass: 'block',
//     secondRemoveClass: 'line'
// });

import { webp } from '@js/modules/webp'; webp();

import '@js/modules/mousePRLX';

import '@js/modules/dynAdapt'; /* https://github.com/FreelancerLifeStyle/dynamic_adapt */

// import '@js/libs/typed'; /* https://mattboldt.github.io/typed/ */

//----------------------------------------------------------------EFFECTS

// import { hoverEffect } from '@js/effects/hoverEffect'; hoverEffect();

// import { ripple } from '@js/effects/ripple'; ripple();