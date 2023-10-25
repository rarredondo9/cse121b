const express = require('express');
const request = require('request');
const app = express();

app.use(express.json());

app.get('/toddlers', (req, res) => {
  const mockyUrl = 'https://run.mocky.io/v3/b84b4fda-dc09-4f6c-8c34-05d37955680f';
  
  request(mockyUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      res.status(500).send('Error fetching data');
    }
  });
});

app.get('/schedules', (req, res) => {
  const mockyUrl = 'https://run.mocky.io/v3/18876637-0e3e-4486-8f6c-6dd24bab9887';

  request(mockyUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      res.status(500).send('Error fetching data');
    }
  });
});

const port = 3000; 
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
