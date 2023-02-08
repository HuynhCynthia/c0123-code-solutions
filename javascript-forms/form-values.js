function handleSubmit(event) {
  event.preventDefault();
  const inputName = $contactForm.name.value;
  const inputEmail = $contactForm.email.value;
  const inputMessage = $contactForm.message.value;
  var formValues = {};

  formValues.name = inputName;
  formValues.email = inputEmail;
  formValues.message = inputMessage;

  console.log(formValues);

  document.querySelector('#contact-form').reset();
}

var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);
