const Express = require('express');
const router = require('./router');
const cors = require('cors');
const db = require('./model/dbAccess.js');

const app = Express();
const PORT = (process.env.PORT || 8889);

app
	.use(cors())
	.use(Express.text())
	.use(router)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});