const express = require('express');
const server = express();
const next = require('next')
const	force = require('express-force-domain')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const api = require('./api')
const app = next({ dev })
const sslRedirect = require('heroku-ssl-redirect')
const handle = app.getRequestHandler()


// Get environment vars
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 3000

if (!dev) {
  server.use( force(process.env.BASE_URL) );
}



// Start the app
app.prepare().then(() => {

  // Import API routes
  api(server)

  // gzip files
  server.use(compression())

  // Always redirect to SSL
  server.use(sslRedirect())

  // Redirect on trailing slashes
  server.use(function(req, res, next) {
    if (req.path.substr(-1) == '/' && req.path.length > 1) {
      let query = req.url.slice(req.path.length);
      res.redirect(301, req.path.slice(0, -1) + query);
    } else {
      next();
    }
  });


  // Next.js route handler
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, function () {
    console.log(`App running on http://localhost:${PORT}/`)
  });

})
