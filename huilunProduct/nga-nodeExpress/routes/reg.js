let express = require('express');
let fs = require('fs');
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let router = express.Router();

router.get('/', function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
 mongoCt.connect('mongodb://127.0.0.1:27017/nga',(err,db)=>{
    let user = db.collection('user');
    user.find({username:req.query.username}).toArray((err,result)=>{
    	if (result.length>0) {
            res.send({"error":1,"msg":"用户名重复"});
            res.send("用户名重复")
        }else{
            user.insertOne(req.query,(err,result)=>{
                if (err) {
                    res.send({"error":2,"msg":"服务器错误"});
                    res.send("服务器错误")
                }else{
                    res.send({"error":0,"msg":"注册成功"});
                    res.send("注册成功")
                }
            })
        }
    })
  })
});

module.exports = router;
