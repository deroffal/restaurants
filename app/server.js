const http = require('http');
const app = require('./app');
require('./db');

const port = app.get('port');

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  console.log('Serveur démarré sur le port ' + port);
});
