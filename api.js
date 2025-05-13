const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const fragen = [
  {
    id: 1,
    frage: "Wie heisst die Hauptstadt der Schweiz?",
    antworten: {
      A: "Basel",
      B: "Bern",
      C: "Zürich",
      D: "Luzern"
    },
    korrekt: "B"
  }
];

app.get('/frage/:id', (req, res) => {
  const frage = fragen.find(f => f.id === parseInt(req.params.id));
  if (frage) {
    res.json(frage);
  } else {
    res.status(404).json({ error: "Frage nicht gefunden" });
  }
});

module.exports = app;
