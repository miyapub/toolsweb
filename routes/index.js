var express = require('express');
var router = express.Router();
var get_json_from_xml=require('../bin/get_json_from_xml');


/* GET home page. */
router.get('/', function(req, res, next) {
  get_json_from_xml('./xmls/test.xml',function(data){

    res.render('index', { title: 'todolist',data:data});
  });

});

module.exports = router;
