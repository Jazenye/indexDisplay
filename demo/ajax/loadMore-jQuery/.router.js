function setRouter(app){ 
 var router = app; 

// 服务端 router.js

//loadmore.html
/*
app.get('/loadMore', function(req, res) {

	var curIdx = req.query.idx
	var len = req.query.len
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	res.send(data);
});
*/


app.get('/getNews',function(req,res) {
	var idx = req.query.index;
	var len = req.query.len;
	
	var data = [];
	for(var i=0; i<len; i++){
		data.push("内容"+(parseInt(idx) + i + 1));
	}

	res.header("Access-Control-Allow-Origin", "*"); 
	// res.send(data);
	setTimeout(function(){
		res.send(data);
	},1000)
})
}
 module.exports.setRouter = setRouter