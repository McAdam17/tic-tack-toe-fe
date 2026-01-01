import { PageFunction, setUpNavigationElements } from "../router";

export const LoadingPage: PageFunction = () =>  {
  return {
    template() {
      return `
        <section>
          <h1>Loading</h1>
          <p>This page is loading</p>
        </section>
      `
    },
    hydrate() {
      const navLinks = document.querySelectorAll('a[href^="/"]');
      setUpNavigationElements(navLinks);
    }
  }
}