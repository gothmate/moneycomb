import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de Site',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1500,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Lanche',
          amount: 35,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date()
        },
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
