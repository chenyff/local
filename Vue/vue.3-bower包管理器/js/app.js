const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.listen(2133);
var json = {
    'fei':'123'
}
server.use(bodyParser.urlencoded());

server.use('/getPost',function(req,res){
    console.log(req.query);
    // if(json[req.body.user] == req.body.pass){
    //     res.send({ok:1,'msg':'login success'});
    // }else{
    //     res.send({ok:0,'msg':'login error'});
    // }
})

server.use('/getMess',function(req,res){
    if (json[req.query.user] == req.query.pass){
        res.send({ok:1,'msg':'登录成功'});
    }else{
        res.send({ ok: 0, 'msg': '用户名或密码错误' });
    }
    
})

server.use(express.static('./'));