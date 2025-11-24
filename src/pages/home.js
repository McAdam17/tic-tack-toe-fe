import { setUpNavigationElements } from "../router";

export const HomePage = () => {
  return {
    template() {
      return `
        <section>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
          <h1>Home</h1>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">Go to Facebook</a>
          <p>Welcome to my pure JS SPA ✨</p>
        </section>
      `
    },
    hydrate() {
      const navLinks = document.querySelectorAll('a[href^="/"]');
      setUpNavigationElements(navLinks);
    }
  }
}
