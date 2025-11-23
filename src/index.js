import { renderRoute } from "./router";

window.addEventListener("load", renderRoute);
window.addEventListener("popstate", renderRoute);