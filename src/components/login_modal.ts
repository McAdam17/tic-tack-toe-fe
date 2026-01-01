import { publicAPI } from "../api/client";

interface LoginModalProps {
  onClose?: () => void
  onSuccess?: () => void
}

async function login(username:string, password: string) {
  return await publicAPI.post('login', {
    password,
    username
  })
}

export function loginModal(props?: LoginModalProps) {
  const modalContainer = document.createElement('div');

  const title = document.createElement('h2')
  title.textContent = 'Login';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Please enter your credentials to log in.';

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

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Login';

  titleContainer.appendChild(title)
  titleContainer.appendChild(closeButton)
  form.appendChild(titleContainer)
  form.appendChild(subtitle)

  form.appendChild(userLabel)
  form.appendChild(userInput)
  form.appendChild(passLabel)
  form.appendChild(passInput)
  form.appendChild(submitButton)
  
  modalContainer.appendChild(form)

  // css
  modalContainer.classList.add('modal_container_overlay');
  form.classList.add('modal_container__form')
  titleContainer.classList.add('modal_container__form__title')
  submitButton.classList.add('button')

  // event listeners
  closeButton.addEventListener('click', () => {
    props?.onClose?.()
  })

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const userNameValue = userInput.value
    const password = passInput.value
    try {
      await login(userNameValue, password)
      props?.onSuccess?.()
    }catch (e){
      console.log(e)
    }
  })

  return modalContainer;
}