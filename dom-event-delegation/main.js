function addTaskList(e) {
  console.log('event.target:', e.target);
  console.log('event.target.tagName', e.target.tagName);

  if (e.target.tagName === 'BUTTON') {
    var $listElement = e.target.closest('li');
    console.log('$listElement', $listElement);
    $listElement.remove();
  }
}

var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', addTaskList);
