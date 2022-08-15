var express = require('express');
var router = express.Router();
const dbInstance = require("../database");

router.get('/',async function(req, res, next) {
    const db = await dbInstance();
    const response = await db.collection('categories').find().toArray()
  res.json(response);
});

module.exports = router;