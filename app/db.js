const config = require('../config');
const mongoose = require('mongoose');

const user = config.db.user;
const password = config.db.password;
const cluster = config.db.cluster;
const dbname = config.db.dbname;

mongoose.connect('mongodb+srv://'+user+':'+password+'@'+cluster+'/'+dbname+'?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à la base de données en succès !'))
  .catch(() => console.error('Connexion à la base de données en erreur !'));
