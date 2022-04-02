const { Router } = require('express');
const { fetchRandomColorScheme, fetchColorSchemes } = require('./controllers/colorLoversApi');
const {createUser, fetchUserSchemes, renameScheme, createScheme, deleteScheme} = require('./controllers/userColors')
const router = Router();

router.get('/schemes/random', fetchRandomColorScheme);
router.get('/schemes/:hex/:hex_logic', fetchColorSchemes);

router.post('/user', createUser);

router.get('/user-schemes/:user_id', fetchUserSchemes);
router.put('/user-schemes/:user_id', renameScheme);
router.post('/user-schemes/:user_id', createScheme);
router.delete('/user-schemes/:user_id', deleteScheme);

module.exports = router;