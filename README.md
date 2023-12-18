# Documentation
<h1>Cara install react dengan vite</h1>
1. Ketik : npm init vite@latest nama_folder
2. Ketik : npm install

<h1>Cara Menambahkan Tailwind dan Preline(Tailwind)</h1>
1. Ketik : npm install tailwindcss@latest
2. Ketik : npm i -D tailwindcss postcss autoprefixer
3. Ketik : npx tailwindcss init -p
4. Ketik : npm install preline
5. Edit file tailwind.config.js, 
  content: [
    './*.html',
    './src/**/*.{js,jsx}',
    './node_modules/preline/*.js'
  ],
  dan
    plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
    ]
6. Import ke "src/style.css"
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
7. Lalu import ke "src/main.jsx"
    import './style.css'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
