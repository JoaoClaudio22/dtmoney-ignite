import { Model } from 'miragejs';
import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';




createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title:'Desenvolvimento de Website',
          type:'deposit',
          category:'Dev',
          amount: 12000,
          createdAt: new Date('2022-02-23 09:00:00')
        },
        {
          id:2,
          title:'Aluguel',
          type:'withdraw',
          category:'Casa',
          amount: 1200,
          createdAt: new Date('2022-02-13 09:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = '/api'

    this.get('/transactions',() => {
      return this.schema.all
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
