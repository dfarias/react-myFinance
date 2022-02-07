import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { createServer, Model} from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: 'Desenvolvimento do website', amount: 12000, type: 'deposit', category: 'Desenvolvimento', createdAt: new Date('2022-01-17 09:00:00')},
        { id: 2, title: 'Pagamento do Aluguel', amount: 1200, type: 'withdraw', category: 'Casa', createdAt: new Date('2022-01-22 17:45:21')}
      ]
    })
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)