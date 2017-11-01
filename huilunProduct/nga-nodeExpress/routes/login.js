let express = require('express');
let fs = require('fs');
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let router = express.Router();

router.get('/', function(req, res,next){

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Credentials', true);
 mongoCt.connect('mongodb://127.0.0.1:27017/nga',(err,db)=>{
    let user = db.collection('user');
    user.find({username:req.query.username}).toArray((err,result)=>{
    	if(result.length>0){
              if(result[0].password==req.query.password){
                  req.session['user_id']=result[0]._id
                  res.send({"error":0,"msg":"登陆成功"});
              }else{
                res.send({"error":1,"msg":"密码错误"});
              }
         }else{
            res.send({"error":2,"msg":"用户名错误"});
         }
    })
  })
});

module.exports = router;
