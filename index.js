const app = require('./src/app.js');
const pool = require('./src/pool');

pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'akaymu',
    password: '',
  })
  .then(() => {
    app().listen(3006, () => {
      console.log('Listening on port 3006');
    });
  })
  .catch((err) => console.error(err));
