function clickTotal(e) {
  clickValue++;
  $clickCount.textContent = 'Clicks: ' + clickValue;

  if (clickValue < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickValue < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickValue < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickValue < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickValue < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }

}

var clickValue = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', clickTotal);
