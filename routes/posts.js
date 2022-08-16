var express = require('express');
var router = express.Router();
const dbInstance = require("../database");
const fs = require('fs');
const { ObjectId } = require('mongodb');
const multer  = require('multer');
var path = require('path');


//const upload = require('../multerConfig')
//const userMiddleware = require('./middlewares/tables.middleware');

//router.use(userMiddleware);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = file.mimetype.split("/")[1];
    cb(null, uniqueSuffix+ "." + ext);
  }
})





const upload = multer({ storage: storage,
  limits: {
    // Setting Image Size Limit to 2MBs
    //fileSize: 20000000
}
});



router.post('/image', upload.single('file'), async  function(req, res, next) {
  const db = await dbInstance();

    const filename = req.file1;
    console.log(filename,'filename')
    const post = {authorID: 0, title: req.body.file1, imageURL: "http://localhost:3800/uploads/" + req.file.filename}
    await db.collection('posts').insertOne(post);
    const response = await db.collection('posts').find().toArray(); 
    res.json(response);



  
});



router.post('/',async function(req, res, next) {
  const db = await dbInstance();
    const post = req.body;
    await db.collection('posts').insertOne(post);
  const response = await db.collection('posts').find().toArray();
  res.json(response);
});

router.get('/',async function(req, res, next) {
  const db = await dbInstance();
  const response = await db.collection('posts').find().toArray();
  res.json(response);
});

router.put('/', async(req,res, next) =>{
  const db = await dbInstance();
  console.log(req.body)
  id= req.body._id;
  post = req.body;
  delete post._id;
  await db.collection('posts').updateOne({ _id: ObjectId(id)},{$set:{...post}});
  const response = await db.collection('posts').find().toArray();
  res.json(response);
})


router.delete('/', async(req,res, next) => {

  const db = await dbInstance();
  const id = req.body.id;
    let filename = await db.collection('posts').findOne({ _id: ObjectId(id)});
    filename = filename.imageURL.substr(30);
    fs.unlink('./public/uploads/' + filename, (err) => {if (err) {console.error(err); return}})
  await db.collection('posts').deleteOne({ _id: ObjectId(id)});
  const response = await db.collection('posts').find().toArray();
  res.json(response);
})


module.exports = router;