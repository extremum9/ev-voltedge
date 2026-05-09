import { throttle, toRem } from './utilities';

const SELECTORS = {
  ROOT: '.js-topbar',
  TOGGLE_NAVIGATION_BUTTON: '.js-topbar-navigation-toggle-button'
};

const STATE_CLASSES = {
  OPEN: 'open',
  PREVENT_SCROLL: 'prevent-scroll',
  SCROLL: 'scroll'
};

const SCROLL_THRESHOLD = 30;

const initTopbar = () => {
  const body = document.body;
  const root = document.querySelector(SELECTORS.ROOT);
  const toggleButton = root.querySelector(SELECTORS.TOGGLE_NAVIGATION_BUTTON);
  const tabletMediaQuery = window.matchMedia(`(width < ${toRem(992)})`);

  const toggleNavigation = () => {
    toggleButton.setAttribute(
      'aria-expanded',
      `${!(toggleButton.getAttribute('aria-expanded') === 'true')}`
    );
    body.classList.toggle(STATE_CLASSES.PREVENT_SCROLL);
    root.classList.toggle(STATE_CLASSES.OPEN);
  };

  const resetNavigation = (mediaQuery) => {
    if (!mediaQuery.matches) {
      body.classList.remove(STATE_CLASSES.PREVENT_SCROLL);
      root.classList.remove(STATE_CLASSES.OPEN);
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  };

  const toggleScrollClass = () =>
    root.classList.toggle(
      STATE_CLASSES.SCROLL,
      window.scrollY > SCROLL_THRESHOLD
    );

  resetNavigation(tabletMediaQuery);
  toggleScrollClass();

  toggleButton.addEventListener('click', toggleNavigation);
  tabletMediaQuery.addEventListener('change', resetNavigation);
  window.addEventListener('scroll', throttle(toggleScrollClass));
};

export default initTopbar;
