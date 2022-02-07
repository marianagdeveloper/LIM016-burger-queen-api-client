const jsonServer = require('json-server')
const server = jsonServer.create()
    /* const router = jsonServer.router('') */
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

/* server.get('/products', (req, res) => {

    res.jsonp(req.body)
}) */

server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post('/auth', (req, res) => {
        if (req.body && req.body.email && req.body.password) {

            res.jsonp({ token: "hola" })

        } else {
            res.sendStatus(400)
        }

    })
    // Use default router
server.use(router)
server.listen(3000, () => {
        console.log('JSON Server is running')

    })
    //esto va en el package
    /* "server": "node src/app/data/backend/server.js" */