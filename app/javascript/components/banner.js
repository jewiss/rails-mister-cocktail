import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Share your best cocktail and Come on get inspirations !"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
