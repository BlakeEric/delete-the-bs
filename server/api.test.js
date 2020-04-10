/**
 * @jest-environment node
*/

/* eslint-env jest */

const request = require('supertest')
const app = require('./index')
jest.mock('./index')

describe('API Routes', () => {

  const goodUrl = "https://www.npr.org/2019/07/13/741432176/simona-halep-defeats-serena-williams-to-win-her-first-wimbledon-title";
  const badUrl = "not a url"

  describe('GET /api/scrape', () => {
    it('responds with JSON', () => {
      return request(app).get("/api/scrape?url=" + goodUrl)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
    })

    it('returns post content', () => {
      return request(app).get("/api/scrape?url=" + goodUrl)
        .set('Accept', 'application/json')
        .then(response => {
          let data = JSON.parse(response.text);
          expect(data).toHaveProperty('text')
          expect(data).toHaveProperty('title')
          expect(data).not.toHaveProperty('error');
          expect(response.status).toEqual(200);
        })
    })

    it('throws an error if given a malformed url', () => {
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
