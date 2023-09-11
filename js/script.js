var image = document.getElementById('cabeza_img');

new simpleParallax(image, {
	scale: 1.2
});

var cards = document.querySelectorAll('.card-flip');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});