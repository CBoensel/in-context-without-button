import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    // @ts-ignore
    title: 'PayPal In-Context without Button',
    // @ts-ignore
    author: 'Carsten Boensel',
    // @ts-ignore
    github: {
      orgOrUser: 'CBoensel',
      repo: 'in-context-without-button'
    }
  }
})

export default app
