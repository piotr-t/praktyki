var express = require('express');
var router = express.Router();
const dbInstance = require("../database");
//const userMiddleware = require('./middlewares/tables.middleware');

//router.use(userMiddleware);


router.get('/',async function(req, res, next) {
    const db = await dbInstance();
    const response = await db.collection('clients').find().toArray()
  res.json(response);
});

module.exports = router;
