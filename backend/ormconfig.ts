import { ConnectionOptions } from 'typeorm'
const connectionOptions: ConnectionOptions[] = [
  {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "base11",
    synchronize: true,
    logging: false,
    entities: ["src/app/entity/**/*.ts"],
    migrations: ["src/app/migration/**/*.ts"],
    subscribers: ["src/app/subscriber/**/*.ts"]
  },
  {
    name: "test",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "basetest",
    synchronize: true,
    logging: false,
    entities: ["src/app/entity/**/*.ts"],
    migrations: ["src/app/migration/**/*.ts"],
    subscribers: ["src/app/subscriber/**/*.ts"]
  }
]

export = connectionOptions
// {
//   "name": "default",
//   "type": "postgres",
//   "host": "localhost",
//   "port": 5432,
//   "username": "postgres",
//   "password": "test",
//   "database": "base11",
//   "synchronize": true,
//   "logging": false,
//   "entities": ["src/app/entity/**/*.ts"],
//   "migrations": ["src/app/migration/**/*.ts"],
//   "subscribers": ["src/app/subscriber/**/*.ts"]
// }
