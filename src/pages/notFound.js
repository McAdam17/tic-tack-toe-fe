import { setUpNavigationElements } from "../router";

export const NotFoundPage = () => {
  return {
    template() {
      return `
        <section>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
          <h1>404 - Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </section>
      `
    },
    hydrate() {
      const navLinks = document.querySelectorAll('a[href^="/"]');
      setUpNavigationElements(navLinks);
    }
  }
}
