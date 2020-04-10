const bodyParser = require('body-parser');
const requestPromise = require('request-promise');
const extractor = require('unfluff');

module.exports = (api) => {

  // Parse application/x-www-form-urlencoded
  api.use(bodyParser.urlencoded({ extended: false }));

  // Parse application/json
  api.use(bodyParser.json());

  // Allows for cross origin domain request:
  api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // The scraping function
  api.get('/api/scrape', function(req, res){

    // The URL we will scrape from
    if (!req.query.url) {
      res.status(500).json({error: err});
    }

    requestPromise(req.query.url)
      .then(function (html) {
        // Process html file and extract content...
        let data = extractor(html, 'en');
        res.json(data)
      })
      .catch(function (err) {
        // Return error as json
        res.status(500).json({error: err});
      });
  })
}

// function validateUrl() {
//
// }
