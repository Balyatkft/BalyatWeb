const express = require('express');
const app = express();
const port = 3000;

// Middleware beállítása a JSON adatok kezelésére
app.use(express.json());

// Statikus fájlok szolgáltatása (pl. register.html)
app.use(express.static('public'));

// Regisztrációs endpoint
app.post('/registration-endpoint', (req, res) => {
  // Ellenőrizd a kérésben érkező adatokat
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'Hiányzó felhasználónév vagy jelszó.' });
  }

  // Adatok tárolása (ideális esetben adatbázisba mentés)
  const user = {
    username: req.body.username,
    password: req.body.password
  };

  // Sikeres válasz küldése
  res.json({ message: 'Sikeres regisztráció!', user: user });
});

// Szerver indítása
app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} címen.`);
});
