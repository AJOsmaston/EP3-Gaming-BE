let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  
  _connect() {
    mongoose.connect(process.env.DB, { useNewUrlParser: true })
      .then(() => console.log('Database connected successfully'))
      .catch(err => {console.error('Cannot connect to the database')
    })
  }
}
// mongoose.Promise = global.Promise;

module.exports = new Database()