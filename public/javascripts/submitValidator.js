const submitForm = document.querySelector('form.account-data')
const submitButton = document.querySelector('button.submit')

if (submitButton) {
  submitButton.addEventListener('click', function onSubmitButtonClicked(event) {
    submitForm.classList.add('was-validated')
  })
}