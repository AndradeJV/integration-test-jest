import request from "supertest"

describe('Activities Router', () => {
  const api = 'https://fakerestapi.azurewebsites.net/api/v1/'

  describe('Make a get activities', () => {
    it('Make a get with success', async () => {

      const response = await request(api)
        .get('Activities')
        .expect(200)

      expect(response.body[0].id).toBe(1)
      expect(response.body[0]).toHaveProperty("id")
      expect(response.body[0]).toHaveProperty("title")
      expect(response.body[0]).toHaveProperty("dueDate")
      expect(response.body[0]).toHaveProperty("completed")
    })
  })

  describe('Make a post activity', () => {
    it('Make a post with success', async () => {
      const newActivity = {
        id: 1,
        title: "Activity 1",
        dueDate: "2024-07-26T21:52:49.7369806+00:00",
        completed: false
      }

      const response = await request(api)
        .post('Activities')
        .send(newActivity)
        .expect(200)

      expect(response.body[0].id).toBe(1)
      expect(response.body[0]).toHaveProperty("id")
      expect(response.body[0]).toHaveProperty("title")
      expect(response.body[0]).toHaveProperty("dueDate")
      expect(response.body[0]).toHaveProperty("completed")
    })
  })
})
