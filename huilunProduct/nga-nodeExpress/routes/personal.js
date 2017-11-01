let express = require('express');
let fs = require('fs');
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let router = express.Router();

router.get('/', function(req, res,next){

   res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
   res.setHeader('Access-Control-Allow-Credentials', true);
  if(!req.session['user_id']){
         res.send("请登录")
       }else{
    mongoCt.connect('mongodb://127.0.0.1:27017/nga',(err,db)=>{
      let user = db.collection('user');
      user.find({}).toArray((err,result)=>{
        if (err) {
          res.send("拉闸┭┮﹏┭┮")
        }else{
          result.forEach((item,index)=>{
            if (item._id==req.session['user_id']) {
              res.send(item.username)
            }
          })
        }
      })
    })
  }


});

module.exports = router;
