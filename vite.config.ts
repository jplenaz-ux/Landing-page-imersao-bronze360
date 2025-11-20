import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Isso carrega as variáveis do ambiente (da Vercel ou do seu PC)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/', // Importante para não dar tela branca
    
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    
    plugins: [react()],
    
    // AQUI ESTÁ A MÁGICA PARA A CHAVE FUNCIONAR:
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
