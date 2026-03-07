import { sync } from 'glob';

export default {
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: sync('./*.html')
    }
  }
};
