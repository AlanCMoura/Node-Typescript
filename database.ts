import { knex as setupKnex } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: './app.db',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
