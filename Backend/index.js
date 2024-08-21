const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('book store app')
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});