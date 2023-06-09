import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Model, createServer } from 'miragejs'

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Desenvolvimento de Site',
					amount: 12000,
					type: 'deposit',
					category: 'Dev',
					createdAt: new Date('2023-03-30 01:48:55.081Z'),
				},
				{
					id: 2,
					title: 'Aluguel',
					amount: 1500,
					type: 'withdraw',
					category: 'Casa',
					createdAt: new Date('2023-02-09T01:48:55.081Z'),
				},
				{
					id: 3,
					title: 'Lanche',
					amount: 35,
					type: 'withdraw',
					category: 'Food',
					createdAt: new Date('2023-04-03T09:22:30.017Z'),
				},
				{
					amount: 458.9,
					category: "Compras",
					createdAt: "2023-04-11T01:04:50.587Z",
					id: 4,
					title: "Supermercado",
					type: "withdraw",
				},
				{
					amount: 1950.9,
					category: "Dev",
					createdAt: "2023-04-11T01:14:28.768Z",
					id: 5,
					title: "Site Freela",
					type: "deposit",
				},
			],
		});
	},

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody)
			return schema.create('transaction', data)
		})

  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
