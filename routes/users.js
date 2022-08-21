var express = require('express');
var router = express.Router();
const dbInstance = require("../database");
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = require('../models/userModel')
const passport = require('passport');


router.use('/setUser', (req, res, next)=>{
  //console.log(req);
  next()
})



router.post('/setUser',async function(req, res, next) {
  const {email, login, likes, dislikes, role, first_name ,second_name} = req.body;
  const user = await new User({first_name, second_name,email, login, likes, dislikes, role})//.then().catch(err => {res.send(err)})
  const u = User.register( user ,req.body.password, (err) => { console.log(err,'err')
    if(err){ res.json({permission: false, message: "Użytkownik już istnieje"});} else {res.json({permission: true, message: "Dodano użytkownika"})}
  });
  
 //res.redirect('https://www.youtube.com/watch?v=GNfxKfgGY1o');//{first_name, second_name,email, login, likes, dislikes, role}
});

//log in user
router.post('/login',passport.authenticate('local', { session: false }),
 async  (req, res, next) => {

const token = jwt.sign({ id: req.user._id }, 'asdf', { expiresIn: 1200 });
 res.header("Authenticate", "Bearer " +  token);
  res.json({token, login: true});
});


module.exports = router;
