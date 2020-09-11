
import path from 'path'
import { DATABASE } from '../src/config/env'

export const development = {
  client: 'pg',
  connection: DATABASE,
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

export const staging = {
  client: 'pg',
  connection: {
    host: 'HOST',
    database: 'DATABASE',
    user: 'USER',
    password: 'PASSWORD'
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

export const production = {
  client: 'pg',
  connection: {
    host: 'HOST',
    database: 'DATABASE',
    user: 'USER',
    password: 'PASSWORD'
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

export const test = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'service_order_db.sqlite3')
  },
}

const knex = {
  development,
  production,
  staging,
  test
}

export default knex