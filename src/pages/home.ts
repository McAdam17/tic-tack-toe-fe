import { navigate, PageFunction, setUpNavigationElements } from "../router";
import { loginModal } from "../components/login_modal";
import { registerModal } from "../components/register_modal";

export const HomePage: PageFunction = () => {
  return {
    template() {
      return `
        <section>
          <!--Header-->
          <header class="page_header flex_container space_between align_center">
            <p>Tic Tac Toe</p>
            <div class="page_header__login__buttons">
              <button class="button login_button">Login</button>
              <button class="button register_button">Register</button>
            </div>
          </header>
          <!--Main-->
          <main class="page_content flex_container flex_column align_center justify_center">
            <h1>Welcome to Tic Tac Toe!</h1>
            <p>Play the classic game of Tic Tac Toe against your friends or the computer. Enjoy hours of fun and challenge your strategic thinking skills!</p>
            <button class="button login_button">Login</button>
          </main> 
          <!--Footer-->
          <footer>
            <p>&copy; 2024 Tic Tac Toe. All rights reserved.</p>
          </footer>
        </section>
        <div id="modal_pivot"></div>
      `
    },
    hydrate() {
      const navLinks = document.querySelectorAll('a[href^="/"]');
      setUpNavigationElements(navLinks);

      // search for login buttons
      const loginButtons = document.querySelectorAll('.login_button');
      const toggleModal = () => {
        const modalPivot = document.getElementById('modal_pivot');
        const modalComponent = loginModal({
          onClose: () => {
            if (modalPivot)
            modalPivot.innerHTML = '';
          },
          onSuccess: () => {
            navigate('/game')
          }
        });
        modalPivot?.appendChild(modalComponent)
      }

      loginButtons.forEach(btn => {
        btn.addEventListener('click',() => {
          toggleModal();
        })
      })

      const registerButton = document.querySelector('.register_button');
      registerButton?.addEventListener('click', () => {
        const modalPivot = document.getElementById('modal_pivot')
        const modalComponent = registerModal({
          onClose: () => {
            if(modalPivot)
            modalPivot.innerHTML = '';
          },
        })

        modalPivot?.appendChild(modalComponent)
      })
    
    }
  }
}
