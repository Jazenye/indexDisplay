// 服务端 router.js


app.get('/loadMore', function(req, res) {

	var curIdx = req.query.idx
	var len = req.query.len
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	res.send(data);
});
