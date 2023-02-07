function switchLight(e) {
  if (clickSwitch !== false) {
    clickSwitch = false;
    $circle.className = 'grey-button';
    $container.className = 'container black';
  } else {
    clickSwitch = true;
    $circle.className = 'gold-button';
    $container.className = 'container yellow';
  }
}

var $container = document.querySelector('.container');
var $circle = document.querySelector('.circle-button');
var clickSwitch = true;

$circle.addEventListener('click', switchLight);
