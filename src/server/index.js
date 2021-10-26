const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/hello', (req, res) => {
  res.json('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
