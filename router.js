const { Router } = require('express');
const { fetchRandomColorScheme, fetchColorSchemes } = require('./controllers/colorLoversApi');
const {createUser, fetchUserSchemes, renameScheme, createScheme} = require('./controllers/userColors')
const router = Router();

router.get('/getRandomScheme', fetchRandomColorScheme);
router.get('/getSchemes/:hex/:hex_logic', fetchColorSchemes);

router.post('/createUser', createUser);

router.get('/getUserSchemes/:user_id', fetchUserSchemes);
router.put('/renameScheme/:user_id/:scheme_name', renameScheme);
router.post('/createScheme/:user_id/:scheme_name', createScheme);

module.exports = router;