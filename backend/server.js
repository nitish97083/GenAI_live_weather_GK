const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Weather API route
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Weather API key not configured' });
    }

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Facts API route
app.get('/facts', async (req, res) => {
  try {
    // Using a free facts API
    const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
    res.json({ fact: response.data.text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch fact' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});