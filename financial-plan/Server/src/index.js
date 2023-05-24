const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
