$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["O melhor app de livros.", "O app que te incentiva a ler."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});