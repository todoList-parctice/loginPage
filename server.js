const express = require('express');

const app = express();
const PORT = 9999;

app.use(express.static('dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`open server http://localhost:${PORT}`);
});
