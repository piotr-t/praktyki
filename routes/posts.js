var express = require('express');
var router = express.Router();
const dbInstance = require("../database");
//const upload = require('../multerConfig')
//const userMiddleware = require('./middlewares/tables.middleware');

//router.use(userMiddleware);

const multer  = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file)
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
    fileSize: 20000000
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

  console.log(req.body, 'body');
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


module.exports = router;