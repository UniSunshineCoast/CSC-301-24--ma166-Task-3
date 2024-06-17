const { Pool } = require('pg');
const config = require('./config.json');
const connectionString = config.database.connectionString;

// Create connection with db
const pool = new Pool({
  connectionString,
});

module.exports = pool;
