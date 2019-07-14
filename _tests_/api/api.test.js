/**
 * @jest-environment node
*/


/* eslint-env jest */
const request = require('supertest')
const app = require('../../server/index')
jest.mock('../../server/index')

describe('API Routes', () => {

  const articleUrl = "https://www.npr.org/2019/07/13/741432176/simona-halep-defeats-serena-williams-to-win-her-first-wimbledon-title";
  const badUrl = "not a url"
  
  describe('GET /api/scrape', () => {
    test('It should respond with JSON', () => {
      return request(app).get("/api/scrape?url=" + articleUrl)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
    })

    test('It returns post content', () => {
      return request(app).get("/api/scrape?url=" + articleUrl)
        .set('Accept', 'application/json')
        .then(response => {
          let data = JSON.parse(response.text);
          expect(data).toHaveProperty('text')
          expect(data).toHaveProperty('title')
          expect(data).not.toHaveProperty('error');
          expect(response.status).toEqual(200);
        })
    })

    test('It throws an error if given a malformed url', () => {
      return request(app).get("/api/scrape?url=" + badUrl)
        .set('Accept', 'application/json')
        .then(response => {
          let data = JSON.parse(response.text);
          expect(response.status).toEqual(500);
          expect(data).toHaveProperty('error');
          expect(data.error.message.includes("Invalid URI")).toEqual(true);
        })
    })
  })

})
