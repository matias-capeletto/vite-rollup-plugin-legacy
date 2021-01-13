import './style.css'
import legacyLibrary from './legacy.js'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite! ${legacyLibrary.cube(2)}</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
