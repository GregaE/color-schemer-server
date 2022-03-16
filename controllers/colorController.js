const axios = require('axios');
const BASE_URL = "http://www.colourlovers.com/api";

exports.fetchRandomColorScheme = async (req, res) => {
  try {
    const scheme = await axios(`${BASE_URL}/patterns/random?format=json`);
    res.json(scheme.data[0].colors);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
