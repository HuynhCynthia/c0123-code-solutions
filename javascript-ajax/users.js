var $userListId = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    var user = xhr.response[i];
    var $li = document.createElement('li');
    $li.textContent = user.name;
    $userListId.appendChild($li);
  }
});
xhr.send();
