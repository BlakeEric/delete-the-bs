/**
 * @jest-environment node
*/


/* eslint-env jest */
const request = require('supertest')
const app = require('../../server/index')
jest.mock('../../server/index')

describe('API Routes', () => {

  // beforeEach(() => {
  //   Article.insertMany([fields, fields, fieldsWithKnownId], function(err) {
  //     if (err) {
  //       return err;
  //     }
  //     return;
  //   });
  // })
  //
  // afterEach(() => {
  //   Article.find().remove({}).exec()
  // })
  //
  // afterAll(() => {
  //   Article.find().remove({}).exec()
  // });
  const articleUrl = "https://www.npr.org/2019/07/13/741432176/simona-halep-defeats-serena-williams-to-win-her-first-wimbledon-title";

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
          expect(data["text"] != undefined).toEqual(true);
          expect(data["title"] != undefined).toEqual(true);
          expect(response.status).toEqual(200);
        })
    })
  })

})
