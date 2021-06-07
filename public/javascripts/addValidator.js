const passwordInput = document.querySelector('.new-password')
const number = document.querySelector('.number')
const lowerChar = document.querySelector('.lowerChar')
const upperChar = document.querySelector('.upperChar')
const totalLength = document.querySelector('.length')
const addForm = document.querySelector('form.add-account-data')
const addSubmitButton = document.querySelector('button.add-submit')

if (passwordInput) {
  passwordInput.addEventListener('keyup', event => {
    const target = event.target.value
    target.match(/[0-9]+/)? number.classList = 'number valid': number.classList = 'number invalid'
    target.match(/[a-z]+/)? lowerChar.classList = 'lowerChar valid': lowerChar.classList = 'lowerChar invalid'
    target.match(/[A-Z]+/)? upperChar.classList = 'upperChar valid': upperChar.classList = 'upperChar invalid'
    target.length >= 6 && target.length <= 20? totalLength.classList = 'length valid' : totalLength.classList = 'length invalid'
  })
}

if (addSubmitButton) {
    addSubmitButton.addEventListener('click', function onSubmitButtonClicked(event) {
    addForm.classList.add('was-validated')
  })
}
