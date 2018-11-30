var http = require('http');
// 引入文件读取模块
var fs = require('fs');
// 引入类型文件
var mine = require('./mine');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
    var realPath = path.join("./", pathname);// 自己存放文件的名称

    // 扩展名
	var ext = path.extname(realPath);
	// 后缀名带.，所以要截取
	ext = ext ? ext.slice(1) : 'unknown';

	fs.readFile(realPath, function(err, data){
		if (err) {
			res.writeHead(404, {
				'Content-Type': 'text/html;charset="utf-8"'
			});
			res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
			res.end();
		}else{
			var contentType = mine[ext] || "text/plain";
			res.writeHead(200, {
				'Content-Type': contentType
			});
			res.write(data);
			res.end();
		}
	});
});
server.listen(8080);

console.log('服务器开启成功');