const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const body = req.body;

  console.log(body)

  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ygor Matto'
  })
})

app.listen(3333);