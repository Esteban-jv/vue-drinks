# bebidas-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## At start we install tailwindcss in the next command *Not necesary*
```sh
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### then we go to tailwind.config.js and add the next contain into the content array:
```
"./index.html",
"./src/**/*.{vue,js,ts,jsx,,tsx}"
```
### Then we go to src/assets/main.css and we should add the next lines
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```