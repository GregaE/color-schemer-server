const { Router } = require('express');
const { fetchRandomColorScheme, fetchColorSchemes } = require('./controllers/colorController');
const router = Router();

router.get('/getRandomScheme', fetchRandomColorScheme);
router.get('/getSchemes/:hex/:hex_logic', fetchColorSchemes);

module.exports = router;