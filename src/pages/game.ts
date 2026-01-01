import { privateAPI } from "../api/client";
import { navigate, PageFunction, setUpNavigationElements } from "../router";

export const GamePage: PageFunction = () =>  {
  return {
    template() {
      return `
        <section>
          <!--Header-->
          <header class="page_header flex_container space_between align_center">
            <p>Tic Tac Toe</p>
            <div class="page_header__login__buttons">
              <button class="button" id="logout_button">Log out</button>
            </div>
          </header>
          <!--Main-->
          <main class="page_content flex_container flex_column align_center justify_center">
            <h1>Welcome to Tic Tac Toe!</h1>
          </main> 
          <!--Footer-->
          <footer>
            <p>&copy; 2024 Tic Tac Toe. All rights reserved.</p>
          </footer>
        </section>
      `
    },
    hydrate() {
      const navLinks = document.querySelectorAll('a[href^="/"]');
      setUpNavigationElements(navLinks);

      const logoutButton = document.getElementById('logout_button')
      logoutButton?.addEventListener('click', async () => {
        try{
          await privateAPI.get('/logout')
          navigate('/')
        }catch {
          alert('error while logging out')
        }
      })
    }
  }
}