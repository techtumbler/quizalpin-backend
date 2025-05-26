// Datei: api.js – Express-Version inkl. Fragen & Highscore

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const fragen = [
  {
    id: 1,
    frage: "Wie heisst die Hauptstadt der Schweiz?",
    antworten: { A: "Basel", B: "Bern", C: "Zürich", D: "Genf" },
    korrekt: "B"
  },
  {
    id: 2,
    frage: "Welches Element hat das chemische Symbol 'O'?",
    antworten: { A: "Osmium", B: "Ozon", C: "Oxid", D: "Sauerstoff" },
    korrekt: "D"
  },
  {
    id: 3,
    frage: "Wer malte die Mona Lisa?",
    antworten: { A: "Van Gogh", B: "Michelangelo", C: "Leonardo da Vinci", D: "Raphael" },
    korrekt: "C"
  },
  {
    id: 4,
    frage: "Wie viele Planeten hat unser Sonnensystem?",
    antworten: { A: "7", B: "8", C: "9", D: "10" },
    korrekt: "B"
  },
  {
    id: 5,
    frage: "In welchem Jahr fiel die Berliner Mauer?",
    antworten: { A: "1987", B: "1988", C: "1989", D: "1990" },
    korrekt: "C"
  },
  {
    id: 6,
    frage: "Wie heisst der grösste See der Schweiz?",
    antworten: { A: "Zürichsee", B: "Genfersee", C: "Bodensee", D: "Neuenburgersee" },
    korrekt: "B"
  },
  {
    id: 7,
    frage: "Welche Sprache ist am weitesten verbreitet (Muttersprachler)?",
    antworten: { A: "Spanisch", B: "Englisch", C: "Mandarin", D: "Hindi" },
    korrekt: "C"
  },
  {
    id: 8,
    frage: "Welcher Planet ist der Sonne am nächsten?",
    antworten: { A: "Venus", B: "Merkur", C: "Mars", D: "Erde" },
    korrekt: "B"
  },
  {
    id: 9,
    frage: "Wie viele Kantone hat die Schweiz?",
    antworten: { A: "23", B: "24", C: "25", D: "26" },
    korrekt: "D"
  },
  {
    id: 10,
    frage: "Was ist die Wurzel aus 144?",
    antworten: { A: "10", B: "11", C: "12", D: "13" },
    korrekt: "C"
  },
  {
    id: 11,
    frage: "Wie heisst das längste Flusssystem Europas?",
    antworten: { A: "Donau", B: "Wolga", C: "Rhein", D: "Po" },
    korrekt: "B"
  },
  {
    id: 12,
    frage: "Wie nennt man die Lehre vom Klima?",
    antworten: { A: "Meteorologie", B: "Geografie", C: "Klimatologie", D: "Ökologie" },
    korrekt: "C"
  },
  {
    id: 13,
    frage: "Wie viele Minuten hat ein Tag?",
    antworten: { A: "1440", B: "1240", C: "1600", D: "1000" },
    korrekt: "A"
  },
  {
    id: 14,
    frage: "Welcher Künstler schrieb 'Bohemian Rhapsody'?",
    antworten: { A: "Elton John", B: "John Lennon", C: "Freddie Mercury", D: "David Bowie" },
    korrekt: "C"
  },
  {
    id: 15,
    frage: "Was ergibt 7 x 8?",
    antworten: { A: "56", B: "54", C: "48", D: "64" },
    korrekt: "A"
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

let highscores = []

app.post('/highscore', (req, res) => {
  const { name, score } = req.body

  if (!name || typeof name !== 'string' || typeof score !== 'number') {
    return res.status(400).json({ error: 'Ungültige Daten' })
  }

  highscores.push({ name: name.trim(), score })
  highscores = highscores.sort((a, b) => b.score - a.score).slice(0, 10)

  res.json({ message: 'Highscore gespeichert', highscores })
})

app.get('/highscore', (req, res) => {
  res.json({ highscores })
})

module.exports = app;
