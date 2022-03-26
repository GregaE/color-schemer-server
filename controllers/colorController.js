const axios = require('axios');
const BASE_URL = "http://www.colourlovers.com/api";

exports.fetchRandomColorScheme = async (req, res) => {
  try {
    const scheme = await axios(`${BASE_URL}/palettes/random?format=json`);
    res.json(scheme.data[0].colors);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

exports.fetchColorSchemes = async (req, res) => {
  try {
    const scheme = await axios(`${BASE_URL}/palettes?format=json&sortBy=DESC&numResults=100&hex=${req.params.hex}&hex_logic=${req.params.hex_logic}`);
    res.json(scheme.data)
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
