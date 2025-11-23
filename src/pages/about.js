export const AboutPage = () =>  {
  return {
    template() {
      return `
        <section>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
          <h1>About</h1>
          <p>This is a simple SPA built with pure JavaScript.</p>
        </section>
      `
    },
    hydrate() {
      console.log("About page hydrated");
    }
  }
}