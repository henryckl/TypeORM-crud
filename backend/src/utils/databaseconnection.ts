import { createConnection, getConnectionOptions, getConnection } from 'typeorm'

export async function databaseConnection() {
  let name = "default"
  if (process.env.NODE_ENV === "test") {
    name = process.env.NODE_ENV 
  }

  const connectionOptions = await getConnectionOptions(name)
  await createConnection({ ...connectionOptions, name: "default" })
}

export async function closeDatabaseConnection() {
  getConnection().close()
}