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
  },
  {
    id: 2,
    frage: "Welches Tier kann fliegen?",
    antworten: {
      A: "Hund",
      B: "Pinguin",
      C: "Fledermaus",
      D: "Kuh"
    },
    korrekt: "C"
  }
];

app.get('/api/frage/:id', (req, res) => {
  const frage = fragen.find(f => f.id === parseInt(req.params.id));
  if (frage) {
    res.json(frage);
  } else {
    res.status(404).json({ error: "Frage nicht gefunden" });
  }
});

// Wichtig für Vercel:
module.exports = app;
