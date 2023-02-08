
function popUp(e) {
  if (popUpOn !== true) {
    popUpOn = true;
    $modalBox.className = 'container-after-modal on';
    $purpleButton.className = 'purple disabled';
    $overLay.className = 'overlay on';
  } else {
    popUpOn = false;
    $modalBox.className = 'container-after-modal off';
    $purpleButton.className = 'purple on';
    $overLay.className = 'overlay on';
  }

}

var popUpOn = false;
var $purpleButton = document.querySelector('.purple');
var $redButton = document.querySelector('.red-button');
var $modalBox = document.querySelector('.container-after-modal');
var $overLay = document.querySelector('.overlay');

$purpleButton.addEventListener('click', popUp);
$redButton.addEventListener('click', popUp);
