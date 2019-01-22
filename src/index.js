import express from 'express';

const app = express();


app.get('/api/hello', (req, res) => {
  res.json({
    greeting: "hello"
  });
});

app.all('*', (req, res) => {
  res.json({
    boilerplate: true
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})