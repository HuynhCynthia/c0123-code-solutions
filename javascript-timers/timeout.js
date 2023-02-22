function delayGreeting() {
  $h1.textContent = 'Hello There';
}

var $h1 = document.querySelector('h1');

setTimeout(delayGreeting, 2000);
