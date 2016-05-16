var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'test';
    db = 'mongodb://arvind:thisismygrib@ds019101.mlab.com:19101/todo'
  

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'todo'
    },
    port: process.env.PORT || 3000,
    db: db
  },

  test: {
    root: rootPath,
    app: {
      name: 'todo'
    },
    port: process.env.PORT || 3000,
    db: 'localhost:27017/todo'
  },

  production: {
    root: rootPath,
    app: {
      name: 'todo'
    },
    port: process.env.PORT || 3000,
    db: db
  }
};

module.exports = config[env];
