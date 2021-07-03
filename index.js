var myAnimation = new hoverEffect({
  parent: document.querySelector('.create'),
  intensity: 0.1,
  image1: 'images/emoji.png',
  image2: 'images/emoji.png',
  displacementImage: 'displacement/4.png',
});
var myAnimation = new hoverEffect({
  parent: document.querySelector('.create-two'),
  intensity: 0.1,
  image1: 'images/material.png',
  image2: 'images/material.png',
  displacementImage: 'displacement/4.png',
});
var myAnimation = new hoverEffect({
  parent: document.querySelector('.create-three'),
  intensity: 0.1,
  image1: 'images/todo.png',
  image2: 'images/todo.png',
  displacementImage: 'displacement/4.png',
});
var myAnimation = new hoverEffect({
  parent: document.querySelector('.create-four'),
  intensity: 0.1,
  image1: 'images/emojis.png',
  image2: 'images/emojis.png',
  displacementImage: 'displacement/4.png',
});

$('.footer__inner svg').click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
AOS.init();
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//   cursor.setAttribute(
//     'style',
//     'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
//   );
// });

// document.addEventListener('click', () => {
//   cursor.classList.add('expand');
//   setTimeout(() => {
//     cursor.classList.remove('expand');
//   }, 500);
// });
