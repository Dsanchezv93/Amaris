const request = require('supertest')
const app = require('../app')

let testServer
beforeAll(()=>{
  testServer = app.listen(4000)
})

afterAll((done)=>{
  testServer.close(done)
})

describe('GET /api/7', () => {
  it('retornar array inverso (7)', async() => {
    const response = await request(app).get('/api/7')
      expect(response.error)
        .toBe(false)
      expect(response.status)
        .toBe(200)
      expect(response.body)
        .not.toBeNull()
      expect(Array.isArray(response.body.data))
        .toBe(true)
      expect(response.body.data.length)
        .toBe(5)

  })

  it('retornar array inverso (15)', async() => {
    const response = await request(app).get('/api/15')
      expect(response.error)
        .toBe(false)
      expect(response.status)
        .toBe(200)
      expect(response.body)
        .not.toBeNull()
      expect(Array.isArray(response.body.data))
        .toBe(true)
      expect(response.body.data.length)
        .toBe(7)

  })
})
