function tabClick(e) {
  if (e.target.matches('.tab')) {
    for (let i = 0; i < $nodeListTab.length; i++) {
      if ($nodeListTab[i] === e.target) {
        $nodeListTab[i].className = 'tab active';
        var targetView = e.target.getAttribute('data-view');
        for (let i = 0; i < $nodeListView.length; i++) {
          if (targetView !== $nodeListView[i].getAttribute('data-view')) {
            $nodeListView[i].className = 'view hidden';
          } else {
            $nodeListView[i].className = 'view';
          }
        }
      } else {
        $nodeListTab[i].className = 'tab';
      }
    }
  }
}

var $tabContainer = document.querySelector('.tab-container');
var $nodeListTab = document.querySelectorAll('.tab');
var $nodeListView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabClick);
