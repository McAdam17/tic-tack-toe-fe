import { getAuthState } from "./auth/authStore";
import { AboutPage } from "./pages/about";
import { GamePage } from "./pages/game";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/notFound";

type CleanUpFunction = () => void 

let currentPageCleanup : CleanUpFunction | null = null;

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/game": GamePage,
}

type Paths = keyof typeof routes

export const PRIVATE_ROUTES = new Set<Paths>(["/game"])

function isKnownPath(path: string): path is Paths {
  return path in routes
}

const isPrivateRoute = (path: string) => {
  return isKnownPath(path) && PRIVATE_ROUTES.has(path)
}

export interface Page {
  cleanup?: CleanUpFunction | null;
  template(): string;
  hydrate(): void;
}

export type PageFunction = () => Page

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function getComponent(pathname: string): PageFunction {
  const path = normalizePath(pathname);
  return routes[path as Paths] || NotFoundPage;
}

export function renderRoute() {
  const state = getAuthState()

  if (currentPageCleanup) {
    currentPageCleanup();
    currentPageCleanup = null;
  }

  const pathname = window.location.pathname;

  const normalizedPath = normalizePath(pathname)
  let Component = getComponent(pathname);
  if(isPrivateRoute(normalizedPath) && state.status!=='authed'){
    Component = HomePage
    window.history.pushState({}, '', '/')
  }
 
  const page = Component();

  const app = document.getElementById("app");
  if(app)
  app.innerHTML = page.template();

  if (page.hydrate) {
    page.hydrate();
  }

  currentPageCleanup = page.cleanup || null;
}

export function navigate(path: string) {
  const pathFormatted = normalizePath(path);
  window.history.pushState({},'', pathFormatted); 
  renderRoute();
}

export function setUpNavigationElements(navLinks: NodeListOf<Element>
) {
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const path = link.getAttribute('href')
      navigate(path as string)
    })
  })
}