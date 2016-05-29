var $slider = document.getElementById('first-row-box');
var $slider2 = document.getElementById('third-row-box');
$slider.addEventListener('click', function() {
  var isOpen = $slider.classList.contains('slide-in');
  var isOpen2 = $slider2.classList.contains('slide-in2');
  if(isOpen2){
    $slider2.setAttribute('class', 'slide-out2');
  }
  $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});

var $slider2 = document.getElementById('third-row-box');
var $slider = document.getElementById('first-row-box');
$slider2.addEventListener('click', function() {
  var isOpen2 = $slider2.classList.contains('slide-in2');
  var isOpen = $slider.classList.contains('slide-in');
  if(isOpen){
    $slider.setAttribute('class', 'slide-out');
  }
  $slider2.setAttribute('class', isOpen2 ? 'slide-out2' : 'slide-in2');
});

var $work = document.getElementById('work');
var $slider = document.getElementById('first-row-box');
$work.addEventListener('click', function() {
  var isOpen = $slider.classList.contains('slide-in');
  var isOpen2 = $slider2.classList.contains('slide-in2');
  if(isOpen2){
    $slider2.setAttribute('class', 'slide-out2');
  }
  $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});

var $resume = document.getElementById('resume');
$resume.addEventListener('click', function() {
  var isOpen2 = $slider2.classList.contains('slide-in2');
  var isOpen = $slider.classList.contains('slide-in');
  if(isOpen){
    $slider.setAttribute('class', 'slide-out');
  }
  $slider2.setAttribute('class', isOpen2 ? 'slide-out2' : 'slide-in2');
});

var $slider = document.getElementById('first-row-box');
var $slider2 = document.getElementById('third-row-box');
var $about = document.getElementById('about');
$about.addEventListener('click', function() {
  var isOpen = $slider.classList.contains('slide-in');
  var isOpen2 = $slider2.classList.contains('slide-in2');
  if(isOpen2){
    $slider2.setAttribute('class', 'slide-out2');
  }
  if(isOpen) {
    $slider.setAttribute('class', 'slide-out');
  }
});

var $slider = document.getElementById('first-row-box');
var $slider2 = document.getElementById('third-row-box');
var $slider3 = document.getElementById('second-row-box');
$slider3.addEventListener('click', function() {
  var isOpen = $slider.classList.contains('slide-in');
  var isOpen2 = $slider2.classList.contains('slide-in2');
  if(isOpen2){
    $slider2.setAttribute('class', 'slide-out2');
  }
  if(isOpen) {
    $slider.setAttribute('class', 'slide-out');
  }
});

$("#know-me-id").click(function() {
    $('#second-row-box').animate({
        scrollTop: $("#what-I-do").offset().top - 70
    }, 1000);
});
