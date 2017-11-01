var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // console.log(req.query);
  //兜库，看有无用户名,有才种
  // req.session.nikename='bmw2';//req.query.username
  // res.send({status:"种完了",usermess:{a:'库数据'}});

  console.log('cookies服务');
  console.log(req.query.username,req.query.password);
  req.session.username=req.query.username;
  res.send({error:0,msg:'成功'});

});

module.exports = router;
