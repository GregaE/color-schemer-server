const { Router } = require('express');
const { fetchRandomColorScheme } = require('./controllers/colorController');
const router = Router();

router.get('/getScheme', fetchRandomColorScheme);

module.exports = router;