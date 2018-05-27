// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const client = require( './db/knex' );

client.select('id', 'username').from('users')
.then( rows => {
  window._data = rows;
  document.write(rows[0]['username']);
} )
