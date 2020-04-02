import { createConnection, Connection} from "typeorm"

import request from 'supertest'
import "reflect-metadata";

import app from '../../src/app'
import { databaseConnection, closeDatabaseConnection } from '../../src/utils/databaseconnection'


describe('User', () => {
  
  beforeEach(async () => {
    await databaseConnection()

  })

  afterAll(async () => {
    await closeDatabaseConnection()
  });

  it('should be able to create a new User', async () => {
    const response = await request(app).post('/user').send({
      name: "User Test",
      email: "user3@email.com"

    })
    console.log(response.body)
    expect(response.body).toHaveProperty('id')
  })
})