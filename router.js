const { Router } = require('express');
const { fetchRandomColorScheme, fetchColorScheme } = require('./controllers/colorController');
const router = Router();

router.get('/getRandomScheme', fetchRandomColorScheme);
router.get('/getScheme/:hex/:hex_logic/:index', fetchColorScheme);

module.exports = router;