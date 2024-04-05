import fastify from 'fastify'
import { knex } from './database'

const app = fastify()
// GET, POST, PUT, PATCH, DELETE

app.get('/hello', async () => { //funções do tipo async não interrompem a execuçaõ do código enquanto são concluídas
    const tables = await knex('sqlite_schema').select('*')
    
    return tables
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Runing')
  })
