import { renderRoute } from "./router";

window.addEventListener("load", renderRoute);
window.addEventListener("popstate", renderRoute);

// HMR - Hot Module Replacement

if (module.hot) {
  module.hot.accept("./router", async () => {
    const { renderRoute: newRenderRoute } = await import("./router");
    newRenderRoute();
  })
}