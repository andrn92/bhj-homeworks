let documentHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
let windowHeight = document.documentElement.clientHeight;
let reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function(event) {
  for (let reveal of reveals) {

    let coords = reveal.getBoundingClientRect()
    if (coords.top > 0 && coords.bottom < windowHeight) {
      reveal.classList.add('reveal_active')
    } else reveal.classList.remove('reveal_active')
  };
});