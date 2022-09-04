import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://hsk-kr.github.io/react-custom-modal-hooks',
  plugins: [react()],
});
