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
  },
  {
    id: 16,
    frage: "Was ist die Hauptstadt von Italien?",
    antworten: { A: "Rom", B: "Mailand", C: "Neapel", D: "Turin" },
    korrekt: "A"
  },
  {
    id: 17,
    frage: "Was ist 9 + 10?",
    antworten: { A: "19", B: "21", C: "20", D: "18" },
    korrekt: "A"
  },
  {
    id: 18,
    frage: "Welches Tier ist das grösste an Land?",
    antworten: { A: "Elefant", B: "Giraffe", C: "Nilpferd", D: "Nashorn" },
    korrekt: "A"
  },
  {
    id: 19,
    frage: "Welche Farbe hat der Himmel an einem klaren Tag?",
    antworten: { A: "Blau", B: "Grün", C: "Grau", D: "Gelb" },
    korrekt: "A"
  },
  {
    id: 20,
    frage: "Wie viele Kontinente gibt es?",
    antworten: { A: "5", B: "6", C: "7", D: "8" },
    korrekt: "C"
  },
  {
    id: 21,
    frage: "Welcher Kontinent ist flächenmässig der grösste?",
    antworten: { A: "Afrika", B: "Asien", C: "Nordamerika", D: "Europa" },
    korrekt: "B"
  },
  {
    id: 22,
    frage: "Wie viele Beine hat ein Insekt?",
    antworten: { A: "4", B: "6", C: "8", D: "10" },
    korrekt: "B"
  },
  {
    id: 23,
    frage: "Wie nennt man einen Winkel über 180 Grad?",
    antworten: { A: "Stumpfer Winkel", B: "Spitzer Winkel", C: "Überstumpfer Winkel", D: "Überwinkel" },
    korrekt: "C"
  },
  {
    id: 24,
    frage: "Was bedeutet das lateinische 'aqua'?",
    antworten: { A: "Licht", B: "Feuer", C: "Luft", D: "Wasser" },
    korrekt: "D"
  },
  {
    id: 25,
    frage: "Wer schrieb das Drama 'Faust'?",
    antworten: { A: "Schiller", B: "Lessing", C: "Goethe", D: "Kafka" },
    korrekt: "C"
  },
  {
    id: 26,
    frage: "Was ist ein Synonym für 'schnell'?",
    antworten: { A: "rasch", B: "still", C: "langsam", D: "leise" },
    korrekt: "A"
  },
  {
    id: 27,
    frage: "Wofür steht die Abkürzung 'WWW'?",
    antworten: { A: "World Wide Web", B: "Wide Web Window", C: "Web World Wave", D: "Web Wired World" },
    korrekt: "A"
  },
  {
    id: 28,
    frage: "Welche Farbe entsteht durch Mischen von Blau und Gelb?",
    antworten: { A: "Orange", B: "Lila", C: "Grün", D: "Braun" },
    korrekt: "C"
  },
  {
    id: 29,
    frage: "Wie viele Zeitzonen gibt es auf der Erde?",
    antworten: { A: "12", B: "24", C: "18", D: "20" },
    korrekt: "B"
  },
  {
    id: 30,
    frage: "Wie viele Sekunden hat eine Minute?",
    antworten: { A: "60", B: "100", C: "120", D: "30" },
    korrekt: "A"
  },
  {
  id: 31,
  frage: "Welche Farbe entsteht durch Mischen von Blau und Gelb?",
  antworten: { A: "Grün", B: "Orange", C: "Lila", D: "Braun" },
  korrekt: "A"
},
{
  id: 32,
  frage: "Wie viele Beine hat eine Spinne?",
  antworten: { A: "6", B: "8", C: "10", D: "12" },
  korrekt: "B"
},
{
  id: 33,
  frage: "Was ist die Hauptstadt von Kanada?",
  antworten: { A: "Toronto", B: "Vancouver", C: "Ottawa", D: "Montreal" },
  korrekt: "C"
},
{
  id: 34,
  frage: "Welches Tier ist das grösste an Land lebende?",
  antworten: { A: "Elefant", B: "Nashorn", C: "Nilpferd", D: "Giraffe" },
  korrekt: "A"
},
{
  id: 35,
  frage: "Welche Einheit misst elektrische Spannung?",
  antworten: { A: "Ampere", B: "Volt", C: "Watt", D: "Ohm" },
  korrekt: "B"
},
{
  id: 36,
  frage: "Welcher Planet wird auch 'roter Planet' genannt?",
  antworten: { A: "Mars", B: "Venus", C: "Saturn", D: "Merkur" },
  korrekt: "A"
},
{
  id: 37,
  frage: "Wie viele Kontinente gibt es?",
  antworten: { A: "5", B: "6", C: "7", D: "8" },
  korrekt: "C"
},
{
  id: 38,
  frage: "Was ist H2O?",
  antworten: { A: "Salz", B: "Sauerstoff", C: "Wasser", D: "Kohlendioxid" },
  korrekt: "C"
},
{
  id: 39,
  frage: "Wie nennt man junge Hunde?",
  antworten: { A: "Fohlen", B: "Welpen", C: "Kätzchen", D: "Kälber" },
  korrekt: "B"
},
{
  id: 40,
  frage: "Was ist keine Primzahl?",
  antworten: { A: "2", B: "3", C: "9", D: "11" },
  korrekt: "C"
},
{
  id: 41,
  frage: "In welchem Land steht der schiefe Turm von Pisa?",
  antworten: { A: "Spanien", B: "Italien", C: "Frankreich", D: "Griechenland" },
  korrekt: "B"
},
{
  id: 42,
  frage: "Welches Meer liegt zwischen Europa und Afrika?",
  antworten: { A: "Rotes Meer", B: "Ostsee", C: "Mittelmeer", D: "Schwarzes Meer" },
  korrekt: "C"
},
{
  id: 43,
  frage: "Wie viele Stunden hat ein Tag?",
  antworten: { A: "12", B: "24", C: "36", D: "48" },
  korrekt: "B"
},
{
  id: 44,
  frage: "Wie nennt man die Verwandlung einer Raupe in einen Schmetterling?",
  antworten: { A: "Mutation", B: "Transformation", C: "Metamorphose", D: "Evolution" },
  korrekt: "C"
},
{
  id: 45,
  frage: "Welcher Kontinent ist der grösste?",
  antworten: { A: "Afrika", B: "Asien", C: "Europa", D: "Amerika" },
  korrekt: "B"
},
{
  id: 46,
  frage: "Wie nennt man einen sechsseitigen Würfel?",
  antworten: { A: "Hexaeder", B: "Oktaeder", C: "Tetraeder", D: "Dodekaeder" },
  korrekt: "A"
},
{
  id: 47,
  frage: "Wie viele Sinne hat der Mensch traditionell?",
  antworten: { A: "4", B: "5", C: "6", D: "7" },
  korrekt: "B"
},
{
  id: 48,
  frage: "Was ist ein Synonym für 'fröhlich'?",
  antworten: { A: "Traurig", B: "Heiter", C: "Langsam", D: "Müde" },
  korrekt: "B"
},
{
  id: 49,
  frage: "Wie nennt man die Wissenschaft von den Zahlen?",
  antworten: { A: "Biologie", B: "Mathematik", C: "Physik", D: "Chemie" },
  korrekt: "B"
},
{
  id: 50,
  frage: "Was ist die Hauptstadt von Japan?",
  antworten: { A: "Kyoto", B: "Osaka", C: "Tokio", D: "Hiroshima" },
  korrekt: "C"
},
{
  id: 51,
  frage: "Wie nennt man das kleinste Teilchen eines Elements?",
  antworten: { A: "Molekül", B: "Zelle", C: "Atom", D: "Ion" },
  korrekt: "C"
},
{
  id: 52,
  frage: "Welches Tier legt Eier?",
  antworten: { A: "Hund", B: "Katze", C: "Huhn", D: "Kuh" },
  korrekt: "C"
},
{
  id: 53,
  frage: "Wie heisst das Märchen mit dem vergifteten Apfel?",
  antworten: { A: "Aschenputtel", B: "Schneewittchen", C: "Dornröschen", D: "Hänsel und Gretel" },
  korrekt: "B"
},
{
  id: 54,
  frage: "Welche Zahl ist ungerade?",
  antworten: { A: "6", B: "8", C: "10", D: "9" },
  korrekt: "D"
},
{
  id: 55,
  frage: "Wie viele Ecken hat ein Rechteck?",
  antworten: { A: "3", B: "4", C: "5", D: "6" },
  korrekt: "B"
},
{
  id: 56,
  frage: "Wie heisst das deutsche Wort für 'computer'?",
  antworten: { A: "Datenrechner", B: "Rechner", C: "Zählgerät", D: "Programmkiste" },
  korrekt: "B"
},
{
  id: 57,
  frage: "Was ist ein Vulkan?",
  antworten: { A: "Ein Berg aus Sand", B: "Ein Berg mit Lava", C: "Ein Hügel", D: "Ein Tal" },
  korrekt: "B"
},
{
  id: 58,
  frage: "Wie viele Flügel hat ein Vogel?",
  antworten: { A: "1", B: "2", C: "3", D: "4" },
  korrekt: "B"
},
{
  id: 59,
  frage: "Wie nennt man das Ergebnis einer Addition?",
  antworten: { A: "Differenz", B: "Produkt", C: "Summe", D: "Quotient" },
  korrekt: "C"
},
{
  id: 60,
  frage: "Welche Farbe hat ein Marienkäfer meist?",
  antworten: { A: "Grün", B: "Rot", C: "Blau", D: "Schwarz" },
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

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
  });
}

app.get('/fragenZufall', (req, res) => {
  const ids = fragen.map(f => f.id)
  const zufall = ids.sort(() => Math.random() - 0.5).slice(0, 15)
  res.json({ ids: zufall })
})

