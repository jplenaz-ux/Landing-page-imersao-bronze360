import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // ADICIONE ESSA LINHA AQUI EMBAIXO:
    base: '/', 
    
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    
    // APAGUEI A PARTE DO "define" QUE TINHA AQUI PROVISORIAMENTE
    // Se o site não usar a IA ao vivo, isso só atrapalha.
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
