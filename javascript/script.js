var $slider = document.getElementById('first-row-box');
$slider.addEventListener('click', function() {
  var isOpen = $slider.classList.contains('slide-in');
  $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});

var $slider2 = document.getElementById('third-row-box');
$slider2.addEventListener('click', function() {
  var isOpen2 = $slider2.classList.contains('slide-in2');
  $slider2.setAttribute('class', isOpen2 ? 'slide-out2' : 'slide-in2');
});
