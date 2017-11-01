let express = require('express');
let fs = require('fs');
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let router = express.Router();

router.get('/', function(req, res,next){
	res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
	console.log('fruit',req.query.id);
 mongoCt.connect('mongodb://127.0.0.1:27017/nga',(err,db)=>{
    let fruit = db.collection('fruit');
    fruit.find({id:req.query.id}).toArray((err,result)=>{
      res.send(result);
      db.close();
    })
  })
});

module.exports = router;
