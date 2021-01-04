const config = require('./config');
const mongoose = require('mongoose');

let user = config.db.user;
let password = config.db.password;
let cluster = config.db.cluster;
let dbname = config.db.dbname;

mongoose.connect('mongodb+srv://'+user+':'+password+'@'+cluster+'/'+dbname+'?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à la base de données en succès !'))
  .catch(() => console.error('Connexion à la base de données en erreur !'));
