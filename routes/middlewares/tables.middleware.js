var express = require('express');
//const dbInstance = require("../../database");





module.exports = async (req, res, next) => {
  //  console.log(req.header)
 /*    const db = await dbInstance();
    const interval = 900000;// 15 min
    const login = req.body.login;
    const dateNow = Date.now();
    const token =  req.body.token;
    const tokenData = token.split('-');
    const response = await  db.collection('users').findOne({token: token});
    const token1 = response.token.split('-');
    const delay = (dateNow - token1[0])/interval;
    if(delay>1){res.json(null);}else {
        next()
    } */
    next();
  };
