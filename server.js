const config = require('./config');

const http = require('http');
const app = require('./app');
const db = require('./db');


let port = process.env.PORT || config.server.port;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  console.log('Serveur démarré sur le port ' + port);
});
