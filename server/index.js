const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000 || process.env.PORT;
const publicDir = path.resolve(__dirname, '..', 'client', 'public');

app.use(morgan('dev'));
app.use(express.static(publicDir));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
