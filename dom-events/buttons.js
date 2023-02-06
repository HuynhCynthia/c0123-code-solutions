/* Click Event */
function handleClick(event) {
  console.log('button clicked');
  console.log('event object:', event);
  console.log('event.target', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

/* Mouseover Event */
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object:', event);
  console.log('event.targt:', event.target);
}

var $handleMouseover = document.querySelector('.hover-button');
$handleMouseover.addEventListener('mouseover', handleMouseover);

/* Double-click Event */
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object:', event);
  console.log('event.targt:', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
