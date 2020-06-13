const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser=require('body-parser');

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
  })

app.listen(port, () => console.log(`FromScratch listening at http://localhost:${port}`))