var express = require('express');
var router = express.Router();

router.get('/',async function(req, res, next) {
  const db = await dbInstance();
  const response = await db.collection('products').find().toArray()
res.json(response);
});

module.exports = router;
