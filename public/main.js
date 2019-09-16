const toTop = document.querySelector('#toTop');
const slider = document.querySelector('.main-carousel');

const flik = new Flickity(slider, {
  cellAlign: 'center',
  contain: true,
  wrapAround: true
});

toTop.addEventListener('click', scrollToTop);

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0 });
}
