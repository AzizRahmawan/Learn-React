# Documentation
# Cara Install React dengan Vite
1. Ketik: 
   ```bash
   npm init vite@latest nama_folder

# Cara Menambahkan Tailwind dan Preline(Tailwind)
1. Ketik :
   ```bash
   npm install tailwindcss@latest
3. Atau Ketik :
   ```bash
   npm i -D tailwindcss postcss autoprefixer
5. Ketik :
   ```bash
   npx tailwindcss init -p
7. Ketik :
   ```bash
   npm install preline
9. Edit file tailwind.config.js:
   ```bash
   content: [
     './*.html',
     './src/**/*.{js,jsx}',
     './node_modules/preline/*.js'
   ],
   plugins: [
     require('preline/plugin'),
   ] 

10. Import ke "src/style.css"
    ```CSS 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
11. Lalu import ke "src/main.jsx"
    ```JSX
    import './style.css'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
