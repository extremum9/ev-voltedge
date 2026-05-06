export const toEm = (px) => `${px / 16}em`;

export const throttle = (callback, delay = 300) => {
  let throttling = false;
  let lastArgs = null;

  const runTrailing = () => {
    if (lastArgs == null) {
      throttling = false;
      return;
    }
    callback(...lastArgs);
    lastArgs = null;
    setTimeout(runTrailing, delay);
  };

  return (...args) => {
    if (throttling) {
      lastArgs = args;
      return;
    }
    callback(...args);
    throttling = true;
    setTimeout(runTrailing, delay);
  };
};
