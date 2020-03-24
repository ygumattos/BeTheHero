const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ygor Mattos'
  })
})

app.listen(3333);