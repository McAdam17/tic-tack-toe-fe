import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { NotFoundPage } from "./pages/notFound";

let currentPageCleanup = null;

const routes = {
  "/": HomePage,
  "/about": AboutPage,
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function getComponent(pathname) {
  const path = normalizePath(pathname);
  return routes[path] || NotFoundPage;
}

export function renderRoute() {
  if (currentPageCleanup) {
    currentPageCleanup();
    currentPageCleanup = null;
  }

  const pathname = window.location.pathname;
  const Component = getComponent(pathname);
  const page = Component();

  const app = document.getElementById("app");
  app.innerHTML = page.template();

  if (page.hydrate) {
    page.hydrate();
  }

  currentPageCleanup = page.cleanup || null;
}

export function navigate(path) {
  const normalizePath = normalizePath(path);
  window.history.pushState({},'', normalizePath); 
  renderRoute();
}