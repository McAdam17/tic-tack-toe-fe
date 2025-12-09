
export function registerModal(props) {
  const modalContainer = document.createElement('div');

  const title = document.createElement('h2')
  title.textContent = 'Register';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Please enter your information to register.';

  const titleContainer = document.createElement('div');

  const form = document.createElement('form');

  const userLabel = document.createElement('label');
  userLabel.textContent = 'Username: ';
  const userInput = document.createElement('input')
  userInput.type = 'text';
  userInput.name = 'username';

  const passLabel = document.createElement('label');
  passLabel.textContent = 'Password: ';
  const passInput = document.createElement('input')
  passInput.type = 'password';
  passInput.name = 'password';

  const confirmPassLabel = document.createElement('label');
  confirmPassLabel.textContent = 'Confirm Password: ';
  const confirmPassInput = document.createElement('input')
  confirmPassInput.type = 'password';
  confirmPassInput.name = 'confirm_password';
  
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Register';

  titleContainer.appendChild(title)
  titleContainer.appendChild(closeButton)
  form.appendChild(titleContainer)
  form.appendChild(subtitle)

  form.appendChild(userLabel)
  form.appendChild(userInput)
  form.appendChild(passLabel)
  form.appendChild(passInput)
  form.appendChild(confirmPassLabel)
  form.appendChild(confirmPassInput)
  form.appendChild(submitButton)
  
  modalContainer.appendChild(form)


  // css
  modalContainer.classList.add('modal_container_overlay');
  form.classList.add('modal_container__form')
  titleContainer.classList.add('modal_container__form__title')
  submitButton.classList.add('button')

  // event listeners
  closeButton.addEventListener('click', () => {
    props?.onClose()
  })

  return modalContainer;
}