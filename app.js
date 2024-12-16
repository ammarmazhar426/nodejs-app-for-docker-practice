const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Database time: ${result.rows[0].now}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
