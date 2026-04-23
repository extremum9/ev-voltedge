import { toEm } from './utilities';

const initTopbar = () => {
  const selectors = {
    root: '.js-topbar',
    toggleNavigationButton: '.js-topbar-navigation-toggle-button'
  };

  const body = document.body;
  const root = document.querySelector(selectors.root);
  const toggleButton = root.querySelector(selectors.toggleNavigationButton);
  const tabletMediaQuery = window.matchMedia(`(max-width: ${toEm(991.98)})`);

  const toggleNavigation = () => {
    toggleButton.setAttribute(
      'aria-expanded',
      `${!(toggleButton.getAttribute('aria-expanded') === 'true')}`
    );
    body.classList.toggle('prevent-scroll');
    root.classList.toggle('open');
  };

  const resetNavigation = (mediaQuery) => {
    if (!mediaQuery.matches) {
      body.classList.remove('prevent-scroll');
      root.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  };

  resetNavigation(tabletMediaQuery);

  toggleButton.addEventListener('click', toggleNavigation);
  tabletMediaQuery.addEventListener('change', resetNavigation);
};

export default initTopbar;
