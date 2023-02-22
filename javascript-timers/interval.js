function countdown() {
  var changeContent = [3, 2, 1, '~Earth Beeeelooowww Us~'];
  if (i < changeContent.length) {
    $h1.textContent = changeContent[i];
    i++;
  } else {
    clearInterval(nIntervId);
  }

}

var i = 0;
var $h1 = document.querySelector('h1');
var nIntervId = setInterval(countdown, 1000);
