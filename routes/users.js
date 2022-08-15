var express = require('express');
var router = express.Router();
const dbInstance = require("../database");





router.post('/setUser',async function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  const db = await dbInstance();
  const user = req.body;
  const token = Date.now() + '-' + Math.round(Math.random() * 1E9);
  user.token = token;
  await db.collection('users').insertOne(user);
  res.json({login:user.login, token: user.token});
});


router.post('/login',async function(req, res, next) {//login, token, password
  const db = await dbInstance();
  const token = Date.now() + '-' + Math.round(Math.random() * 1E9);
  const login = req.body.login;
  const password = req.body.password;
  let response = await  db.collection('users').findOne({password: password, $or:[{login: login}, {email: login}]},{});
  res.json(response ? {token: token,...response} : null);


});


module.exports = router;
