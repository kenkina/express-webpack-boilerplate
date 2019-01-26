import express from 'express';
import path from 'path';
import publicFile from './public/files/index.zip';
import publicImage from './public/images/template.png';
import publicPage from './public/pages/index.html';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const greetings = [
  {
    "es": "hola"
  },
  {
    "de": "hallo"
  },
  {
    "zh": "ni hao"
  }
];

app.get('/api/greetings', (req, res) => {
  res.json({
    greeting: greetings
  });
});

app.get('/api/page', (req, res) => {
  res.sendFile(path.join(__dirname + publicPage));
});

app.get('/api/image', (req, res) => {
  res.sendFile(__dirname + publicImage);
});

app.get('/api/file', (req, res) => {
  res.sendFile(__dirname + publicFile);
});

app.all('*', (req, res) => {
  res.json({
    boilerplate: true
  });
});

app.listen(3000, () => {

  if (process.env.NODE_ENV !== 'production') {
    console.log('[ .- -- Development mode -- -. ]');
  }

  console.log('Server listening on port 3000');
})