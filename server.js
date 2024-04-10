const express = require('express');
const app = express();
const fs = require('fs');

var files = fs.readdirSync('schemas/');

const port = process.env.PORT || 3033;

app.use('/schemas', express.static('schemas') , (req, res) => {
    res.status(404);
    res.json({
      error: {
        status_code: 404,
        message: `file was not found`,
        available_files: files
      }
    }
  )
});

app.get('/', (req, res) => {
  res.json({
      message: "Welcome to the Schemas API. Access /schemas to view available schemas."
  });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});