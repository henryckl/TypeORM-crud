import { createConnection, Connection} from "typeorm"

import request from 'supertest'
import "reflect-metadata";

import app from '../../src/app'

function sum(a: number, b: number): number {
  return a + b
}

describe('User', () => {
  
  beforeEach(async () => {
    await createConnection()

  })

  afterAll(async () => {
 
  });

  it('should be able to create a new User', async () => {
    const response = await request(app).post('/user').send({
      name: "User Test",
      email: "usertest3@email.com"

    })
    console.log(response.body)
    expect(response.body).toHaveProperty('id')
  })
})