function handleSubmit(event) {
  event.preventDefault();

  var formValues = {};

  var $contactForm = document.querySelector('#contact-form');
  var inputName = $contactForm.elements.name.value;
  var inputEmail = $contactForm.elements.email.value;
  var inputMessage = $contactForm.elements.message.value;

  formValues.name = inputName;
  formValues.email = inputEmail;
  formValues.message = inputMessage;

  console.log(formValues);

  document.querySelector('#contact-form').reset();
}

var $submit = document.querySelector('#contact-form');

$submit.addEventListener('submit', handleSubmit);
