var fs = require('fs'),
xml2js = require('xml2js');
var parser = new xml2js.Parser();
//var parser = require('xml2json');
var getjson=function(file,callback){
  console.log('file:',file);
  //fs.readFile(__dirname + '/foo.xml', function(err, data) {
  //file='./xmls/test.xml';
  fs.readFile(file, function(err, data) {
      console.log('xml',data);
      /*
      var json = parser.toJson(data);
      if (typeof callback === 'function') {
        console.log('callback');
        callback.apply(result);
      }*/
      parser.parseString(data, function (err, result) {
        var json=JSON.parse(JSON.stringify(result));

          console.log('Done',json);
          console.log('typeof',typeof json);
          if (typeof callback === 'function') {
            console.log('callback');
            callback(json);
          }
      });
  });
}
module.exports=getjson;
