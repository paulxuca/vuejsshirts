const express = require('express'); // eslint-disable-line
const bodyParser = require('body-parser');

const api = require('./routes');
const config = require('./config');


const app = express();
app.use('/api', api);
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));


app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log(`Server listening on port ${config.port}`);
});
