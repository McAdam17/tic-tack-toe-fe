import { renderRoute } from "./router";
import { init } from "./auth/authStore";

window.addEventListener("load", async () => {
  await init()
  renderRoute()
});

window.addEventListener("popstate", renderRoute);

// HMR - Hot Module Replacement

if (module.hot) {
  module.hot.accept("./router", async () => {
    const { renderRoute: newRenderRoute } = await import("./router");
    newRenderRoute();
  })
}